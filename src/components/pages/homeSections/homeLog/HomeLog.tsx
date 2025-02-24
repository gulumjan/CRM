"use client";
import { FC } from "react";
import scss from "./HomeLog.module.scss";
import { useRouter } from "next/navigation";

const HomeLog: FC = () => {
  const router = useRouter();
  return (
    <section className={scss.HomeLog}>
      <div className="container">
        <div className={scss.content}>
          <h1>онлайн CRM система</h1>
          <h4>Для учета клиентов и сделок</h4>
          <button onClick={() => router.push("/auth/login")}>Войти</button>
        </div>
      </div>
    </section>
  );
};

export default HomeLog;
