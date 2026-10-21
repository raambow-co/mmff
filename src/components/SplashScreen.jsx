import React, { useState, useEffect } from 'react'
import './SplashScreen.css'

export default function SplashScreen({ onComplete, isReplay = false }) {
  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState('INITIALIZING')
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Stage 1: Progress counter simulation with natural acceleration
    const statusMessages = [
      { at: 0, text: 'INITIALIZING FACTORY ARCHIVE' },
      { at: 30, text: 'CRAFTING PRECISION' },
      { at: 65, text: 'QUALITY • RELIABILITY' },
      { at: 92, text: 'WELCOME TO MM FIBRE FOAM' },
      { at: 100, text: 'ENTER' }
    ]

    let currentProgress = 0
    const interval = setInterval(() => {
      // Natural pacing: quick start, brief dwell around 70%, rapid finish
      const increment = currentProgress < 40 ? 3 : currentProgress < 80 ? 2 : 4
      currentProgress = Math.min(100, currentProgress + increment)
      setProgress(currentProgress)

      const matchingMsg = statusMessages.slice().reverse().find(m => currentProgress >= m.at)
      if (matchingMsg) {
        setStatusText(matchingMsg.text)
      }

      if (currentProgress >= 100) {
        clearInterval(interval)
        // Dwell at 100% for a fraction of a second, then trigger exit
        setTimeout(() => {
          setIsExiting(true)
          setTimeout(() => {
            if (onComplete) onComplete()
          }, 850) // Duration of exit transition
        }, 350)
      }
    }, 45)

    return () => clearInterval(interval)
  }, [onComplete])

  const handleSkip = () => {
    setIsExiting(true)
    setTimeout(() => {
      if (onComplete) onComplete()
    }, 400)
  }

  return (
    <div className={`splash-overlay ${isExiting ? 'splash-exit' : ''}`} role="dialog" aria-modal="true" aria-label="Welcome to MM Fibre Foam Factory">
      {/* Precision ambient background glow */}
      <div className="splash-ambient-glow" aria-hidden="true" />

      {/* Decorative architectural corner brackets */}
      <div className="splash-frame-corner top-left" aria-hidden="true" />
      <div className="splash-frame-corner top-right" aria-hidden="true" />
      <div className="splash-frame-corner bottom-left" aria-hidden="true" />
      <div className="splash-frame-corner bottom-right" aria-hidden="true" />

      {/* Skip button for seamless user control */}
      <button 
        type="button" 
        className="splash-skip-btn" 
        onClick={handleSkip}
        aria-label="Skip splash screen"
      >
        <span>SKIP INTRO</span>
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 3L11 8L6 13" />
        </svg>
      </button>

      {/* Center content stage */}
      <div className="splash-stage">
        {/* Animated aura rings radiating from behind logo */}
        <div className="splash-aura-ring ring-1" aria-hidden="true" />
        <div className="splash-aura-ring ring-2" aria-hidden="true" />

        {/* The Exact MM Fibre Foam Logo provided by User */}
        <div className="splash-logo-wrapper">
          <div className="splash-shimmer-sweep" aria-hidden="true" />
          <img
            src="/logo-1-1.png"
            onError={(e) => {
              e.currentTarget.onerror = null
              e.currentTarget.src = '/logo%201-1.png'
            }}
            alt="MM Fibre Foam Factory Official Logo"
            className="splash-logo-img"
            width="440"
            height="440"
            loading="eager"
          />
        </div>

        {/* Brand Monogram & Subtitle Reveal */}
        <div className="splash-typography">
          <div className="splash-brand-title">
            MM FIBRE FOAM FACTORY
          </div>
          <div className="splash-brand-tagline">
            Quality &bull; Precision &bull; Reliability
          </div>
        </div>

        {/* High-end Minimal Progress Tracker */}
        <div className="splash-tracker-container">
          <div className="splash-status-label">{statusText}</div>

          <div className="splash-progress-track">
            <div 
              className="splash-progress-fill" 
              style={{ width: `${progress}%` }} 
            />
            <div 
              className="splash-progress-glow" 
              style={{ left: `${progress}%` }} 
            />
          </div>

          <div className="splash-percentage">
            {String(progress).padStart(2, '0')}%
          </div>
        </div>
      </div>
    </div>
  )
}
