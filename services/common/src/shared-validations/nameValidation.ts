import * as Yup from "yup";

type NamePartial = "first" | "last";

const nameValidation = (namePartial: NamePartial): Yup.StringSchema => {
  const namePartialText = namePartial.charAt(0).toUpperCase() + namePartial.substr(1);
  return Yup.string()
    .trim()
    .required(namePartialText + " name is required")
    .ensure();
};

export default nameValidation;
