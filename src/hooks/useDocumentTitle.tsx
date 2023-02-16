import { useEffect } from "react";

import { LogoPathNames } from "../constants";
import type { ValidLogoPathNames } from "../types";

const useDocumentTitle = () => {
  const title = window.location.pathname.slice(1) as ValidLogoPathNames;

  useEffect(() => {
    // For now only handling document title Logo Paths
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    title !== "" && LogoPathNames[title] !== undefined
      ? (document.title = `Chartmetric - ${LogoPathNames[title]}`)
      : (document.title = `Chartmetric`);
  }, [title]);
};

export default useDocumentTitle;
