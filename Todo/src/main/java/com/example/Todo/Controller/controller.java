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
    public todo updateTodoStatus(@PathVariable Long id) {
        return service.updateTodoStatus(id);
    }
    @PutMapping("/updatetofalse/{id}")
    public todo updatetofalse(@PathVariable Long id) {
        return service.updatetofalse(id);
    }



    @PutMapping("/updatedescription/{id}")
    public todo updatedescription(@PathVariable Long id, @RequestBody todo todo){
        return service.updatedescription(id , todo);
    }
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Long id){
        service.delete(id);
        return "Todo of given id " + id + " has been deleted.";
    }
}
