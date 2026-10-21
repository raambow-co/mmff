import React, { useState } from 'react'
import SplashScreen from './components/SplashScreen'
import './App.css'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)

  const handleReplaySplash = () => {
    setShowSplash(true)
  }

  return (
    <div className="page-wrapper">
      {/* Animated Splash Screen using logo 1-1.png */}
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}

      {/* Replay Splash Button in Top Header */}
      <header className="page-header">
        <button
          type="button"
          onClick={handleReplaySplash}
          className="replay-splash-btn"
          title="Replay Brand Intro Splash"
          aria-label="Replay Brand Intro Animation"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
          <span>REPLAY INTRO</span>
        </button>
      </header>

      {/* Subtle architectural luxury stationery frame */}
      <div className="architectural-frame" aria-hidden="true" />

      {/* Main Centered Hero Section */}
      <main className="hero-section">
        <div className="hero-content">

          {/* 1. Small, Understated Introductory Label */}
          <div className="intro-label-container">
            <span className="intro-accent-dot" aria-hidden="true" />
            <span className="intro-label">MM FIBRE FOAM FACTORY</span>
            <span className="intro-accent-dot" aria-hidden="true" />
          </div>

          {/* 2. Original MM Fibre Foam Logo (Visual Centerpiece - logo 1-1.png) */}
          <div className="logo-container">
            <div className="logo-backlight" aria-hidden="true" />
            <img
              src="/logo-1-1.png"
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src = '/logo%201-1.png'
              }}
              alt="MM Fibre Foam Factory Official Brand Logo"
              className="brand-logo"
              width="440"
              height="440"
              loading="eager"
            />
          </div>

          {/* 3. Brand Name */}
          <h1 className="brand-name">
            MM FIBRE FOAM FACTORY
          </h1>

          {/* 4. Main Headline */}
          <h2 className="main-headline">
            Something Exceptional Is Coming.
          </h2>

          {/* 5. Supporting Text */}
          <p className="supporting-text">
            We’re crafting something special. Our new digital home will be ready soon.
          </p>

          {/* 6. Elegant Launch Indicator */}
          <div className="launch-indicator" role="status" aria-label="Launching soon announcement">
            <span className="indicator-line" aria-hidden="true" />
            <span className="indicator-text">OUR WEBSITE IS LAUNCHING SOON</span>
            <span className="indicator-line" aria-hidden="true" />
          </div>

        </div>
      </main>

      {/* 7. Understated Footer */}
      <footer className="page-footer">
        <div className="footer-divider" aria-hidden="true" />
        <div className="footer-content">
          <span className="footer-brand">MM FIBRE FOAM FACTORY</span>
          <span className="footer-bullet" aria-hidden="true">•</span>
          <span className="footer-motto">Quality. Precision. Reliability.</span>
        </div>
      </footer>
    </div>
  )
}
