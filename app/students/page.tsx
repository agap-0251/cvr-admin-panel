import {  columns } from "./columns"
import { DataTable } from "./data-table"


const getStudentDetails = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_DATA_URL}/students`,{
    method : 'GET',
    next : {
      revalidate : 100
    }
  });
  return data.json();
}

const Students = async () => {

  const students = await getStudentDetails();
  // console.log(students)


  return (
    <div className="flex flex-col gap-3 overflow-hidden p-4">
      <DataTable columns={columns} data={students} />
    </div>
  )
}

// container mx-auto py-10 

export default Students