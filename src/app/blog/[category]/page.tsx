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
  const posts = getPostList(category);

  console.log(posts);

  return (
    <div>
      <PostList category={category} posts={posts}></PostList>
    </div>
  );
};

export const generateStaticParams = () => {
  const categoryList = getCategoryList();
  return categoryList.map((category) => ({category}));
}

export default CategoryPost;