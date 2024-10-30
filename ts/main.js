"use strict";
const down_click = document.querySelectorAll("#down_click");
const buttons = document.querySelectorAll(".buttons");
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
let All_sum = document.getElementById("allsum");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let paragh_sum = document.getElementById("sum");
let sum1 = 0;
let all = 0;
plus.addEventListener("click", () => {
    sum1++;
    paragh_sum.textContent = sum1.toString();
    All_sum.textContent = `${all += 990}`;
});
minus.addEventListener("click", () => {
    sum1--;
    paragh_sum.textContent = sum1.toString();
    All_sum.textContent = `${(all -= 990)}`;
});
const karzinka = document.getElementById('karzinka');
const sum_karzinka = document.getElementById('karzinka_sum');
let sum12 = 0;
karzinka.addEventListener('click', () => {
    sum12++;
    alert('Savatga malumot qoshildi');
    sum_karzinka.textContent = sum12.toFixed();
});
//# sourceMappingURL=main.js.map