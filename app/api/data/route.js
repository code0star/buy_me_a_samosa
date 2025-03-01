import { connectDB } from "@/lib/mongodb";
import user from "@/models/user";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB(); // Ensure MongoDB is connected
    const data = await user.find({}); // Fetch all documents
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
