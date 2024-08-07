import React from 'react';
import {getCategoryList, getPostList, Post} from "@/lib/post";
import PostList from "@/components/PostList";
import * as process from "node:process";

interface Props {
  params: {
    category: string;
  }
}

export const dynamicParams = false;

const CategoryPost = ({params: {category}}: Props) => {
  const posts = getPostList(decodeURI(category)).sort((a, b) => +new Date(b.header.date) - +new Date(a.header.date));

  return (
    <div>
      <PostList category={category} posts={posts}></PostList>
    </div>
  );
};

export const generateStaticParams = () => {
  const categoryList = getCategoryList();

  return categoryList.map((category) => {
    if (process.env.NODE_ENV !== "production") {
      return {category: encodeURI(category)};
    }
    return {category};
  });
}

export default CategoryPost;