import * as Yup from "yup";

const emailValidation = Yup.string().email("Email must be valid").required("Email is required");

export default emailValidation;
