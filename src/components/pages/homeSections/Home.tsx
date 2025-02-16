"use client";
import { FC } from "react";
import styles from "./Home.module.scss";
import { FaUserMd, FaNotesMedical, FaUserInjured } from "react-icons/fa";

const Home: FC = () => {
  return (
    <div className={styles.homepage}>
      <aside className={styles.sidebar}>
        <h2>CRM Medicine</h2>
        <nav>
          <ul>
            <li>🏠 Главная</li>
            <li>📋 Записи</li>
            <li>🩺 Врачи</li>
            <li>📂 Пациенты</li>
            <li>⚙️ Настройки</li>
          </ul>
        </nav>
      </aside>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1>Главная</h1>
          <div className={styles.user}>
            <span>👤 Администратор</span>
          </div>
        </header>

        <section className={styles.cards}>
          <div className={styles.card}>
            <FaUserMd size={30} />
            <h3>Врачи</h3>
            <p>24 врача</p>
          </div>

          <div className={styles.card}>
            <FaUserInjured size={30} />
            <h3>Пациенты</h3>
            <p>312 пациентов</p>
          </div>

          <div className={styles.card}>
            <FaNotesMedical size={30} />
            <h3>Записи</h3>
            <p>58 записей</p>
          </div>
        </section>

        <section className={styles.patients}>
          <div className={styles.patientA}>
            <h2>Список пациентов</h2>
            <button>Добавить пациентов</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Имя</th>
                <th>Возраст</th>
                <th>Диагноз</th>
                <th>Дата записи</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#001</td>
                <td>Иван Иванов</td>
                <td>45</td>
                <td>Грипп</td>
                <td>12.02.2025</td>
              </tr>
              <tr>
                <td>#002</td>
                <td>Мария Смирнова</td>
                <td>38</td>
                <td>Мигрень</td>
                <td>14.02.2025</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Home;
