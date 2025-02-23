import styles from "./SideBar.module.scss";
import {
  FaHome,
  FaChartBar,
  FaUserMd,
  FaCalendarAlt,
  FaUser,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li className={styles.active}>
            <FaHome className={styles.icon} /> Рабочий стол
          </li>
          <li>
            <FaChartBar className={styles.icon} /> Аналитика
          </li>
          <li>
            <FaUserMd className={styles.icon} /> Записи врачей
          </li>
          <li>
            <FaCalendarAlt className={styles.icon} /> Управление календарем
          </li>
        </ul>
      </nav>
      <div className={styles.bottomMenu}>
        <ul>
          <li>
            <FaUser className={styles.icon} /> Мой профиль
          </li>
          <li>
            <FaCog className={styles.icon} /> Настройки
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
