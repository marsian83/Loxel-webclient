import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Modal from "../common/Modal";
import Navbar from "../common/Navbar";
import PopupDrawer from "../common/PopupDrawer";

export default function Default() {
  return (
    <main className="relative">
      <Modal />
      <PopupDrawer />

      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
