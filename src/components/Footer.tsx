import React from 'react';
import Github from "@/components/Github";

const Footer = () => {
  return (
    <>
      <footer
        className="mt-auto flex flex-col items-center justify-center py-6 text-center transition-colors duration-100 bg-primary dark:bg-primary-dark">
        <div className="mb-4">
          <div className="transition-colors duration-100 bg-primary dark:bg-primary-dark">
            <a target="_blank" href="https://github.com/kms1601">
              <Github width={32} height={32} className="hover:fill-description dark:hover:fill-description dark:fill-secondary"></Github>
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-sm flex">&copy; 2024 kms1601. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;