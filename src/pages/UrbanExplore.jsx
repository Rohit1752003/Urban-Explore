import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import "./UrbanExplore.css";
import plane from "../img/plan.png";   // your plane svg/png
import city from "../img/city.jpg";    // unsplash city image

const TEXT = "URBAN EXPLORE".split("");

const UrbanExploreIntro = () => {
  const history = useHistory();
  const planeRef = useRef(null);
  const lettersRef = useRef([]);
  const [showCTA, setShowCTA] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let droppedCount = 0;

    const interval = setInterval(() => {
      if (!planeRef.current) return;

      const planeX = planeRef.current.getBoundingClientRect().left;

      lettersRef.current.forEach((letter, i) => {
        if (!letter || letter.classList.contains("dropped")) return;

        const letterX = letter.getBoundingClientRect().left;

        // Drop letter ONLY when plane reaches it
        if (planeX + 60 > letterX) {
          letter.classList.add("dropped");
          droppedCount++;

          if (droppedCount === TEXT.length) {
            setTimeout(() => setShowCTA(true), 900);
          }
        }
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const exitIntro = () => {
    setFadeOut(true);
    setTimeout(() => history.push("/home"), 1200);
  };

  return (
    <div className={`intro ${fadeOut ? "fade-out" : ""}`}>
      {/* City Background */}
      <div
        className="city"
        style={{ backgroundImage: `url(${city})` }}
      />

      {/* Sky Gradient Overlay */}
      <div className="sky-overlay" />

      {/* Stars */}
      <div className="stars" />

      {/* Plane */}
      <img
        ref={planeRef}
        src={plane}
        alt="plane"
        className="plane"
      />

      {/* Title Letters */}
      <div className="title">
        {TEXT.map((char, i) => (
          <span
            key={i}
            ref={(el) => (lettersRef.current[i] = el)}
            className={`letter ${char === " " ? "space" : ""}`}
          >
            {char}
          </span>
        ))}
      </div>

      {/* CTA */}
      {showCTA && (
        <div className="cta">
          <p>Discover places worth traveling for</p>
          <button onClick={exitIntro}>Start Exploring</button>
        </div>
      )}

      {/* Skip */}
      <button className="skip" onClick={exitIntro}>
        Skip
      </button>
    </div>
  );
};

export default UrbanExploreIntro;
