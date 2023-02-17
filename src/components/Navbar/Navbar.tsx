import "./styles.css";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { Logo, NavbarOptions } from "..";

const Navbar = () => {
  useDocumentTitle();

  return (
    <header className="navbar">
      <Logo pathName="/" />
      <NavbarOptions />
    </header>
  );
};

export default Navbar;
