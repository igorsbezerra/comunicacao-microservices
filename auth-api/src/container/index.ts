import { container } from "tsyringe";

import { UserRepository } from "../module/repository/UserRepository";
import { IUserRepository } from "../module/repository/IUserRepository";
import { IHashProvider } from "../module/provider/HashProvider/IHashProvider";
import { HashProvider } from "../module/provider/HashProvider/HashProvider";
import { JWTProvider } from "../providers/JWTProvider/JWTProvider";
import { IJWTProvider } from "../providers/JWTProvider/IJWTProvider";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<IHashProvider>("HashProvider", HashProvider);
container.registerSingleton<IJWTProvider>("JWTProvider", JWTProvider);
