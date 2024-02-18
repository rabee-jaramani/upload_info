import { gettAllUsers } from "@/lib/actions/user.actions";
import Link from "next/link";
import React from "react";

const page = async () => {
  const users = await gettAllUsers();
  console.log(users);
  return (
    <div>
      <h1>This is the list of all users</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <Link href={`users/${user._id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
