import ReduxProvider from "@/redux/reduxProvider";
import "../scss/globals.scss";
import AuthCheck from "./AuthCheck";

interface IRootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="fr">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ReduxProvider>
          <AuthCheck>{children}</AuthCheck>
        </ReduxProvider>
      </body>
    </html>
  );
}
