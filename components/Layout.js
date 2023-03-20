import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";
export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
