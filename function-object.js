function fungsiObject() {
    var x = {
        pesan : halo()
    }
    console.log(x.pesan);
}

function halo (){
    return "Halo teman teman"
}

fungsiObject()

//nestedobject
function nestedObject(){
    var mahasiswa = {
        nama : "Khalil",
        ipk : {
            semester1 : 3.67,
            semester2 : 3.83,
            semester3 : 3.87,
            semester4 : 3.92
        }
    }
    console.log(mahasiswa.ipk.semester1)
}

nestedObject()

//perulangan for in
function forIn (){
    var mahasiswa = {
        nama : "ilham",
        umur : 18,
        jurusan : "Teknik Informatika",
        semester : 7
    }
     console.log("")
    for(var x in mahasiswa){
        console.log(mahasiswa[x])
    }
}

forIn()