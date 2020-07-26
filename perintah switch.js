var ruang=13;
console.log("Masukkan nomor Ruangan:" + ruang);
var kelas;

switch(ruang) {
    case 1 : 
    case 2 : 
    case 3 : 
    case 4 : 
    case 5 : 
    case 6 :
    case 7 : 
    case 8 : kelas = "Rekaya Perangkat Lunak";break;
    case 9 : 
    case 10 : 
    case 11 : 
    case 12 : 
    case 13 : 
    case 14 : kelas = "Teknik Komputer Jaringan";break;
    default:{
        console.log(`Tidak Termasuk cluster Kelas 1`)
}
}
console.log(`Kelas ${kelas} adalah ruang ${ruang}`);