export interface IJWTProvider {
  generateAccessToken(subject: string): Promise<string>;
  checkToken(token: string): Promise<boolean>;
}
