import React from 'react';

const TocElement = ({element, className}: {element: Element, className?: string}) => {
  const scroll = () => {
    document.getElementById(element.id)?.scrollIntoView({behavior: "smooth"});
  }

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: "auto"});
  }

  let nbsp = "";
  if (element.tagName === "H3") nbsp = String.fromCharCode(160);

  return (
    <div className={className}>
      <button onClick={scroll} className="hover:text-description">{nbsp.repeat(4)} {element.innerHTML}</button>
    </div>
  );
};

export default TocElement;