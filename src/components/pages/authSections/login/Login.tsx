"use client";
import { FC, useState } from "react";
import scss from "./Login.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useLoginUserMutation } from "@/redux/api/auth";
import { useRouter } from "next/navigation";
import { AiOutlineLock } from "react-icons/ai";
import { TbMail } from "react-icons/tb";

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
          <div className={scss.block}>
            <h1>Добро пожаловать!</h1>
            <p>
              Войдите в систему, чтобы управлять записями, пациентами и
              процессами клиники легко и удобно.
            </p>
            <button type="button">Войти </button>
          </div>
          <div className={scss.login}>
            <h1>Войти в систему</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <p>Email</p>
              <div className={scss.inputGroup}>
                <span>
                  <TbMail />
                </span>
                <input
                  {...register("username")}
                  placeholder="Введите свою почту"
                  type="text"
                />
              </div>

              <p>Пароль</p>
              <div className={scss.passwordField}>
                <span>
                  <AiOutlineLock />
                </span>
                <input
                  {...register("password")}
                  placeholder="Введите свой пароль"
                  type={showPassword ? "text" : "password"}
                />
                <span
                  className={scss.pass}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <GoEye /> : <GoEyeClosed />}
                </span>
              </div>
              <a href="/auth/register">Вы не зарегистрированы ?</a>

              <button type="submit">Войти </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
