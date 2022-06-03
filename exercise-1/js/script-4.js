const suver = 75;
const bezdel = 112;

let amountSuver = +prompt("Количества сувенир: ");
let amountBezdel = +prompt("Количества безделушек: ");

let res = ((amountSuver * suver) + (amountBezdel * bezdel)) / 1000;
console.log(`Общий вес: ${res}кг`);