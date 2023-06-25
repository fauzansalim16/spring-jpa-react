package com.fauzancode.studentsystem.service;

import com.fauzancode.studentsystem.model.Student;
import com.fauzancode.studentsystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService{
    @Autowired
    private StudentRepository studentRepository;
    private Integer id;
    private Student sebagian;

    @Override
    public void saveStudent(Student student) {
        studentRepository.save(student);
    }
    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
    @Override
    public void deleteStudentById(Integer id) {
        studentRepository.deleteById(id);
    }

    @Override
    public void updateStudent(Integer id, Student partialStudent) {
        Optional<Student> studentOptional = studentRepository.findById(id);
        if (studentOptional.isPresent()) {
            Student student = studentOptional.get();
            if (partialStudent.getName() != null) {
                student.setName(partialStudent.getName());
            }
            if (partialStudent.getAdress() != null) {
                student.setAdress(partialStudent.getAdress());
            }
            studentRepository.save(student);
        } else {
            throw new NoSuchElementException("Mahasiswa dengan ID " + id + " tidak ditemukan");
        }
    }


}
