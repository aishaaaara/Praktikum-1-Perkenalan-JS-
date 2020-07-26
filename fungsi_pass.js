function increment (a) {
    a.x +=1;
}
//membuat objek
let obj = new Object();
//mendefinisikan properti x pada obek yg telah dibuat
obj.x=10;

//menmapilkan nilai obj.x sblm dinaikkan
console.log('Sebelum dinaikkan nilainya:');
console.log(`obj.x ${obj.x}`);

//memanggil increment
increment(obj);
//menampilkan nilai obj setelah di naikkan
console.log("\n setelah dinaikkan nilainya:");
console.log(`obj.x: ${obj.x}`);