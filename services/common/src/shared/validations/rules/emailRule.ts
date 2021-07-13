import * as Yup from "yup";

export const emailRule = Yup.string().trim().email("Email must be valid").required("Email is required").ensure();
