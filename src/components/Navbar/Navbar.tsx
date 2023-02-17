import "./styles.css";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { Logo, Search, NavbarOptions } from "..";

const Navbar = () => {
  useDocumentTitle();

  return (
    <header className="navbar">
      <Logo pathName="/" />
      <Search />
      <NavbarOptions />
    </header>
  );
};

export default Navbar;
