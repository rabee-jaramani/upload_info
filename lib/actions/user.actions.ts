"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";

interface CreateUserParams {
  //   clerkId: string;
  //   name: string;
  name: string;
  email: string;
  phone: string;
  file: string;
}
export async function createUser(userData: CreateUserParams) {
  try {
    // 1- connect
    connectToDatabase();
    // 2- create a model and use model.method to store it in DB
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function gettAllUsers() {
  try {
    // 1- connect
    connectToDatabase();
    // 2- create a model and use model.method to store it in DB
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

interface GetUserByIdParams {
  userId: string;
}
export async function getUserById(params: GetUserByIdParams) {
  try {
    // 1- connect
    connectToDatabase();
    // 2- create a model and use model.method to store it in DB
    const user = await User.findById(params.userId);
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
