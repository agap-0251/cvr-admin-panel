"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {  useForm } from "react-hook-form";
import * as z from "zod";
import {MentorSchema,MENTORTYPE} from "@/lib/types"

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

import MainContainer from "./MainContainer";
import { Input } from "./ui/input";


export default function MentorForm({ isDisabled,preloadValues }: { isDisabled: boolean,preloadValues : MENTORTYPE}) {
 
  const form = useForm<z.infer<typeof MentorSchema>>({
    resolver: zodResolver(MentorSchema),
    defaultValues : MentorSchema.parse(preloadValues)
  });

  async function onSubmit(data: z.infer<typeof MentorSchema>) {
    // console.log(data);
    // MentorSchema.parse(data)

    if(!isDisabled) {
      console.log("Inside")
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_DATA_URL}/mentors/${data.mailid}`,
        {
          method: "PATCH",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
        
      );
      const response = await res.json();
      if(res.ok) {
        form.reset()
      }
      // console.log(response);
      return ;
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DATA_URL}/mentors/`,
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
            {/* name  */}
            <FormField
              disabled = {isDisabled}
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is mentor name
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/*Names */}
            <FormField
              disabled = {isDisabled}
              control={form.control}
              name="desg"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Designation</FormLabel>
                  <FormControl>
                    <Input placeholder="Designation" {...field} />
                  </FormControl>
                  <FormDescription>This is the Designation.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              disabled = {isDisabled}
              control={form.control}
              name="phono"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone no</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone no" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is Mentor's Phone no.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              disabled = {isDisabled}
              control={form.control}
              name="mailid"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is Mentor's Email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* aadhar,dob,gender,medium  */}
            <FormField
              disabled = {isDisabled}
              control={form.control}
              name="sec"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Section</FormLabel>
                  <FormControl>
                    <Input placeholder="Section" {...field} />
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
              name="stdcnt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student count</FormLabel>
                  <FormControl>
                    <Input placeholder="Student count" {...field} />
                  </FormControl>
                  <FormDescription>
                    Student count of mentor
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
