import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repository/ComplimentRepository";
import { UserRepository } from "../repository/UserRepository";

interface IComplimentRequest {
  tag_id: string;
  sender_user_id: string;
  receiver_user_id: string;
  message: string;
};


class CreateComplimentService {
  async execute({ tag_id, sender_user_id, receiver_user_id, message }: IComplimentRequest) {
    const complimentRepository = getCustomRepository(ComplimentRepository);
    const userRepository = getCustomRepository(UserRepository);

    if (sender_user_id === receiver_user_id) {
      throw new Error("invalid receiver user");
    };

    const receiverUserExists = await userRepository.findOne(receiver_user_id);
    if (!receiverUserExists) {
      throw new Error("receiver user does not exist");
    }
    const compliment = complimentRepository.create({
      tag_id,
      sender_user_id,
      receiver_user_id,
      message
    });
    await complimentRepository.save(compliment);
    return compliment;
  };

};

export { CreateComplimentService };