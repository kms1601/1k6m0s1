import React from 'react';
import {Post} from "@/lib/post";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({post}: { post: Post }) => {
  let title = post.header.title;
  let description = post.header.description;

  if (title.length > 37) title = title.substring(0, 37) + "...";
  if (description.length > 60) description = description.substring(0, 60) + "...";

  return (
    <Link href={`../blog/${post.category}/${post.slug}`}>
      <div
        className="m-3 w-64 h-80 rounded p-3 transition postcard hover:bg-secondary hover:dark:bg-secondary-dark">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="mb-2">
              <Image src={post.header.thumbnail} alt={"thumbnail"} width={600} height={400} className="rounded"/>
            </div>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="break-words text-description">{description}</p>
          </div>
          <div>
            <footer>
              <p className="text-sm text-end text-description">{post.header.date}</p>
            </footer>
          </div>
        </div>
      </div>
    </Link>
  )
};

export default PostCard;