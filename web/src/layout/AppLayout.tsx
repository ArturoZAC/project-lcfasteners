import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ScrollToTop } from "../components/ScrollToTop";

export const AppLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
