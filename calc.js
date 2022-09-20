// CALCULATOR INPUT ELEMENTS
const form = document.getElementById("form");
let multiplyer = document.getElementById("multiplyer");

// investment readiness
const irUp = document.getElementById("ir-up");
const ir3 = document.getElementById("ir-3");
const ir5 = document.getElementById("ir-5");

//   subscription fees
const sfUp = document.getElementById("sf-up");
const sf3 = document.getElementById("sf-3");
const sf5 = document.getElementById("sf-5");

//   golden visa
const legalVisaUp = document.getElementById("visa-up");
const legalVisaY3 = document.getElementById("visa-3");
const legalVisaY5 = document.getElementById("visa-5");

//   legal 1
const legal1Up = document.getElementById("le1-up");
const legal1Y3 = document.getElementById("le1-3");
const legal1Y5 = document.getElementById("le1-5");

//   legal 2
const legal2Up = document.getElementById("le2-up");
const legal2Y3 = document.getElementById("le2-3");
const legal2Y5 = document.getElementById("le2-5");

// extra family member
const extraFamUp = document.getElementById("extra-fam-up");
const extraFam3 = document.getElementById("extra-fam-3");
const extraFam5 = document.getElementById("extra-fam-5");

// gov fees - initial application
const govInitUp = document.getElementById("gov-initial-up");
const govInit3 = document.getElementById("gov-initial-3");
const govInit5 = document.getElementById("gov-initial-5");

// gov fees - first renewal
const govFirstUp = document.getElementById("gov-first-up");
const govFirst3 = document.getElementById("gov-first-3");
const govFirst5 = document.getElementById("gov-first-5");

// gov fees - second renewal
const govSecondUp = document.getElementById("gov-second-up");
const govSecond3 = document.getElementById("gov-second-3");
const govSecond5 = document.getElementById("gov-second-5");

//   CALCULATOR OUTPUT ELEMENTS

// investment readiness
const outputIrUp = document.getElementById("output-ir-up");
const outputIr3 = document.getElementById("output-ir-3");
const outputIr5 = document.getElementById("output-ir-5");
const outputIrTotal = document.getElementById("output-ir-total");

//   subscription fees
const outputSfUp = document.getElementById("output-sf-up");
const outputSf3 = document.getElementById("output-sf-3");
const outputSf5 = document.getElementById("output-sf-5");
const outputSfTotal = document.getElementById("output-sf-total");

// legal
const outputLegalUp = document.getElementById("output-legal-up");
const outputLegal3 = document.getElementById("output-legal-3");
const outputLegal5 = document.getElementById("output-legal-5");
const outputLegalTotal = document.getElementById("output-legal-total");

//   government
const outputGovUp = document.getElementById("output-gov-up");
const outputGov3 = document.getElementById("output-gov-3");
const outputGov5 = document.getElementById("output-gov-5");
const outputGovTotal = document.getElementById("output-gov-total");

// totals
const outputTotalUp = document.getElementById("output-total-up");
const outputTotal3 = document.getElementById("output-total-3");
const outputTotal5 = document.getElementById("output-total-5");
const outputTotalPeriod = document.getElementById("output-total-total");

// =============== FUNCTION TO CALCULATE ===============

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //   investment readiness
  outputIrUp.innerHTML = getValue(irUp);
  outputIr3.innerHTML = getValue(ir3);
  outputIr5.innerHTML = getValue(ir5);
  outputIrTotal.innerText = calculateTotals(irUp, ir3, ir5);

  //   subscription fees
  outputSfUp.innerHTML = getValue(sfUp);
  outputSf3.innerHTML = getValue(sf3);
  outputSf5.innerHTML = getValue(sf5);
  outputSfTotal.innerText = calculateTotals(sfUp, sf3, sf5);

  //   legal
  outputLegalUp.innerHTML = calculateLegal(
    legalVisaUp,
    legal1Up,
    legal2Up,
    extraFamUp
  );
  outputLegal3.innerHTML = calculateLegal(
    legalVisaY3,
    legal1Y3,
    legal2Y3,
    extraFam3
  );
  outputLegal5.innerHTML = calculateLegal(
    legalVisaY5,
    legal1Y5,
    legal2Y5,
    extraFam5
  );
  outputLegalTotal.innerText =
    +outputLegalUp?.innerHTML +
    +outputLegal3?.innerHTML +
    +outputLegal5?.innerHTML;

  // government
  outputGovUp.innerHTML = calculateGovernmentFees(
    govInitUp,
    govFirstUp,
    govSecondUp
  );
  outputGov3.innerHTML = calculateGovernmentFees(
    govInit3,
    govFirst3,
    govSecond3
  );
  outputGov5.innerHTML = calculateGovernmentFees(
    govInit5,
    govFirst5,
    govSecond5
  );
  outputGovTotal.innerHTML =
    +outputGovUp?.innerHTML + +outputGov3?.innerHTML + +outputGov5?.innerHTML;

  // TOTALS
  outputTotalUp.innerHTML = calculateOverallTotals(
    irUp,
    sfUp,
    outputLegalUp,
    outputGovUp
  );
  // total Y3
  outputTotal3.innerHTML = calculateOverallTotals(
    ir3,
    sf3,
    outputLegal3,
    outputGov3
  );
  // total Y5
  outputTotal5.innerHTML = calculateOverallTotals(
    ir5,
    sf5,
    outputLegal5,
    outputGov5
  );
  // total all
  outputTotalPeriod.innerHTML =
    +outputTotalUp.innerHTML +
    +outputTotal3.innerHTML +
    +outputTotal5.innerHTML;
});

const getValue = (total) => total.value;

const calculateLegal = (visaApplication, renew1, renew2, familyMembers) =>
  multiplyer.value < 3
    ? +visaApplication.value + +renew1.value + +renew2.value
    : +visaApplication.value +
      +renew1.value +
      +renew2.value +
      +familyMembers.value * (multiplyer.value - 3);

const calculateGovernmentFees = (fee1, fee2, fee3) =>
  (+fee1.value + +fee2.value + +fee3.value) * (1 + +multiplyer.value);

const calculateTotals = (total1, total2, total3) =>
  +total1.value + +total2.value + +total3.value;

const calculateOverallTotals = (total1, total2, total3, total4) =>
  +total1.value + +total2.value + +total3.innerText + +total4.innerText;

// =============== FUNCTION TO RESET ===============
form.addEventListener("reset", (e) => {
  e.preventDefault();
  document
    .querySelectorAll("input[type=number")
    .forEach((el) => (el.value = ""));
  let td = document.querySelectorAll("td");
  [...td]
    .filter((el) => el.id.includes("output"))
    .forEach((el) => (el.innerText = ""));
  let th = document.querySelectorAll("th");
  [...th]
    .filter((el) => el.id.includes("output"))
    .forEach((el) => (el.innerText = ""));
});
