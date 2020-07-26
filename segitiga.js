class Segitiga{
    //konstruktor
    constructor(a,t){
    //mendefinisikan properti
    this.alas=a;
    this.tinggi=t;

}
//daftar metode
luas(){
    return this.alas*this.tinggi/2;
}

}
//membaca data alas dan tinggi
let a = 3;
console.log("masukan Nilai alas:" + a);
let t = 4;
console.log("Masukan Nilai Tinggi:" + t);
//membuat objek dari segitiga
let obj=new Segitiga(a,t);

console.log(`obj.alas\t:${obj.alas}`);
console.log(`obj.tinggi\t:${obj.tinggi}`);
console.log(`obj.luas()\t:${obj.luas()}`);
