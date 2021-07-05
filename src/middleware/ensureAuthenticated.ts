import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
};

const unauthorized = 401;

function ensureAuthenticated(
  request: Request,
  response: Response,
  nf: NextFunction
) {
  const authenticationToken = request.headers.authorization;

  if (!authenticationToken) {
    return response.status(unauthorized).end();
  };
  const [, token] = authenticationToken.split(" ");
  try {
    const { sub } = verify(token, "cd1e5d8eba1f7be4d72e7af91e5da734") as IPayload;
    request.user_id = sub;
    return nf();
  } catch (err) {
    return response.status(unauthorized).end();
  }
};

export { ensureAuthenticated };