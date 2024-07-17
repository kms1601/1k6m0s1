import React from 'react';
import {getCategoryList, Post} from "@/lib/post";
import PostList from "@/components/PostList";

interface Props {
  params: {
    category: string;
  }
}

export const dynamicParams = false;

const Category = ({params: {category}}: Props) => {

  return (
    <div>
      <PostList category={category}></PostList>
    </div>
  );
};

export const generateStaticParams = () => {
  const categoryList = getCategoryList();
  return categoryList.map((category) => ({category}));
}

export default Category;