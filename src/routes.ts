import { Router } from "express";
import { ensureAdmin } from "./middleware/ensureAdmin";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { CreateUserController } from "./controller/CreateUserController";
import { CreateTagController } from "./controller/CreateTagController";
import { CreateComplimentController } from "./controller/CreateComplimentController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import { ListSentComplimentsByUserController } from "./controller/ListSentComplimentsByUserController";
import { ListReceivedComplimentsByUserController } from "./controller/ListReceivedComplimentsByUserController";
import { ListTagsController } from "./controller/ListTagsController";
import { ListUsersController } from "./controller/ListUsersController";

const router = Router();
const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const listSentComplimentsByUserController = new ListSentComplimentsByUserController();
const listReceivedComplimentsByUserController = new ListReceivedComplimentsByUserController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post("/login", authenticateUserController.handle);
router.post("/users", createUserController.handle);
router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);
router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.handle
);
router.get(
  "/users/compliments/sent",
  ensureAuthenticated,
  listSentComplimentsByUserController.handle
);
router.get(
  "/users/compliments/received",
  ensureAuthenticated,
  listReceivedComplimentsByUserController.handle
);
router.get(
  "/tags",
  ensureAuthenticated,
  listTagsController.handle
);
router.get(
  "/users",
  ensureAuthenticated,
  listUsersController.handle
);

export { router };