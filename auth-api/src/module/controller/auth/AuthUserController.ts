import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthUserService } from "../../service/auth/AuthUserService";

export class AuthUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authUserService = container.resolve(AuthUserService);

    const token = await authUserService.execute(email, password);

    return response.json({ accessToken: token });
  }
}
