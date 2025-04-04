// 1. Hər biri 2 parametr qəbul edib və riyazi əməlləri yerinə yetiren funksiya yazin.

let sum = (x, y) => x + y;
let sub = (x, y) => x - y;
let mult = (x, y) => x * y;
let div = (x, y) => x / y;

let calculate = (a, b, callback) => {
    return callback (a, b);
}
console.log(calculate(88, 8, sum));
console.log(calculate(88, 8, sub));
console.log(calculate(88, 8, mult));
console.log(calculate(88, 8, div));



// 2. Verilen parametrlerde tek ve cutlerin tapilmasi.(Rest operatoru istifade etmek)(14, 20, 35, 40, 57, 60, 100)

let arrow = (...numbers) => {
    let tek = []
    let cut = []
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            cut.push(numbers[i])
        }
        else if (numbers[i] % 2 == 1) {
            tek.push(numbers[i])
        }
    }
    console.log("Cüt ədədlər:", cut);
    console.log("Tək ədədlər:", tek);
}
arrow(14, 20, 35, 40, 57, 60, 100);



// 3. Verilmis arreyde elementlerin həm 4-ə, həm də 5-ə bölününen elementlerin cemini tapin.[14, 20, 35, 40, 57, 60, 100]

let arr = [14, 20, 35, 40, 57, 60, 100]

let arrFunc = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 20 == 0) {
            sum += arr[i]
        }
    }
    return sum
}
console.log(arrFunc(arr));



// 4. Daxil edilmiş cümlədə daxil edilmis simvoldan nece eded olduğunu tapan Proqramın alqoritmini yazin.

let character = (sentence, char) => {
    let count = 0
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === char) {
            count++;
        }
    }
    return count
}

let sentence = "Yaşamaq gözəldir";
let char = "a";

console.log(`"${char}" simvolu "${sentence}" cümləsində ${character(sentence, char)} dəfə təkrarlanıb.`);



// 5. Daxil edilen ededin Aboundant ve ya Deficient oldugunu yoxlayan algorithm.

let aboundantOrDeficient = (numbers) => {
    let sum = 0
    for (let i = 1; i < numbers; i++) {
        if (numbers % i == 0) {
            sum += i
        }
    }
    if (sum > numbers) {
        return `${numbers} Aboundant ədəddir.`;
    } 
    else {
        return `${numbers} Deficient ədəddir.`;
    }
}
console.log(aboundantOrDeficient(12));
console.log(aboundantOrDeficient(13));



// 6. Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran funksiya yazın.

let Arr = [2, 4, 6, 8, 10]
let kvArr = []

let kvFunc = (Arr) => {
    for (let i = 0; i < Arr.length; i++) {
        Arr[i] *= Arr[i]
        kvArr.push(Arr[i])
    }
    return kvArr
}
console.log(kvFunc(Arr));



// 7. İçərisində name və age key-ləri olan obyektlərdən təşkil olunmuş bir array var. Ən az yaşı olan ilə ən çox yaşı olan elementin yaşlarını və onların fərqini array şəklində qaytaran funksiya yazın. Məsələn - [13,67,54]

let peopleArr = [
    { name: "Gunay", age: 20 },
    { name: "Aysel", age: 23 },
    { name: "Ramil", age: 67 },
    { name: "Ali", age: 13 }
]

let ageDifference = (peopleArr) => {
    let minAge = peopleArr[0].age;
    let maxAge = peopleArr[0].age;

    for (let i = 1; i < peopleArr.length; i++) {
        if (peopleArr[i].age < minAge) {
            minAge = peopleArr[i].age;
        }
        if (peopleArr[i].age > maxAge) {
            maxAge = peopleArr[i].age;
        }
    }

    let difference = maxAge - minAge;
    return [minAge, maxAge, difference];
}

console.log(peopleArr);
console.log(ageDifference(peopleArr));