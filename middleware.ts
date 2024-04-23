import { NextRequest, NextResponse } from "next/server";


let requestCount = 0
export  function middleware(req : NextRequest){

    if(req.nextUrl.pathname.startsWith('/admin') ){
        return NextResponse.redirect(new URL('/signup',req.url))
    }
    if(req.nextUrl.pathname.startsWith('/')){
       return NextResponse.next()
    }
}