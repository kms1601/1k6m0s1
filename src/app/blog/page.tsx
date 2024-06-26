import {getPostList} from "@/lib/post";

const PostsPage = () => {
  const postList = getPostList();

  return (
    <ul>
      {postList.map((post, i) => (
        <li key={i}>
          <p>{post.slug}</p>
          <p>{post.category}</p>
        </li>
      ))}
    </ul>
  )
}

export default PostsPage;