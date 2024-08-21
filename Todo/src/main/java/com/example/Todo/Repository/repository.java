package com.example.Todo.Repository;

import com.example.Todo.Model.todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface repository extends JpaRepository<todo, Long> {
    List<todo> findAllByOrderByCreatedAtDesc();
}
