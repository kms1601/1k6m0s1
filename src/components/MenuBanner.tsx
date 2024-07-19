import React from 'react';

const MenuBanner = ({title} : {title: string}) => {
  return (
    <div>
      <h2 className="text-center text-5xl font-bold mb-10">{title}</h2>
    </div>
  );
};

export default MenuBanner;