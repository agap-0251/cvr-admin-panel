import MainContainer from "@/components/MainContainer";
import StudentTable from "@/components/StudentTable";


const getStudentDetails = async () => {
  const data = await fetch('https://mentor-student-umum.onrender.com/students',{
    method : 'GET',
    next : {
      revalidate : 100
    }
  });
  return data.json();
}

// const StudentBar = ({student}) => {
//   return (
//     <div className='flex items-center'>
//         <p className='mx-4'>{student.name}</p>
//         <p className='mx-4'>{student.rollno}</p>
//         <p className='mx-4'>{student.fathername}</p>
//         <p className='mx-4'>{student.mothername}</p>
//         <p className='mx-4'>{student.gender}</p>
//     </div>
//   )
// }

const Students = async () => {

  const students = await getStudentDetails();
  // console.log(students)


  return (
    <div className="flex flex-col gap-3 overflow-hidden">
        <StudentTable students={students} />
    </div>
  )
}

export default Students