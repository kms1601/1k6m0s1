import React from 'react';
import {getPostList, Post} from "@/lib/post";
import PostCard from "@/components/PostCard";

const PostList = ({category}: {category?: string}) => {
  const posts = getPostList(category);

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gridxs:grid-cols-2 grids:grid-cols-1 gridm:grid-cols-2 gridl:grid-cols-3 gridxl:grid-cols-4">
        {posts.map((post: Post, i) => (
          <PostCard post={post} key={i}/>
        ))}
      </div>
    </div>
  );
};

export default PostList;