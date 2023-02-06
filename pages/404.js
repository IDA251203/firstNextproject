import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

 const NotFound = () => {

 const router = useRouter();
 useEffect(()=>{
    setTimeout(()=>
    {
        router.push('/');
    },7000)
 }, [])


  return (
    <div>
        <h1>404 | Not found</h1>
        <Link href="/">Go back Home</Link>
    </div>
  )
}
export default NotFound;
