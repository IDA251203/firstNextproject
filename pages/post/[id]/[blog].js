import Home from '../../index';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Blog = () => {
    const router= useRouter()
    const {id,blog}=router.query
  return (
    <div>
       <Home/>
       <h1>Post : {id}</h1>
       <h2>Blog: {blog}</h2>
       <Image src={`/images/image${blog}.avif`} alt="nature" width={400} height={200}/>
    </div>
  )
}

export default Blog;