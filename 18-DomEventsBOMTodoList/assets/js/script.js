// Task1. Calculator:
let enterInput1 = document.querySelector("#enterInput1")
let enterInput2 = document.querySelector("#enterInput2")
let resultInput = document.querySelector("#resultInput")
let plusBtn = document.querySelector("#plus")
let minusBtn = document.querySelector("#minus")
let multBtn = document.querySelector("#mult")
let devideBtn = document.querySelector("#devide")

let plus = () => {
    if (enterInput1.value == "" && enterInput2.value == "") {
        alert("Enter numbers")
    } else if (enterInput1.value == "") {
        alert("Enter first numbers")
    } else if (enterInput2.value == "") {
        alert("Enter second numbers")
    } else {
        resultInput.value = Number(enterInput1.value) + Number(enterInput2.value)
        enterInput1.value = ""
        enterInput2.value = ""
    }    
}
plusBtn.addEventListener("click", plus)


let minus = () => {
    if (enterInput1.value == "" && enterInput2.value == "") {
        alert("Enter numbers")
    } else if (enterInput1.value == "") {
        alert("Enter first numbers")
    } else if (enterInput2.value == "") {
        alert("Enter second numbers")
    } else {
        resultInput.value = Number(enterInput1.value) - Number(enterInput2.value)
        enterInput1.value = ""
        enterInput2.value = ""
    }    
}
minusBtn.addEventListener("click", minus)


let mult = () => {
    if (enterInput1.value == "" && enterInput2.value == "") {
        alert("Enter numbers")
    } else if (enterInput1.value == "") {
        alert("Enter first numbers")
    } else if (enterInput2.value == "") {
        alert("Enter second numbers")
    } else {
        resultInput.value = Number(enterInput1.value) * Number(enterInput2.value)
        enterInput1.value = ""
        enterInput2.value = ""
    }    
}
multBtn.addEventListener("click", mult)


let devide = () => {
    if (enterInput1.value == "" && enterInput2.value == "") {
        alert("Enter numbers")
    } else if (enterInput1.value == "") {
        alert("Enter first numbers")
    } else if (enterInput2.value == "") {
        alert("Enter second numbers")
    } else if (enterInput2.value == "0") {
        alert("A number cannot be divided by 0")
    } else {
        resultInput.value = Number(enterInput1.value) / Number(enterInput2.value)
        enterInput1.value = ""
        enterInput2.value = ""
    }    
}
devideBtn.addEventListener("click", devide)


let click = () => {
    resultInput.value = ""
}
enterInput1.addEventListener("click", click)
enterInput2.addEventListener("click", click)



// Task2. TodoList:
let taskInput = document.querySelector("#taskInput")
let addBtn = document.querySelector("#addBtn")
let taskList = document.querySelector(".taskList")
let deleteAllBtn = document.querySelector("#deleteAllBtn")

addBtn.addEventListener("click", (e) => {
    e.preventDefault

    let listItem = document.createElement("div")
    listItem.classList.add("listItem")

    let task = document.createElement("div")
    task.classList.add("task")

    let icra = document.createElement("div")
    icra.classList.add("icra")

    let bttn = document.createElement("button")
    bttn.classList.add("bttn")

    let span = document.createElement("span")
    span.classList.add("span")
    span.textContent = taskInput.value

    let setting = document.createElement("div")
    setting.classList.add("setting")

    let trash = document.createElement("button")
    trash.classList.add("trash")

    let iTrash = document.createElement("i")
    iTrash.classList.add("fa-solid", "fa-trash-can")

    let edit = document.createElement("button")
    edit.classList.add("edit")

    let iEdit = document.createElement("i")
    iEdit.classList.add("fa-solid", "fa-pen-to-square")

    trash.append(iTrash)
    edit.append(iEdit)
    setting.append(trash, edit)
    icra.append(bttn)
    task.append(icra, span)
    listItem.append(task, setting)
    taskList.append(listItem)

    taskInput.value = ""

    trash.addEventListener("click", (e) => {
        let parentElem = e.target.closest(".listItem")
        parentElem.remove();
    })

    edit.addEventListener("click", (e) => {
        let parentElem = e.target.closest(".listItem")
        let currentTodo = parentElem.querySelector(".span")

        let newTodo = prompt("Edit todo", currentTodo.textContent)
        currentTodo.textContent = newTodo
    })

    bttn.addEventListener("click", (e) => {
    e.preventDefault
    span.style.color = "green"
    span.style.textDecoration = "line-through"


})
})

deleteAllBtn.addEventListener("click", (e) => {
    let parentElem = e.target.closest(".listItem")
    taskList.remove();
})

