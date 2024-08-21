package com.example.Todo.Service;

import com.example.Todo.Model.todo;
import com.example.Todo.Repository.repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class service {
    @Autowired
    private repository repository;

    public todo createTodo(todo todo) {
        return repository.save(todo);
    }
    public List<todo> getAllTodos() {
        return repository.findAllByOrderByCreatedAtDesc();
    }
    public todo updateTodoStatus(Long id , Boolean completed) {
        todo todo = repository.findById(id).orElseThrow(() -> new RuntimeException("Todo not found"));
        todo.setCompleted(completed);
        return repository.save(todo);
    }
}
