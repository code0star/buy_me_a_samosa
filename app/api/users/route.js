import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/user"; // Ensure this is correctly defined

export async function POST(req) {
  try {
    console.log("reached");
    await connectDB(); // Connect to MongoDB
    const body = await req.json(); // Get JSON data from request body
    console.log("Received Body:", body);
    const newUser = new User(body);
    console.log("Before Saving:", newUser);
    await newUser.save();
    console.log("After Saving:", await User.find({ name: body.name }));

    return NextResponse.json({ message: "User created successfully!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating user", error: error.message }, { status: 500 });
  }
}
