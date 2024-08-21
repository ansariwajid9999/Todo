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
    public todo updatedescription(Long id , todo todo){
        todo todo1 = repository.findById(id).orElseThrow(() -> new RuntimeException("Todo not found"));
        String description = todo.getDescription();
        todo1.setDescription(description);
        return repository.save(todo1);
    }
    public todo updateTodoStatus(Long id, boolean completed) {
        todo todo = repository.findById(id).orElseThrow(() -> new RuntimeException("Todo not found"));
        todo.setCompleted(completed);
        return repository.save(todo);
    }
    public void delete(Long id){
        repository.deleteById(id);
    }
}
