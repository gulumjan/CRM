import React, { useState } from "react";
import { MoreVertical } from "lucide-react";
import styles from "./Home.module.scss";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState("Кардиология");

  const tabs = [
    "Кардиология",
    "Терапия",
    "Неврология",
    "УЗИ",
    "Рентген и КТ",
    "Велоэргометрия (ВЭМ)",
    "Допплерография сосудов",
  ];

  return (
    <div className={styles.patientList}>
      <div className={styles.patientList__header}>
        <h1>Все записи клиентов</h1>
        <button className={styles.patientList__headerButton}>
          <span>+</span> Добавить пациента
        </button>
      </div>

      <div className={styles.patientList__search}>
        <input type="text" placeholder="Поиск" />
        <select>
          <option>Март 20, 2025</option>
        </select>
        <select>
          <option>Врач: Елена</option>
        </select>
      </div>

      <div className={styles.patientList__tabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.patientList__tabsItem} ${
              selectedTab === tab ? styles["patientList__tabsItem--active"] : ""
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.patientList__table}>
        <table>
          <thead>
            <tr>
              <th>Дата и время</th>
              <th>Пациент</th>
              <th>Врач</th>
              <th>Способ оплаты</th>
              <th>Сумма оплаты</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Array(11)
              .fill(null)
              .map((_, index) => (
                <tr key={index}>
                  <td>Март 20, 12:09</td>
                  <td>Иванов Иван</td>
                  <td>Смирнова Елена</td>
                  <td>
                    <div className={styles.patientList__tablePayment}>
                      <div
                        className={`${
                          styles.patientList__tablePaymentIndicator
                        } ${
                          index === 0 || index === 6
                            ? styles["patientList__tablePaymentIndicator__card"]
                            : styles["patientList__tablePaymentIndicator--cash"]
                        }`}
                      ></div>
                      {index === 0 || index === 6
                        ? "Безналичные (карта)"
                        : "Наличные"}
                    </div>
                  </td>
                  <td>5000₽</td>
                  <td className={styles.patientList__tableActions}>
                    <button>
                      <MoreVertical size={20} />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
