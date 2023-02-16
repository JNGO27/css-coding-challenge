import "./styles.css";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { Logo, Search } from "..";

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
