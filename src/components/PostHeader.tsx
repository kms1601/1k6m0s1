import React from 'react';
import {getHashTags, Post} from "@/lib/post";
import Hashtag from "@/components/Hashtag";

const PostHeader = ({post} : {post: Post}) => {
  const hashtags = getHashTags(post);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-text dark:text-text-dark" id={post.header.title.replace(" ", "-")}>{post.header.title}</h1>
      <p className="text-base text-text dark:text-text-dark">{post.header.description}</p>
      <Hashtag hashtags={hashtags}/>
      <p className="text-end text-sm italic text-description mt-0">{post.header.date}</p>
    </div>
  );
};

export default PostHeader;