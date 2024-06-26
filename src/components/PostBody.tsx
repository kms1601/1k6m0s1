import React from 'react';
import {MDXRemote} from "next-mdx-remote/rsc";
import {Post} from "@/lib/post";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeSlug from "rehype-slug";
import {mdxComponents} from "@/config/mdxComponents";
import rehypeHighlight from "rehype-highlight";

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm, remarkBreaks],
    rehypePlugins: [
      rehypeHighlight,
      rehypeSlug,
    ],
    format: "mdx",
  }
}

const PostBody = ({post} : {post: Post}) => {
  return (
    <div className="prose">
      <MDXRemote source={post.content} components={mdxComponents} options={options}/>
    </div>
  );
};

export default PostBody;