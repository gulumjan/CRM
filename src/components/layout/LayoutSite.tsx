import Sidebar from "@/ui/sidebar/SideBar";
import React, { FC, ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";
import HomeLog from "../pages/homeSections/homeLog/HomeLog";

interface iLayoutSiteProps {
  children: ReactNode;
}

const LayoutSite: FC<iLayoutSiteProps> = ({ children }) => {
  const tokens = localStorage.getItem("tokens");
  console.log("🚀 ~ tokens:", tokens);
  return (
    <>
      {tokens ? (
        <>
          {" "}
          <div className={scss.Layout}>
            <Header />
            <div className={scss.LayoutSite}>
              <Sidebar />
              <main className={scss.content}>{children}</main>
            </div>
          </div>
        </>
      ) : (
        <>
          <HomeLog />
        </>
      )}
    </>
  );
};

export default LayoutSite;
