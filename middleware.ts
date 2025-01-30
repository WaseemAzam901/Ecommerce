// import { clerkMiddleware } from '@clerk/nextjs/server'

// export default clerkMiddleware()

// export const config = {
//   matcher: [
//     '/', // Protect the root route
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// }
















import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)', // Public sign-in route
  '/sign-up(.*)', // Public sign-up route
]);

export default clerkMiddleware(async (auth, request) => {
  // Only protect routes that are not public
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});


export const config = {
  matcher: [
    // This will now exclude the homepage ("/") from the middleware
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)|/).*)',
    '/(api|trpc)(.*)', // Always run middleware for API routes
  ],
};

// export const config = {
//   matcher: [
//     // Protect all routes except for static files and Next.js internals
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     '/(api|trpc)(.*)', // Always run middleware for API routes
//   ],
// };


