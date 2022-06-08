import { hash, compare } from "bcrypt";

import { IHashProvider } from "./IHashProvider";

export class HashProvider implements IHashProvider {
  async generateHash(payload: string): Promise<string> {
    return hash(payload, 10);
  }

  async compareHash(payload: string, hash: string): Promise<boolean> {
    return compare(payload, hash);
  }
}
