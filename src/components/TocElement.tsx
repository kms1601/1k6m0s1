import React from 'react';

const TocElement = ({element, className}: {element: Element, className?: string}) => {
  const scroll = () => {
    const rect = document.getElementById(element.id)?.getBoundingClientRect() as DOMRect;
    const scrollY = window.scrollY;

    let offsetY = 100;

    // 현재 뷰포트보다 요소가 뷰포트 밖 위에 있다면 위로 더 스크롤
    if (rect.top < 100) offsetY += 20;

    window.scrollTo({
      top: rect.top + scrollY - offsetY,
      behavior: "smooth",
    });
  }

  let nbsp = "";
  if (element.tagName === "H3") nbsp = String.fromCharCode(160);

  let text = element.innerHTML;
  if (element.innerHTML.length > 16) text = text.slice(0, 16) + " ...";

  return (
    <div className={className}>
      <button onClick={scroll} className="hover:text-description">{nbsp.repeat(4)} {text}</button>
    </div>
  );
};

export default TocElement;