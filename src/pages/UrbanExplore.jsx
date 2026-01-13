"use client"

import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

const UrbanExplore = () => {
  const history = useHistory()
  const [animationStarted, setAnimationStarted] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [showSkip, setShowSkip] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  const letters = ["T", "R", "A", "V", "E", "L", " ", "A", "D", "V", "I", "S", "O", "R"]

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setAnimationStarted(true)
    }, 500)

    // Show button after all letters have dropped
    const buttonTimer = setTimeout(() => {
      setShowButton(true)
    }, 4000)

    // Auto-navigate after intro completes
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        history.push("/home")
      }, 1500)
    }, 6000)

    return () => {
      clearTimeout(timer)
      clearTimeout(buttonTimer)
      clearTimeout(fadeOutTimer)
    }
  }, [history])

  const skipIntro = () => {
    setFadeOut(true)
    setTimeout(() => {
      history.push("/home")
    }, 1000)
  }

  const startAdventure = () => {
    setFadeOut(true)
    setTimeout(() => {
      history.push("/home")
    }, 1000)
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black relative overflow-hidden transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/20 to-black" />

      {showSkip && !fadeOut && (
        <button
          onClick={skipIntro}
          className="absolute top-4 right-4 z-50 bg-black/50 border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg transition-all"
        >
          Skip Intro
        </button>
      )}

      {/* Decorative clouds */}
      <div className="absolute top-10 left-10 w-20 h-12 bg-gray-700 rounded-full opacity-30" />
      <div className="absolute top-16 left-32 w-16 h-8 bg-gray-600 rounded-full opacity-25" />
      <div className="absolute top-8 right-20 w-24 h-10 bg-gray-700 rounded-full opacity-20" />
      <div className="absolute top-20 right-40 w-18 h-6 bg-gray-600 rounded-full opacity-15" />

      {/* Plane */}
      <div className="absolute top-24 plane-fly">
        <svg width="60" height="20" viewBox="0 0 60 20" className="text-gray-300">
          <path d="M2 10 L15 6 L45 8 L58 10 L45 12 L15 14 Z M20 10 L25 2 L30 10 L25 18 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Skyline */}
      <div className="absolute bottom-0 left-0 right-0 skyline-rise">
        <svg viewBox="0 0 1200 400" className="w-full h-96" preserveAspectRatio="none">
          <defs>
            <linearGradient id="buildingGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1f2937" />
              <stop offset="50%" stopColor="#374151" />
              <stop offset="100%" stopColor="#1f2937" />
            </linearGradient>
          </defs>

          {/* Building silhouettes */}
          <path
            d="M0,400 L0,250 L80,250 L80,120 L120,120 L120,60 L160,60 L160,180 L200,180 L200,80 L240,80 L240,200 L280,200 L280,70 L320,70 L320,220 L360,220 L360,40 L400,40 L400,240 L440,240 L440,90 L480,90 L480,210 L520,210 L520,30 L560,30 L560,260 L600,260 L600,110 L640,110 L640,230 L680,230 L680,75 L720,75 L720,200 L760,200 L760,65 L800,65 L800,250 L840,250 L840,100 L880,100 L880,220 L920,220 L920,85 L960,85 L960,240 L1000,240 L1000,130 L1040,130 L1040,270 L1080,270 L1080,150 L1120,150 L1120,290 L1200,290 L1200,400 Z"
            fill="url(#buildingGrad1)"
          />

          {/* Window lights */}
          <rect x="85" y="130" width="3" height="4" fill="#fbbf24" opacity="0.8" />
          <rect x="95" y="140" width="3" height="4" fill="#fbbf24" opacity="0.6" />
          <rect x="105" y="135" width="3" height="4" fill="#60a5fa" opacity="0.7" />
          <rect x="125" y="70" width="4" height="5" fill="#fbbf24" opacity="0.9" />
          <rect x="135" y="80" width="4" height="5" fill="#60a5fa" opacity="0.8" />
          <rect x="145" y="75" width="4" height="5" fill="#fbbf24" opacity="0.7" />
          <rect x="205" y="90" width="3" height="4" fill="#f87171" opacity="0.6" />
          <rect x="215" y="100" width="3" height="4" fill="#fbbf24" opacity="0.8" />
          <rect x="225" y="95" width="3" height="4" fill="#60a5fa" opacity="0.7" />
          <rect x="365" y="50" width="4" height="6" fill="#fbbf24" opacity="0.9" />
          <rect x="375" y="60" width="4" height="6" fill="#60a5fa" opacity="0.8" />
          <rect x="385" y="55" width="4" height="6" fill="#fbbf24" opacity="0.7" />
          <rect x="365" y="80" width="4" height="6" fill="#f87171" opacity="0.6" />
          <rect x="385" y="90" width="4" height="6" fill="#fbbf24" opacity="0.8" />
          <rect x="525" y="40" width="4" height="6" fill="#fbbf24" opacity="0.9" />
          <rect x="535" y="50" width="4" height="6" fill="#60a5fa" opacity="0.8" />
          <rect x="545" y="45" width="4" height="6" fill="#fbbf24" opacity="0.7" />
          <rect x="525" y="70" width="4" height="6" fill="#f87171" opacity="0.6" />
          <rect x="545" y="80" width="4" height="6" fill="#fbbf24" opacity="0.8" />
          <rect x="535" y="100" width="4" height="6" fill="#60a5fa" opacity="0.7" />
          <rect x="605" y="120" width="3" height="4" fill="#fbbf24" opacity="0.8" />
          <rect x="615" y="130" width="3" height="4" fill="#60a5fa" opacity="0.7" />
          <rect x="625" y="125" width="3" height="4" fill="#fbbf24" opacity="0.6" />
          <rect x="685" y="85" width="3" height="4" fill="#f87171" opacity="0.7" />
          <rect x="695" y="95" width="3" height="4" fill="#fbbf24" opacity="0.8" />
          <rect x="705" y="90" width="3" height="4" fill="#60a5fa" opacity="0.6" />
          <rect x="765" y="75" width="4" height="5" fill="#fbbf24" opacity="0.9" />
          <rect x="775" y="85" width="4" height="5" fill="#60a5fa" opacity="0.8" />
          <rect x="785" y="80" width="4" height="5" fill="#fbbf24" opacity="0.7" />
          <rect x="845" y="110" width="3" height="4" fill="#f87171" opacity="0.6" />
          <rect x="855" y="120" width="3" height="4" fill="#fbbf24" opacity="0.8" />
          <rect x="865" y="115" width="3" height="4" fill="#60a5fa" opacity="0.7" />
          <rect x="925" y="95" width="3" height="4" fill="#fbbf24" opacity="0.8" />
          <rect x="935" y="105" width="3" height="4" fill="#60a5fa" opacity="0.7" />
          <rect x="945" y="100" width="3" height="4" fill="#fbbf24" opacity="0.6" />
          <rect x="1005" y="140" width="3" height="4" fill="#f87171" opacity="0.7" />
          <rect x="1015" y="150" width="3" height="4" fill="#fbbf24" opacity="0.8" />
          <rect x="1025" y="145" width="3" height="4" fill="#60a5fa" opacity="0.6" />
          <rect x="1085" y="160" width="3" height="4" fill="#fbbf24" opacity="0.8" />
          <rect x="1095" y="170" width="3" height="4" fill="#60a5fa" opacity="0.7" />
          <rect x="1105" y="165" width="3" height="4" fill="#fbbf24" opacity="0.6" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Letter Animation Container */}
        <div className="flex flex-wrap justify-center items-end mb-8 h-32">
          {letters.map((letter, index) => (
            <div
              key={index}
              className={`text-6xl md:text-8xl font-bold text-white drop-shadow-2xl ${
                letter === " " ? "w-4" : ""
              } ${animationStarted ? "letter-drop" : "opacity-0 invisible"}`}
              style={{
                animationDelay: `${index * 0.2}s`,
                textShadow: "0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)",
              }}
            >
              {letter === " " ? "" : letter}
            </div>
          ))}
        </div>

        <p
          className={`text-xl md:text-2xl text-gray-300 font-sans text-center mb-8 transition-all duration-1000 ${
            showButton ? "fade-in-up opacity-100" : "opacity-0"
          }`}
        >
          Discover Amazing Places Around the World
        </p>

        <button
          onClick={startAdventure}
          className={`bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
            showButton ? "fade-in-up opacity-100" : "opacity-0"
          }`}
          style={{ animationDelay: "0.5s" }}
        >
          Start Exploring
        </button>
      </div>
    </div>
  )
}

export default UrbanExplore
