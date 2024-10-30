"use strict";
const down_click = document.querySelectorAll("#down_click");
const buttons = document.querySelectorAll(".buttons");
let card = JSON.stringify(localStorage.getItem("card")) || [];
let aylanish = 0;
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    if (panel) {
      panel.style.display = panel.style.display === "none" ? "block" : "none";
    }
  });
});
down_click.forEach((e) => {
  e.addEventListener("click", () => {
    aylanish += 180;
    e.style.transform = `rotate(${aylanish}deg)`;
  });
});
let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus");
let paragh_sum = document.querySelectorAll(".sum");
let sum1 = 0;
let all = 0;
console.log(plus);
plus.forEach((e, index) => {
  e.addEventListener("click", () => {
    sum1++;
    paragh_sum[index].textContent = sum1.toString();
  });
});
minus.forEach((e, index) => {
  e.addEventListener("click", () => {
    if (sum1 > 0) {
      sum1--;
      paragh_sum[index].textContent = sum1.toString();
    }
  });
});
const karzinka = document.getElementById("karzinka");
const sum_karzinka = document.getElementById("karzinka_sum");
let sum12 = 0;
karzinka.addEventListener("click", () => {
  sum12++;
  alert("Savatga malumot qoshildi");
  sum_karzinka.textContent = sum12.toFixed();
});
//# sourceMappingURL=main.js.map




