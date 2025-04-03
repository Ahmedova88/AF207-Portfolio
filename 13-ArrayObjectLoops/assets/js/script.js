// 1. Armstrong ədədləri:

let ArmstrongArr = [];

for (let num = 1; num < 1000; num++) {
    let a = parseInt(num / 100);
    let b = parseInt((num / 10) % 10);
    let c = num % 10
    let cem = (a*a*a) + (b*b*b) + (c*c*c);

    if (cem === num) {
        ArmstrongArr.push(num);
    }
}
console.log(ArmstrongArr);



// 2. Multiplication Table:

for (let i = 1; i <= 10; i++) {
    let row = '';
    for (let j = 1; j <= 10; j++) {
        row += (i * j).toString().padEnd(4, ' ');
    }
    console.log(row);
}



// 3. Yaş məsələsi:

let users = [{name: "Gunay", age: 20}, {name: "Aysel", age: 23}, {name: "Samira", age: 47}];
for (let user of users) {
    if (user.age < 30) {
        console.log(`${user.name} 30-dan kiçikdir.`);
        continue;
    }
    if (user.age > 30) {
        console.log(`${user.name} 30-dan böyükdür.`);
        break;
    }
}



// 4. Ədədi orta:

let numbers = [8, 18, 28, 38, 48, 58, 68, 78, 88, 98];
let cem = 0, i = 0;
while (i < numbers.length) {
    cem += numbers[i];
    i++;
}
console.log(cem / numbers.length);



// 5. Modun tapılması:

let arr = [203, 19, 2, 13, 196, 86, 35, 77,];
let bolen = 10; 

for (let num of arr) {
    let qismet = num % bolen; 
    console.log(`${num} % ${bolen} = ${qismet}`);
}



// 6. Ən böyük ədədin tapılması:

let Arr = [203, 19, 2, 13, 196, 86, 888, 35, 77];
for (let i = 0; i < Arr.length; i++) {
    let Max = Arr[0];
    if (Arr[i] > Max) {
        Max = Arr[i];  
            console.log(Max);  
    }
}



// 7. Min elementi ilə Max elementinin yerinin dəyişdirilməsi:



// 8. Min və Max elementləri nəzərə alınmadan bütün elementlərin cəminin tapılması:

let MyArr = [203, 19, 2, 13, 196, 86, 888, 35, 77];
let minIndex = 0
let maxIndex = 0
for (let i = 1; i < MyArr.length; i++) {
    if (MyArr[i] < MyArr[minIndex]) {
        minIndex = i   
    }
    if (MyArr[i] > MyArr[maxIndex]) {
        maxIndex = i
    }
}

    let toplama = 0
    for (let i = 0; i < MyArr.length; i++) {
        if (i != maxIndex && i != minIndex) {
        toplama += MyArr[i]
    }
    }
console.log(toplama);



// 9. Ədədin array-də olub-olmadığının tapılması:

 const Myarr = [203, 19, 2, 13, 196, 86, 888, 35, 77];
 let num = 88;
 let mess = false;

 for (let i = 0; i < Myarr.length; i++) {
   if (num === Myarr[i]) {
     console.log(`${num} ededi array icinde var`);
     mess = true;
     break
   }
 }
 if (mess === false) {
   console.log(`${num} ededi array icinde yoxdur`);
 }



// 10. Array-ın elementlərinin rəqəmlərinin sayının tapılması:

const arrr = [203, 19, 2, 13, 196, 86, 888, 35, 77];
let bir = 0;
let iki = 0;
let uc = 0;
for (let i = 0; i < arrr.length; i++) {
  if (String(arr[i]).length === 1) {
    bir++;
  } else if (String(arrr[i]).length === 2) {
    iki++;
  } else if (String(arrr[i]).length === 3) {
    uc++;
  }
}
console.log(arr);
console.log(`Arrayda ${bir} eded bir reqemli eded var`);
console.log(`Arrayda ${iki} eded iki reqemli eded var`);
console.log(`Arrayda ${uc} eded uc reqemli eded var`);