import "./styles.css";
import { Logo, Search } from "..";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Navbar = () => {
  useDocumentTitle();

  return (
    <header className="navbar">
      <Logo pathName="/" />
      <Search />
    </header>
  );
};

export default Navbar;
