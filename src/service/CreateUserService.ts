import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";
import { hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
};

class CreateUserService {

  async execute({ name, email, admin = false, password }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepository);

    if (!email) {
      throw new Error("invalid email address");
    }
    const userAlreadyExists = await userRepository.findOne({
      email
    });
    if (userAlreadyExists) {
      throw new Error("user already exists");
    }
    const passwordHash = await hash(password, 8);
    const user = userRepository.create({
      name,
      email,
      admin,
      password: passwordHash
    });
    await userRepository.save(user);
    return user;
  }

};

export { CreateUserService };