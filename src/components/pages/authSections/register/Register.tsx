"use client";
import { FC, useState } from "react";
import scss from "./Register.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useRegisterReceptionMutation } from "@/redux/api/auth";
import { useRouter } from "next/navigation";

const Register: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm<AUTH.IRegisterReceptionRequest>({
    defaultValues: { role: "reception" },
  });
  const router = useRouter();
  const [registerReception] = useRegisterReceptionMutation();

  const onSubmit: SubmitHandler<AUTH.IRegisterReceptionRequest> = async (
    data
  ) => {
    console.log(data);
    try {
      const res = await registerReception(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={scss.Register}>
      <div className={scss.container}>
        <div className={scss.content}>
          <h1>Регистрация в CRM</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={scss.inputGroup}>
              <input
                {...register("username")}
                placeholder="Логин"
                type="text"
              />
            </div>
            <div className={scss.inputGroup}>
              <input
                {...register("first_name")}
                placeholder="Имя"
                type="text"
              />
            </div>
            <div className={scss.inputGroup}>
              <input
                {...register("last_name")}
                placeholder="Фамилия"
                type="text"
              />
            </div>
            <div className={scss.inputGroup}>
              <input {...register("email")} placeholder="Email" type="email" />
            </div>
            <div className={scss.passwordField}>
              <input
                {...register("password")}
                placeholder="Пароль"
                type={showPassword ? "text" : "password"}
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <GoEye /> : <GoEyeClosed />}
              </span>
            </div>
            <div className={scss.inputGroup}>
              <select {...register("role")}>
                <option value="reception">Ресепшн</option>
                <option value="doctor">Доктор</option>
                <option value="superuser">Администратор</option>
              </select>
            </div>
            <a href="/auth/login">Вы уже зарегистрированы?</a>

            <button type="submit">Зарегистрироваться</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
