"use client";
import ReduxProvider from "@/provider/ReduxProvider";
import React, { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
const LayoutClient: FC<LayoutProps> = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default LayoutClient;
