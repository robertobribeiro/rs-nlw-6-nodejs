import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repository/ComplimentRepository";

class ListReceivedComplimentsByUserService {

  async execute(user_id: string) {
    const complimentRepository = getCustomRepository(ComplimentRepository);

    const compliments = await complimentRepository.find({
      where: {
        receiver_user_id: user_id
      }
    });
    return compliments;
  };

};

export { ListReceivedComplimentsByUserService };