document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users"))
    let isLoginedUser = users.find((user) => user.isLogined == true)
    let userIndex = users.findIndex((user) => user.id == isLoginedUser.id)
    let basket = isLoginedUser.basket

    function createBasketItem() {
            let basketArea = document.querySelector(".basket")
            basketArea.innerHTML = ""
            
            let emptyBasket = document.querySelector(".empty")
            if (basket.length == 0) {
                if (emptyBasket) {
                    emptyBasket.classList.remove("d-none")
                }
            } else {
                emptyBasket.classList.add("d-none")
            }

        basket.forEach(product => {
            let basketItem = document.createElement("div")
            basketItem.classList.add("basket-item")

            let Image = document.createElement("div")
            Image.classList.add("image")
    
            let img = document.createElement("img")
            img.src = product.image
            Image.appendChild(img)

            let title = document.createElement("h6")
            title.classList.add("title")
            title.textContent = product.title

            let category = document.createElement("p")
            category.classList.add("category")
            category.textContent = product.category

            let price = document.createElement("p")
            price.classList.add("price")
            price.textContent = (product.price * product.count).toFixed(2)
            priceBasketItem(product.id, price)
            

            let countArea = document.createElement("div")
            countArea.classList.add("count-area")

            let minusBtn = document.createElement("button")
            minusBtn.classList.add("minus-btn")
            minusBtn.textContent = "-"
            minusBtn.addEventListener("click", () => decrement(product.id, countElem, minusBtn, price))

            let countElem = document.createElement("p")
            countElem.classList.add("count")
            countElem.textContent = product.count

            let plusBtn = document.createElement("button")
            plusBtn.classList.add("plus-btn")
            plusBtn.textContent = "+"
            plusBtn.addEventListener("click", () => increment(product.id, countElem, minusBtn, price))

            let removeBtn = document.createElement("button")
            removeBtn.classList.add("btn", "btn-danger")
            removeBtn.textContent = "Remove"
            removeBtn.addEventListener("click", () => removeBasketItem(product.id))

        
            countArea.append(minusBtn, countElem, plusBtn)
            basketItem.append(Image, title, category, price, countArea, removeBtn)
            basketArea.appendChild(basketItem)
});

            if (basket.length > 0) {
                let removeAllBtn = document.createElement("button")
                removeAllBtn.classList.add("remove-all")
                removeAllBtn.textContent = "Remove All"

                removeAllBtn.addEventListener("click", () => {
                    basket = []
                    users[userIndex].basket = basket
                    localStorage.setItem("users", JSON.stringify(users))
                    sweetToast("All products removed from basket...")

                    if (emptyBasket) {
                        emptyBasket.classList.remove("d-none")
                    }

                    createBasketItem()
                    totalPrice()
                })
                basketArea.appendChild(removeAllBtn)
            }            
        
    }


    function totalPrice() {
        let payment = basket.reduce(
            (acc, item) => acc + (item.price * item.count), 
            0
        )

        let totalElem = document.querySelector(".total-price")
        totalElem.textContent = payment.toFixed(2)
    }

    function priceBasketItem(productId, priceElem) {
        let findProduct = basket.find((product) => product.id == productId)
        
        if (findProduct) {
            let total = (findProduct.price * findProduct.count).toFixed(2)
            priceElem.textContent = total
        }
    }

    function removeBasketItem(productId) {
        let findProductIndex = basket.findIndex(
            (product) => product.id == productId
        )

        if (findProductIndex != -1) {
            basket.splice(findProductIndex, 1)
            users[userIndex].basket = basket
            localStorage.setItem("users", JSON.stringify(users))
            sweetToast("Product removed from basket...")
        }
        createBasketItem()
        totalPrice()
    }


    function increment(productId, countElem, minusBtn, priceElem) {

        let existProduct = basket.find((product) => product.id == productId)

        if (existProduct) {
            existProduct.count++ 
            countElem.textContent = existProduct.count

            
            if (existProduct.count > 1) {
                minusBtn.removeAttribute ("disabled")
            }

            users[userIndex].basket = basket
            localStorage.setItem("users", JSON.stringify(users))
            sweetToast("Product added to basket successfully...")
        }
        priceBasketItem(productId, priceElem)
        totalPrice()
    }

    function decrement(productId, countElem, minusBtn, priceElem) {
        
        let existProduct = basket.find((product) => product.id == productId)

        if (existProduct && existProduct.count > 1) {
            existProduct.count--
            countElem.textContent = existProduct.count

            if (existProduct.count == 1) {
                minusBtn.setAttribute ("disabled", "true")
            }

            users[userIndex].basket = basket
            localStorage.setItem("users", JSON.stringify(users))
            sweetToast("Product removed from basket successfully...")
        }
        priceBasketItem(productId, priceElem)
        totalPrice()
    }
    

    priceBasketItem()
    totalPrice()
    createBasketItem()
})

let sweetToast = (text) => {
    Toastify({
        text: `${text}`,
        duration: 3000,
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, rgb(136, 219, 252), rgb(179, 179, 174));",
        },
      }).showToast();
}