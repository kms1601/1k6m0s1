import React from 'react';
import {getHashTags, Post} from "@/lib/post";
import Hashtag from "@/components/Hashtag";
import Image from "next/image";

const PostHeader = ({post}: { post: Post }) => {
  const hashtags = getHashTags(post);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-text dark:text-text-dark"
          id={post.header.title.replace(" ", "-")}>{post.header.title}</h1>
      <p className="text-base text-text dark:text-text-dark">{post.header.description}</p>
      <Hashtag hashtags={hashtags}/>
      <p className="mt-0 ml-10 text-left text-sm italic text-description">{post.header.date}</p>
      <div className="flex justify-center">
        <Image
          src={post.header.thumbnail}
          alt="thumbnail"
          width={600}
          height={400}
          className="mt-3 rounded-lg"
          priority={true}
        />
      </div>
    </div>
  );
};

export default PostHeader;