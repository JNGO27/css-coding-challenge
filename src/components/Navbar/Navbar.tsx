import { useEffect } from "react";

import "./styles.css";
import { Logo } from "..";
import { LogoPathNames } from "../../constants";
import type { ValidLogoPathNames } from "../../types";

const Navbar = () => {
  const title = window.location.pathname.slice(1) as ValidLogoPathNames;

  useEffect(() => {
    // For now only handling document title Logo Paths
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    title !== "" && LogoPathNames[title] !== undefined
      ? (document.title = `Chartmetric - ${LogoPathNames[title]}`)
      : (document.title = `Chartmetric`);
  }, [title]);

  return (
    <header className="navbar">
      <Logo pathName="/" />
    </header>
  );
};

export default Navbar;
