import React from 'react';
import {Post} from "@/lib/post";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({post}: { post: Post }) => {
  return (
    <Link href={`blog/${post.category}/${post.slug}`}>
      <div
        className="m-3 w-64 rounded p-3 transition postcard hover:bg-secondary hover:dark:bg-secondary-dark">
        <div className="mb-2 flex justify-center">
          <Image src={post.header.thumbnail} alt={"thumbnail"} width={600} height={400}/>
        </div>
        <h2 className="text-xl font-bold">{post.header.title}</h2>
        <p className="break-words text-description">{post.header.description}</p>
        <footer className="text-sm text-description">{post.header.date}</footer>
      </div>
    </Link>
  );
};

export default PostCard;