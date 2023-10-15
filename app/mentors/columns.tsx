"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {MENTORTYPE} from "@/lib/types"
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
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

const handleDelete = async (id : MENTORTYPE["mailid"]) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DATA_URL}/mentors/${id}`,{
    method : 'DELETE'
  })
  const response = await res.json()
  // console.log(response)
}

export const columns: ColumnDef<MENTORTYPE>[] = [
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
            <DropdownMenuItem ><Link className="bg-black my-1 text-white hover:bg-gray-700 px-3 py-2 rounded-lg" href = {`/mentors/details/${payment.mailid}`}>Details</Link></DropdownMenuItem>
            <DropdownMenuItem ><Link className="bg-black my-1 text-white hover:bg-gray-700 px-3 py-2 rounded-lg" href = {`/mentors/edit/${payment.mailid}`}>Edit</Link></DropdownMenuItem>
            <DropdownMenuItem ><Button type="button" className="bg-red-600 hover:bg-red-500" onClick={()=> handleDelete(payment.mailid)}>Delete</Button></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "mailid",
    header: "Email",
  },
  {
    accessorKey: "desg",
    header: "Designation",
  },
  {
    accessorKey: "phono",
    header: "Phone no",
  },
  {
    accessorKey: "sec",
    header: "Sec",
  },
  {
    accessorKey: "stdcnt",
    header: "Student count",
  },

]
