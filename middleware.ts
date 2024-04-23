import { NextResponse } from "next/server";


let requestCount = 0
export  function middleware(){

    requestCount++;
    console.log(requestCount);
    const res = NextResponse.next();
    return res
    
}