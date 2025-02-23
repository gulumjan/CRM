"use client";
import LayoutSite from "@/components/layout/LayoutSite";
import ReduxProvider from "@/provider/ReduxProvider";
import React, { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
const LayoutClient: FC<LayoutProps> = ({ children }) => {
  return (
    <ReduxProvider>
      <LayoutSite>{children}</LayoutSite>
    </ReduxProvider>
  );
};

export default LayoutClient;
