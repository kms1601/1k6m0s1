import React from 'react';

const MenuBanner = ({title} : {title: string}) => {
  return (
    <div>
      <h2 className="mb-10 text-center text-5xl font-bold">{title}</h2>
    </div>
  );
};

export default MenuBanner;