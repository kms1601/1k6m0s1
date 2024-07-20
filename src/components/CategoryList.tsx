"use client"

import React, {useEffect} from 'react';
import useCategory from "@/hooks/useCategory";
import Link from "next/link";

const CategoryList = ({categories, count}: { categories: string[], count: number[] }) => {
  const {category} = useCategory();

  return (
    <div className="pl-10">
      <h2 className="pb-3 text-xl font-bold">Category</h2>
      <hr className="w-32 border-t pb-3 border-description"/>
      <ul>
        {categories.map((cat, i) => (
          <Link
            href={`/blog/${cat}`} key={i}>
            <li
              className={`${cat === category.category ? "font-bold" : ""} hover:text-description mb-2`}>
              {cat === category.category ? "∙" : ""}
              &nbsp;{cat.charAt(0).toUpperCase() + cat.slice(1).replaceAll("_", " ")}
              &nbsp;({count[i]})
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;