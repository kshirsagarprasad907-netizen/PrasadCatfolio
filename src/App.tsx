import './App.css'
import Home from './pages/home'
import { useState } from "react";
import IntroOverlay from "./components/introOverlay";

export default function HomeOverlay() {
  const [showOverlay, setShowOverlay] = useState(true);

  return (
    <>
      {showOverlay ? (
        <IntroOverlay onEnter={() => setShowOverlay(false)} />
      ) : (
        <Home />
      )}
    </>
  );
}
