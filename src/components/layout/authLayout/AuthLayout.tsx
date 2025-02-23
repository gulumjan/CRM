import { FC, ReactNode } from "react";

interface IAuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<IAuthLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default AuthLayout;
