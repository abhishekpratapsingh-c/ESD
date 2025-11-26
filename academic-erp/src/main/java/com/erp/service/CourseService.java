package com.erp.service;

import com.erp.entity.Courses;
import com.erp.repository.CourseRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CourseService {

    private final CourseRepository courseRepository;

    // Constructor Injection
    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public List<Courses> getAllCourses() {
        return courseRepository.findAll();
    }

    // Logic for Use Case 2.3: Update
    @Transactional
    public Courses updateCourse(Integer id, Courses updatedCourse) {
        Courses existing = courseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Course not found"));

        existing.setName(updatedCourse.getName());
        existing.setCourseCode(updatedCourse.getCourseCode());
        existing.setCapacity(updatedCourse.getCapacity());
        existing.setCredits(updatedCourse.getCredits());
        existing.setFaculty(updatedCourse.getFaculty());
        existing.setDescription(updatedCourse.getDescription());

        // Note: DB Cascading handles the prerequisite updates automatically via FK constraints
        return courseRepository.save(existing);
    }

    // Logic for Use Case 2.3: Delete
    @Transactional
    public void deleteCourse(Integer id) {
        if (!courseRepository.existsById(id)) {
            throw new RuntimeException("Course not found");
        }
        // DB "ON DELETE CASCADE" will automatically remove related rows in course_prerequisite
        courseRepository.deleteById(id);
    }
}