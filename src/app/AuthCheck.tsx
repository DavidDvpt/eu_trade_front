"use client";

import { getAuthState } from "@/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Login from "./login/page";

interface IAuthCheckProps {
  children: React.ReactNode;
}

function AuthCheck({ children }: IAuthCheckProps) {
  const { isLogged } = useAppSelector(getAuthState);

  return (
    <>
      {isLogged ? (
        <>
          <Header />
          <main>{children}</main>
          <Footer />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default AuthCheck;
