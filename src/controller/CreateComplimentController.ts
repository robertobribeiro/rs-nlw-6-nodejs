import { Request, Response } from "express";
import { CreateComplimentService } from "../service/CreateComplimentService";

class CreateComplimentController {

  async handle(request: Request, response: Response) {
    const {
      tag_id,
      receiver_user_id,
      message
    } = request.body;
    const { user_id } = request;
    const createComplimentService = new CreateComplimentService();

    const compliment = await createComplimentService.execute({
      tag_id,
      sender_user_id: user_id,
      receiver_user_id,
      message
    });
    return response.json(compliment);
  };

};

export { CreateComplimentController };