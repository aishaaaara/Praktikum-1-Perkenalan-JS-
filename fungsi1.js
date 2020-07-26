function tukar(a,b) {
    let c=a;
    a=b;
    b=c;   
}

let x=100,y=200;
//menampilkan nili x dan y sblm di tukar
console.log('sebelum ditukar');
console.log(`x: ${x}`);
console.log(`y: ${y}`);

//memanggil fungsi tukar()
tukar(x,y);

//menampilkan nilai x dan y stlh ditukar
console.log('\n setelah ditukar');
console.log(`x: ${x}`);
console.log(`y: ${y}`);