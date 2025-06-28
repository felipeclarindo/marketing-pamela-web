import { useEffect, useState } from "react";
import MovieSlider from "./MovieSlider";

export default function MovieSliderWrapper() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? <MovieSlider /> : null;
}
