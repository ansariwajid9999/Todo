package com.example.Todo.Controller;

import com.example.Todo.Model.todo;
import com.example.Todo.Service.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/todos")
public class controller {

    @Autowired
    private service service;

    @PostMapping("/add")
    public todo createTodo(@RequestBody todo todo) {
        System.out.println(todo);
        return service.createTodo(todo);
    }
    @GetMapping("/getlisttodo")
    public List<todo> getAllTodos() {
        return service.getAllTodos();
    }
    @PutMapping("/update/{id}")
    public todo update(@PathVariable Long id, @RequestParam Boolean completed) {
        return service.updateTodoStatus(id , completed);
    }


}
