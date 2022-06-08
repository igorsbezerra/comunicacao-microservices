import { sign } from "jsonwebtoken";

import { API_SECRET } from "../../config/auth";

import { IJWTProvider } from "./IJWTProvider";

export class JWTProvider implements IJWTProvider {
  async generateAccessToken(subject: string): Promise<string> {
    return sign({}, API_SECRET, { subject: subject, expiresIn: "1h" });
  }

  async checkToken(token: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
