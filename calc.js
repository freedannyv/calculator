// CALCULATOR INPUT ELEMENTS

// investment readiness
let irUp = document.getElementById("ir-up");
ir3 = document.getElementById("ir-3");
ir5 = document.getElementById("ir-5");

//   subscription fees
sfUp = document.getElementById("sf-up");
sf3 = document.getElementById("sf-3");
sf5 = document.getElementById("sf-5");

//   golden visa
gvUp = document.getElementById("gv-up");
gv3 = document.getElementById("gv-3");
gv5 = document.getElementById("gv-5");

//   legal 1
le1Up = document.getElementById("le1-up");
le13 = document.getElementById("le1-3");
le15 = document.getElementById("le1-5");

//   legal 2
le2Up = document.getElementById("le2-up");
le23 = document.getElementById("le2-3");
le25 = document.getElementById("le2-5");

//   CALCULATOR OUTPUT ELEMENTS

// investment readiness
calcIrUp = document.getElementById("calc-ir-up");
calcIr3 = document.getElementById("calc-ir-3");
calcIr5 = document.getElementById("calc-ir-5");
calcIrTotal = document.getElementById("calc-ir-total");

//   subscription fees
calcSfUp = document.getElementById("calc-sf-up");
calcSf3 = document.getElementById("calc-sf-3");
calcSf5 = document.getElementById("calc-sf-5");
calcSfTotal = document.getElementById("calc-sf-total");

// legal (golden visa)
calcLeUp = document.getElementById("calc-le-up");
calcLe3 = document.getElementById("calc-le-3");
calcLe5 = document.getElementById("calc-le-5");
calcLeTotal = document.getElementById("calc-le-total");

//   legal (first renewal)
calcLe1Up = document.getElementById("calc-le1-up");
calcLe13 = document.getElementById("calc-le1-3");
calcle15 = document.getElementById("calc-le1-5");

//   legal (second renewal)
calcLe2Up = document.getElementById("calc-le2-up");
calcLe23 = document.getElementById("calc-le2-3");
calcle25 = document.getElementById("calc-le2-5");

// =============== FUNCTION TO CALCULATE ===============

let form = document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  //   investment readiness
  calcIrUp.innerHTML = irUp.value;
  calcIr3.innerHTML = ir3.value;
  calcIr5.innerHTML = ir5.value;
  calcIrTotal.innerText = +irUp.value + +ir3.value + +ir5.value;

  //   subscription fees
  calcSfUp.innerHTML = sfUp.value;
  calcSf3.innerHTML = sf3.value;
  calcSf5.innerHTML = sf5.value;
  calcSfTotal.innerText = +sfUp.value + +sf3.value + +sf5.value;

  //   legal
  calcLeUp.innerHTML = calculateLegal();
  calcLe3.innerHTML = gv3.value;
  calcLe5.innerHTML = gv5.value;
  calcLeTotal.innerText = +le1Up.value + +le13.value + +le15.value;
});

function calculateLegal() {
  return +gvUp.value + +le1Up.value + +le2Up.value;
}
