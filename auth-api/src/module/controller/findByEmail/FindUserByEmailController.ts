import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindUserByEmailService } from "../../service/findByEmail/FindUserByEmailService";

export class FindUserByEmailController {
  async handle(request: Request, response: Response) {
    const { email } = request.params;

    const findUserByEmail = container.resolve(FindUserByEmailService);

    const user = await findUserByEmail.execute(email);

    return response.json(user);
  }
}
