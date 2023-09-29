// Local module
const luaskeliling = require ('./luaskeliling.js')

// Calculation 
console.log("Luas persegi yang memiliki sisi bernilai 9 adalah "+  luaskeliling.luaspersegi(9) );
console.log("Keliling persegi yang memiliki sisi bernilai 9 adalah "+ luaskeliling.kelilingpersegi(9));
console.log("Luas persegi panjang yang memiliki panjang bernilai 12 dan lebar bernilai 5 adalah "+luaskeliling.luaspersegipanjang(12,5));
console.log("Keliling persegi panjang yang memiliki panjang bernilai 12 dan lebar bernilai 5 adalah "+luaskeliling.kelilingpersegipanjang(12,5));