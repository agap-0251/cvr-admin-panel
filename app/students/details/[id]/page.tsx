import StudentForm from "@/components/StudentForm"
import { STUDENTTYPE, STUDENTPARAMS } from "@/lib/types";

const getSpecificStudentDetails = async (id : STUDENTTYPE["rollno"]) => {
  const data = await fetch(`https://mentor-student-umum.onrender.com/students/${id}`,{
    method : 'GET',
    next : {
      revalidate : 100
    }
  });
  return data.json();
}


const StudentDetails = async ({params} : {params : STUDENTPARAMS}) => {

  const details = await getSpecificStudentDetails(params.id)
  // console.log(details)

  return (
    <div>
      StudentDetails - {params.id}
    <StudentForm isDisabled = {true} preloadValues = {details} />
    </div>
  )
}

export default StudentDetails