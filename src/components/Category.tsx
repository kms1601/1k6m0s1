import React from 'react';
import {getCategoryList, getPostCount, getPostList} from "@/lib/post";

const Category = () => {
  const categories: string[] = getCategoryList().sort();

  return (
    <div className="pl-10">
      <h2 className="pb-3">Category</h2>
      <hr className="w-1/2 pb-3" />
      <ul>
        {categories.map((category, i) => (
          <li key={i}>{category} ({getPostCount(category)})</li>
        ))}
      </ul>
    </div>
  );
};

export default Category;