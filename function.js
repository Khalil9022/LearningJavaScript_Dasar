//Metode penulisan lama pada javscript
function jalanSatu(){
    console.log("jalan satu")
}

const jalanDua = function (){
    console.log("jalan dua")
}

jalanSatu()
jalanDua()

//metode penulisan terbaru pada javascript
const jalanTiga = ()=>{
    console.log("Jalan Tiga")
}

jalanTiga()

//Return nilai function
const ambil = ()=>{
    var lempar = "ditangkap"
    return lempar
}

var tampung = ambil()

console.log(tampung)

//Menggunakan Paramater
function mintadata(x,y,z){
    console.log(x,y,z)
}

mintadata("hello","apa kabar", "Sehat kah?")

//function argumen default 
function mintadataarg(x=10){
    console.log(x)
}

mintadataarg()
mintadataarg(30)