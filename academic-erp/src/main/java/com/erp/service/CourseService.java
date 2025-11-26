package com.erp.service;

import com.erp.dto.CourseDto;
import com.erp.entity.Courses;
import com.erp.mapper.CourseMapper;
import com.erp.repository.CourseRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseService {

    private final CourseRepository courseRepository;
    private final CourseMapper courseMapper;

    public CourseService(CourseRepository courseRepository, CourseMapper courseMapper) {
        this.courseRepository = courseRepository;
        this.courseMapper = courseMapper;
    }

    public List<CourseDto> getAllCourses() {
        return courseRepository.findAll().stream()
                .map(courseMapper::toDto)
                .collect(Collectors.toList());
    }

    @Transactional
    public CourseDto updateCourse(Integer id, CourseDto updatedCourseDto) {
        Courses existing = courseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Course not found"));

        existing.setName(updatedCourseDto.getName());
        existing.setCourseCode(updatedCourseDto.getCourseCode());
        existing.setCapacity(updatedCourseDto.getCapacity());
        existing.setCredits(updatedCourseDto.getCredits());
        existing.setFaculty(updatedCourseDto.getFaculty());
        existing.setDescription(updatedCourseDto.getDescription());

        Courses updatedCourse = courseRepository.save(existing);
        return courseMapper.toDto(updatedCourse);
    }

    @Transactional
    public void deleteCourse(Integer id) {
        if (!courseRepository.existsById(id)) {
            throw new RuntimeException("Course not found");
        }
        courseRepository.deleteById(id);
    }
}