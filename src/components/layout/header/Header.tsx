import { FC } from "react";
import scss from "./Header.module.scss";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";

const Header: FC = () => {
  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <h2 className={scss.logo}>CRM - MED</h2>

          <div className={scss.icons}>
            <button className={scss.ico}>
              <IoNotificationsOutline />
            </button>
            <button className={scss.ico}>
              <IoSettingsOutline />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
