function cetak(s,n=3,newLine=true) {
    for(let i=0;i<n;i++){
        console.log(s);
        if(newLine)console.log('\n');
    }
    
}
//memanggil fungsi cetak dg 1 parameter
console.log('Memanggil fungsi dengan satu parameter:');
cetak('RPL');

//memanggil fungsi cetak dg 2 parameter
console.log('Memanggil fungsi dengan 2 parameter:');
cetak('RPL',2);

//memanggil fungsi cetak dengan 3 parameter
console.log("Memanggil fungsi dengan 3 parameter:");
cetak('RPL',1,true);
cetak('TKJ',1,false);