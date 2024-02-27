import "./styles.css";

const incompleteListsEl = document.getElementById("incomplete-list")
const completeListsEl = document.getElementById("complete-list")

function createInCompleteListEl(text) {
    const todoItemEl = document.createElement("p")
    todoItemEl.classList.add("todo-item")
    todoItemEl.innerText = text
    const completeButtonEl = document.createElement("button")
    completeButtonEl.classList.add("complete-button")
    completeButtonEl.innerText = "完了"
    const deleteButtonEl = document.createElement("button")
    deleteButtonEl.classList.add("delete-button")
    deleteButtonEl.innerText = "削除"
    const listRowEl = document.createElement("div")
    listRowEl.classList.add("list-row")
    listRowEl.appendChild(todoItemEl)
    listRowEl.appendChild(completeButtonEl)
    listRowEl.appendChild(deleteButtonEl)
    const listEl = document.createElement("li")
    listEl.appendChild(listRowEl)

    completeButtonEl.addEventListener("click", () => {
        listEl.remove()

        const completeListEl = createCompleteListEl(text)
        completeListsEl.appendChild(completeListEl)
    })

    deleteButtonEl.addEventListener("click", () => {
        listEl.remove()
    })

    return listEl
}

function createCompleteListEl(text) {
    const todoItemEl = document.createElement("p")
    todoItemEl.classList.add("todo-item")
    todoItemEl.innerText = text
    const returnButtonEl = document.createElement("button")
    returnButtonEl.classList.add("return-button")
    returnButtonEl.innerText = "戻す"
    const listRowEl = document.createElement("div")
    listRowEl.classList.add("list-row")
    listRowEl.appendChild(todoItemEl)
    listRowEl.appendChild(returnButtonEl)
    const listEl = document.createElement("li")
    listEl.appendChild(listRowEl)

    returnButtonEl.addEventListener("click", () => {
        listEl.remove()

        const inCompleteListEl = createInCompleteListEl(text)
        incompleteListsEl.appendChild(inCompleteListEl)
    })

    return listEl
}


(function main() {
    const textEl = document.getElementById("add-text")
    const buttonEl = document.getElementById("add-button")

    buttonEl.addEventListener("click", () => {
        const text = textEl.value
        if(text === "") {
            console.log("skip")
            return
        }

        console.log("add")
        textEl.value = ""
        const listEl = createInCompleteListEl(text)
        incompleteListsEl.appendChild(listEl)
    })
})();
