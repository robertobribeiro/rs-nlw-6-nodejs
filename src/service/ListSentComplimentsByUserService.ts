import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repository/ComplimentRepository";

class ListSentComplimentsByUserService {

  async execute(user_id: string) {
    const complimentRepository = getCustomRepository(ComplimentRepository);

    const compliments = await complimentRepository.find({
      where: {
        sender_user_id: user_id
      }
    });
    return compliments;
  };

};

export { ListSentComplimentsByUserService };