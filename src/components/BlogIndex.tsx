import React from 'react';
import {getPostList, Post} from "@/lib/post";
import PostCarousel from "@/components/PostCarousel";

const BlogIndex = () => {
  const posts: Post[] = getPostList().sort((a, b) => +new Date(b.header.date) - +new Date(a.header.date)).slice(0, 10);

  return (
    <>
      {/*Desktop*/}
      <div className="hidden md:block">
        <h1 className="text-center text-4xl font-bold">Blog</h1>
        <hr className="mt-4 mb-4 border-2 border-popover dark:border-popover-dark"/>
        <p className="mb-5 text-center">최근 작성한 글</p>
        <PostCarousel posts={posts} />
      </div>

      {/*Mobile*/}
      <div className="block md:hidden">
        <h1 className="mt-5 text-center text-4xl font-bold">Blog</h1>
        <hr className="mx-auto mt-4 mb-4 w-10/12 border-2 border-popover dark:border-popover-dark"/>
        <p className="mb-5 text-center">최근 작성한 글</p>
        <div className="mx-auto w-9/12">
          <PostCarousel posts={posts} />
        </div>
      </div>
    </>
  );
};

export default BlogIndex;