//=====Perulangan For======
function perulanganFor(){
    for (var i = 0; i < 10; i++) {
        console.log("Jalan :", i)
    }
}

perulanganFor()

//=====perulangan while=====
var i = 0
while(i<10){
    console.log("ini urutan ke :", i)
    i++
}

//=====perulangan do while=====
var i = 0

do {
console.log('ini yang ke :',i)
i++
}while(i<10)

//=====perulangan nested loop=====
for (let i=0; i <2 ;i++) {
    console.log("i ke :", i)
    for(let j=0; j<2; j++){
        console.log("j ke :",j)
    }
    console.log("")
    
}

//=====perulangan infinit loop=====
// for(let i = 0; i>=0; i++){
//     console.log(i)
// }

// var i = 1;
// while (true){
//     console.log(i)
//     i++
// }

//=====break dan continue=====
for(var i=0;i<=10;i++){ 
    if(i==6){
        break
    }
    if(i==3){
        continue
    }
    console.log(i)
}