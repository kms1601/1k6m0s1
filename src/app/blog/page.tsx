import PostList from "@/components/PostList";
import {getPostList} from "@/lib/post";


const BlogPage = () => {
  const posts = getPostList().sort((a, b) => +new Date(b.header.date) - +new Date(a.header.date));

  return (
    <div>
      <PostList posts={posts}></PostList>
    </div>
  )
}

export default BlogPage;