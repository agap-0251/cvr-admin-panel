import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  export default function MentorTable({mentors} : any) {
    return (
      <div className="h-[100vh] overflow-scroll">

        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] px-4 py-2">Name</TableHead>
              <TableHead className="px-4 py-2">Designation</TableHead>
              <TableHead className="px-4 py-2">Phone number</TableHead>
              <TableHead className="px-4 py-2">Mail id</TableHead>
              <TableHead className="px-4 py-2">Section</TableHead>
              <TableHead className="text-right px-4 py-2">Student Count</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mentors.map((mentor : any) => (
              <TableRow key={mentor._id}>
                <TableCell className=" p-4 font-medium">{mentor.name}</TableCell>
                <TableCell className=" p-4 ">{mentor.desg}</TableCell>
                <TableCell className=" p-4 ">{mentor.phono}</TableCell>
                <TableCell className=" p-4 ">{mentor.mailid}</TableCell>
                <TableCell className=" p-4 ">{mentor.sec}</TableCell>
                <TableCell className=" p-4 text-right">{mentor.stdcnt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
  