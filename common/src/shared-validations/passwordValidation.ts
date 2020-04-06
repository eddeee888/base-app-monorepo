import * as Yup from "yup";

const regex = new RegExp("^[A-Za-z0-9_#?!@$%^&*-.]{8,}$");

const passwordValidation = Yup.string()
  .matches(regex, "Password is case-sensitive and must include at least one character, one number and one special character")
  .required("Password is required");

export default passwordValidation;
