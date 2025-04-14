document.addEventListener("DOMContentLoaded", () => {

    let basketItem = document.createElement("div")
    basketItem.classList.add("basket-item")

    let image = document.createElement("div")
    image.classList.add("image")
    
    let img = document.createElement("img")
    img.src = ""
    image.appendChild(img)

    let title = document.createElement("h6")
    title.classList.add("title")

    let category = document.createElement("p")
    category.classList.add("category")

    let price = document.createElement("p")
    price.classList.add("price")

    let countArea = document.createElement("div")
    countArea.classList.add("count-area")

    let minusBtn = document.createElement("button")
    minusBtn.classList.add("minus-btn")

    let total = document.createElement("p")
    total.classList.add("count")

    let plusBtn = document.createElement("button")
    plusBtn.classList.add("plus-btn")

    let removeBtn = document.createElement("button")
    removeBtn.classList.add("btn", "btn-danger")
})