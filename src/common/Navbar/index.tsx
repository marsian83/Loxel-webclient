import { NavLink } from "react-router-dom";
import NavbarAction from "./components/NavbarAction";
import NavbarSeperator from "./components/NavbarSeperator";

export default function Navbar() {
  return (
    <nav className="p-page py-5 flex justify-center items-center">
      <div className="flex-1">
        <img src="/brand.svg" className="h-10" />
      </div>

      <div className="flex gap-x-5 items-center">
        <NavbarAction type="link" title="About Us" to="/about" />
        <NavbarSeperator />
        <NavbarAction type="link" title="FAQs" to="/faq" />
        <NavbarSeperator />
        <NavbarAction type="link" title="Dapp" to="/dapp" />
      </div>

      <div className="flex-1 flex justify-end">
        <button className="px-6 py-2 bg-primary text-back rounded-md font-medium">
          Launch Dapp
        </button>
      </div>
    </nav>
  );
}
