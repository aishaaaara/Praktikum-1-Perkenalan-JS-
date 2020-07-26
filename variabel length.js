function sum(...a){
    let total=0.0;
    for(let elemen of a){
        total +=elemen;
    }
    return total;
}

console.log('sum(10,20):' + sum(10,20));
console.log('sum(10,20,30):' + sum(10,20,30));