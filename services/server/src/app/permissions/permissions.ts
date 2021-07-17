import { default as canUserBeCreated } from "./canUserBeCreated";
export * from "./canUserBeCreated";
import { default as canUserUpdateUser } from "./canUserUpdateUser";
export * from "./canUserUpdateUser";
import { default as canUserViewUserPrivateDetails } from "./canUserViewUserPrivateDetails";
export * from "./canUserViewUserPrivateDetails";

export const permissions = {
  canUserBeCreated,
  canUserUpdateUser,
  canUserViewUserPrivateDetails,
};
