function hipotenusa(a,b){
//fungsi lokal
function kuadrat(x) {
    return x*x;

}
//memanggil fungsi lokal
return c=Math.sqrt(kuadrat(a)+kuadrat(b));
}

console.log('menghitung sisi miring segitiga siku siku');
let a=3;
console.log("Nilai A:"+a);
let b=4;
console.log("Nilai B:"+ b);

var c=hipotenusa(a,b);
console.log(`Sisi miring=${c}`);