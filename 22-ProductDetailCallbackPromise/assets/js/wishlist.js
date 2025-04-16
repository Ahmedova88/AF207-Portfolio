document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users"))
    let isLoginedUser = users.find((user) => user.isLogined === true);
    let userWishlist = isLoginedUser.wishlist

    function createWishlistItem() {


        userWishlist.forEach(item => {
            let wishlistItem = document.createElement("div")
        wishlistItem.classList.add("wishlist-item")

        let Image = document.createElement("div")
        Image.classList.add("image")

        let img = document.createElement("img")
        img.src = item.image
        Image.appendChild(img)

        let title = document.createElement("h5")
        title.classList.add("title")
        title.textContent = item.title.slice(0,20) + "..."

        let category = document.createElement("p")
        category.classList.add("category")
        category.textContent = item.category

        let price = document.createElement("p")
        price.classList.add("price")
        price.textContent = item.price

        let removeBtn = document.createElement("button")
        removeBtn.classList.add("btn", "btn-danger", "remove-btn")
        removeBtn.textContent = "Remove"

        wishlistItem.append(Image, title, category, price, removeBtn)

        let wishlistTag = document.querySelector(".wishlist")
        wishlistTag.appendChild(wishlistItem)
   

        });

    }
 createWishlistItem()
})
