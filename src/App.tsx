import './App.css'
import Home from './pages/home'

import { useEffect, useState } from "react";
import IntroOverlay from "./components/introOverlay";

export default function HomeOverlay() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showOverlay && <IntroOverlay />}

      <Home>
        {/* actual homepage */}
      </Home>
    </>
  );
}
