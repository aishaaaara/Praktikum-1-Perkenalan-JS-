 var x=6;
console.log("Masukkan Nilai:" + x);
var y=8;
console.log("Masukkan Nilai:" + y);
var z;

if(y===0){
    console.log('Keslahan : Nilai y tidak boleh nol');
    process.exit(1);
}
z=x/y;
console.log(`${x}/${y}=${z}`);

var a=8;
console.log("Masukkan Nilai:" + a);
var b=0;
console.log("Masukkan Nilai:" + b);
var c;

if(b===0){
    console.log('Keslahan : Nilai b tidak boleh nol');
    process.exit(1);
}
c=a/b;
console.log(`${a}/${b}=${c}`);