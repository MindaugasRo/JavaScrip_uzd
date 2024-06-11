// Užduotis - 1
let uzd1 = [];
let didesniUz150 = 0;

for (let i = 0; i < 300; i++) {
  let skaicius = Math.floor(Math.random() * 301); // generuojamas atsitiktinis skaičius nuo 0 iki 300
  uzd1.push(skaicius);

  if (skaicius > 150) {
    didesniUz150++;
  }

}

let formattedNumbers = uzd1.map(num => num > 275 ? `[${num}]` : num).join(' ');

document.getElementById('formatNumber').innerHTML = `<strong>Atsitiktiniai skaičiai </strong>${formattedNumbers}`;
console.log("1 Uždavinys");
console.log(formattedNumbers);
document.getElementById('didesniUz150').innerHTML = `<strong>Didesni už 150 = ${didesniUz150}</strong> `;
console.log("Didesni už 150 = " + didesniUz150 + " vnt.");

// Užduotis - 2

function dalomasIs77(skaicius) {
    return skaicius % 77 === 0;
  }
  
  // Gaunam skaičius nuo 1 iki 3000
  const skaiciai = [...Array(3000).keys()].map(i => i + 1);
  
  // Filtruoja iš skaičių masyvo kurie dalijasi iš 77 be liekanos
  const dalomiSkaiciai = skaiciai.filter(dalomasIs77);
  
  // Sujungia skaičius į eilutę su kableliais
  const atspausdintiSkaiciai = dalomiSkaiciai.join(', ');
  document.getElementById('uzd2').innerHTML = atspausdintiSkaiciai;
  console.log("2 Uždavinys");
  console.log(atspausdintiSkaiciai);

// Užduotis - 3
let star = '';
for (let i = 0; i < 20; i++) {
  let row = '';
  for (let a = 0; a < 20; a++) {
    row += '* ';
  }
  star += `<div>${row}</div>`;
}
document.getElementById('uzd3').innerHTML = star;