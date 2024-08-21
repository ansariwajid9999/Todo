let todos = []
async function addToDo() {
    const description = document.getElementById('todo-input').value;
   let resp= await fetch('http://localhost:8080/api/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({description})
    });
    let demo = await resp.json();
    todos.push(demo)

    loadToDos(todos);
}

async function loadToDos(todos) {
    try {
        // Render todos in the list
        let list = document.getElementById('todo-list');
        list.innerHTML = "";

        console.log(todos)

        todos.forEach(todo => {
            list.innerHTML += `
            <tr class="${todo.status ? 'comp': 'in'}">
                <td>${todo.description}</td>
                <td>
                    <input type="checkbox" onclick="markAsComplete(${todo.id})" id="${todo.id}" ${todo.completed ? 'checked' : 'disabled'}  /> ${todo.completed ? "Completed" : "Mark as Completed"}
                </td>
            </tr>
            `;
        });
    } catch (error) {
        console.error('Error loading todos:', error);
    }
}


async function markAsComplete(id) {
    let response = await fetch(`http://localhost:8080/api/todos/update/${id}?completed=true`, { method: 'PUT' });
    let demo = await response.json()

    console.log(demo)
    loadToDos();
}



function renderToDos(todos) {
    const list = document.getElementById('todo-list');
    list.innerHTML = ''; // Clear previous list
    todos.forEach(todo => {
      list.innerHTML+=`<tr>
    <td>${todo.description}</td>
    <td>${todo.id}</td>
    <div>Spec</div>
    </tr>`
    });
}
let resp = await fetch(`http://localhost:8080/api/todos/getlisttodo`)
let demo = await resp.json()
todos = demo

loadToDos(todos)