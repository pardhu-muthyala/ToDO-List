//selectors

const todoInput = document.querySelector(".input-text")
const todoButton = document.querySelector(".submit-btn")
const todoList = document.querySelector(".todo-list")

//events

todoButton.addEventListener('click', addTodo )
todoList.addEventListener('click', deleteCheck)


//functions

function addTodo(event){
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const todoLi = document.createElement('li');
    todoLi.innerHTML = todoInput.value
    todoLi.classList.add('todo-item');
    todoDiv.appendChild(todoLi);

    const complitedButton = document.createElement('button');
    complitedButton.classList.add('complite-button')
    complitedButton.innerHTML = '<i class = "fas fa-check" ></i>'
    todoDiv.appendChild(complitedButton)

    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-button')
    trashButton.innerHTML = '<i class = "fas fa-trash" ></i>';
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value = ""
}

function deleteCheck(e){
    const item = e.target;

    if(item.classList[0] === "trash-button"){
        const todo =item.parentElement;
        todo.remove();
    }
    if(item.classList[0] === "complite-button"){
        const todo =item.parentElement;
        todo.classList.toggle("complited")
    }


}