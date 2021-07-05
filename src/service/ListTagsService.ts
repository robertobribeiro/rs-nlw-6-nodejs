import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repository/TagRepository";
import { classToPlain } from "class-transformer";

class ListTagsService {

  async execute() {
    const tagRepository = getCustomRepository(TagRepository);

    const tags = await tagRepository.find();
    return classToPlain(tags);
  };

};

export { ListTagsService };