//for (let index =1 ; index<=3 ; index++)
//    console.log(index, 
//    "alwy tanpa alwy")
    
// while

//let flagging = true
//let counterIndex = 1

//while (flagging) {
//    console.log("hafizh kedua");
//    if (3 <= counterIndex)
//        flagging = false
    
//    console.log(counterIndex, "===>Iteration");    
//    counterIndex++
//}


//do while


/*
perulangan :

nilai awal
kondisi/pembanding
nilai pengubah
 ex
for (let index =0 ; index<4 ; index++)
    console.log(index) ==> blockcode

breakdown

iteration 1

index =1
1 <= 3 ===> true/truthy

maka

print index
print alwy tanpa alwy

lalu 

index = 1
index ++
index = 1+1
index = 2

iteration 2

index =1
2 <= 3 ===> true/truthy

maka

print index
print alwy tanpa alwy

lalu 

index = 2
index ++
index = 2+1
index = 3

iteration 3

index =1
3 <= 3 ===> true/truthy

maka

print index
print alwy tanpa alwy

lalu 

index = 3
index ++
index = 3+1
index = 4

iteration 4

index =1
4 <= 3 ===> false/falsy

stop pengulangan


Array, Object, Methodenya

array itu kayak cabinnet/laci/lemari
arrayy = data yang menyimpan kumpulan data primitif

laci ada 4 level

level 1 = jam : ada 4 (seiko, rolex, garmin, swissarmy)
level 2 = perhiasan : (kalung, cincin)
level 3 =
level 4 =

array bisa nyimpen banyak value

array punya index. index mulai dari 0
index 1 itu selalu di level 1 startnya

*/

//cara buat array strings

//let students = ["alwy", "amel", "hafidz"] // penamaan plural (s) karena banyak, trus pake square bracket
//console.log(students [1] [2]);

// cara buat array number

//let oddNumber = [1, 3, 5, 7]
//console.log(oddNumber [1]);
//console.log(oddNumber);

//cara buat array campuran primitif

//let favoriteNumberStudent = [2, "hafidz", true] // bisa tapi ga best practice, nyimpen motor dalam laci
//console.log(favoriteNumberStudent);

// idealnya

let studentsWithGender = [['hafiz', 'alwy', 'bambang'],['amel','ribka']] // nested array / array of array
//console.log(studentsWithGender [0] [0] [0]);

//JENIS METHODE DI ARRAY (FOR EACH, PUSH, POP, SHIFT)

// for each

//studentsWithGender.forEach(student => {
//    console.log(student);


//student.forEach(studentWithoutClass => {
//    console.log(studentWithoutClass);
//    })    
//})

//push => menambahkan value ke array lokasi indexnya terakhir
//pop => menghapus element dari indeks terakhir
//shift => menghapus item pertama di array
//unshift => nambah item di pertama
//filter => membuat array baru

let animals = ["cat", 'dog', "bird"]

console.log(animals, '==>before push');
animals.push("pig")
console.log(animals, '==>after push');
animals.pop()
console.log(animals, '==> after pop')
animals.shift()
console.log(animals, '==>after shift');
animals.unshift("elephant")
console.log(animals, 'after unshift');

//filter
const ages = [18, 23, 60, 48]
// lalu buat variabel
const resultMoreThanFifty = ages.filter(el => {
    return el >= 50
})

console.log(resultMoreThanFifty);

//map => membuat array baru untuk function yang dipanggil

const number = [2,4,8]
const numberTimesWithTwo = number.map(el => {
    return el * 2
})

console.log(numberTimesWithTwo);

//concat => join 2 lebih array

//let japanCar = ["toyota", "daihatsu"]
//let germanyCar = ["bmw", "vw"]

//let allCar = japanCar.concat(germanyCar) // gabungin 2 lebih array
//console.log(allCar);

//array sifatnya immmutable
// mutable => bisa dirubah secara langsung
//exampel

//let japanCar = ["toyota", "daihatsu"]
//console.log(japanCar, "==> 1");

//let car = japanCar
//car.push ["suzuki"]
//console.log(japanCar, "==>2");
//console.log(car, "==> nih");




//case kalo mau narik huruf di belakang di hafidz, alwy, bambang
//let hafidzStudent = studentsWithGender[0] [0]
//console.log(hafidzStudent[hafidzStudent.length - 1]);
//let alwyStudent = studentsWithGender [0] [1]
//let bambangStudent = studentsWithGender [0] [2] 

//console.log(hafidzStudent, alwyStudent, bambangStudent);
//index = start dari 0 , length star dari 1
// semua yg punya index bisa di looping


//let students45 = ["amel", "bambang", "suryana"] // 3length

//for (let index = 0; index < students45.length; index++) {
//    // const element = array[index];
//    console.log(students45[index]);
//}

//console.log(students45[index][students45]); // nanti dilanjutin

