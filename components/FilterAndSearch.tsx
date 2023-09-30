"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {PRELOAD} from "@/lib/types"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react"

const FilterAndSearch = ({students} : {students : PRELOAD[] | []}) => {
    const [stud,setStud] = useState<PRELOAD[] | []>(students)
    
  return (
    <div className="flex items-center space-x-2">
        <Input type="text" className="px-3 py-2 w-80" placeholder="Search..." />
        <Button className="px-3 py-2">Search</Button>
  </div>
  )
}

export default FilterAndSearch