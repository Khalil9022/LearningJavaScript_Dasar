function tugas4(){
    var a = 35
    var b = 30
    var c = 40

//a
    if(a>b){
        if(a>c){
            var a = 1
        } else {
            var a = 2
        }
    } else {
        if(a<c){
            var a = 3
        }else {
            var a = 2
        }
    }

//b
    if(b>a){
        if(b>c){
            var b = 1
        } else {
            var b = 2
        }
    } else {
        if(b<c){
            var b = 3
        }else {
            var b = 2
        }
    }

//c
    if(c>a){
        if(c>b){
            var c = 1
        } else {
            var c = 2
        }
    } else {
        if(c<b){
            var c = 3
        }else {
            var c = 2
        }
    }

//elseif urutan
    if(a===1){
        if(b===2){
            console.log("a > b > c")
        }
        else if(b===3){
            console.log("a > c > b")
        }
    }else if(b===1){
        if(a===2){
            console.log("b > a > c")
        } else if(a===3){
            console.log("b > c > a")
        }
    }else {
        if(a===2){
            console.log("c > a > b")
        } else if(a===3){
            console.log("c > b > a")
        }
    }
}

tugas4()