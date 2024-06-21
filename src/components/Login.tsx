"use client";

import React, {useEffect} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import axios from "axios";
import {useRouter} from "next/navigation";
import useAuth from "@/hooks/useAuth";
import useTime from "@/hooks/useTime";
import {EXPIRE_TIME} from "@/config/const";

const Login = () => {
  const [password, setPassword] = React.useState("");
  const [failed, setFailed] = React.useState(false);
  const [error, setError] = React.useState(false);

  const router = useRouter();

  const {auth, setAuth} = useAuth();
  const {time, setTime} = useTime();

  useEffect(() => {
    const a = setTimeout(() => {
      setFailed(false);
      setError(false);
    }, 2000);
    return () => clearTimeout(a);
  }, [failed, error]);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    await handleSignIn();
  }

  const handleSignIn = async (): Promise<void> => {
    try {
      const res = await axios.post("/api/auth/login", {password: password});

      if (res.status !== 200) {
        setError(true);
        return;
      }

      if (res.data.status === "failed") {
        setFailed(true);
        return;
      }

      const token = res.data.token;
      localStorage.setItem("token", token);
      setAuth(true);
      setTime(EXPIRE_TIME);
      router.push("login/redirect");
    } catch (error) {
      console.error("로그인 실패", error);
    }
  };

  return (
    <div className="mt-20 flex justify-center">
      <Card className="w-80 text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">관리자 로그인</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            {
              error ? <p className="mb-1 text-warning">서버에 오류가 있습니다</p> : null
            }
            {
              failed ? <p className="mb-1 text-warning">비밀번호가 다릅니다</p> : null
            }
            <input name="password" type="password" placeholder="password" onChange={handlePasswordChange}
                   className="outline-none rounded-md pr-2 pl-2 text-center transition duration-100 bg-popover hover:bg-primary focus:bg-primary dark:bg-popover-dark dark:hover:bg-primary-dark dark:focus:bg-primary-dark"/>
            <button
              type="submit"
              className="mt-3 w-20 rounded-md transition duration-100 p-1.5 bg-popover hover:bg-primary dark:bg-popover-dark dark:hover:bg-primary-dark">로그인
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;