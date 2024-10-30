const down_click = document.querySelectorAll<HTMLImageElement>("#down_click");
const buttons = document.querySelectorAll<HTMLButtonElement>(".buttons");
let aylanish = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling as HTMLElement | null;
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

let All_sum = document.getElementById("allsum") as HTMLButtonElement;
let plus = document.getElementById("plus") as HTMLButtonElement;
let minus = document.getElementById("minus") as HTMLButtonElement;
let paragh_sum = document.getElementById("sum") as HTMLButtonElement;
let sum1 = 0;
let all = 0;
plus.addEventListener("click", () => {
  
    sum1++;
    
    paragh_sum.textContent = sum1.toString();
    All_sum.textContent = `${all+=990}`;
    
   
   
})

 minus.addEventListener("click", () => {
      sum1--;
      
      paragh_sum.textContent = sum1.toString();
    
      All_sum.textContent = `${(all -= 990)}`;

 })

 const karzinka = document.getElementById('karzinka') as HTMLButtonElement

 const sum_karzinka = document.getElementById('karzinka_sum') as HTMLParagraphElement
    let sum12 = 0;

 karzinka.addEventListener('click',()=>{
    sum12++
    alert('Savatga malumot qoshildi')
    sum_karzinka.textContent = sum12.toFixed()

 })
