import { NextRequest, NextResponse } from "next/server";

export async function POST(request : NextRequest) {
    // console.log(request)
    const req = await request.json()
    const res = await fetch('https://mentor-student-umum.onrender.com/students/21B81A05E3',{
        method : 'GET',
    })
    console.log(res.json())

    return NextResponse.json("Hello")
}