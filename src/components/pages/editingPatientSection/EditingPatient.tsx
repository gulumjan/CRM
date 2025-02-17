"use client";
import { FC, useState } from "react";
import scss from "./EditingPatient.module.scss";
import { CiUser } from "react-icons/ci";
import { FaCircleDot } from "react-icons/fa6";
import { LuClipboardList } from "react-icons/lu";
import { TbUserDown } from "react-icons/tb";

import { TbUserCheck } from "react-icons/tb";

const EditingPatient: FC = () => {
  const [saved, setSaved] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <section className={scss.EditingPatient}>
      <h1 className={scss.editText}>Редактирование пациента</h1>
      <div className={scss.PatientInfo}>
        <div className={scss.top}>
          <h4>№ 52027</h4>
          <h4>Урматбекова Айназик</h4>
          <h4>01.01.1900 тел:</h4>
        </div>
        <div className={scss.bottom}>
          <p>
            <span>
              <CiUser />
            </span>
            Без статуса
          </p>
          <p>
            <span style={{ color: "red" }}>
              <FaCircleDot />
            </span>
            На лечении
          </p>
          <p>
            Дата: <span>4 июля 2023 г.</span>
          </p>
        </div>
      </div>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.buttons}>
            <button>
              <span>
                <CiUser />
              </span>
              Запись на прием
            </button>
            <button>
              <span>
                <LuClipboardList />
              </span>
              История записей
            </button>
            <button>
              <span>
                <LuClipboardList />
              </span>
              История приемов
            </button>
            <button>
              <span>
                <LuClipboardList />
              </span>
              Оплаты
            </button>
            <button>
              <span>
                <LuClipboardList />
              </span>
              Данные пациента
            </button>
          </div>

          <div className={scss.PatientInformations}>
            <div className={scss.topp}>
              <p>
                Регистратор:{" "}
                <span style={{ fontWeight: "bold" }}>
                  Абдрахманова Алтынай Нурланбековна
                </span>
              </p>
              <div className={scss.block_btn}>
                <p>Принять оплату</p>
                <label className={scss.switch}>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  <span className={scss.slider}></span>
                </label>
                <button onClick={() => setSaved(!saved)}>
                  <span>{saved ? <TbUserCheck /> : <TbUserDown />}</span>{" "}
                  {saved ? "Сохранено" : "Сохранить"}
                </button>
              </div>
            </div>

            <div className={scss.blocks}>
              <div className={scss.block1}>
                <div className={scss.odin}>
                  <h3>Отделение</h3>
                  <select>
                    <option value="">Выберите отделение</option>
                    <option value="ginekologiya">
                      Гинекология (Кабинет 6)
                    </option>
                    <option value="terapiya">Терапия (Кабинет 12)</option>
                    <option value="hirurgiya">Хирургия (Кабинет 5)</option>
                    <option value="nevrologiya">Неврология (Кабинет 8)</option>
                    <option value="lor">ЛОР (Кабинет 3)</option>
                    <option value="okulist">Окулист (Кабинет 9)</option>
                    <option value="kardiologiya">
                      Кардиология (Кабинет 7)
                    </option>
                    <option value="urologiya">Урология (Кабинет 4)</option>
                    <option value="dermatologiya">
                      Дерматология (Кабинет 10)
                    </option>
                    <option value="endokrinologiya">
                      Эндокринология (Кабинет 11)
                    </option>
                  </select>
                </div>
                <div className={scss.dva}>
                  <h3>Врач</h3>
                  <select>
                    <option value="">Выберите врача</option>
                    <option value="eshkenulova">
                      Ещенкулова Алина Саргаковна
                    </option>
                    <option value="abdrahmanova">
                      Абдрахманова Алтынай Нуралыбековна
                    </option>
                    <option value="ivanov">Иванов Сергей Петрович</option>
                    <option value="petrova">Петрова Наталья Викторовна</option>
                    <option value="sidorov">
                      Сидоров Алексей Владимирович
                    </option>
                    <option value="kuznetsova">
                      Кузнецова Марина Алексеевна
                    </option>
                    <option value="smirnov">Смирнов Дмитрий Андреевич</option>
                    <option value="melnikova">
                      Мельникова Ольга Сергеевна
                    </option>
                    <option value="bogdanov">Богданов Артем Васильевич</option>
                    <option value="koroleva">Королева Виктория Павловна</option>
                  </select>
                </div>
                <div className={scss.tri}>
                  <h3>Начало</h3>
                  <input type="datetime-local" />
                </div>
                <div className={scss.chetyre}>
                  <h3>Конец</h3>
                  <input type="datetime-local" />
                </div>
              </div>
              <div className={scss.block2}>
                <div className={scss.check}>
                  <input type="checkbox" />
                  <p>Звонок</p>
                </div>
                <div className={scss.check}>
                  <input type="checkbox" />
                  <p>Живая очередь</p>
                </div>
                <div className={scss.check}>
                  <input type="checkbox" />
                  <p>Вакцинация</p>
                </div>
              </div>
              <div className={scss.block3}>
                <p>
                  Список услуг врача{" "}
                  <span style={{ fontWeight: "bold" }}>
                    Эшенкулова Алима Сыргаковна
                  </span>
                </p>
                <input type="text" placeholder="поиск услуг" />
                <table className={scss.blueTable}>
                  <thead>
                    <tr>
                      <th>Выбрать</th>
                      <th>Наименование услуги</th>
                      <th>Код</th>
                      <th>Цена</th>
                      <th>Количество</th>
                      <th>Скидка</th>
                      <th>Сумма</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>Приём врача-терапевта</td>
                      <td>1001</td>
                      <td>1500</td>
                      <td>
                        <input type="number" defaultValue={1} />
                      </td>
                      <td>
                        <input type="number" defaultValue={0} />
                      </td>
                      <td>1500</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>Приём врача-хирурга</td>
                      <td>1002</td>
                      <td>2000</td>
                      <td>
                        <input type="number" defaultValue={1} />
                      </td>
                      <td>
                        <input type="number" defaultValue={0} />
                      </td>
                      <td>2000</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>УЗИ брюшной полости</td>
                      <td>2001</td>
                      <td>2500</td>
                      <td>
                        <input type="number" defaultValue={1} />
                      </td>
                      <td>
                        <input type="number" defaultValue={0} />
                      </td>
                      <td>2500</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>ЭКГ</td>
                      <td>3001</td>
                      <td>1200</td>
                      <td>
                        <input type="number" defaultValue={1} />
                      </td>
                      <td>
                        <input type="number" defaultValue={0} />
                      </td>
                      <td>1200</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>Анализ крови (общий)</td>
                      <td>4001</td>
                      <td>600</td>
                      <td>
                        <input type="number" defaultValue={1} />
                      </td>
                      <td>
                        <input type="number" defaultValue={0} />
                      </td>
                      <td>600</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditingPatient;
