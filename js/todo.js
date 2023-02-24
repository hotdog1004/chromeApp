const todoForm = document.getElementById('todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.getElementById('todo-list');

let toDos = [];
const TODOS_KEY = 'todos'
// 저장
function saveToDos(){
    // 배열 모양으로 저장하기위해 JSON.stringify() 사용
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
// 삭제
function deleteTodo(event){
    // target : 클릭된 HTML element
    // parentNode or parentElement 를 찾아서 삭제!
    const li = event.target.parentElement;
    li.remove();
    // li.id로 array에 있는 값을 제외한 배열 만들어서 저장
    toDos = toDos.filter(toDo=> toDo.id !== parseInt(li.id));
    saveToDos()
}

function paintTodo(newTodoObj){
    const li = document.createElement('li');
    li.id = newTodoObj.id;
    const span = document.createElement('span');
    span.innerText = newTodoObj.text;
    const btn = document.createElement('button');
    btn.innerText = 'X';
    btn.className = 'deleteBtn'

    btn.addEventListener('click', deleteTodo);
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);

}
function handleTodoSubmit(event){
    event.preventDefault();
    // input.value 값 저장
    const newTodo = todoInput.value;
    todoInput.value = '';
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };

    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

todoForm.addEventListener('submit', handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo)
}

function checkTodo(event){
    const li = event.target.parentElement;
    if(li.className === 'checked'){
        li.classList.remove('checked')
    }else{
        li.className = 'checked';
    }
}

todoList.addEventListener('click', checkTodo)