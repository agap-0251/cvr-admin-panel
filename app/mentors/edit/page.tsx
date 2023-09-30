import { PRELOAD } from "@/lib/types"
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<PRELOAD[]> {
  // Fetch data from your API here.
  return [
    {
    rollno: "21B81A05K79",
    name: "KUMBHAM RITHVIKA ",
    fathername: "KUMBHAM HARIVARDHAN ",
    mothername: "KUMBHAM NARMADA",
    aadharno: "9299 1332 0056",
    dob: "22-03-2004",
    gender: "FEMALE",
    medium: "ENGLISH",
    sscmarks: 10,
    intermarks: 98.4,
    fatherno: 9490115251,
    motherno: 9491385251,
    stdno: 8500695251,
    stdmail : "rithvika@gmail.com",
    caste: "OC",
    religion: "HINDU",
    stdAdim: "MANAGEMENT",
    pressadd: "ROAD NO-5, SRINIVASA COLONY, HASTHINAPURAM, HYD-500070",
    permadd: "ROAD NO-5, SRINIVASA COLONY, HASTHINAPURAM, HYD-500070",
  },
  {
    rollno: "21B81A05K79",
    name: "KUMBHAM RITHVIKA ",
    fathername: "KUMBHAM HARIVARDHAN ",
    mothername: "KUMBHAM NARMADA",
    aadharno: "9299 1332 0056",
    dob: "22-03-2004",
    gender: "FEMALE",
    medium: "ENGLISH",
    sscmarks: 10,
    intermarks: 98.4,
    fatherno: 9490115251,
    motherno: 9491385251,
    stdno: 8500695251,
    stdmail : "rithvika@gmail.com",
    caste: "OC",
    religion: "HINDU",
    stdAdim: "MANAGEMENT",
    pressadd: "ROAD NO-5, SRINIVASA COLONY, HASTHINAPURAM, HYD-500070",
    permadd: "ROAD NO-5, SRINIVASA COLONY, HASTHINAPURAM, HYD-500070",
  },
  {
    rollno: "21B81A05K79",
    name: "KUMBHAM RITHVIKA ",
    fathername: "KUMBHAM HARIVARDHAN ",
    mothername: "KUMBHAM NARMADA",
    aadharno: "9299 1332 0056",
    dob: "22-03-2004",
    gender: "FEMALE",
    medium: "ENGLISH",
    sscmarks: 10,
    intermarks: 98.4,
    fatherno: 9490115251,
    motherno: 9491385251,
    stdno: 8500695251,
    stdmail : "rithvika@gmail.com",
    caste: "OC",
    religion: "HINDU",
    stdAdim: "MANAGEMENT",
    pressadd: "ROAD NO-5, SRINIVASA COLONY, HASTHINAPURAM, HYD-500070",
    permadd: "ROAD NO-5, SRINIVASA COLONY, HASTHINAPURAM, HYD-500070",
  },
  {
    rollno: "21B81A05K79",
    name: "KUMBHAM RITHVIKA ",
    fathername: "KUMBHAM HARIVARDHAN ",
    mothername: "KUMBHAM NARMADA",
    aadharno: "9299 1332 0056",
    dob: "22-03-2004",
    gender: "FEMALE",
    medium: "ENGLISH",
    sscmarks: 10,
    intermarks: 98.4,
    fatherno: 9490115251,
    motherno: 9491385251,
    stdno: 8500695251,
    stdmail : "rithvika@gmail.com",
    caste: "OC",
    religion: "HINDU",
    stdAdim: "MANAGEMENT",
    pressadd: "ROAD NO-5, SRINIVASA COLONY, HASTHINAPURAM, HYD-500070",
    permadd: "ROAD NO-5, SRINIVASA COLONY, HASTHINAPURAM, HYD-500070",
  },
  {
    rollno: "21B81A05K79",
    name: "KUMBHAM RITHVIKA ",
    fathername: "KUMBHAM HARIVARDHAN ",
    mothername: "KUMBHAM NARMADA",
    aadharno: "9299 1332 0056",
    dob: "22-03-2004",
    gender: "FEMALE",
    medium: "ENGLISH",
    sscmarks: 10,
    intermarks: 98.4,
    fatherno: 9490115251,
    motherno: 9491385251,
    stdno: 8500695251,
    stdmail : "rithvika@gmail.com",
    caste: "OC",
    religion: "HINDU",
    stdAdim: "MANAGEMENT",
    pressadd: "ROAD NO-5, SRINIVASA COLONY, HASTHINAPURAM, HYD-500070",
    permadd: "ROAD NO-5, SRINIVASA COLONY, HASTHINAPURAM, HYD-500070",
  },
    
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
