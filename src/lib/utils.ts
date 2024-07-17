import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {Post} from "@/lib/post";
import React, {ReactNode} from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractCode(children: ReactNode): string {
  let text = '';

  React.Children.forEach(children, (child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      text += child;
    } else if (React.isValidElement(child)) {
      text += extractCode(child.props.children);
    }
  });

  return text;
}