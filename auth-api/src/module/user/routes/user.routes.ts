import { Router } from "express";
import { ensureAuthenticated } from "../../../middleware/checkAuthToken";
import { AuthUserController } from "../useCases/auth/AuthUserController";
import { FindUserByEmailController } from "../useCases/findByEmail/FindUserByEmailController";

const userRouter = Router();

const findUserByEmail = new FindUserByEmailController();
const authUser = new AuthUserController();

userRouter.get("/:email", ensureAuthenticated, findUserByEmail.handle);
userRouter.post("/login", authUser.handle);

export { userRouter };
