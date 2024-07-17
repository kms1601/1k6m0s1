import React from 'react';
import Category from "@/components/Category";

const BlogLayout = ({children}: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <>
      {/*Desktop*/}
      <div className="hidden md:block">
        <div className="grid grid-cols-5">
          <div>
            <Category />
          </div>
          <div className="col-span-3">
            {children}
          </div>
          <div>Table of Contents</div>
        </div>
      </div>

      {/*Mobile*/}
      <div className="block md:hidden">
        <div>
          {children}
        </div>
      </div>
    </>
  );
};

export default BlogLayout;