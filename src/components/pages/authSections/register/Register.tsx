"use client";
import { FC, useState } from "react";
import scss from "./Register.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useRegisterReceptionMutation } from "@/redux/api/auth";
import { useRouter } from "next/navigation";
import { TbMail } from "react-icons/tb";
import { AiOutlineLock } from "react-icons/ai";

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
          <div className={scss.login}>
            <h1>Регистрация в систему</h1>
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
                <span>
                  <TbMail />
                </span>
                <input
                  {...register("email")}
                  placeholder="Email"
                  type="email"
                />
              </div>
              <div className={scss.passwordField}>
                <span>
                  <AiOutlineLock />
                </span>
                <input
                  {...register("password")}
                  placeholder="Пароль"
                  type={showPassword ? "text" : "password"}
                />
                <span
                  className={scss.pass}
                  onClick={() => setShowPassword(!showPassword)}
                >
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
          <div className={scss.block}>
            <h1>Добро пожаловать!</h1>
            <p>
              Войдите в систему, чтобы управлять записями, пациентами и
              процессами клиники легко и удобно.
            </p>
            <button type="button">РЕГИСТРАЦИЯ </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
