var readline = require('readline-sync');

var a = perseInt("Masukkan Nilai a/n"));
var b = perseInt(readline.question("Masukkan Nilai b/n"));

console.log(`${a}+${b}=${a+b}`);
console.log(`${a}-${b}=${a-b}`);
console.log(`${a}*${b}=${a*b}`);
console.log(`${a}/${b}=${a/b}`);
console.log(`${a}%${b}=${a%b}`);
console.log(`${a}**${b}=${a**b}`);