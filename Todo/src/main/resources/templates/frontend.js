// frontend.js

const todos = document.getElementById('todos');
const addTodoForm = document.getElementById('addTodoForm');
const newTodoInput = document.getElementById('newTodoInput');
const submitButton = document.getElementById('submitButton');

// Get all todos on page load
fetch('http://localhost:8080/api/todos/getlisttodo')
  .then(response => response.json())
  .then(data => {
  console.log(data)
    displayTodos(data);
  });

// Add new todo
addTodoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newTodo = {
    description: newTodoInput.value,
    completed: false,
  };

  fetch('http://localhost:8080/api/todos/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTodo),
  })
  .then(response => response.json())
  .then(data => {
    // Add the new todo to the list
    displayTodo(data);
    // Clear the input field
    newTodoInput.value = '';
  });
});

// Display todos on the page
function displayTodos(todos) {
  todos.forEach(todo => {
    displayTodo(todo);
  });
}

// Display a single todo
function displayTodo(todo) {
  const todoItem = document.createElement('li');
  todoItem.innerHTML = `
    <input type="checkbox" id="todo-${todo.id}" ${todo.completed ? 'checked' : ''}>
    <label for="todo-${todo.id}" id="todo-${todo.id}" >${todo.description}</label>
    <button class="delete-button" data-id="${todo.id}">Delete</button>
  `;

  todos.appendChild(todoItem);

  // Add event listener for delete button
  const deleteButton = todoItem.querySelector('.delete-button');
  deleteButton.addEventListener('click', () => {
    deleteTodo(todo.id);
  });

  // Add event listener for checkbox
  const checkbox = todoItem.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('change', () => {

  let del = document.querySelectorAll(`#todo-${todo.id}`)

  if(checkbox.checkbox == false){
      console.log(del)
      del[1].innerHTML = `<del>${todo.description} </del>`
  }
  else{
      console.log(del)
      del[1].innerHTML = `<label for=todo-${todo.id} id=todo-${todo.id}>${todo.description} </label>`
  }
    updateTodoStatus(todo.id, checkbox.checked);
  });
}

// Update todo status
function updateTodoStatus(todoId, completed) {
  fetch(`http://localhost:8080/api/todos/update/${todoId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ completed }),
  })
  .then(response => response.json())
  .then(data => {
    // Update the todo item on the page
    const todoItem = todos.querySelector(`li input[id="todo-${todoId}"]`).parentElement;
    todoItem.querySelector('label').textContent = data.name;
  });
}

// Delete todo
function deleteTodo(todoId) {
  fetch(`http://localhost:8080/api/todos/delete/${todoId}`, {
    method: 'DELETE',
  })
  .then(response => {
    // Remove the todo item from the page
    const todoItem = todos.querySelector(`li input[id="todo-${todoId}"]`).parentElement;
    todos.removeChild(todoItem);
  });
}