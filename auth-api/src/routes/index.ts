import { Router } from "express";

import { userRouter } from "../module/user/routes/user.routes";

const router = Router();

router.use("/api/user", userRouter);

export { router };
