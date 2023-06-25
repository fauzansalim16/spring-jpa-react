package com.fauzancode.studentsystem.service;

import com.fauzancode.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    public void saveStudent(Student student);
    public List<Student>  getAllStudents();
    public void deleteStudentById(Integer id);

    public void updateStudent(Integer id, Student partialStudent);
}
