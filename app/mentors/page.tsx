import {  columns } from "./columns"
import { DataTable } from "./data-table"

const getMentorDetails = async () => {
  const data = await fetch('https://mentor-student-umum.onrender.com/mentors',{
    method : 'GET',
    next : {
      revalidate : 100
    }
  });
  return data.json();
}

const Mentors = async () => {

  const mentors = await getMentorDetails();
  // console.log(mentors)


  return (

    <div className="flex flex-col gap-3 overflow-hidden p-4">
      <DataTable columns={columns} data={mentors} />
    </div>
  )
}

export default Mentors