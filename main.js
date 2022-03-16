const nama = "Kangreyan";
const pekerjaan = "Tiktok";
const hoby = "Editing";

console.log(`Welcome, my name ${nama}, jangan luppa follow ${pekerjaan}`);

let nilaiUjianKehidupan = 50;
nilaiUjianKehidupan = 95.5;
console.log(nilaiUjianKehidupan);

const apakahSayaSeorangStremers = true;
const apakahSayaTukangKebon = false;

console.log(apakahSayaSeorangStremers);
console.log(apakahSayaTukangKebon);

const biodata = {
    nama: "Kangreyan",
    alamat: {
        jalan: "Jl. Mars",
        "Samping Bulan": "belakang bumi"
    },
    profesi: [
        "Streamers",
        "Tiktok Dan Youtube"
    ]
};

console.log(biodata.nama)
console.log(biodata["alamat"]["Samping Bulan"])
console.log(biodata.alamat["Samping Bulan"])

biodata.profesi.forEach(function(item) {
    console.log(`${item} adalah prpfesi ${biodata.nama}`)
}) 
   
const namaKomunitas = ["kangreyan", "kangreyan", "kangreyan"];

const namaKartuKeluarga = [
    "Kangreyan",
    "Masreyan",
    "Broreyan"
];

const namaKK = new Array("Kangreyan", "Kangreyan", "Kangreyan");
console.log(namaKomunitas) 
console.log(namaKartuKeluarga.length) 

const arrays = [namaKomunitas, namaKartuKeluarga]
console.log(arrays)


const fruits = ["Jeruk", "Tomat", "Nanas"]
fruits.push("Jengkol")
console.log(fruits) 


fruits.pop()
console.log(fruits)