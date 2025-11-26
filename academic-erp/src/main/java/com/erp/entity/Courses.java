package com.erp.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "courses")
public class Courses {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "course_id")
    private Integer courseId;

    @Column(name = "course_code", unique = true, nullable = false)
    private String courseCode;

    @Column(nullable = false)
    private String name;

    private String description;
    private Integer year;
    private String term;
    private String faculty;
    private Integer credits;
    private Integer capacity;
}