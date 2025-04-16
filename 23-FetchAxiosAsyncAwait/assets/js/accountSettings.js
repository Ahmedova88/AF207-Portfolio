document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users")) || []
    let currentUser = users.find(user => user.isLogined === true)
  
    if (!currentUser) {
      window.location.href = "login.html"
      return
    }
  
    let form = document.querySelector("#accountForm")
    let usernameInput = document.querySelector("#editUsername")
    let emailInput = document.querySelector("#editEmail")
    let passwordInput = document.querySelector("#editPassword")
  

    usernameInput.value = currentUser.username
    emailInput.value = currentUser.email
  
    form.addEventListener("submit", (e) => {
      e.preventDefault()
  
      let newUsername = usernameInput.value.trim()
      let newEmail = emailInput.value.trim()
      let newPassword = passwordInput.value.trim()
  

      let conflictUser = users.find(
        user =>
          (user.username === newUsername || user.email === newEmail) &&
          user.id !== currentUser.id
      )
  
      if (conflictUser) {
        sweetToast("Username or email already in use")
        return
      }
  

      currentUser.username = newUsername
      currentUser.email = newEmail
      if (newPassword.length > 0) {
        if (!strongPassword(newPassword)) {
          sweetToast("Password must be strong (8+ chars, upper, lower, number, symbol)")
          return
        }
        currentUser.password = newPassword
      }
  

      let updatedUsers = users.map(user => user.id === currentUser.id ? currentUser : user)
      localStorage.setItem("users", JSON.stringify(updatedUsers))
  
      sweetToast("Changes saved successfully!")
      passwordInput.value = ""
    })
  })
  
  
  function sweetToast(text) {
    Toastify({
      text: `${text}`,
      duration: 3000,
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, rgb(136, 219, 252), rgb(179, 179, 174))",
      },
    }).showToast();
  }
  
  function strongPassword(pw) {
    let boyukHerf = false;
    let kicikHerf = false;
    let reqem = false;
    let simvol = false;
    let uzunluq = false;
  
    for (let i = 0; i < pw.length; i++) {
        let char = pw[i];
        if (char >= 'A' && char <= 'Z') boyukHerf = true;
        else if (char >= 'a' && char <= 'z') kicikHerf = true;
        else if (char >= '0' && char <= '9') reqem = true;
        else simvol = true;
    }
  
    if (pw.length >= 8) uzunluq = true;
  
    return boyukHerf && kicikHerf && reqem && simvol && uzunluq;
  }
  