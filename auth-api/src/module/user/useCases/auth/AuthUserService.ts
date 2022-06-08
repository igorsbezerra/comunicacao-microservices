import { inject, injectable } from "tsyringe";

import { IHashProvider } from "../../provider/HashProvider/IHashProvider";
import { IJWTProvider } from "../../../../providers/JWTProvider/IJWTProvider";
import { IUserRepository } from "../../repository/IUserRepository";

import { AppError } from "../../../../errors/AppError";

@injectable()
export class AuthUserService {
  private userRepository: IUserRepository;
  private hashProvider: IHashProvider;
  private jwtProvider: IJWTProvider;

  constructor(
    @inject("UserRepository") userRepository: IUserRepository,
    @inject("HashProvider") hashProvider: IHashProvider,
    @inject("JWTProvider") jwtProvider: IJWTProvider
  ) {
    this.userRepository = userRepository;
    this.hashProvider = hashProvider;
    this.jwtProvider = jwtProvider;
  }
  async execute(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) throw new AppError("User/Password incorrect.", 401);

    if (!(await this.hashProvider.compareHash(password, user.password)))
      throw new AppError("User/Password incorrect.", 401);

    return this.jwtProvider.generateAccessToken(user.id);
  }
}
