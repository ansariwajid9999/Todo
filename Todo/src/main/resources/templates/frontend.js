
async function addToDo() {
   const description = document.getElementById('todo-input').value;
   let resp= await fetch('http://localhost:8080/api/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({description})
    });
    loadToDos();
}

async function loadToDos() {
    try {
        const response = await fetch('http://localhost:8080/api/todos/getlisttodo');
        const todos = await response.json();

        let list = document.getElementById('todo-list');
        list.innerHTML = "";

        todos.forEach(todo => {
            list.innerHTML += `
            <tr class="${todo.status ? 'comp': 'in'}">
                <td>${todo.description}</td>
                <td>
                    <input type="checkbox" onclick="markAsComplete(${todo.id})" id="${todo.id}" ${todo.completed ? 'checked  disabled' : ''}  /> ${todo.completed ? "Completed" : "Mark as Completed"}
                </td>
            </tr>
            `;
        });
//        list.innerHTML = ''; // Clear the list before adding new items
//        todos.forEach(todo => {
//            list.innerHTML += `
//            <li class="${todo.status ? 'comp': 'in'}">
//                <span>${todo.description}</span>
//                <input type="checkbox" onclick="markAsComplete(${todo.id})" id="${todo.id}" ${todo.completed ? 'checked disabled' : ''} />
//                <label for="${todo.id}">${todo.completed ? "Completed" : "Mark as Completed"}</label>
//            </li>
//            `;
//        });

    } catch (error) {
        console.error('Error loading todos:', error);
    }
}


async function markAsComplete(id) {
    await fetch(`http://localhost:8080/api/todos/update/${id}?completed=true`, { method: 'PUT' });
    loadToDos();
}


function renderToDos(todos) {
    const list = document.getElementById('todo-list');
    list.innerHTML = '';
    todos.forEach(todo => {
      list.innerHTML+=`<tr>
    <td>${todo.description}</td>
    <td>${todo.id}</td>
    <div>Spec</div>
    </tr>`
    });
}
//function renderToDos(todos) {
//    const list = document.getElementById('todo-list');
//    list.innerHTML = '';  // Clear the list before adding new items
//    todos.forEach(todo => {
//        list.innerHTML += `
//        <li>
//            <span>${todo.description}</span>
//            <span>${todo.id}</span>
//            <div>Spec</div>
//        </li>
//        `;
//    });
//}


loadToDos()
