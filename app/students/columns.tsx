"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {PRELOAD} from "@/lib/types"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowUpDown } from "lucide-react"
import Link from "next/link"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<PRELOAD>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button  className=" px-4 py-2 bg-green-600 hover:bg-green-700 text-white">
            ...
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>          
            <DropdownMenuSeparator />
            <DropdownMenuItem><Link href = "/students/details">Details</Link></DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
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
