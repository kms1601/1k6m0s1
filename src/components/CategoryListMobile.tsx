"use client"

import React from 'react';
import useCategory from "@/hooks/useCategory";
import Link from "next/link";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const CategoryListMobile = ({categories, count}: { categories: string[], count: number[] }) => {
  const {category} = useCategory();

  return (
    <div className="w-4/5 mx-auto">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-4 text-center">
              {categories.map((cat, i) => (
                cat === category.category
                  ?
                  <p key={i}>
                    <Link href={`/blog/${cat}`} key={i} className="inline-block font-bold hover:text-description">
                      ∙ {cat.charAt(0).toUpperCase() + cat.slice(1)} ({count[i]})
                    </Link>
                  </p>
                  :
                  <p key={i}>
                    <Link href={`/blog/${cat}`} key={i} className="inline-block hover:text-description">
                      {cat.charAt(0).toUpperCase() + cat.slice(1)} ({count[i]})
                    </Link>
                  </p>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CategoryListMobile;