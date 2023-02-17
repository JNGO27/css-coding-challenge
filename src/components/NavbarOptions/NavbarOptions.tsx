import "./styles.css";
import { Announcements, Notifications, Menu } from "..";

const NavbarOptions = () => {
  return (
    <div className="navbar-options-container">
      <Announcements />
      <Notifications />
      <Menu />
    </div>
  );
};

export default NavbarOptions;
