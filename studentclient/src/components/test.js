// {/* <Link to={`edit/${student.id}`}>Edit</Link>
// //pada setiap element student yang di-map akan di sertakan dengan Link(update) yang mengarahkan pada url/student.id, dan method getStudentById akan menangkap url tersebut dan mengisi state name dan address dengan data dari id yang ditekan tombol Link(update) sebeleumnya, sehingga ketika data tersebut di ganti dan di submit ulang maka akan memperbaharui data sebelummnya yang ada pada database

// const updateStudent = () =>{
//     const getStudentById = async () => {
//         const response = await axios.get(`http://localhost:8080/student/${id}`); //object id berisi parameter yang dikirm dari url dan bisa kita gunakan setelah pemanggila useParams
//         setName(response.data.title);
//         setAdress(response.data.message);
//       }; //sata mengklik edit kita akan langsung mendapatkan data yang akan kita edit dikarenakan kita sudah sudah memparsing datanya ke masing-masing useState

//     const updateStudent = async (e) => {
//         e.preventDefault();
//         try {
//           await axios.patch(`http://localhost:8080/student/${id}`, {
//             name,
//             adress,
//           });
//           navigate('/');
//         } catch (error) {
//           console.error(error);
//         }
//     }
//     return(<h1>hallo</h1>)
// } */}
