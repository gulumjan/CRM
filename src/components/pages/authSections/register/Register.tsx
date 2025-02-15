"use client";
import { FC } from "react";
import scss from "./Register.module.scss";
import { useForm } from "react-hook-form";

const Register: FC = () => {
  const {} = useForm();
  return (
    <section className={scss.Register}>
      <div className="container">
        <div className={scss.content}>
          <h1>Register into CRM </h1>
          <form>
            <input placeholder="username" type="text" />
            <input placeholder="first name" type="text" />
            <input placeholder="last name" type="text" />
            <input placeholder="email" type="text" />
            <input placeholder="password" type="text" />
            <button>зарегистрироваться</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
