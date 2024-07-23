import React from 'react';
import {MDXRemote} from "next-mdx-remote/rsc";
import {Post} from "@/lib/post";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeSlug from "rehype-slug";
import {mdxComponents} from "@/config/mdxComponents";
import rehypeHighlight from "rehype-highlight";
import PostHeader from "@/components/PostHeader";
import Comment from "@/components/Comment";

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

const PostBody = ({post}: { post: Post }) => {
  return (
    <div className="col-span-3 m-5 prose prose-2xl mx-auto">
      <PostHeader post={post}/>
      <hr className="mt-0 mb-10 border-t-2 border-description"/>
      <MDXRemote source={post.content} components={mdxComponents} options={options as any}/>
      <Comment/>
    </div>
  );
};

export default PostBody;