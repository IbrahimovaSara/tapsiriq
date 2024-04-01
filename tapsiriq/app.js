
// Taskiniz:
// 1. Obyekt yaradin.
let telebe ={
    ad:"Sara",
    soyad:"Ibrahimova",
    yas:20,

}
console.log(telebe);
console.log(telebe.ad);
console.log(telebe.soyad);
console.log(telebe.yas);


// 2. Array icinde coxlu obyektler yaradin.
let students=[
    {
        id:1,
        ad:"Gulu",
        soyad:"Bayramzade",
        ixtisas:"Informasiya texnologiyalari",
      kurs:2,
    },
    {
        id:2,
       ad:"Mehdi" ,
       soyad:"Mirzeyev",
       ixtisas:"Informasiya texnologiyalari",
       kurs:2,
    },{
        id:3,
        ad:"Sara",
        soyad:"Ibrahimova",
        ixtisas:"Informasiya texnologiyalari",
        kurs:2,
    }
    ];
    console.log(students);
   

    
// 3. Telebeler obyektinde bir nece telebe elave edin. Hobbileri, xususiyettleri kimi icerisindede deyerleri qeyd edin.
let telebeler=[
    {
        id:4,
        ad:"Gulu",
        soyad:"Bayramzade",
        yas:19,
        hobbiler:["kitab oxumaq","reqs etmek"]
    },
    {
        id:5,
       ad:"Mehdi" ,
       soyad:"Mirzeyev",
       yas:19,
       hobbiler:["musiqi dinlemek","seyahet etmek"]
    },{
        id:6,
        ad:"Sara",
        soyad:"Ibrahimova",
        yas:20,
        hobbiler:["film izlemek","musiqi dinlkemek"]
    }
    ];
    console.log(telebeler);
    console.log(telebeler[1].ad);
    console.log(telebeler[0].id);
    console.log(telebeler[2].hobbiler);
    console.log(telebeler[0].hobbiler[0])

// 4. Students arrayinin qiymet ortalamasini cixardin. (Butun telebelerin qiymetlerini alib sayini bolun.
let students2 = [ { 
     name: "Gulu", qiymetler: [80, 75, 100] 
},
 {
     name: "Mehdi", qiymetler: [85, 95, 90] 
 },
 {
     name: "Sara", qiymetler: [70, 100, 85]
}
];

function calculateAverages(students2Array) {
    let averages = [];
    for (let i = 0; i < students2Array.length; i++) {
        let student = students2Array[i];
        let sum = 0;
        for (let j = 0; j < student.qiymetler.length; j++) {
            sum += student.qiymetler[j];
        }
        let average = sum / student.qiymetler.length;
        averages.push({ name: student.name, average: average });
    }
    return averages;
}
let studentAverages = calculateAverages(students2);
for (let i = 0; i < studentAverages.length; i++) {
    console.log(studentAverages[i].name + " - Ortalama: " + studentAverages[i].average);
}
// // 5. Qiymeti 90-dan az olan telebeleri Ad ve Soyadi ile birlikde ekrana cixardib onlara xeberdarliq edin.

let students3 = [
    { name: " Baxselizade Gunes",  qiymetler: [80, 75, 90]
 },
    { name: " Hesenova Gulcin", qiymetler: [100, 90, 88]
 },
    { name: " Nifteliyev Vusal", qiymetler: [70, 65, 80] 
}
];

function calculateAverages2(students3Array) {
    let averages2 = [];
    for (let i = 0; i < students3Array.length; i++) {
        let student = students3Array[i];
        let sum = 0;
        for (let j = 0; j < student.qiymetler.length; j++) {
            sum += student.qiymetler[j];
        }
        let average = sum / student.qiymetler.length;
        if (average < 90) {
            console.log(student.name + " -> Ortalamaniz limitden asagidir.Xeberdarliq!");
        }
        averages2.push({ name: student.name, average: average });
    }
}

calculateAverages2(students3);






