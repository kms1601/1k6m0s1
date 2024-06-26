import React from 'react';
import {getCategoryList, Post} from "@/lib/post";

interface Props {
  params: {
    category: string;
  }
}

export const dynamicParams = false;

const Category = ({params: {category}}: Props) => {

  return (
    <div>
      <p>{category}</p>
    </div>
  );
};

export const generateStaticParams = () => {
  const categoryList = getCategoryList();
  return categoryList.map((category) => ({category}));
}

export default Category;