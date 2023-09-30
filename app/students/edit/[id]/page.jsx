import StudentForm from "@/components/StudentForm"

const getSpecificStudentDetails = async (id) => {
  const data = await fetch(`https://mentor-student-umum.onrender.com/students/${id}`,{
    method : 'GET',
    next : {
      revalidate : 100
    }
  });
  return data.json();
}

const StudentEdit = async ({params}) => {

  const details = await getSpecificStudentDetails(params.id)
  console.log(details)

  return (
    <div>
      Student Edit Details - {params.id}
    <StudentForm isDisabled = {false} preloadValues={details} />
    </div>
  )
}

export default StudentEdit