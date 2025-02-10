import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
    "/dashboard(.*)",
    "/ai-cover-letter(.*)",
    "/interview-prep(.*)",
    "/onboarding(.*)",
]);

export default clerkMiddleware(async(auth, req) => {
   const {userId}=await auth();
    if (!userId && isProtectedRoute(req)) {
        const {redirectToSignIn}=await auth();
        return redirectToSignIn({returnBackUrl:req.url});
    }
    return NextResponse.next();
});

export const config = {
    matcher: [
        "/((?!.*\\..*|_next).*)",
        "/api/(.*)",
    ],
};