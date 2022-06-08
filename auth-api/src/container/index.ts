import { container } from "tsyringe";

import { UserRepository } from "../module/user/repository/UserRepository";
import { IUserRepository } from "../module/user/repository/IUserRepository";
import { IHashProvider } from "../module/user/provider/HashProvider/IHashProvider";
import { HashProvider } from "../module/user/provider/HashProvider/HashProvider";
import { JWTProvider } from "../providers/JWTProvider/JWTProvider";
import { IJWTProvider } from "../providers/JWTProvider/IJWTProvider";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<IHashProvider>("HashProvider", HashProvider);
container.registerSingleton<IJWTProvider>("JWTProvider", JWTProvider);
