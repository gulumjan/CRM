"use client";
import { FC, useState } from "react";
import scss from "./Login.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useLoginUserMutation } from "@/redux/api/auth";
import { useRouter } from "next/navigation";

const Login: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm<AUTH.ILoginUserRequest>();
  const [loginUser] = useLoginUserMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<AUTH.ILoginUserRequest> = async (data) => {
    console.log(data);
    try {
      const res = await loginUser(data);
      console.log("🚀 ~ res:", res);
      if (res) {
        localStorage.setItem("tokens", JSON.stringify(res.data?.access));
        router.push("/");
      }
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={scss.Login}>
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
            <a href="/auth/register">Вы не зарегистрированы ?</a>

            <button type="submit">Войти </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
