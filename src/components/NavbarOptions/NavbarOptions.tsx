import "./styles.css";
import { Search, Announcements, Notifications, Menu } from "..";

const NavbarOptions = () => {
  return (
    <div className="navbar-options-container">
      <Search />
      <Announcements />
      <Notifications />
      <Menu />
    </div>
  );
};

export default NavbarOptions;
