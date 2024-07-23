import React from 'react';
import MenuBanner from "@/components/MenuBanner";
import Image from "next/image";
import Link from "next/link";
import {Globe, Mail} from "lucide-react";
import {BASE_URL} from "@/config/const";
import Github from "@/components/Github";

const AboutPage = () => {
  return (
    <div>
      <MenuBanner title="About"/>
      {/*Mobile*/}
      <div className="flex justify-center">
        <Image src="https://drive.google.com/thumbnail?id=1q8__OQxMJjWIo6WKcOEEnWNM608z6K7R&sz=w1000" width="200"
               height="200" alt="profile" className="rounded-full shadow-xl" priority={true}/>
      </div>
      <div>
        <h3 className="mt-5 text-center text-lg font-bold">개발자 지망생입니다.</h3>
        <hr className="mx-auto mt-4 mb-4 w-10/12 border-2 border-popover dark:border-popover-dark"/>
        <h2 className="text-center text-3xl font-bold">Contact</h2>
        <div className="mt-3 flex justify-center">
          <Mail className="mr-2"/>
          <p className="text-center">kms_1601@naver.com</p>
        </div>
        <Link href={"https://github.com/kms1601"}>
          <div
            className="mt-3 flex justify-center hover:text-description hover:fill-description dark:fill-secondary dark:hover:fill-description">
            <Github width={24} height={24} className="mr-2"></Github>
            <p className="text-center">github.com/kms1601</p>
          </div>
        </Link>
        <Link href={BASE_URL}>
          <div className="mt-3 flex justify-center hover:text-description">
            <Globe className="mr-2"/>
            <p className="text-center">1k6m0s1.com</p>
          </div>
        </Link>
      </div>

    </div>
  );
};

export default AboutPage;