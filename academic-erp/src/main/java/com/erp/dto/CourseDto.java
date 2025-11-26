package com.erp.dto;

import lombok.Data;

@Data
public class CourseDto {
    private Integer courseId;
    private String courseCode;
    private String name;
    private String description;
    private Integer year;
    private String term;
    private String faculty;
    private Integer credits;
    private Integer capacity;
}
