import * as Yup from "yup";
import emailValidation from "./emailValidation";
import nameValidation from "./nameValidation";
import passwordValidation from "./passwordValidation";

const signupSchema = Yup.object().shape({
  firstName: nameValidation("first"),
  lastName: nameValidation("last"),
  email: emailValidation,
  password: passwordValidation,
});

export default signupSchema;
