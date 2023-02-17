import "./styles.css";
import CM_LOGO from "../../assets/CM_logo-icon.svg";
import type { ValidLogoPathNames } from "../../types";

type Props = {
  pathName: `/${ValidLogoPathNames}`;
};

const Logo = ({ pathName }: Props) => {
  return (
    <a href={pathName} rel="noopener">
      <figure className="logo-container">
        <img
          className="logo-container__logo"
          src={CM_LOGO}
          alt="company-logo"
          title="Chartmetric Logo"
        />
        <figcaption
          className="logo-container__company-name"
          aria-label="company-name"
        >
          Chartmetric
        </figcaption>
      </figure>
    </a>
  );
};

export default Logo;
