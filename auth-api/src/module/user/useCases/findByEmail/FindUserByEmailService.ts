import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUserRepository } from "../../repository/IUserRepository";

@injectable()
export class FindUserByEmailService {
  private userRepository: IUserRepository;

  constructor(@inject("UserRepository") userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async execute(email: string) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new AppError("User not found");
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}
