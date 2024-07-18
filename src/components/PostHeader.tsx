import React from 'react';
import {Post} from "@/lib/post";

const PostHeader = ({post} : {post: Post}) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-text dark:text-text-dark" id={post.header.title.replace(" ", "-")}>{post.header.title}</h1>
      <p className="text-base text-text dark:text-text-dark">{post.header.description}</p>
      <p className="text-end text-sm italic text-description">{post.header.date}</p>
    </div>
  );
};

export default PostHeader;