"use client"

import React, {useEffect, useState} from 'react';
import {Clipboard, ClipboardCheck} from "lucide-react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Copy = ({code}: { code: string }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const a = setTimeout(() => {
      setCopied(false);
    }, 3000);

    return () => {
      clearTimeout(a);
    };
  }, [copied]);


  return (
    <div className="flex items-center">
      {
        copied ? <p className="text-sm text-description mr-0.5">Copied!</p> : null
      }
      <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
        <button className="mr-4 rounded text-text p-1.5 hover:bg-primary dark:text-text-dark dark:hover:bg-primary-dark">
          {
            copied ? <ClipboardCheck/> : <Clipboard/>
          }
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default Copy;