import "./styles.css";
import { Logo } from "..";

import useDocumentTitle from "../../hooks/useDocumentTitle";

const Navbar = () => {
  useDocumentTitle();

  return (
    <header className="navbar">
      <Logo pathName="/" />
    </header>
  );
};

export default Navbar;
