"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface VideoPlayerProps {
  src: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function VideoPlayer({ src, style, className }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [progress, setProgress] = useState(0);
  const [showVolume, setShowVolume] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── Sync volume to video ─────────────────────────── */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.volume = muted ? 0 : volume;
    v.muted = muted;
  }, [muted, volume]);

  /* ── Progress bar ─────────────────────────────────── */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => setProgress((v.currentTime / v.duration) * 100 || 0);
    v.addEventListener("timeupdate", onTime);
    return () => v.removeEventListener("timeupdate", onTime);
  }, []);

  /* ── Auto-hide controls ───────────────────────────── */
  const resetHideTimer = useCallback(() => {
    setShowControls(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setShowControls(false), 2800);
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
    resetHideTimer();
  };

  const toggleMute = () => {
    setMuted((m) => !m);
    resetHideTimer();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (val === 0) setMuted(true);
    else setMuted(false);
    resetHideTimer();
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const t = (parseFloat(e.target.value) / 100) * v.duration;
    v.currentTime = t;
    setProgress(parseFloat(e.target.value));
    resetHideTimer();
  };

  return (
    <div
      style={{ position: "relative", width: "100%", height: "100%", ...style }}
      className={className}
      onMouseMove={resetHideTimer}
      onTouchStart={resetHideTimer}
      onClick={togglePlay}
    >
      {/* ── Video element ── */}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />

      {/* ── Controls overlay ── */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "0.5rem 0.9rem 0.7rem",
          background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)",
          opacity: showControls ? 1 : 0,
          transition: "opacity 0.3s ease",
          display: "flex",
          flexDirection: "column",
          gap: "0.35rem",
        }}
      >
        {/* Progress bar */}
        <input
          type="range"
          min={0}
          max={100}
          step={0.1}
          value={progress}
          onChange={handleSeek}
          onClick={(e) => e.stopPropagation()}
          style={{ width: "100%", accentColor: "#FCA259", cursor: "pointer" }}
        />

        {/* Bottom row: play + volume */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          {/* Play / Pause */}
          <button
            onClick={(e) => { e.stopPropagation(); togglePlay(); }}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "0.2rem", display: "flex", alignItems: "center", justifyContent: "center" }}
            aria-label={playing ? "Pausar" : "Reproducir"}
          >
            {playing ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#FCA259">
                <rect x="5" y="3" width="4" height="18" rx="1"/>
                <rect x="15" y="3" width="4" height="18" rx="1"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#FCA259">
                <path d="M5 3l14 9-14 9V3z"/>
              </svg>
            )}
          </button>

          {/* Volume group */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
            onMouseEnter={() => setShowVolume(true)}
            onMouseLeave={() => setShowVolume(false)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); toggleMute(); }}
              style={{ background: "none", border: "none", cursor: "pointer", padding: "0.2rem", display: "flex", alignItems: "center", justifyContent: "center" }}
              aria-label={muted ? "Activar sonido" : "Silenciar"}
            >
              {muted || volume === 0 ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" fill="#FCA259"/>
                  <line x1="23" y1="9" x2="17" y2="15" stroke="#FCA259" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="17" y1="9" x2="23" y2="15" stroke="#FCA259" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FCA259" strokeWidth="2" strokeLinecap="round">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" fill="#FCA259" stroke="none"/>
                  <path d="M15.5 8.5a5 5 0 0 1 0 7"/>
                  <path d="M19 5a9 9 0 0 1 0 14"/>
                </svg>
              )}
            </button>

            {/* Volume slider — aparece al hover */}
            <div style={{ width: showVolume ? "5rem" : "0", overflow: "hidden", transition: "width 0.25s ease" }}>
              <input
                type="range"
                min={0}
                max={1}
                step={0.02}
                value={muted ? 0 : volume}
                onChange={handleVolumeChange}
                onClick={(e) => e.stopPropagation()}
                style={{ width: "5rem", accentColor: "#FCA259", cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Big play icon center (cuando está pausado) ── */}
      {!playing && (
        <div
          style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <div style={{
            width: "3.5rem", height: "3.5rem", borderRadius: "50%",
            background: "rgba(252,162,89,0.18)", border: "1px solid rgba(252,162,89,0.5)",
            display: "flex", alignItems: "center", justifyContent: "center",
            backdropFilter: "blur(4px)",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#FCA259">
              <path d="M5 3l14 9-14 9V3z"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
