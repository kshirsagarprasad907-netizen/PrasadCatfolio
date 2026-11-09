import "../styles/introOverlay.css";
import pawPrint from "../assets/Icons/pawPrint.png";

export default function IntroOverlay({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="intro-overlay">
      <div className="intro-content">
        <img src={pawPrint} className="paw" alt="Paw Print" />
        <h1>Prasad's CatFolio</h1>
        <img src={pawPrint} className="paw" alt="Paw Print" />
      </div>
      <div className="enter-Btn">
        <button onClick={onEnter} className="introBtn">Enter Catfolio</button>
      </div>
      <p className="introSubtitle">Best viewed on a desktop browser</p>
    </div>
  );
}