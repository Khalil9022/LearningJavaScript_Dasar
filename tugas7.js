function tugas7() {
    var tinggibadan = [163,154,167,186,170,123,154,157,177,169]

    for(let i = 0;i<tinggibadan.length; i++){
        console.log("Tinggi badan ke :",tinggibadan[i])
    }

    for(let x of tinggibadan){
        console.log("with for of, Tinggi badan ke :", x)
    }
}

tugas7()