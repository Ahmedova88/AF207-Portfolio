/* 1.1 Elementlər üzərində keçid edərək navigate etmək: */

let btn = document.querySelector(".shopBtn")

let img = btn.parentNode.previousElementSibling.lastElementChild.src

let title = btn.parentNode.firstElementChild.textContent

let desc = btn.previousElementSibling.previousElementSibling.textContent

let price = btn.previousElementSibling.textContent

let product = {
    img,
    title,
    desc,
    price,
};

console.log(product);

/* 1.2 Closest metodu ilə navigate etmək: */

let card = btn.closest(".card")

let img2 = card.querySelector(".img").src

let title2 = card.querySelector(".cardTitle").textContent

let desc2 = card.querySelector(".cardText").textContent

let price2 = card.querySelector(".cardPrice").textContent

let product2 = {
    img: img2,
    title: title2,
    desc: desc2,
    price: price2,
};

console.log(product2);

/* 1.3 Asagidaki stilleri card elementlerine verin. */

card.style.margin = "50px"
card.style.width = "300px"
card.style.border = "1px solid black"
card.style.padding = "10px"

let icon = card.querySelector(".heart")
icon.style.display = "inline-flex"
icon.style.alignItems = "center"
icon.style.justifyContent = "center"
icon.style.width = "30px"
icon.style.height = "30px"
icon.style.borderRadius = "50%"
icon.style.backgroundColor = "silver"
icon.style.position = "absolute"
icon.style.top = "15px"
icon.style.right = "15px"
icon.style.cursor = "pointer"

let image = card.querySelector(".image")
image.style.width = "100%"
image.style.height = "300px"
image.style.position = "relative"

img = card.querySelector(".img")
img.style.width = "100%"
img.style.height = "100%"
img.style.borderRadius = "10px"

desc = card.querySelector(".cardText");
desc.style.display = "flex"
desc.style.flexDirection = "column"
desc.style.alignItems = "center"
desc.style.gap = "10px"
desc.style.marginTop = "20px"
desc.style.color = "burlywood"

price = card.querySelector(".cardPrice")
price.style.display = "inline-block"
price.style.padding = "5px"
price.style.borderRadius = "5px"
price.style.backgroundColor = "rgb(95, 94, 91)"

btn.style.width = "100%"
btn.style.padding = "10px"
btn.style.backgroundColor = "skyblue"
btn.style.border = "none"
btn.style.cursor = "pointer"
btn.style.color = "white"
btn.style.textTransform = "uppercase"
btn.style.borderRadius = "5px"
btn.style.fontWeight = "bold"

/* 1.4 Card elementlerini tek-tek secib contentlerini deyisin. */

card.querySelector(".cardTitle").textContent = "Iphone15";
card.querySelector(".cardText").textContent = "Black, 256GB, Powerful, Fanless.";
card.querySelector(".cardPrice").textContent = "2399 AZN";
card.querySelector("img").src = "https://irshad.az/cdn-cgi/image/width=540,height=550/storage/products/88264/iphone-15-blue-3-1.png";





// 2.1 Asagida sekilde verilen card-ı js-de interactive elements istifade ederek hazirlamaq(stiller js-de verilecek).

let body = document.querySelector("body")

let card2 = document.createElement("div");
card2.style.width = "400px";
card2.style.border = "1px solid black";
card2.style.borderRadius = "10px";
card2.style.margin = "50px";

let image2 = document.createElement("div");
image2.style.position = "relative";

let img3 = document.createElement("img");
img3.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80";
img3.style.width = "100%";
img3.style.height = "250px";   
img3.style.borderRadius = "10px"

let heart = document.createElement("div");
heart.innerHTML = `<i class="fa-regular fa-heart"></i>`;
heart.style.color = "white"
heart.style.fontSize = "28px"
heart.style.position = "absolute";
heart.style.top = "15px";
heart.style.right = "15px";
heart.style.width = "30px";
heart.style.height = "30px";
heart.style.display = "flex";
heart.style.alignItems = "center";
heart.style.justifyContent = "center";
heart.style.cursor = "pointer";

let info = document.createElement("div");
info.style.padding = "20px";
info.textContent = "DETACHED HOUSE • 5Y OLD";
info.style.fontSize = "12px";
info.style.fontWeight = "bold";
info.style.color = "black";

let price3 = document.createElement("div");
price3.textContent = "$750,000";
price3.style.fontSize = "28px";
price3.style.fontWeight = "bold";
price3.style.margin = "10px 0";

let address = document.createElement("div");
address.textContent = "742 Evergreen Terrace";
address.style.color = "gray";

let desc3 = document.createElement("div");
desc3.style.display = "flex";
desc3.style.justifyContent = "space-between";
desc3.style.padding = "20px";
desc3.style.borderTop = "1px solid gray";
desc3.style.borderBottom = "1px solid gray";

let bed = document.createElement("div");
bed.innerHTML = `<i class="fa-solid fa-bed"></i><span style="font-weight: bold;">3</span> Bedrooms`;
bed.style.display = "flex";
bed.style.alignItems = "center";

let bath = document.createElement("div");
bath.innerHTML = `<i class="fa-solid fa-bath"></i><span style="font-weight: bold;">2</span> Bathrooms`;
bath.style.display = "flex";
bath.style.alignItems = "center";

let makler = document.createElement("div");
makler.style.padding = "20px";
makler.style.display = "flex";
makler.style.alignItems = "center";
makler.style.gap = "10px";

let avatar = document.createElement("img");
avatar.src = "https://randomuser.me/api/portraits/women/44.jpg";
avatar.style.width = "40px";
avatar.style.height = "40px";
avatar.style.borderRadius = "50%";

let contact = document.createElement("div");
contact.innerHTML = `<div style="font-weight:bold">Tiffany Heffner</div><div style="color:gray">(555) 555-4321</div>`;



image2.append(img3, heart)
info.append(price3, address)
desc3.append(bed, bath)
makler.append(avatar, contact)
card2.append(image2, info, desc3, makler)
body.appendChild(card2);