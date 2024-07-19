import React from 'react';
import CategoryList from "@/components/CategoryList";
import {getCategoryList, getPostCount} from "@/lib/post";
import CategoryListMobile from "@/components/CategoryListMobile";
import Toc from "@/components/Toc";
import MenuBanner from "@/components/MenuBanner";

const BlogLayout = ({children}: Readonly<{ children: React.ReactNode; }>) => {
  const categories = getCategoryList().sort();
  categories.unshift("All");

  const count = categories.map((i) => getPostCount(i));

  return (
    <>
      {/*Desktop*/}
      <div className="hidden md:block">
        <div className="grid grid-cols-5">
          <div>
            <CategoryList categories={categories} count={count}/>
          </div>
          <div className="col-span-3" id="blog-body">
            <MenuBanner title="Blog"/>
            {children}
          </div>
          <div className="relative flex justify-center mt-20">
            <Toc className="fixed border-l-2 p-3"/>
          </div>
        </div>
      </div>

      {/*Mobile*/}
      <div className="block md:hidden">
        <MenuBanner title="Blog"/>
        <CategoryListMobile categories={categories} count={count}/>
        <div>
          {children}
        </div>
      </div>
    </>
  );
};

export default BlogLayout;