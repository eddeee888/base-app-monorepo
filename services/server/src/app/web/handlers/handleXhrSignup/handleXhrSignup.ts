import { RequestHandler } from "express";
import expressAsyncHandler from "express-async-handler";
import signupSchema from "@libs/shared-validations/signupSchema";
import createHttpError from "http-errors";
import permissions from "permissions";
import { PrismaClient } from "@prisma/client";
import createNewUser from "actions/createNewUser";
import { Password } from "@libs/password";
import { JwtService } from "@libs/jwt";
import { HeadersService } from "@libs/headers";

export interface HandleXhrSignupParams {
  prisma: PrismaClient;
  password: Password;
  jwt: JwtService;
  headers: HeadersService;
}

const handleXhrSignup = (params: HandleXhrSignupParams): RequestHandler => {
  const { prisma, password: passwordService, jwt, headers } = params;

  const handler: RequestHandler = async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    const isValid = await signupSchema.isValid({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    });
    if (!isValid) {
      throw createHttpError(400);
    }

    const canBeCreated = await permissions.canUserBeCreated({
      prisma: prisma,
      email: email,
    });
    if (!canBeCreated) {
      res.status(200).send("email already exists");
      return;
    }

    const newUser = await createNewUser(
      { prisma: prisma, password: passwordService },
      { email: email, password: password, firstName: firstName, lastName: lastName }
    );

    const token = jwt.sign({
      id: newUser.id.toString(),
    });

    headers.setTokenToResponse(res, token);

    res.sendStatus(200);
  };

  return expressAsyncHandler(handler);
};

export default handleXhrSignup;
