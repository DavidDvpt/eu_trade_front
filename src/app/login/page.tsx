"use client";

import FormInput from "@/components/form/FormInput";
import { useAppDispatch } from "@/redux/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginFormDefaultValues, loginFormSchema } from "./utils";

import { loginThunk } from "@/features/auth/authThunk";
import styles from "./login.module.scss";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<LoginInputs>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: loginFormDefaultValues,
  });
  const dispatch = useAppDispatch();

  const onSubmit = async (values: LoginInputs) => {
    if (isValid) {
      dispatch(loginThunk(values));
    }
  };

  return (
    <div className={styles.login}>
      <h1>EU Trade</h1>

      <h3>Connexion requise</h3>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          register={register}
          name={"email"}
          label="Email :"
          fieldType="email"
          error={errors.email ?? null}
        />
        <FormInput
          register={register}
          name={"password"}
          label="Mot de passe :"
          fieldType="password"
          error={errors.password ?? null}
        />

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
