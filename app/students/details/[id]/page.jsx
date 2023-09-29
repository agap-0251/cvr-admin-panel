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

const StudentDetails = async ({params}) => {

  const details = await getSpecificStudentDetails(params.id)
  // console.log(details)

  // const preloadValues = {
  //   rollno: "21B81A05K79",
  //   name: "KUMBHAM RITHVIKA ",
  //   fathername: "KUMBHAM HARIVARDHAN ",
  //   mothername: "KUMBHAM NARMADA",
  //   aadharno: "9299 1332 0056",
  //   dob: "22-03-2004",
  //   gender: "FEMALE",
  //   medium: "ENGLISH",
  //   sscmarks: 10,
  //   intermarks: 98.4,
  //   fatherno: 9490115251,
  //   motherno: 9491385251,
  //   stdno: 8500695251,
  //   caste: "OC",
  //   religion: "HINDU",
  //   stdAdim: "MANAGEMENT",
  //   pressadd: "ROAD NO-5, SRINIVASA COLONY, HASTHINAPURAM, HYD-500070",
  //   permadd: "ROAD NO-5, SRINIVASA COLONY, HASTHINAPURAM, HYD-500070",
  // };

  return (
    <div>
      StudentDetails - {params.id}
    <StudentForm isDisabled = {true} preloadValues = {details} />
    </div>
  )
}

export default StudentDetails