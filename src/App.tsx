import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import ProjectPage from "./pages/projectPage";
import IntroOverlay from "./components/introOverlay";

export default function App() {
  const [showOverlay, setShowOverlay] = useState(true);

  if (showOverlay) {
    return (
      <IntroOverlay
        onEnter={() => setShowOverlay(false)}
      />
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/home"
        element={<Home />}
      />
      <Route path="/projectPage" element={<ProjectPage />} />
    </Routes>
  );
}