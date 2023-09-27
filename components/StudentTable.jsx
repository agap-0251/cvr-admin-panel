import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link"

export default function StudentTable({students}) {
  return (
    <div className="h-[100vh] overflow-scroll">

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Rollno</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>FatherName</TableHead>
            <TableHead>MotherName</TableHead>
            <TableHead>AadharNo</TableHead>
            <TableHead>Dob</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Medium</TableHead>
            <TableHead>SSC Marks</TableHead>
            <TableHead>Rank</TableHead>
            <TableHead className="text-right">Control</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student._id}>
              <TableCell className="font-medium">{student.rollno}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.fathername}</TableCell>
              <TableCell>{student.mothername}</TableCell>
              <TableCell>{student.aadharno}</TableCell>
              <TableCell>{student.dob}</TableCell>
              <TableCell>{student.gender}</TableCell>
              <TableCell>{student.medium}</TableCell>
              <TableCell>{student.sscmarks}</TableCell>
              <TableCell>{student.rank}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-evenly">
                  <Link className="bg-neutral-200 mx-1 text-black px-2 py-1" href={`/students/details/${student.rollno}`}>Details</Link>
                  <Link className="bg-neutral-200 mx-1 text-black px-2 py-1" href={`/students/edit/${student.rollno}`}>Edit</Link>
                  <button className="bg-neutral-200 mx-1 text-black px-2 py-1" >Delete</button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
 
  )
}
