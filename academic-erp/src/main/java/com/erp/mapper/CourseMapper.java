package com.erp.mapper;

import com.erp.dto.CourseDto;
import com.erp.entity.Courses;
import org.springframework.stereotype.Component;

@Component
public class CourseMapper {

    public CourseDto toDto(Courses course) {
        CourseDto dto = new CourseDto();
        dto.setCourseId(course.getCourseId());
        dto.setCourseCode(course.getCourseCode());
        dto.setName(course.getName());
        dto.setDescription(course.getDescription());
        dto.setYear(course.getYear());
        dto.setTerm(course.getTerm());
        dto.setFaculty(course.getFaculty());
        dto.setCredits(course.getCredits());
        dto.setCapacity(course.getCapacity());
        return dto;
    }

    public Courses toEntity(CourseDto dto) {
        Courses course = new Courses();
        course.setCourseId(dto.getCourseId());
        course.setCourseCode(dto.getCourseCode());
        course.setName(dto.getName());
        course.setDescription(dto.getDescription());
        course.setYear(dto.getYear());
        course.setTerm(dto.getTerm());
        course.setFaculty(dto.getFaculty());
        course.setCredits(dto.getCredits());
        course.setCapacity(dto.getCapacity());
        return course;
    }
}
