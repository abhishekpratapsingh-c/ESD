-- 1. Insert Courses
INSERT INTO courses (course_code, name, description, credits, capacity, faculty) VALUES
('CS101', 'Intro to Programming', 'Basics of Java', 4, 60, 'Prof. Smith'),
('CS102', 'Data Structures', 'Advanced structures', 4, 50, 'Prof. Johnson'),
('CS201', 'Algorithms', 'Analysis of algos', 4, 40, 'Prof. Williams');

-- 2. Insert Prerequisites (CS101 is required for CS102)
INSERT INTO course_prerequisite (course_id, prerequisite_id, description) VALUES
(2, 1, 'Must complete CS101 before CS102');