import { RequestHandler } from "express";
import expressAsyncHandler from "express-async-handler";
import createHttpError from "http-errors";
import { PrismaClient } from "@prisma/client";
import { loginSchema } from "@libs/shared/validations/schemas/loginSchema";
import { PasswordService } from "@libs/passwordService";
import { HeadersService } from "@libs/headersService";
import { JwtService } from "@libs/jwtService";

export interface HandleXhrLoginParams {
  prisma: PrismaClient;
  password: PasswordService;
  headers: HeadersService;
  jwt: JwtService;
}

const handleXhrLogin = ({ prisma, password: passwordService, headers, jwt }: HandleXhrLoginParams): RequestHandler => {
  const handler: RequestHandler = async (req, res) => {
    const { email, password } = req.body;

    const isValid = await loginSchema.isValid({ email: email, password: password });
    if (!isValid) {
      throw createHttpError(400);
    }

    const user = await prisma.user.findUnique({ where: { email: email } });
    if (!user) {
      throw createHttpError(401);
    }

    const correctPassword = await passwordService.compare(password, user.password);
    if (!correctPassword) {
      throw createHttpError(401);
    }

    const token = jwt.sign({
      id: user.id.toString(),
    });

    headers.setTokenToResponse(res, token);

    res.sendStatus(200);
  };
  return expressAsyncHandler(handler);
};

export default handleXhrLogin;
