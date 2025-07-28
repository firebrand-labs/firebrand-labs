import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export function useIsMac() {
  const [isMac, setIsMac] = useState(false);
  const isLargeMobile = useMediaQuery({ minWidth: 300, maxWidth: 768 });
  useEffect(() => {
    if (navigator.platform.toUpperCase().includes("IPHONE")) {
      setIsMac(true);
    }
  }, []);

  const result = isLargeMobile && isMac;
  return result;
}
