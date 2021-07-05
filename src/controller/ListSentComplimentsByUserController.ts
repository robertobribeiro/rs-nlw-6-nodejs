import { Request, Response } from "express";
import { ListSentComplimentsByUserService } from "../service/ListSentComplimentsByUserService";

class ListSentComplimentsByUserController {

  async handle(request: Request, response: Response) {
    const listSentComplimentsByUserService = new ListSentComplimentsByUserService();
    const { user_id } = request;
    const compliments = await listSentComplimentsByUserService.execute(user_id);
    return response.json(compliments);
  }

};

export { ListSentComplimentsByUserController };