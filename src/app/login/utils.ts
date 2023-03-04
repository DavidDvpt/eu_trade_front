import * as yup from "yup";

export const loginFormDefaultValues = {
  email: "david.mosca69@gmail.com",
  password: "david",
};
export const loginFormSchema = yup.object({
  email: yup.string().email("Email incorrect").required("le mail est requis"),
  password: yup.string().required("Le mot de passe est requis"),
});
