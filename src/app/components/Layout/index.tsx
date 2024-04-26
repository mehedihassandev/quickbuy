import { FC, ReactNode } from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
