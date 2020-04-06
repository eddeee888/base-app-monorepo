import * as Yup from "yup";

type NamePartial = "first" | "last";

const regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

const nameValidation = (namePartial: NamePartial): Yup.StringSchema => {
  const namePartialText = namePartial.charAt(0).toUpperCase() + namePartial.substr(1);
  return Yup.string()
    .required(namePartialText + " name is required")
    .matches(regex, namePartialText + " name cannot have invalid character");
};

export default nameValidation;
