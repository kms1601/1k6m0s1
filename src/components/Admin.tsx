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

  useEffect( () => {
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
        setTime(getRemainingTime(res.data.user));
        setAuth(true);
      }
    ).catch(() => {
      localStorage.removeItem("token");
      setAuth(false);
    });
  }, [setAuth, setTime]);

  useEffect(() => {
    if (time >= 0) {
      const id = setInterval(() => {
        setTime(time - 1);
      }, 1000)
      return () => clearInterval(id);
    } else {
      localStorage.removeItem("token");
      setAuth(false);
    }
  }, [setAuth, setTime, time]);

  return (
    <div>
      {
        auth
          ?
          <>
            <div className="flex justify-evenly">
              <p className="text-center">관리자</p>
            </div>
            <p className="text-center text-sm">Remaining <span className="font-mono">{secToHMS(time)}</span></p>
          </>
          : null
      }
    </div>
  );
};

export default Admin;