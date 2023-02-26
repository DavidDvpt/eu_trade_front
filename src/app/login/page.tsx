"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./login.module.scss";

type LoginType = {
  pseudo: string;
  password: string;
};

function Login() {
  const [credentials, setCredentials] = useState<LoginType>({
    pseudo: "",
    password: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof LoginType;
    const value = e.target.value;

    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("coucou je valide", credentials);
  };

  return (
    <div className={styles.login}>
      <h1>EU Trade</h1>

      <h3>Connexion requise</h3>

      <form action="" onSubmit={handleSubmit}>
        <fieldset className={styles.fieldSet}>
          <label htmlFor="pseudo">Pseudo : </label>
          <input
            name="pseudo"
            type="txt"
            value={credentials.pseudo}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset className={styles.fieldSet}>
          <label htmlFor="password">Mot de passe : </label>
          <input
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </fieldset>

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
