"use client";

import FormInput from "@/components/form/FormInput";
import axiosInstance from "@/features/axios/AxiosPublicInstance";
import { useForm } from "react-hook-form";
import styles from "./login.module.scss";

export type LoginInputs = {
  pseudo: string;
  password: string;
};

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit = async (values: LoginInputs) => {
    const result = await axiosInstance().post(
      "http://localhost:8000/api/v1/login",
      values
    );
    console.log(result);
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
        />
        <FormInput
          register={register}
          name={"password"}
          label="Mot de passe :"
          fieldType="password"
        />

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
