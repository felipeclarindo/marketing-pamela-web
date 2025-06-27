import { useEffect, useState } from "react";
import PersonalSlider from "./PersonalSlider";

export default function PartnerSliderWrapper() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? <PersonalSlider /> : null;
}
