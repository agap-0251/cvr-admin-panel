import StudentForm from "@/components/StudentForm"


const StudentCreate = () => {

  const preloadValues = {

  }

  return (
    <>
    <StudentForm isDisabled = {false} preloadValues={preloadValues} />
    </>
  )
}

export default StudentCreate