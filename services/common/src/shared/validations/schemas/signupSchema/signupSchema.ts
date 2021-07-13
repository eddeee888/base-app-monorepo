import * as Yup from "yup";
import { emailRule } from "../../rules/emailRule";
import { nameRule } from "../../rules/nameRule";
import { passwordRule } from "../../rules/passwordRule";

export const signupSchema = Yup.object().shape({
  firstName: nameRule("first"),
  lastName: nameRule("last"),
  email: emailRule,
  password: passwordRule,
});
