import {NextApiRequest, NextApiResponse} from "next";
import jwt from 'jsonwebtoken';
import {EXPIRE_TIME} from "@/config/const";

const Login = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).json({
      status: "Method Not Allowed",
    });
    return;
  }

  const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;
  if (!secretKey) {
    res.status(500).json({
      status: "Internal Server Error",
      message: "JWT secret key is missing.",
    })
    return;
  }

  const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD
  if (!adminPassword) {
    res.status(500).json({
      status: "Internal Server Error",
      message: "Admin password is missing.",
    })
    return;
  }

  if (req.body.password !== adminPassword) {
    res.status(200).json({
      status: "failed",
    })
    return;
  }

  const token = jwt.sign({role: "admin"}, secretKey, {expiresIn: `${EXPIRE_TIME}s`});

  res.status(200).json({
    status: "success",
    token: token,
  });
};

export default Login;