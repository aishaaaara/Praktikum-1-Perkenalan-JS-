class Aritmetika{
    static tambah(a,b){
        return a+b;
    }
}
//membaca data a dan b
let a =3;
console.log("Masukkan Nilai a:" + a);
let b = 4;
console.log("Masukkan Nilai b:" + b);
//memanggil statis
console.log(`${a}+${b}=${Aritmetika.tambah(a,b)}`);