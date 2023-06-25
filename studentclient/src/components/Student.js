import { useEffect, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

function Student() {
  const [name, setName] = useState('');
  const [adress, setAdress] = useState('');
  const [students, setStudents] = useState([]);

  const handleClickSubmitStundent = (e) => {
    const student = { name, adress };
    e.preventDefault();
    console.log(student);
    fetch('http://localhost:8080/student/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    }).then(() => {
      console.log('New Student added');
      fetchStudents();
    });
  };

  const handlePatchStudent = (studentId) => {
    const studentToUpdate = students.find((student) => student.id === studentId);
    if (studentToUpdate) {
      setName(studentToUpdate.name);
      setAdress(studentToUpdate.address);
    }

    fetch(`http://localhost:8080/student/${studentId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(studentToUpdate),
    })
      .then(() => {
        console.log('Student updated');
        fetchStudents();
      })
      .catch((error) => {
        console.error('Error updating student:', error);
      });
  };

  const fetchStudents = () => {
    fetch('http://localhost:8080/student/getAll')
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
        setName(' ');
        setAdress(' ');
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
      });
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDeleteStudent = (studentId) => {
    fetch(`http://localhost:8080/student/${studentId}`, {
      method: 'DELETE',
    })
      .then(() => {
        console.log('Student deleted');
        fetchStudents();
      })
      .catch((error) => {
        console.error('Error deleting student:', error);
      });
  };

  return (
    <>
      <Container className="mt-5">
        <form>
          <FloatingLabel controlId="floatingInput" label="Name" className="mb-3" value="name" onChange={(e) => setName(e.target.value)}>
            <Form.Control type="text" />
          </FloatingLabel>
          <FloatingLabel className="mb-3" controlId="floatingPassword" label="Address" value="address" onChange={(e) => setAdress(e.target.value)}>
            <Form.Control type="Address" />
          </FloatingLabel>
          <button value="submit" onClick={handleClickSubmitStundent}>
            Submit
          </button>
        </form>

        <h3 className="mt-5">Students</h3>
        {/* Daftar student */}
        {/* Daftar student */}
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.name} - {student.adress}
              <button className="mx-2 my-2" onClick={() => handleDeleteStudent(student.id)}>
                Delete
              </button>
              <button className="mx-2 my-2" onClick={() => handlePatchStudent(student.id)}>
                Update
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}

export default Student;
