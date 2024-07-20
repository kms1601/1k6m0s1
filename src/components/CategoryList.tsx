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
          <Link href={`/blog/${cat}`} key={i}><li className={`${decodeURI(cat) === category.category ? "font-bold" : ""} hover:text-description`}>{decodeURI(cat) === category.category ? "∙" : ""} {decodeURI(cat.charAt(0).toUpperCase() + cat.slice(1)).replaceAll("_", " ")} ({count[i]})</li></Link>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;