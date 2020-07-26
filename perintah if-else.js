var x=2;
console.log("Masukkan Nilai:" + x);
var y=0;
console.log("Masukkan Nilai:" + y);
var z;

if(y===0){
    console.log('Keslahan : Nilai y tidak boleh nol');
    //process.exit(1);
}else{
z=x/y;
console.log(`${x}/${y}=${z}`);
}