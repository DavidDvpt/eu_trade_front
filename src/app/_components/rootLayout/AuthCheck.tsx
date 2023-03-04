"use client";

import { getAuthState } from "@/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import Login from "../../login/page";
import Footer from "./footer";
import Header from "./header";

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
