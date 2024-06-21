"use client"

import React, {useEffect} from 'react';
import axios from "axios";
import getRemainingTime from "@/utils/getRemainingTime";
import useAuth from "@/hooks/useAuth";
import secToHMS from "@/utils/secToHMS";
import useTime from "@/hooks/useTime";

const Admin = () => {
  const {auth, setAuth} = useAuth();
  const {time, setTime} = useTime();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }

    axios.get("/api/jwt/verify", {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then(
      res => {
        setTime({time: getRemainingTime(res.data.user)});
        setAuth({auth: true});
      }
    ).catch(() => {
      localStorage.removeItem("token")
      setAuth({auth: false});
    });
  }, [setAuth, setTime]);

  useEffect(() => {
    if (time.time > 0) {
      const id = setInterval(() => {
        setTime({time: time.time - 1});
      }, 1000)
      return () => clearInterval(id);
    } else {
      setAuth({auth: false});
    }
  }, [setAuth, setTime, time]);

  return (
    <div>
      {
        auth.auth
          ?
          <>
            <p>관리자</p>
            <p>남은 시간 <span className="font-mono">{secToHMS(time.time)}</span></p>
          </>
          : null
      }
    </div>
  );
};

export default Admin;