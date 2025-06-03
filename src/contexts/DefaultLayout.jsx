import ScrollToTop from "../components/ScrollToTop/ScrollToTop.jsx";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}