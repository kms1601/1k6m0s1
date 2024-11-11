import React from 'react';
import Image from "next/image";

const AboutIndex = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold">About Me</h1>
      <hr className="mt-4 mb-4 w-10/12 border-2 border-popover dark:border-popover-dark md:w-full"/>
      <Image src="https://drive.google.com/thumbnail?id=1q8__OQxMJjWIo6WKcOEEnWNM608z6K7R&sz=w1000" width="200"
             height="200" alt="profile" className="rounded-full shadow-xl" priority={true}/>
      <div className="mt-10">
        <h1 className="text-center text-lg font-bold">개발자 지망생입니다.</h1>
      </div>
    </div>
  );
};

export default AboutIndex;