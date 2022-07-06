//nested array
function panggilNestedArray(){
    var dataNama = [["Ab", "Ac","Ad"],
                    ["Bola1","Bola2","Bola3"],
                    ["Cacing1","Cacing2","Cacing3"]]
    console.log(dataNama[0][1])  
    console.log(dataNama.length) 
    console.log(dataNama[2])                 
}

panggilNestedArray()

//menampilkan array dengan perulangan
function arrayWithLoop(){
    var angka = [5,4,3,2,1]

    for(var i=0;i<angka.length;i++){
        console.log("angka : ",angka[i])
    }
}

arrayWithLoop()

//=====For Of=====
function forOf(){
    var angka = [0,1,3,5,7,8,9]
    for(let x of angka){
        console.log(x)
    }
}

forOf()


