function panggil(){
    var mobil = {
        Type : "Sedan",
        harga : "2000000",
        warna : "Putih",
        Tahun : [2021,2022,2023,2024,2025]
    }
    console.log(mobil)
    console.log(mobil.harga)
    console.log(mobil.tahun)
    console.log(mobil.Tahun[0])
}

panggil()

//object property 
function objectProperty(){
    var mobil = {
        Type : "Sedan",
        harga : 2000000,
        warna : "Putih",
        Tahun : [2021,2022,2023,2024,2025]
    }
    mobil.harga = 150000;
    console.log(mobil.harga)
}

objectProperty()

//Tambah Object property
function tambahObjectProperty(){ 
    var motor = {
        Type : "Honda",
        harga : 3540000,
        warna : "Merah"
    }

    motor.tahun = 2016
    console.log(motor)
}

tambahObjectProperty()

//ubah property
function ubahObjectProperty(){ 
    var motor = {
        Type : "Honda",
        harga : 3540000,
        warna : "Merah"
    }

    motor.Type = "Supra"
    console.log(motor.Type)
    motor.Type = 235788 // mengubah string jadi numerik
    console.log(motor.Type)
    motor.Type = true // mengubah numerik jadi boolean
    console.log(motor.Type)
}

ubahObjectProperty()