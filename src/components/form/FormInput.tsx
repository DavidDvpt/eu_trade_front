import { UseFormRegister } from "react-hook-form";
import styles from "./formElements.module.scss";
interface IFormInputProps {
  register: UseFormRegister<any>;
  label: string;
  name: string;
  className?: string;
  fieldType: string;
}

function FormInput({
  register,
  label,
  name,
  className = "",
  fieldType,
}: IFormInputProps) {
  return (
    <fieldset className={`${className} ${styles.input} ${styles.fieldSet}`}>
      <label htmlFor={name}>{label}</label>
      <input type={fieldType} {...register(name)} />
    </fieldset>
  );
}

export default FormInput;
