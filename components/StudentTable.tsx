"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { PRELOAD } from "@/lib/types"
import Link from "next/link"
import { useEffect, useState } from "react"
import FilterAndSearch from "./FilterAndSearch"

export default function StudentTable({students} : any) {

  const [stud,setStud] = useState<PRELOAD[] | []>(students)

  return (
    <div className="h-[100vh] overflow-scroll">
      <FilterAndSearch students={stud} />
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] px-4 py-2">Rollno</TableHead>
            <TableHead className="px-4 py-2">Name</TableHead>
            <TableHead className="px-4 py-2">FatherName</TableHead>
            <TableHead className="px-4 py-2">MotherName</TableHead>
            <TableHead className="px-4 py-2">AadharNo</TableHead>
            <TableHead className="px-4 py-2">Dob</TableHead>
            <TableHead className="px-4 py-2">Gender</TableHead>
            <TableHead className="px-4 py-2">Medium</TableHead>
            <TableHead className="px-4 py-2">SSC Marks</TableHead>
            <TableHead className="px-4 py-2">Rank</TableHead>
            <TableHead className="text-right px-4 py-2">Control</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stud && stud.map((student : any) => (
            <TableRow key={student._id}>
              <TableCell className="font-medium p-4">{student.rollno}</TableCell>
              <TableCell className="p-4">{student.name}</TableCell>
              <TableCell className="p-4">{student.fathername}</TableCell>
              <TableCell className="p-4">{student.mothername}</TableCell>
              <TableCell className="p-4">{student.aadharno}</TableCell>
              <TableCell className="p-4">{student.dob}</TableCell>
              <TableCell className="p-4">{student.gender}</TableCell>
              <TableCell className="p-4">{student.medium}</TableCell>
              <TableCell className="p-4">{student.sscmarks}</TableCell>
              <TableCell className="p-4">{student.rank}</TableCell>
              <TableCell className="text-right p-4">
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
