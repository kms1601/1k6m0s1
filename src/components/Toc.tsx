"use client"

import React, {useEffect, useState} from 'react';
import TocElement from "@/components/TocElement";

const Toc = ({className}: { className?: string }) => {
  const [currentId, setCurrentId] = useState<string>("");
  const [toc, setToc] = useState<Element[]>([]);

  useEffect(() => {
    let direction = "";
    let prevY = 0;
    // 스크롤 방향 확인
    const checkScrollDirection = () => {
      if (window.scrollY === 0 && prevY === 0) return;
      else if (window.scrollY > prevY) direction = 'down';
      else direction = 'up';

      prevY = window.scrollY;
    };

    const targetElement = document.getElementById("blog-body");
    if (!targetElement) {
      console.warn(`Element with id 'blog-body' not found.`);
      return;
    }

    // blog body 변화 확인
    const mutationObserver = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
          updateHeadings();
          break;
        }
      }
    });

    mutationObserver.observe(targetElement, {attributes: true, childList: true, subtree: true});

    // ToC 위치 확인
    const intersectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        checkScrollDirection();
        // 아래로 스크롤: 화면에서 빠져나갔을 때. 위로 스크롤: 화면에 들어왔을 때.
        if ((direction === 'down' && !entry.isIntersecting) || (direction === 'up' && entry.isIntersecting)) {
          setCurrentId(entry.target.id);
        }
      });
    }, {
      rootMargin: "-147px 0px 0px 0px"
    });

    const updateHeadings = () => {
      let hTags: Element[] = Array.from(document.querySelectorAll("h2[id], h3[id]"));
      hTags = hTags.slice(hTags.length / 2);
      setToc(hTags);
      setCurrentId(hTags[0]?.id);

      hTags.forEach(tag => {
        intersectionObserver.observe(document.getElementById(tag.id) as HTMLHeadElement);
      })
    };

    updateHeadings();

    return () => {
      mutationObserver.disconnect();
      intersectionObserver.disconnect();
    }
  }, []);

  if (toc.length === 0) return null;

  return (
    <div className={className}>
      {toc.map((e, i) => (
        <TocElement element={e} key={i} className={`mb-2 transition-all h-6 ${e.id === currentId ? "font-bold text-md" : "text-sm"}`}/>
      ))}
    </div>
  );
};

export default Toc;