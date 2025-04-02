//Yanacaq Alışı Hesablayıcısı:

/*
let fuel = "Choose fuel type";
let type = "\n 1. Dizel \n 2. Benzin \n 3. Premium";

let choose = Number(prompt(fuel + type)); 
let fuelliter = "Enter fuel liter:";
let liter = Number(prompt(fuelliter)); 
let yourmoney = "Enter your money:";
let money = Number(prompt(yourmoney)); 

let price;

switch (choose) {
    case 1:
        price = 0.9;
        break;
    case 2:
        price = 1;
        break;
    case 3:
        price = 1.5;
        break;
}

if (price > 0) {
    let totalCost = liter * price;
    if (money >= totalCost) {
        alert(`Your money is OK: \n My money: ${totalCost.toFixed(2)} AZN`);
    } else {
        alert(`Pulunuz çatmır! Lazım olan məbləğ: ${totalCost.toFixed(2)} AZN`);
    }
}
    */


// Mövsümə görə ayların göstırilməsi:
let season = "Mövsüm daxil edin:";
let type = "\n 1. Yaz \n 2. Yay \n 3. Payiz \n 4. Qış";

let choose = Number(prompt(season + type));

    switch (choose) {
        case 1:
            alert("Yaz ayları: Mart, Aprel, May");
            break;
        case 2:
            alert("Yay ayları: İyun, İyul, Avqust");
            break;
        case 3:
            alert("Payız ayları: Sentyabr, Oktyabr, Noyabr");
            break;
        case 4:
            alert("Qış ayları: Dekabr, Yanvar, Fevral");
            break;
        default:
            alert("Lütfən, düzgün mövsüm adı daxil edin.");
    }