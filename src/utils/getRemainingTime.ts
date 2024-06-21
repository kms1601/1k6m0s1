import {JwtPayload} from "jsonwebtoken";

const getRemainingTime = (token: JwtPayload): number => {
  const currentTimeStamp = Math.floor(Date.now() / 1000);
  if (token.exp) {
    return token.exp - currentTimeStamp;
  } else {
    return 0;
  }
}

export default getRemainingTime;