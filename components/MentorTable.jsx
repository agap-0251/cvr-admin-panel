import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  export default function MentorTable({mentors}) {
    return (
      <div className="h-[100vh] overflow-scroll">

        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Designation</TableHead>
              <TableHead>Phone number</TableHead>
              <TableHead>Mail id</TableHead>
              <TableHead>Section</TableHead>
              <TableHead className="text-right">Student Count</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mentors.map((mentor) => (
              <TableRow key={mentor._id}>
                <TableCell className="font-medium">{mentor.name}</TableCell>
                <TableCell>{mentor.desg}</TableCell>
                <TableCell>{mentor.phono}</TableCell>
                <TableCell>{mentor.mailid}</TableCell>
                <TableCell>{mentor.sec}</TableCell>
                <TableCell className="text-right">{mentor.stdcnt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
  