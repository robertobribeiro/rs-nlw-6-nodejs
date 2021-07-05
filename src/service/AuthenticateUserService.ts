import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UserRepository } from "../repository/UserRepository";

interface IAuthenticateRequest {
  email: string;
  password: string;
};

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateRequest) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({
      email
    });
    if (!user) {
      throw new Error("incorrect email/password");
    };
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("incorrect email/password");
    };
    const token = sign({
      email: user.email
    }, "cd1e5d8eba1f7be4d72e7af91e5da734", {
      subject: user.id,
      expiresIn: "1d"
    });
    return token;
  };

};

export { AuthenticateUserService };