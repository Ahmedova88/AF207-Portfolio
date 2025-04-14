document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let isLoginedUser = users.find((user) => user.isLogined === true);

    let userBtn = document.querySelector(".username");
    let login = document.querySelector(".login");
    let register = document.querySelector(".register");
    let logout = document.querySelector(".logout");

    function updateUserStatus() {
        if (isLoginedUser) {
            register.classList.add("d-none");
            login.classList.add("d-none");
            logout.classList.remove("d-none");
            userBtn.textContent = isLoginedUser.username;
        } else {
            register.classList.remove("d-none");
            login.classList.remove("d-none");
            logout.classList.add("d-none");
            userBtn.textContent = "Username";
        }
    }

    let logoutUserFunction = () => {
        if (isLoginedUser) {
            isLoginedUser.isLogined = false;
            localStorage.setItem("users", JSON.stringify(users));
            userBtn.textContent = "Username";
        }
        updateUserStatus();
        window.location.reload();
    };

    logout.addEventListener("click", logoutUserFunction);
    updateUserStatus();


});




