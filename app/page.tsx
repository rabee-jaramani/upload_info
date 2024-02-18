"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { createUser } from "@/lib/actions/user.actions";
import Link from "next/link";
import UserForm from "@/shared/components/userForm";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 w-full items-center">
      <div className="w-72 flex flex-col gap-3 p-3">
        <div>
          <UserForm />
        </div>
      </div>
      {/* <div className={`flex flex-col gap-4 ${!user ? "hidden" : ""}`}>
        <h1 className="w-fit">Hello Rabee in our Home Page</h1>
        <h2 className="w-fit">Your ID is: {user._id}</h2>
        <h2 className="w-fit">Your Email is: {user.email}</h2>
        <h3 className="w-fit">Your Phone is: {user.phone}</h3>
      </div> */}
      <Link href="/users">Show all users</Link>
    </div>
  );
}
