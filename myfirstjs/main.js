//JavaScript --> Programing Language
/*
Programing Language
1. input& output
2. variabel and data type
3. conditionn (if, else)
4. looping (perulangan)
5. function
*/

//Output
//1. using console
console.log("Hello World")
console.log("My Name Is Zivana Leticia Syafira")
console.log(4+5);

//2. alrert
alrert("Welcome To My Website")

//3. using document.write()

//4. using.innerHTML
//document.getElementaryId("first").innerHTML="My Name Is Zivana"
document.getElementById("first").innerHTML="My name is Zivana"

//variable --> to store data

//let
let name = "Zivana"
name="Zivana Leticia"
console.log(name)
let a = 4;
let b = 3;
let c = a-b;
let d = a*b;
console.log(a-b);
console.log(c);
console.log(c+d);
let addres= "solo";
console.log("My name is "+" Iam from "+ addres);

let oke = 8;
let OKE = 7;
console.log(oke)
console.log(OKE)

const school="SMA ABBS Surakarta"

console.log(school);

/*
Penjumlahan (+)
Pengurangan (-)
Perkalian (*)
Pembagian (/)
Perpangkatan (**)
*/
let number1 =100;
let number2 =200;
console.log(number1+number2)
console.log(number1-number2)
console.log(number1*number2)
console.log(number1/number2)
console.log(number1%number2)

//calculator BMI
let bb=54;
let tb=155;

let bmi = (bb/(tb*tb))*10000

console.log(bmi);

//variable= let, var, const
let angka = 5;
angka= 6;
console.log(angka);

var angka1 = 5;
var angka2 = 6;
console.log(angka1)

const angka2 = 5;
console.log(angka2)

/*Data type
1. String = Character --> using ""/'''
2. Number (integer, float)
     -integer = bilangan bulat
     -float = bilangan pecahan 
3. Bolean = true,false
*/
let data = "SMA ABBS Surakarta"; //string
let data1 = "100"; //string
let data2 = 50; //integer
let data3 = 25.25 //float
let data4 = false //bolean

/*Comparison operator --> the output of comparism operator are true or false
-equal (==)
-not equal (>=)
-greater than or equal (>=)
-less than (<)
-less than or equal
*/
//example

let x = 5;
console.log(x == 5); //true
console.log(x != 5); //false
console.log(x > 5); //false
console.log(x <= 5); //true
console.log(x <= 5); //true

/*
logical operators
- and (&&) --> semua kondisi harus true
- or (!!) -->
- not (!) --> kebalikan
*/

//Condition 
/*1. if (1 condition)
     if (condition 1)(
         action 1;

    )
    else(
        action 2;
    )
*/

let time1 = 6;
if (time) <= 6(
    console.log("Good Morning");
)
else(
    console.log("Good Bye");
)

/*kondisi
1. Jika hari ini hujan, maka membawa payung
2. Jika hari ini tidak hujan, maka tidak membawa pulang
*/
let cuaca = "hujan"
let (cuaca == "hujan")(
    console.log("bawa payung");
)
else{
    console.log("Tidak Bawa Payung");
}

//Jika nilai lebih dari 75, maka lulus
//Jika nilai kurang dari 75, maka tidak lulus
let nilai = "98"
console.log ("Nilai = ", nilai);
if (nilai > 75){
    console.log("lulus");
}
else(
    console.log("tidak lulus");
)

//Jika bilangannya genap, maka genap
//Jika bilangannya ganjil, maka ganjil

let bilangan = 2;
console.log ("bilangan =", bilangan);
if (bilangan % 2 === 0){
    console.log(bilangan + "genap")
}
else(
    console.log(bilangan - "ganjil");
)


//grade
//jika nilai <78, maka grade nya D
//jika nilai 78-79, maka grade nya C
//jika nilai 80-89, maka grade nya B
//jika nilai >89, maka grade nya A
