import { FieldError, UseFormRegister } from "react-hook-form";
import styles from "./formElements.module.scss";
interface IFormInputProps {
  register: UseFormRegister<any>;
  label: string;
  name: string;
  className?: string;
  fieldType: string;
  error: FieldError | null;
}

function FormInput({
  register,
  label,
  name,
  className = "",
  fieldType,
  error,
}: IFormInputProps) {
  return (
    <fieldset
      className={`${className} ${styles.inputForm} ${styles.fieldSet} ${
        error ? styles.fieldError : ""
      }`}
    >
      <div className={styles.inputLabel}>
        <label htmlFor={name}>{label}</label>
        <input {...register(name)} />
      </div>
      <p>{error?.message}</p>
    </fieldset>
  );
}

export default FormInput;
