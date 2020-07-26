class Segitiga{

    constructor(a,t){
        this.alas=a;
        this.tinggi=t;
    }
    luas(){
        return this.alas*this.tinggi/2;
    }
    cetakPropert(){
        console.log(`alas\t:${this.alas}`);
        console.log(`tinggi\t:${this.tinggi}`);
    }
}
class SegitigaWarna extends Segitiga{
    constructor(a,t,w){
        super(a,t);//memanggil konstruktor kelas segitiga
        //mendefinisikan properti baru
        this.warna=w;
    }
    cetakPropert(){
        //memanggil segitiga.cetakPropert
        super.cetakPropert();
        console.log(`warna\t:${this.warna}`);
    }
}
//membaca data alas dan tinggi
let a=3;
console.log("Masukkan Nilai alas:" + a);
let t=4;
console.log("Masukkan Nilai Tinggi:" + t);
//membuat objek dri segitigawarna
let obj= new SegitigaWarna(a,t,'merah');
obj.cetakPropert;
//memanggil metode luas
console.log(`luas\t:${obj.luas()}`); 