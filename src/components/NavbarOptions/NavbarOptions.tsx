import "./styles.css";
import { Announcements, Notifications, Menu } from "..";

const NavbarOptions = () => {
  return (
    <div>
      <Announcements />
      <Notifications />
      <Menu />
    </div>
  );
};

export default NavbarOptions;
