import '../styles/globals.css'
// import { SessionProvider } from "next-auth/react"
import { GoogleOAuthProvider } from '@react-oauth/google';


export default function myApp({
  Component,
  // pageProps: { session, ...pageProps },
  pageProps: {...pageProps },
}) {
  return (
    // <SessionProvider session={session}>
    <GoogleOAuthProvider clientId="596749184708-9paaqi0f7cqqqrd1tv1iht4kk6hb280b.apps.googleusercontent.com">
        <Component {...pageProps} />
    </GoogleOAuthProvider>
 
    // </SessionProvider>
  )
}