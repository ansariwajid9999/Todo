# Todo Application
This project is a simple yet powerful Todo application with a Java backend built using Spring Boot and a frontend developed using HTML, CSS, and JavaScript. The backend provides RESTful APIs for managing Todo items, while the frontend offers an intuitive interface for interacting with the Todo list.

![Completed](https://github.com/user-attachments/assets/b5748185-8d67-4e45-b10d-cc05cfaca415)
## Features
* Create a Todo: Users can create new Todo items by entering a task and submitting it.
* List Todos: All Todo items are displayed in descending order of their creation date, along with their status.
* Update Todo Status: Users can mark a Todo item as completed or incomplete by updating its status.
  
## Project Structure
### Backend
- **Framework:** Spring Boot
- **Language:** Java
- **Development Environment:** IntelliJ IDEA
- **Controller Class:**
  - The `Controller` class handles API requests for adding, retrieving, and updating Todo items.
  - The endpoints are as follows:
    - `POST /api/todos/add`: Create a new Todo item.
    - `GET /api/todos/getlisttodo`: Retrieve all Todo items.
    - `/api/todos/update/{id}`: Update the status of a Todo item.
    
### Frontend
- **Languages:** HTML, CSS, JavaScript
- **Development Environment:** IntelliJ IDEA
- **UI Design:**
  - The frontend is designed to be simple and intuitive, allowing users to easily add tasks and manage their Todo list.
  - Users can see the tasks listed with options to mark them as completed.

## API Endpoints
### Add a Todo:

* POST /api/todos/add
Request Body: JSON object with the task details.

### List All Todos:

* GET /api/todos/getlisttodo
Response: JSON array of all Todo items.

### Update Todo Status:

* PUT /api/todos/update/{id}
Request Parameter: status (Boolean)
Response: Updated Todo item.

## Technologies Used
Backend: Java, Spring Boot
Frontend: HTML, CSS, JavaScript
Database: MySQL
Development Tools: IntelliJ IDEA (Backend) and (Frontend)

## Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue for any bugs or improvements.

## Installation and Setup

**Clone the Repository:**
   ```bash
   git clone https://github.com/ansariwajid9999/Todo.git

Update application.properties:

spring.application.name=Todo
spring.datasource.url=jdbc:mysql://localhost:3306/todolist?createTableIfNotExists=true
spring.datasource.username=****
spring.datasource.password=****
spring.jpa.hibernate.ddl-auto=update

Run the Project:

Run the Spring Boot application from IntelliJ IDEA.
Use Postman to test the backend by sending requests to the API endpoints.

Frontend Setup:

In Intellij Navigate to .mvn/src/main/resources/templates/index.html.
Open the index.html file in your web browser to check the frontend.

