function jalansatu(){
    var nilai = 2 
    if(nilai === 3){
        console.log('benar')
    }else if(nilai === 2){
        console.log("Dua")
    }
    else {
        console.log('salah')
    }
}

function jalandua(){
    var nilai = 2
    
    if(nilai===1)console.log('ok')
    else console.log('bukan')
}

jalansatu()
jalandua()

//if else if
function jalanTiga(){
    var x = 10; 
    if(x>20)
    console.log("x lebih besar dari 20")
    else if (x>10)
    console.log("x lebih besar dari 10")
    else if (x<10)
    console.log("x lebih kecil dari 10")
    else 
    console.log("x adalah 10")
}

jalanTiga()

//nested if
function jalanEmpat(){
    var x= 40;
    var y= 20;
    var z= 30;

    if(x>y){
        if(x>z){
            console.log("X adalah yang paling besar")
        }else {
            console.log('Nilai x adalah yang terbesar kedua')
        }
    }else {
        if(x<z){
            console.log("X adalah yang terkecil")
        }else {
            console.log("nilai x adalah yang terkecil kedua")
        }
    }
}

jalanEmpat()

//IF ELSE berdasarkan tipe data
function jalanLima(){
    var data= 2
    console.log(typeof(data))

    if(data === '2'){
        return data
    }else{
        return 'gagal'
    }
}

console.log(jalanLima())

//Switch Statement
function testingSwitch(){
    var nilai = 6;

    switch(nilai){
        case 10:
            console.log("Sangat Bagus")
            break
        case 8:
            console.log("Baik")
            break
        case 6:
            console.log("Cukup")
            break
        default:
            console.log("Lainnya")
    }
}

testingSwitch()