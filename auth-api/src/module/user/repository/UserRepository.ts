import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository {
  private repository = new PrismaClient();

  public async findByEmail(email: string) {
    return await this.repository.user.findUnique({
      where: {
        email,
      },
    });
  }

  public async findById(id: string) {
    return await this.repository.user.findUnique({
      where: {
        id,
      },
    });
  }
}
