const bill = document.getElementById("bill");
bill.addEventListener("change", function(e) {
	calculate(
		"bill",
		"tip",
		"split",
		"perPerson",
		"bill",
		"tipStatus",
		"splitStatus"
	);
});
const tip = document.getElementById("tip");
tip.addEventListener("change", function(e) {
	calculate(
		"bill",
		"tip",
		"split",
		"perPerson",
		"bill",
		"tipStatus",
		"splitStatus"
	);
});

const split = document.getElementById("split");
split.addEventListener("change", function(e) {
	calculate(
		"bill",
		"tip",
		"split",
		"perPerson",
		"bill",
		"tipStatus",
		"splitStatus"
	);
});

function calculate(
	bill,
	tip,
	split,
	totalPerPerson,
	updateBill,
	updateTip,
	updateSplit
) {
	let getBillNumber = parseFloat(document.getElementById(bill).value);
	let getTipNumber = parseFloat(document.getElementById(tip).value);
	let getSplitNumber = parseFloat(document.getElementById(split).value);

	// ConditionRule
	// Check Bill Amount

	// Calculation
	let result = parseFloat(getBillNumber + getTipNumber);
	let splitTotal = result / getSplitNumber;
	let splitTotalRounded = Math.floor(splitTotal);

	// DOM Update
	document.getElementById(bill).innerText = getBillNumber;
	document.getElementById(split).innerText = getSplitNumber;
	if (getBillNumber) {
		document.getElementById(totalPerPerson).innerText = splitTotalRounded;
	} else {
		document.getElementById(totalPerPerson).innerText = "00.00";
	}
	// Display Update
	document.getElementById(updateBill).innerText = getBillNumber;
	document.getElementById(updateTip).innerText = getTipNumber;
	document.getElementById(updateSplit).innerText = getSplitNumber;
	return splitTotalRounded;
}
