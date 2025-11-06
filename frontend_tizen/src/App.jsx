import { useEffect, useRef } from 'react'
import { useTizenKeys } from './hooks/useTizenKeys'
import './App.css'

/**
 * PUBLIC_INTERFACE
 * App
 * This is the Tizen TV React entry component that renders a centered "Hello TV"
 * message styled with the Ocean Professional theme. It also handles remote keys
 * including a graceful BACK key press (no crash, logs intention to exit).
 */
function App() {
  const focusRef = useRef(null)

  // Handle BACK and basic remote readiness
  useTizenKeys({
    onEnter: () => {
      // Visual micro interaction on ENTER (focus pill bounces slightly)
      if (focusRef.current) {
        focusRef.current.style.transform = 'translateY(-1px) scale(1.02)'
        setTimeout(() => {
          if (focusRef.current) {
            focusRef.current.style.transform = ''
          }
        }, 150)
      }
    },
    onBack: () => {
      // Tizen back key: try to exit app if tizen APIs exist. Fallback to log.
      try {
        // Some Tizen TVs expose tizen.application
        if (typeof window !== 'undefined' && window.tizen && window.tizen.application) {
          const app = window.tizen.application.getCurrentApplication()
          app.exit() // Safe attempt; preview mode ignores silently
        } else {
          console.log('Back pressed – would exit on device.')
          // In browser preview we just log and do nothing
        }
      } catch (e) {
        console.log('Back pressed (no tizen API available in preview):', e?.message || e)
      }
    },
  })

  // Ensure something focusable is focused for remote users
  useEffect(() => {
    focusRef.current?.focus()
  }, [])

  return (
    <div className="tv-app">
      <main className="op-card" role="main" aria-label="Hello TV Panel">
        <h1 className="op-title">Hello TV</h1>
        <p className="op-subtitle">Ocean Professional • Modern and minimal</p>

        <span
          className="op-pill"
          ref={focusRef}
          tabIndex={0}
          aria-label="Focused status badge"
        >
          <span className="op-pill-dot" aria-hidden="true"></span>
          Welcome aboard
        </span>

        <p className="op-hint">Tip: Press ENTER to see a subtle focus reaction. Back exits on device.</p>
        <span className="visually-hidden">Centered message with large font on subtle gradient background</span>
      </main>
    </div>
  )
}

export default App
