import {MDXComponents} from "mdx/types";
import {extractCode} from "@/lib/utils";
import Copy from "@/config/Copy";
import React from "react";
import Image from "next/image";

const H1 = (props: any) => <h1 className="text-4xl font-bold text-text dark:text-text-dark" {...props}></h1>
const H2 = (props: any) => <h2 className="text-3xl font-bold text-text dark:text-text-dark scroll-mt-28" {...props}></h2>
const H3 = (props: any) => <h3 className="text-2xl font-bold text-text dark:text-text-dark scroll-mt-28" {...props}></h3>
const H4 = (props: any) => <h4 className="text-xl font-bold text-text dark:text-text-dark" {...props}></h4>
const H5 = (props: any) => <h5 className="text-lg font-bold text-text dark:text-text-dark" {...props}></h5>
const H6 = (props: any) => <h6 className="text-base font-bold text-text dark:text-text-dark" {...props}></h6>

const P = (props: any) => <p className="text-base text-text dark:text-text-dark" {...props}></p>

const Li = (props: any) => <li className="text-base text-text dark:text-text-dark" {...props}></li>

const A = (props: any) => <a className="text-text dark:text-text-dark" {...props}></a>

const Strong = (props: any) => <strong className="text-text dark:text-text-dark" {...props}></strong>

const Th = (props: any) => <th className="text-md text-text dark:text-text-dark" {...props}></th>
const Td = (props: any) => <td className="text-base text-text dark:text-text-dark" {...props}></td>

const Hr = (props: any) => <hr className="mt-5 mb-10 border-description" {...props}></hr>

const Img = (props: any) => <div className="flex justify-center">
  {/* eslint-disable-next-line jsx-a11y/alt-text */}
  <Image {...props} className="rounded-lg" width="600" height="400"/>
</div>

const Pre = ({children} : { children: any }) => {
  let language: string = children.props.className.split("-")[1];
  language = language[0].toUpperCase() + language.slice(1);
  const code = extractCode(children);

  return (
    <pre className="shadow-lg">
      <div className="flex h-10 items-center justify-between rounded-t-lg transition bg-popover dark:bg-popover-dark">
        <p className="ml-4 text-text dark:text-text-dark">{language}</p>
        <Copy code={code}></Copy>
      </div>
      {children}
    </pre>
  )
};

export const mdxComponents: MDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,

  p: P,

  li: Li,

  a: A,

  strong: Strong,

  th: Th,
  td: Td,

  hr: Hr,

  img: Img,

  // @ts-ignore
  pre: Pre,
}