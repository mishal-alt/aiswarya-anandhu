// Background song: starts on the seal tap (phones only allow sound after a tap),
// loops, pauses while the page is hidden, and has a small toggle button.
import { useEffect, useState } from 'react'

const SONG_SRC = '/audio/wedding-song.mp3'
const TARGET_VOLUME = 0.7

let audio = null
let userPaused = false
let fadeTimer = null

function getAudio() {
  if (!audio && typeof Audio !== 'undefined') {
    audio = new Audio(SONG_SRC)
    audio.loop = true
    audio.preload = 'auto'
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) audio.pause()
      else if (!userPaused && audio.dataset.started) play()
    })
  }
  return audio
}

function play() {
  const a = getAudio()
  if (!a) return
  clearInterval(fadeTimer)
  a.volume = 0
  a.play()
    .then(() => {
      fadeTimer = setInterval(() => {
        a.volume = Math.min(TARGET_VOLUME, a.volume + 0.05)
        if (a.volume >= TARGET_VOLUME) clearInterval(fadeTimer)
      }, 100)
    })
    .catch(() => {})
}

// Preload as soon as the opener is on screen, so the song is ready by the tap.
export function preloadMusic() {
  getAudio()
}

// Must be called synchronously inside the tap handler.
export function startMusic() {
  const a = getAudio()
  if (!a) return
  a.dataset.started = '1'
  userPaused = false
  play()
}

export function MusicToggle() {
  const [playing, setPlaying] = useState(() => !!audio && !audio.paused)

  useEffect(() => {
    const a = getAudio()
    if (!a) return
    const sync = () => setPlaying(!a.paused)
    a.addEventListener('play', sync)
    a.addEventListener('pause', sync)
    sync()
    return () => {
      a.removeEventListener('play', sync)
      a.removeEventListener('pause', sync)
    }
  }, [])

  const toggle = () => {
    const a = getAudio()
    if (!a) return
    if (a.paused) {
      userPaused = false
      a.dataset.started = '1'
      play()
    } else {
      userPaused = true
      clearInterval(fadeTimer)
      a.pause()
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? 'Pause music' : 'Play music'}
      aria-pressed={playing}
      className="fixed z-40 grid place-items-center rounded-full"
      style={{
        right: 16,
        bottom: 'calc(18px + env(safe-area-inset-bottom))',
        width: 44,
        height: 44,
        color: 'var(--gold)',
        background: 'color-mix(in oklch, var(--emerald-ink) 88%, transparent)',
        border: '1px solid color-mix(in oklch, var(--gold) 55%, transparent)',
        boxShadow: 'var(--shadow-gold)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
      }}
    >
      {playing ? (
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
          {[2, 7, 12].map((x, i) => (
            <rect key={x} x={x} y="3" width="3" height="12" rx="1.5" fill="currentColor">
              <animate
                attributeName="height"
                values="12;5;9;12"
                dur={`${0.9 + i * 0.25}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values="3;10;6;3"
                dur={`${0.9 + i * 0.25}s`}
                repeatCount="indefinite"
              />
            </rect>
          ))}
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
          <path d="M3 3l18 18" />
        </svg>
      )}
    </button>
  )
}
