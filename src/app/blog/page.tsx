import PostList from "@/components/PostList";
import {getPostList} from "@/lib/post";


const BlogPage = () => {
  const posts = getPostList();

  return (
    <div>
      <PostList posts={posts}></PostList>
    </div>
  )
}

export default BlogPage;