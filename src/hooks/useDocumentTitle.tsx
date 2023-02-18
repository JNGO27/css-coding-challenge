import { useEffect } from "react";

import { LogoPathNames } from "../constants";
import type { ValidLogoPathNames } from "../types";

const useDocumentTitle = () => {
  const title = window.location.pathname.slice(1) as ValidLogoPathNames;

  useEffect(() => {
    // For now only handling document title Logo Paths
    document.title = `Chartmetric - ${LogoPathNames[title]}`;
  }, [title]);
};

export default useDocumentTitle;
