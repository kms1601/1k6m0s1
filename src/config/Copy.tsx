"use client"

import React, {useState} from 'react';
import {Clipboard, ClipboardCheck} from "lucide-react";

const Copy = ({code}: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code)
      .then(() => {
        console.log("Copied:");
        console.log(code);
      })
      .catch((err) => console.log(err));

    setCopied(true);
  };


  return (
    <div className="flex items-center">
      {
        copied ? <p className="text-sm text-description mr-0.5">Copied!</p> : null
      }
      <button className="mr-4 rounded text-text p-1.5 hover:bg-primary dark:text-text-dark dark:hover:bg-primary-dark"
              onClick={copy}>
        {
          copied ? <ClipboardCheck/> : <Clipboard/>
        }
      </button>
    </div>
  );
};

export default Copy;