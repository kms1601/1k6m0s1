import jwt, {JwtPayload} from "jsonwebtoken";
import {NextApiRequest, NextApiResponse} from "next";
import * as process from "node:process";

const verifyToken = (token: string): JwtPayload | null => {
  const secretKey = process.env.JWT_SECRET_KEY;
  if (!secretKey) {
    return null;
  }

  try {
    return jwt.verify(token, secretKey) as JwtPayload;
  } catch (err) {
    return null;
  }
}

const verify = (req: NextApiRequest, res: NextApiResponse) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header is missing' });
  }

  const token = authHeader.split(' ')[1];
  const decodedToken = verifyToken(token);
  if (!decodedToken) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }

  res.status(200).json({ message: 'Secure data', user: decodedToken });
}

export default verify;