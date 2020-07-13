import * as Yup from "yup";

const emailValidation = Yup.string().trim().email("Email must be valid").required("Email is required").ensure();

export default emailValidation;
