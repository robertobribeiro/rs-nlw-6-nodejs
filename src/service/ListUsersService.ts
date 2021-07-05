import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";
import { classToPlain } from "class-transformer";

class ListUsersService {

  async execute() {
    const userRepository = getCustomRepository(UserRepository);

    const users = await userRepository.find();
    return classToPlain(users);
  };

};

export { ListUsersService };