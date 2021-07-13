import * as Yup from "yup";

const regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/);

export const passwordRule = Yup.string()
  .matches(regex, "Password must be at least 8 characters with at least one lowercase character, one uppercase character and one number")
  .required("Password is required");
