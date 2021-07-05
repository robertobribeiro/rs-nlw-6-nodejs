import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repository/TagRepository";

interface ITagRequest {
  name: string;
};

class CreateTagService {

  async execute({ name }: ITagRequest) {
    const tagRepository = getCustomRepository(TagRepository);

    if (!name) {
      throw new Error("invalid name");
    }
    const tagAlreadyExists = await tagRepository.findOne({
      name
    });
    if (tagAlreadyExists) {
      throw new Error("tag already exists");
    }
    const tag = tagRepository.create({
      name
    });
    await tagRepository.save(tag);
    return tag;
  };

};

export { CreateTagService };