import { FC } from "react";
import scss from "./Login.module.scss";

const Login: FC = () => {
  return (
    <section className={scss.Login}>
      <div className="container">
        <div className={scss.content}>Login</div>
      </div>
    </section>
  );
};

export default Login;
