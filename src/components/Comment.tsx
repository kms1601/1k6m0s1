"use client"

import React from 'react';
import Giscus from "@giscus/react";
import {useTheme} from "next-themes";

const Comment = () => {
  const {theme} = useTheme()

  return (
    <Giscus
      id="comments"
      repo="kms1601/1k6m0s1"
      repoId="R_kgDOMLwBPA"
      category="Announcements"
      categoryId="DIC_kwDOMLwBPM4ChCEL"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme === "light" ? "light" : "noborder_dark"}
      lang="ko"
      loading="lazy"
    />
  );
};

export default Comment;