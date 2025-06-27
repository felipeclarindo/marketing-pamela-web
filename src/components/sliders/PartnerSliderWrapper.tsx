import { useEffect, useState } from "react";
import PartnerSlider from "./PartnerSlider";

export default function PartnerSliderWrapper() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? <PartnerSlider /> : null;
}
