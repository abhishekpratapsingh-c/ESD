create table if not exists courses (
    course_id int auto_increment primary key,
    course_code varchar(50) unique not null,
    name varchar(100) not null,
    description text,
    year int,
    term varchar(20),
    faculty varchar(100),
    credits int,
    capacity int
);

create table if not exists course_prerequisite (
    id int auto_increment primary key,
    course_id int,
    prerequisite_id int,
    description varchar(255),
    -- Constraint: If a course is deleted, remove its prerequisite entry automatically
    foreign key (course_id) references courses(course_id) on delete cascade on update cascade,
    -- Constraint: If a prerequisite course is deleted, remove the dependency requirement automatically
    foreign key (prerequisite_id) references courses(course_id) on delete cascade on update cascade
);