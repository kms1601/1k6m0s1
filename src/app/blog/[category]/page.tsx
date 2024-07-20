import React from 'react';
import {getCategoryList, getPostList} from "@/lib/post";
import PostList from "@/components/PostList";

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
    return {category}
  });
}

export default CategoryPost;