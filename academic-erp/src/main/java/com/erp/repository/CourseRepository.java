package com.erp.repository;

import com.erp.entity.Courses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Courses, Integer> {
    // Custom query methods can be added here if needed
}