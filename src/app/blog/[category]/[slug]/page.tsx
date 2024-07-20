import React from 'react';
import {getPost, getPostList} from "@/lib/post";
import PostBody from "@/components/PostBody";
import process from "node:process";

type Props = {
  params: {
    category: string;
    slug: string;
  }
}

export const dynamicParams = false;

const PostDetail = ({params: {category, slug}}: Props) => {
  const post = getPost(decodeURI(category), decodeURI(slug));

  if (!post) {
    return null;
  }

  return (
    <PostBody post={post}/>
  );
};

export const generateStaticParams = () => {
  const postList = getPostList();
  return postList.map((post) => {
    if (process.env.NODE_ENV !== "production") {
      return {category: encodeURI(post.category), slug: encodeURI(post.slug)};
    }
    return {category: post.category, slug: post.slug}
});
};

export default PostDetail;