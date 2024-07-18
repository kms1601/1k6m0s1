"use client"

import React from 'react';
import useCategory from "@/hooks/useCategory";
import Link from "next/link";

const CategoryList = ({categories, count}: {categories: string[], count: number[]}) => {
  const {category} = useCategory();

  return (
    <div className="pl-10">
      <h2 className="pb-3 text-xl font-bold">Category</h2>
      <hr className="w-32 pb-3 border-description border-t"/>
      <ul>
        {categories.map((cat, i) => (
          cat === category.category
            ? <Link href={`/blog/${cat}`} key={i}><li className="font-bold hover:text-description">∙ {cat.charAt(0).toUpperCase() + cat.slice(1)} ({count[i]})</li></Link>
            : <Link href={`/blog/${cat}`} key={i}><li className="hover:text-description">{cat.charAt(0).toUpperCase() + cat.slice(1)} ({count[i]})</li></Link>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;