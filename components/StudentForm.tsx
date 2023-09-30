"use client";

{
  /* <FormField
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
            )} 
            /> */
}

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import * as z from "zod";
import {FormSchema,PRELOAD} from "@/lib/types"

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MainContainer from "./MainContainer";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "./ui/input";
// import { toast } from "@/components/ui/use-toast"
// import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
// import {  CalendarIcon } from "lucide-react"
// import { cn } from "@/lib/utils"
// import { Calendar } from "@/components/ui/calendar"
// import { format } from "date-fns"

export default function StudentForm({ isDisabled,preloadValues }: { isDisabled: boolean,preloadValues : PRELOAD}) {
 
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues : FormSchema.parse(preloadValues)
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // console.log(data);
    // FormSchema.parse(data)

    if(!isDisabled) {
      console.log("Inside")
      const res = await fetch(
        `https://mentor-student-umum.onrender.com/students/${data.rollno}`,
        {
          method: "PATCH",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
        
      );
      const response = await res.json();
      // console.log(response);
      return ;
    }

    const res = await fetch(
      `https://mentor-student-umum.onrender.com/students/`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await res.json();
    // console.log(response);
  }

  return (
    <MainContainer>
      <div className="w-[40rem] max-h-fit px-4 flex flex-col items-center my-[4rem] ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            {/* rollno  */}
            <FormField
              disabled = {isDisabled}
              control={form.control}
              name="rollno"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Roll number</FormLabel>
                  <FormControl>
                    <Input placeholder="Roll number" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your Rollnumber (eg : 21b81a05z9)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/*Names */}
            <FormField
              disabled = {isDisabled}
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student Name</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>This is the Student name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              disabled = {isDisabled}
              control={form.control}
              name="fathername"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Father name</FormLabel>
                  <FormControl>
                    <Input placeholder="Father name" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is Student's Father name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              disabled = {isDisabled}
              control={form.control}
              name="mothername"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mother name</FormLabel>
                  <FormControl>
                    <Input placeholder="Mother name" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is Student's Mother name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* aadhar,dob,gender,medium  */}
            <FormField
              disabled = {isDisabled}
              control={form.control}
              name="aadharno"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Aadhar number</FormLabel>
                  <FormControl>
                    <Input placeholder="Aadhar number" {...field} />
                  </FormControl>
                  <FormDescription>Aadhar card of student.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* dob  */}

            <FormField
              disabled = {isDisabled}
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of birth</FormLabel>
                  <FormControl>
                    <Input placeholder="Date of birth" {...field} />
                  </FormControl>
                  <FormDescription>
                    Date of birth(FORMAT - DD/MM/YYYY)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* gender  */}

            <FormField
              disabled = {isDisabled}
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
                          <RadioGroupItem value="MALE" />
                        </FormControl>
                        <FormLabel className="font-normal">Male</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="FEMALE" />
                        </FormControl>
                        <FormLabel className="font-normal">Female</FormLabel>
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
              disabled = {isDisabled}
              control={form.control}
              name="medium"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Medium</FormLabel>
                  <FormControl>
                    <Input placeholder="Medium" {...field} />
                  </FormControl>
                  <FormDescription>Medium of study.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              disabled = {isDisabled}
              control={form.control}
              name="intermarks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Inter marks</FormLabel>
                  <FormControl>
                    <Input placeholder="Inter marks" {...field} />
                  </FormControl>
                  <FormDescription>Inter marks of Student.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              disabled = {isDisabled}
              control={form.control}
              name="sscmarks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>SSC marks</FormLabel>
                  <FormControl>
                    <Input placeholder="SSC marks" {...field} />
                  </FormControl>
                  <FormDescription>SSC marks of Student.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled = {isDisabled}
              control={form.control}
              name="rank"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rank</FormLabel>
                  <FormControl>
                    <Input placeholder="Rank" {...field} />
                  </FormControl>
                  <FormDescription>Student's Eamcet Rank.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* numbers  */}
            <FormField
              disabled = {isDisabled}
              control={form.control}
              name="stdno"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student mobile no</FormLabel>
                  <FormControl>
                    <Input placeholder="Student mobile no" {...field} />
                  </FormControl>
                  <FormDescription>Student's Mobile number.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              disabled = {isDisabled}
              control={form.control}
              name="fatherno"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Father mobile no</FormLabel>
                  <FormControl>
                    <Input placeholder="Father mobile no" {...field} />
                  </FormControl>
                  <FormDescription>Father's Mobile number.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              disabled = {isDisabled}
              control={form.control}
              name="motherno"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mother mobile no</FormLabel>
                  <FormControl>
                    <Input placeholder="Mother mobile no" {...field} />
                  </FormControl>
                  <FormDescription>Mother's Mobile number.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* mails  */}

            <FormField
              disabled = {isDisabled}
              control={form.control}
              name="stdmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student's Mail</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Student mail" {...field} />
                  </FormControl>
                  <FormDescription>Student's Personal mail</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              disabled = {isDisabled}
              control={form.control}
              name="fathermail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Father's mail</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Father mail" {...field} />
                  </FormControl>
                  <FormDescription>Father's Personal mail</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              disabled = {isDisabled}
              control={form.control}
              name="mothermail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mother's email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Mother mail" {...field} />
                  </FormControl>
                  <FormDescription>Mother's Personal mail</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* admission and caste  */}

            <FormField
              disabled = {isDisabled}
              control={form.control}
              name="stdAdim"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Admission </FormLabel>
                  <Select
                  disabled = {isDisabled}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-black">
                        <SelectValue placeholder="Select Admission type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="text-white bg-black">
                      <SelectItem value="CONVENER">CONVENER</SelectItem>
                      <SelectItem value="CON">CON</SelectItem>
                      <SelectItem value="MANAGEMENT">MANAGEMENT</SelectItem>
                      <SelectItem value="MGT.">MGT.</SelectItem>
                      <SelectItem value="SPOT">SPOT</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Admission type ("CONVENER" or "MANAGEMENT" or "SPOT")
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
                  <Select
                  disabled = {isDisabled}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-black">
                        <SelectValue placeholder="Select your caste" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-black text-white">
                      <SelectItem value="OC">OC</SelectItem>
                      <SelectItem value="SC">SC</SelectItem>
                      <SelectItem value="ST">ST</SelectItem>
                      <SelectItem value="BC">BC</SelectItem>
                      <SelectItem value="BC_A">BC_A</SelectItem>
                      <SelectItem value="BC_B">BC_B</SelectItem>
                      <SelectItem value="BC_C">BC_C</SelectItem>
                      <SelectItem value="BC_D">BC_D</SelectItem>
                      <SelectItem value="BC_E">BC_E</SelectItem>
                      <SelectItem value="OTHER">OTHER</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>Student's Caste</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              disabled = {isDisabled}
              control={form.control}
              name="religion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Religion</FormLabel>
                  <FormControl>
                    <Input placeholder="Religion" {...field} />
                  </FormControl>
                  <FormDescription>Religion of student</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              disabled = {isDisabled}
              control={form.control}
              name="pressadd"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Present Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Present Address" {...field} />
                  </FormControl>
                  <FormDescription>Present address of student</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              disabled = {isDisabled}
              control={form.control}
              name="permadd"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Permanent Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Permanent Address" {...field} />
                  </FormControl>
                  <FormDescription>
                    Permanent address of student
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="bg-white text-black hover:bg-slate-200" disabled={isDisabled} type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </MainContainer>
  );
}
