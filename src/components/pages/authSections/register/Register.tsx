"use client";
import { FC, useState } from "react";
import scss from "./Register.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useRegisterReceptionMutation } from "@/redux/api/auth";

const Register: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm<AUTH.IRegisterReceptionRequest>({
    defaultValues: { role: "reception" },
  });
  const [registerReception] = useRegisterReceptionMutation();

  const onSubmit: SubmitHandler<AUTH.IRegisterReceptionRequest> = async (
    data
  ) => {
    console.log(data);
    try {
      const res = await registerReception(data);
      console.log("🚀 ~ res:", res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={scss.Register}>
      <div className="container">
        <div className={scss.content}>
          <h1>Register into CRM </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("username")}
              placeholder="username"
              type="text"
            />
            <input
              {...register("first_name")}
              placeholder="first name"
              type="text"
            />
            <input
              {...register("last_name")}
              placeholder="last name"
              type="text"
            />
            <input {...register("email")} placeholder="email" type="email" />
            <div>
              <input
                {...register("password")}
                placeholder="password"
                type={showPassword ? "text" : "password"}
              />
              {showPassword ? (
                <GoEye onClick={() => setShowPassword(!showPassword)} />
              ) : (
                <GoEyeClosed onClick={() => setShowPassword(!showPassword)} />
              )}
            </div>
            <select {...register("role")} name="Role" id="">
              <option value="reception">Reception</option>
              <option value="doctor">Doctor</option>
              <option value="superuser">Admin</option>
            </select>

            <button type="submit">зарегистрироваться</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
