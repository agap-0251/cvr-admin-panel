"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { FieldValues, useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { Input } from "./ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import {  CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import MainContainer from "./MainContainer"

const FormSchema = z.object({
  name : z.string(),
  rollno : z.string(),
  rank: z.coerce.number().nonnegative(),
  fathername: z.string(),
  mothername: z.string(),
  aadharno: z.string(),
  dob: z.string(),
  gender: z.enum(["male", "female", "other"]),
  medium: z.enum(["English", "Hindi", "Telugu", "Other"]),
  intermarks: z.coerce.number().gte(0),
  sscmarks: z.coerce.number().gte(0),
  fatherno: z.coerce.number().max(9999999999).min(1000000000),
  motherno: z.coerce.number().max(9999999999).min(1000000000),
  stdno: z.coerce.number().max(9999999999).min(1000000000),
  caste: z.enum(["OC", "SC", "ST", "BC", "BCA", "OTHER"]),
  religion: z.string(),
  stdAdim: z.enum(["Conveyer", "Management"]),
  pressadd: z.string().nonempty(),
  permadd: z.string().nonempty(),
  stdmail: z.string().email(),
  fathermail: z.string().email(),
  mothermail: z.string().email(),
})


export default function TempForm({isDisabled} : {isDisabled : boolean}) {

  

  const form = useForm<z.infer<typeof FormSchema>>(
    {
    resolver: zodResolver(FormSchema)
  }
  )

  async function onSubmit(data:  z.infer<typeof FormSchema>) {
    console.log(data)
    // FormSchema.parse(data)
    const res = await fetch(`https://mentor-student-umum.onrender.com/students/`,{
        method : 'POST',
        body : JSON.stringify(data),
        headers : {
            'Content-Type' : 'application/json'
        }
    })
    // const response = await res.json()
    console.log( res)
    
}

  return (
    <MainContainer>
        <div className="w-[40rem] max-h-fit px-4 flex flex-col items-center my-[4rem] ">

        <Form  {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        
        {/* rollno  */}
        <FormField
            control={form.control}
            name="rollno"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Roll number</FormLabel>
                <FormControl>
                    <Input placeholder="Roll number"  {...field}/>
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
        
        {/*Names */}
        <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                    <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />

    <FormField
            control={form.control}
            name="fathername"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Father name</FormLabel>
                <FormControl>
                    <Input placeholder="Father name" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
        
        <FormField
            control={form.control}
            name="mothername"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Mother name</FormLabel>
                <FormControl>
                    <Input placeholder="Mother name" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />

                {/* aadhar,dob,gender,medium  */}
    <FormField
            control={form.control}
            name="aadharno"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Aadhar number</FormLabel>
                <FormControl>
                    <Input placeholder="Aadhar number" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />

    {/* dob  */}

    <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Date of birth</FormLabel>
                <FormControl>
                    <Input placeholder="Date of birth" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />

    {/* <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
                <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                    <PopoverTrigger asChild>
                    <FormControl>
                        <Button
                        variant={"outline"}
                        className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                        )}
                        >
                        {field.value ? (
                            format(field.value, "PPP")
                        ) : (
                            <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                    </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                    />
                    </PopoverContent>
                </Popover>
                <FormDescription>
                    Your date of birth is used to calculate your age.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )} */}
            {/* /> */}

            {/* gender  */}

            <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
                <FormItem className="space-y-3">
                <FormLabel>Gender</FormLabel>
                <FormControl>
                    <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                    >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                        <RadioGroupItem value="male" />
                        </FormControl>
                        <FormLabel className="font-normal">
                        Male
                        </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                        <RadioGroupItem value="female" />
                        </FormControl>
                        <FormLabel className="font-normal">
                        Female
                        </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                        <RadioGroupItem value="other" />
                        </FormControl>
                        <FormLabel className="font-normal">Other</FormLabel>
                    </FormItem>
                    </RadioGroup>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

            {/* medium  */}

    <FormField
            control={form.control}
            name="medium"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Medium</FormLabel>
                <FormControl>
                    <Input placeholder="Medium" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />

    <FormField
            control={form.control}
            name="intermarks"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Inter marks</FormLabel>
                <FormControl>
                    <Input placeholder="Inter marks" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />

<FormField
            control={form.control}
            name="sscmarks"
            render={({ field }) => (
                <FormItem>
                <FormLabel>SSC marks</FormLabel>
                <FormControl>
                    <Input placeholder="SSC marks" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
    <FormField
            control={form.control}
            name="rank"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Rank</FormLabel>
                <FormControl>
                    <Input placeholder="Rank" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />

        {/* numbers  */}
        <FormField
            control={form.control}
            name="stdno"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Student mobile no</FormLabel>
                <FormControl>
                    <Input placeholder="Student mobile no" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
        
        <FormField
            control={form.control}
            name="fatherno"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Father mobile no</FormLabel>
                <FormControl>
                    <Input placeholder="Father mobile no" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
        
        <FormField
            control={form.control}
            name="motherno"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Mother mobile no</FormLabel>
                <FormControl>
                    <Input placeholder="Mother mobile no" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
        

        {/* mails  */}

        <FormField
            control={form.control}
            name="stdmail"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                    <Input type="email" placeholder="Student mail" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />

    <FormField
            control={form.control}
            name="fathermail"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                    <Input type="email" placeholder="Father mail" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />

        <FormField
            control={form.control}
            name="mothermail"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                    <Input type="email" placeholder="Mother mail" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            
            {/* admission and caste  */}
            
            <FormField
            control={form.control}
            name="stdAdim"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Admission </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger className="bg-black">
                        <SelectValue placeholder="Select Admission type" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent className="text-white bg-black">
                    <SelectItem value="Conveyer">Conveyer</SelectItem>
                    <SelectItem value="Management">Management</SelectItem>
                    </SelectContent>
                </Select>
                <FormDescription>
                    You can manage email addresses in your{" "}
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />

    <FormField
            control={form.control}
            name="caste"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Caste </FormLabel>
                <Select  onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl >
                    <SelectTrigger className="bg-black">
                        <SelectValue  placeholder="Select your caste" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-black text-white">
                    <SelectItem value="OC">OC</SelectItem>
                    <SelectItem value="SC">SC</SelectItem>
                    <SelectItem value="ST">ST</SelectItem>
                    <SelectItem value="BC">BC</SelectItem>
                    <SelectItem value="BCA">BCA</SelectItem>
                    <SelectItem value="OTHER">OTHER</SelectItem>
                    </SelectContent>
                </Select>
                <FormDescription>
                    You can manage email addresses in your{" "}
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />

    <FormField
            control={form.control}
            name="religion"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Religion</FormLabel>
                <FormControl>
                    <Input  placeholder="Religion" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />

    <FormField
            control={form.control}
            name="pressadd"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Present Address</FormLabel>
                <FormControl>
                    <Input placeholder="Present Address" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
    
    <FormField
            control={form.control}
            name="permadd"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Permanent Address</FormLabel>
                <FormControl>
                    <Input placeholder="Permanent Address" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />


            <Button disabled = {isDisabled} type="submit">Submit</Button>
        </form>
        </Form>
        </div>
    </MainContainer>
  )
}
