import { Request, Response } from "express";
import { ListReceivedComplimentsByUserService } from "../service/ListReceivedComplimentsByUserService";

class ListReceivedComplimentsByUserController {

  async handle(request: Request, response: Response) {
    const listReceivedComplimentsByUserService = new ListReceivedComplimentsByUserService();
    const { user_id } = request;
    const compliments = await listReceivedComplimentsByUserService.execute(user_id);
    return response.json(compliments);
  }

};

export { ListReceivedComplimentsByUserController };