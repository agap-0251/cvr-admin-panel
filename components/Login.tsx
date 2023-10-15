"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import { Input } from "@/components/ui/input"
import {LoginSchema,LOGINTYPES} from "@/lib/types"
import { useRouter } from "next/navigation"


export default function LoginForm() {
  const nav = useRouter()
  const form = useForm<LOGINTYPES>({
    resolver: zodResolver(LoginSchema),
  })

  async function onSubmit(data: LOGINTYPES) {
    
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DATA_URL}/admin/login`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
      
    );
    const response = await res.json();
    // console.log(response)
    if(res.status === 200){
      localStorage.setItem("auth",JSON.stringify(response))
      nav.push('/students')
      
    }
    // console.log(response);
    form.reset()
    return ;
    
  }

  return (
    <div className="w-[45%] p-4 flex flex-col items-center justify-center">
      <h1 className="text-3xl my-10">Admin Login</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormDescription>
                  This is your Username.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormDescription>
                  This is your Password (min 6 characters).
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled = {form.formState.isSubmitting} className="bg-white hover:bg-slate-300 text-black" type="submit">{form.formState.isSubmitting ? "Logging": "Submit"}</Button>
        </form>
      </Form>
    </div>
  )
}
