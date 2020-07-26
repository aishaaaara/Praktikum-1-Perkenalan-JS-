let a=6;
console.log("Masukkan Nilai A:" + a);
let b=0;
console.log("Masukkan Nilai B:" + b);
let c;

if(b===0){
    console.log('keslahan: nilai b tidak boleh 0');
    process.exit(1);
}
c=a/b;
console.log(`${a}/${b}=${c}`);