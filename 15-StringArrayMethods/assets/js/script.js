// String Methods:
let str = "I am frontend DEVELOPER I LEARN Javascript";

// 1. Verilmiş string-də sait hərflərin tapılması:
let saitTap = (str) => {
    const sait = "aeiouAEIOU"
    let tapSait = []
    for (let i = 0; i < str.length; i++) {
        if (sait.includes(str[i])) {
            tapSait.push(str[i])
        }
    }
    return tapSait
}
console.log(saitTap(str));



// 2. Verilmiş string-də sözlərin boşluğa görə sayı:
let sozSayi = (str) => {
    return str.split(" ").length;
  }
  console.log(sozSayi(str));
  


// 3. Verilmiş string-in ən uzun sözünü ekrana çıxaran program
let enUzunSoz = (str) => {
  let sozler = str.split(" ");
  let maxSoz = " "
  for (let i = 0; i < sozler.length; i++) {
    if (sozler[i].length > maxSoz.length) {
        maxSoz = sozler[i];
    }
  }
  return maxSoz
  }
console.log(enUzunSoz(str));



// 4. Verilmiş string-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram:
let boyukSoz = (str) => {
    let boyuk = []
    let sozler = str.split(" ")
    for (let i = 0; i < sozler.length; i++) {
        if (sozler[i] === sozler[i].toUpperCase()) {
            boyuk.push({ indeks: i, soz: sozler[i] })
        }  
    }
    return boyuk
}
console.log(boyukSoz(str));



// 5. Verilmiş string-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram:
let boyukHerf = (str) => {
    let sozler = str.split(" ");
    sozler.filter(soz => {
        let boyukSayi = 0;

    for (let char of soz) {
      if (char === char.toUpperCase()) {
        boyukSayi++;
      }
    }
      if (boyukSayi > 2) {
        console.log(soz);
      }
    });
}
boyukHerf(str)



// 6.  Hər hansı bir cümlədə istənilən  baş hərflə olan simvolları birləşdirib qaytaran funksiya. Məsələn:  My name is Jhon - MniJ:
let basHerf = (str) => {
    let sozler = str.split(" ");
    return sozler.map(soz => soz[0]).join("");
}
console.log(basHerf(str));



// 7. Cümlədə olan bütün sözləri ixtisar edən proqram:
let ixtisar = (str) => {
    let sozler = str.split(" ");
    return sozler.map(soz => {
        if (soz.length < 4) return soz;
        return soz[0] + (soz.length - 2) + soz[soz.length - 1];
    }).join(" ")
}
console.log(ixtisar(str));


// Array Methods:
// 1. Verilmis arrayde tekrarlanan reqemleri silmek ve tekrar reqemlerin sayini gostermek:
function tekrar(arr) {
  let unikal = [];
  let say = {};
  arr.forEach(el => {
    say[el] = (say[el] || 0) + 1;
    if (!unikal.includes(el)) {
      unikal.push(el);
    }
  });
  return unikal;
}
console.log(tekrar([1, 2, 3, 2, 3, 4, 1, 5]));



// 2. Verilmis sozun polindrom olub olmadığını yoxlayan alqoritm:
const polindrom = (soz) => {
  const duz = soz.toLowerCase();
  const ters = duz.split("").reverse().join("");
  return duz === ters;
};

console.log(polindrom("ənənə"));     
console.log(polindrom("kələm")); 



// 3. Girilen ededin verilmis arreyde nece elementden kicik oldugunu yazan alqoritm:
function kicikElementSayi(arr, eded) {
  return arr.filter(x => x > eded).length;
}

console.log(kicikElementSayi([1, 5, 7, 3, 9, 2], 6)); 



// 4. Customers  array-in icindeki objectlerdeki hobbileri array-in reduce metodundan istifade ederek yazdirmaq:
const customers = [
  {
    name: "Tyrone",
    personal: {
      age: 33,
      hobbies: ["Bicycling", "Camping"],
    },
  },
  {
    name: "Elizabeth",
    personal: {
      age: 25,
      hobbies: ["Guitar", "Reading", "Gardening"],
    },
  },
  {
    name: "Penny",
    personal: {
      age: 36,
      hobbies: ["Comics", "Chess", "Legos"],
    },
  },
];

function hobbilər(customers) {
  return customers.reduce((acc, customer) => {
    return acc.concat(customer.personal.hobbies);
  }, []);
}
console.log(hobbilər(customers));




// 5. Random reqemlerden ibaret array yaratmaq,en boyuk ve en kicik elemanlar,ortalamani,toplami ve elemanlarin kvadratini tapmaq:
const array = (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }

  let max = arr[0];
  let min = arr[0];
  let sum = 0;
  let kvadratlar = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
    sum += arr[i];
    kvadratlar.push(arr[i] ** 2);
  }

  let average = (sum / arr.length).toFixed(2);

  console.log("Array:", arr);
  console.log("Max:", max);
  console.log("Min:", min);
  console.log("Toplam:", sum);
  console.log("Ortalama:", average);
  console.log("Kvadratlar:", kvadratlar);
}

array(10);
