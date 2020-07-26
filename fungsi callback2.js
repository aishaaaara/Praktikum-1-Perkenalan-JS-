function hitung(a,b,callback){
return callback(a,b);
}
let a = 3;
console.log("Masukkan Nilai A:" + a);
let b= 4;
console.log("Masukkan Nilai B:" + b);


console.log(`${a}+${b}= `+hitung(a,b,function(){return a+b;}));
console.log(`${a}-${b}= `+hitung(a,b,function(){return a-b;}));
console.log(`${a}*${b}= `+hitung(a,b,function(){return a*b;}));
console.log(`${a}/s${b}= `+hitung(a,b,function(){return a/b;}));
    
