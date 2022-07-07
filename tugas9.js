function tugas9 (){
    var teman = {
        nama : "Khalil",
        umur : 22,
        alamat : "Yogya",
        sekolah : {
            smp : "SMP 2 Padang",
            sma : "MAN 2 Padang",
            kampus : "UPNVYK"
        }
    }
    console.log(teman)
    for(let x in teman){
        console.log(teman[x])
    }
}

tugas9()