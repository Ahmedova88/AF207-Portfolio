document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users"))
    let isLoginedUser = users.find((user) => user.isLogined === true);
    let userWishlist = isLoginedUser.wishlist

    function createWishlistItem() {
        let wishlistTag = document.querySelector(".wishlist");
        wishlistTag.innerHTML = "";

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
   
            removeBtn.addEventListener("click", () => {
                userWishlist = userWishlist.filter(prod => prod.id !== item.id);
                users.find(user => user.id === isLoginedUser.id).wishlist = userWishlist;
                localStorage.setItem("users", JSON.stringify(users));
    
                wishlistItem.remove();
 
                sweetToast("Product removed from wishlist...")
            });

        });

    }
 createWishlistItem()
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