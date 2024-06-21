"use client"

import React, {useEffect} from 'react';
import Login from "@/components/Login";
import LoggedIn from "@/components/LoggedIn";

const Page = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div>
      {
        isLoggedIn ? <LoggedIn/> : <Login/>
      }
    </div>
  );
};

export default Page;