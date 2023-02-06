import Link from "next/link";
import { useRouter } from "next/router";
import Home from "../../index"
import Image from "next/image";
import styles from '../../../styles/Home.module.css'

 const Post = () => {
    const router=useRouter()
    const {id} = router.query

  return (
    <div >
      <Home/>
      <h1>Post: {id}</h1>
      <ul className={styles.imageContainer}>
        <li>
           <Link href="/post/[id]/[blog]" as={`/post/${id}/1`}>
              <Image src={"/images/image1.avif"} alt="nature" width={400} height={200} className={styles.image}/>
           </Link>
        </li>
        <li>
           <Link href="/post/[id]/[blog]" as={`/post/${id}/2`}>
              <Image src={"/images/image2.avif"} alt="nature" width={400} height={200} className={styles.image}/>
           </Link>
        </li>
        <li>
           <Link href="/post/[id]/[blog]" as={`/post/${id}/3`}>
              <Image src={"/images/image3.avif"} alt="nature" width={400} height={200} className={styles.image}/>
           </Link>
        </li>
        <li>
           <Link href="/post/[id]/[blog]" as={`/post/${id}/4`}>
              <Image src={"/images/image4.avif"} alt="nature" width={400} height={200} className={styles.image}/>
           </Link>
        </li>
      </ul>
    </div>
  )
}
export default Post;