import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";

const unauthorized = 401;

async function ensureAdmin(request: Request, response: Response, nf: NextFunction) {
  const { user_id } = request;
  const userRepository = getCustomRepository(UserRepository);
  const { admin } = await userRepository.findOne(user_id);

  if (admin) {
    return nf();
  }
  return response.status(unauthorized).json({
    error: "unauthorized"
  });
};

export { ensureAdmin };