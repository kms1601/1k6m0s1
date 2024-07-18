import fs from "fs";
import matter from "gray-matter";
import {sync} from "glob";
import {POSTS_PATH} from "@/config/const";

interface Header {
  title: string;
  description: string;
  date: string;
  thumbnail: string;
}

export interface Post {
  header: Header;
  category: string;
  slug: string;
  path: string;
  content: string;
}

// path : src/posts/{category}/{slug}/content.mdx
export const getPost = (category: string, slug: string): Post => {
  const path = `src/posts/${category}/${slug}/content.mdx`

  const {data, content} = matter(fs.readFileSync(path, "utf-8"));
  const header = data as Header;

  return {header, category, slug, path, content};
}

export const getPostList = (category?: string): Post[] => {
  const folder = category || "**";
  const paths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
  const split = paths.map((path) => {
    return path.split("/");
  })
  return split.map((path) => {
    return getPost(path[path.length - 3], path[path.length - 2]);
  })
}

export const getPostCount = (category?: string): number => {
  if (category === "All" || category === undefined) category = "**"; // 모든 글 개수

  const paths: string[] = sync(`${POSTS_PATH}/${category}/**/*.mdx`);
  return paths.length;
}

export const getCategoryList = () => {
  const path = sync(`${POSTS_PATH}/*`);
  return path.map((path) => {
    return path.slice(path.lastIndexOf("/") + 1);
  });
}