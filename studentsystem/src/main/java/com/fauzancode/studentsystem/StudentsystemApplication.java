package com.fauzancode.studentsystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StudentsystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentsystemApplication.class, args);
	}

}
// pada controller data yang di dapat @RequestBody akan dikirim ke StudentService,
// dan dari StundentServices akan diteruskan ke StudentServiceImpl,
// dan dari sana akan dikirim ke StudentRepository,
// maka StudentRepository akan melalukan pengecekan berdasarkan data yang ada pada class StudentRepository,
// jika datanya valid maka akan diteruskan kembali ke StudentController,
// dan StudentController akan me-retrun pesan yang ada.