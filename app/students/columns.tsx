"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {STUDENTTYPE} from "@/lib/types"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

const handleDelete = async (id : STUDENTTYPE["rollno"]) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DATA_URL}/students/${id}`,{
    method : 'DELETE'
  })
  const response = await res.json()
  // console.log(response)
}

export const columns: ColumnDef<STUDENTTYPE>[] = [
  {
    id: "actions",
    header : "Actions",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className=" px-4 py-2 bg-green-600 hover:bg-green-700 text-white">
            ...
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent  align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>          
            <DropdownMenuSeparator />
            <DropdownMenuItem ><Link className="bg-black my-1 text-white hover:bg-gray-700 px-3 py-2 rounded-lg" href = {`/students/details/${payment.rollno}`}>Details</Link></DropdownMenuItem>
            <DropdownMenuItem ><Link className="bg-black my-1 text-white hover:bg-gray-700 px-3 py-2 rounded-lg" href = {`/students/edit/${payment.rollno}`}>Edit</Link></DropdownMenuItem>
            <DropdownMenuItem ><Button type="button" className="bg-red-600 hover:bg-red-500" onClick={()=> handleDelete(payment.rollno)}>Delete</Button></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  {
    accessorKey: "rollno",
    header: "Rollno",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "fathername",
    header: "Fathername",
  },
  {
    accessorKey: "mothername",
    header: "Mothername",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "dob",
    header: "DOb",
  },
  {
    accessorKey: "medium",
    header: "Medium",
    
  },
  {
    accessorKey: "sscmarks",
    header: "SSCmarks",
  },
  {
    accessorKey: "rank",
    header: "Rank",
  },
 
]
