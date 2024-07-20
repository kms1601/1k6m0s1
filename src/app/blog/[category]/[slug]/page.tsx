import React from 'react';
import {getPost, getPostList} from "@/lib/post";
import PostBody from "@/components/PostBody";

type Props = {
  params: {
    category: string;
    slug: string;
  }
}

export const dynamicParams = false;

const PostDetail = ({params: {category, slug}}: Props) => {
  const post = getPost(category, slug);

  if (!post) {
    return null;
  }

  return (
    <PostBody post={post}/>
  );
};

export const generateStaticParams = () => {
  const postList = getPostList();
  return postList.map((post) => ({
    category: encodeURI(post.category), slug: encodeURI(post.slug),
  }));
};

export default PostDetail;