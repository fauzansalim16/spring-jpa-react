package com.fauzancode.studentsystem.controller;

import com.fauzancode.studentsystem.model.Student;
import com.fauzancode.studentsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class  StudentController {
    @Autowired
    public StudentService studentService;

    @PostMapping("/add")
    public String addStudent(@RequestBody Student student){
        studentService.saveStudent(student);
        return "New student is added";
    }
    @GetMapping("/getAll")
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable Integer id) {
        // Menghapus data berdasarkan id dari database
        studentService.deleteStudentById(id);
        return ResponseEntity.ok("Data mahasiswa berhasil dihapus");
    }
    @PatchMapping("/{id}")
    public ResponseEntity<String> patchStudent(@PathVariable Integer id, @RequestBody Student partialStudent) {
        studentService.updateStudent(id, partialStudent);
        return ResponseEntity.ok("Mahasiswa dengan ID " + id + " berhasil diperbarui");
    }

}
