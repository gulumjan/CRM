"use client";

import { FC, ReactNode } from "react";
import { usePathname } from "next/navigation";
import LayoutSite from "../LayoutSite";

interface IClientRouteHandlerProps {
  children: ReactNode;
}

const ClientRouteHandler: FC<IClientRouteHandlerProps> = ({ children }) => {
  const pathname = usePathname();
  const isAuthPage = pathname?.startsWith("/auth");

  return isAuthPage ? children : <LayoutSite>{children}</LayoutSite>;
};

export default ClientRouteHandler;
