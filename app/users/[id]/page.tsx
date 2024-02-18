import { getUserById } from "@/lib/actions/user.actions";
import React from "react";

interface URLProps {
  params: { id: string };
}
const page = async ({ params }: URLProps) => {
  const user = await getUserById({
    userId: params.id,
  });
  return <div>{user.email}</div>;
};

export default page;
