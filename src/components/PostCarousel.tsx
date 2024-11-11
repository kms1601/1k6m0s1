"use client"

import React from 'react';
import {Post} from "@/lib/post";
import PostCard from "@/components/PostCard";

const PostCarousel = (props: { posts: Post[] }) => {
  return (
    <div className="pb-10 flex justify-between overflow-x-scroll scrollbar scrollbar-thumb-popover scrollbar-track-gray-300 dark:scrollbar-thumb-popover-dark dark:scrollbar-track-gray-500">
      {
        props.posts.map((post: Post, i) => {
          return (
            <PostCard key={i} post={post}></PostCard>
          );
        })
      }
    </div>
  );
};

export default PostCarousel;