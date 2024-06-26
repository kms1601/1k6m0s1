import {MDXComponents} from "mdx/types";
import {Card, CardContent, CardHeader} from "@/components/ui/card";

const H1 = (props: any) => <h1 className="text-4xl font-bold transition text-text dark:text-text-dark" {...props}></h1>
const H2 = (props: any) => <h2 className="text-3xl font-bold transition text-text dark:text-text-dark" {...props}></h2>
const H3 = (props: any) => <h3 className="text-2xl font-bold transition text-text dark:text-text-dark" {...props}></h3>
const H4 = (props: any) => <h4 className="text-xl font-bold transition text-text dark:text-text-dark" {...props}></h4>
const H5 = (props: any) => <h5 className="text-lg font-bold transition text-text dark:text-text-dark" {...props}></h5>
const H6 = (props: any) => <h6 className="font-bold transition text-text text-md dark:text-text-dark" {...props}></h6>

const Pre = ({children}) => {

  let language: string = children.props.className.split("-")[1];
  language = language[0].toUpperCase() + language.slice(1);

  return (
    <pre className="shadow-lg">
      <div className="h-10 bg-popover dark:bg-popover-dark transition flex items-center justify-between">
        <p className="text-text dark:text-text-dark ml-4">{language}</p>
        <button className="text-text dark:text-text-dark mr-4">copy</button>
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

  pre: Pre,
}