import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { API_SECRET } from "../config/auth";

interface Payload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const headerAuthorization = request.headers.authorization;

  if (!headerAuthorization) {
    throw new AppError("Token is missing!", 401);
  }

  const [, token] = headerAuthorization.split(" ");

  try {
    const { sub: user_id } = verify(token, API_SECRET) as Payload;

    request.user = {
      id: user_id,
    };

    return next();
  } catch {
    throw new AppError("Invalid token", 401);
  }
}
