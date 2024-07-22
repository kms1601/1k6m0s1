import React from 'react';
import Image from "next/image";
import Link from "next/link";

const AboutIndex = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold">About Me</h1>
      <hr className="mt-4 mb-4 w-full border-2 border-popover dark:border-popover-dark"/>
      <Image src="https://drive.google.com/thumbnail?id=1KQKQ727sW0X-kXdpOL5NnLOxBkxHA9Cb&sz=w1000" width="200"
             height="200" alt="profile" className="rounded-full shadow-xl" priority={true}/>
      <div className="mt-10">
        <h1 className="text-center text-lg font-bold">개발자를 희망하는 개발자입니다</h1>
        <p className="text-center text-description">Email: kms_1601@naver.com</p>
        <Link href={"https://github.com/kms1601"}><p className="text-center text-description hover:text-popover">Github:
          https://github.com/kms1601</p></Link>
      </div>
    </div>
  );
};

export default AboutIndex;