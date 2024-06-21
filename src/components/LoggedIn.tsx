import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {useRouter} from "next/navigation";
import useAuth from "@/hooks/useAuth";

const LoggedIn = () => {
  const router = useRouter();

  const {auth, setAuth} = useAuth();

  const logout = () => {
    localStorage.removeItem("token");
    setAuth(false);

    router.push("/");
  }

  return (
    <div className="mt-20 flex justify-center">
      <Card className="w-80 text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">관리자 로그인</CardTitle>
        </CardHeader>
        <CardContent>
          <p>이미 로그인 되어 있습니다</p>
          <button
            onClick={logout}
            className="mt-3 w-20 rounded-md transition duration-100 p-1.5 bg-popover hover:bg-primary dark:bg-popover-dark dark:hover:bg-primary-dark">로그아웃
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoggedIn;