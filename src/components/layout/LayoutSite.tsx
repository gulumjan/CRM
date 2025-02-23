import Sidebar from "@/ui/sidebar/SideBar";
import React, { FC, ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";

interface iLayoutSiteProps {
  children: ReactNode;
}

const LayoutSite: FC<iLayoutSiteProps> = ({ children }) => {
  return (
    <div className={scss.Layout}>
      <Header />
      <div className={scss.LayoutSite}>
        <Sidebar />
        <main className={scss.content}>{children}</main>
      </div>
    </div>
  );
};

export default LayoutSite;
