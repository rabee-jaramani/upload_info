"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createUser } from "@/lib/actions/user.actions";
import { zodResolver } from "@hookform/resolvers/zod";
import error from "next/error";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().regex(/^05\d{8}$/), // UAE phone number format
  //   file: z
  //     .object({
  //       name: z.string(),
  //       size: z.number(),
  //       type: z.string().regex(/^image\/(png|jpeg|jpg|gif)$/), // Image types only
  //     })
  //     .optional()
  //     .refine((file) => {
  //       if (!file) return true; // No file selected
  //       return file.size <= 1024 * 1024; // Max size 1 MB
  //     }, "File size must be less than 1 MB"),
});

export default function UserForm() {
  const [userCreated, setUserCreated] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const user = await createUser(data);
      if (user) {
        setUserCreated(true);
      }
    } catch (error) {}
    console.log(error);
    // Here you can add code to submit the form data to your backend
  };

  return (
    <>
      {userCreated ? (
        <h3>User Created Successfuly</h3>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full p-10">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="Your phone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>File</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        placeholder="Choose file"
                        onChange={(e) => {
                          form.setValue("file", e.target.files[0]);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      )}
    </>
  );
}
