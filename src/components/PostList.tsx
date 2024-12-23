"use client"

import React, {useEffect} from 'react';
import {Post} from "@/lib/post";
import PostCard from "@/components/PostCard";
import useCategory from "@/hooks/useCategory";

const PostList = ({category, posts}: {category?: string, posts: Post[]}) => {
  category = decodeURI(category || "All");

  const {setCategory} = useCategory();
  useEffect(() => {
    setCategory({category: category});
  }, [category, setCategory]);

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 grids:grid-cols-1 gridxs:grid-cols-2 gridm:grid-cols-2 gridl:grid-cols-3 gridxl:grid-cols-4">
        {posts.map((post: Post, i) => (
          <PostCard post={post} key={i}/>
        ))}
      </div>
    </div>
  );
};

export default PostList;