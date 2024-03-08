import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Modal from "../common/Modal";
import Navbar from "../common/Navbar";

export default function Default() {
  return (
    <main className="relative">
      <Modal />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
