import React from 'react';
import {getHashTags, getPostList} from "@/lib/post";
import Image from "next/image";
import Hashtag from "@/components/Hashtag";
import Link from "next/link";

const BlogIndex = () => {
  const post = getPostList().sort((a, b) => +new Date(b.header.date) - +new Date(a.header.date))[0];

  return (
    <>
      {/*Desktop*/}
      <div className="hidden md:block">
        <h1 className="text-center text-4xl font-bold">Blog</h1>
        <hr className="mt-4 mb-4 border-2 border-popover dark:border-popover-dark"/>
        <p className="mb-5 text-center">최근 작성한 글</p>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-10">
            <Image src={post.header.thumbnail} alt="thmubnail" width="600" height="400" priority={true}/>
            <div className="flex flex-col justify-evenly">
              <Link href={`../blog/${post.category}/${post.slug}`}>
                <div className="transition hover:text-description">
                  <h2 className="m-0 text-2xl font-bold">{post.header.title}</h2>
                  <h3 className="m-0">{post.header.description}</h3>
                </div>
              </Link>
              <div>
                <Hashtag hashtags={getHashTags(post)}/>
                <div className="mt-5 text-description">{post.header.date}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Mobile*/}
      <div className="block md:hidden">
        <h1 className="mt-5 text-center text-4xl font-bold">Blog</h1>
        <hr className="mt-4 mb-4 border-2 border-popover dark:border-popover-dark"/>
        <p className="mb-5 text-center">최근 작성한 글</p>
        <div className="flex flex-col items-center p-10">
          <Image src={post.header.thumbnail} alt="thmubnail" width="600" height="400"/>
          <div className="flex flex-col justify-evenly mt-10">
            <Link href={`../blog/${post.category}/${post.slug}`}>
              <div className="transition hover:text-description">
                <h2 className="m-0 text-2xl font-bold">{post.header.title}</h2>
                <h3 className="m-0">{post.header.description}</h3>
              </div>
            </Link>
            <div className="mt-10">
              <Hashtag hashtags={getHashTags(post)}/>
              <div className="mt-2 text-description">{post.header.date}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogIndex;