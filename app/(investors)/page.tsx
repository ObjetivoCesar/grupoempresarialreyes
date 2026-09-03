"use client";

import { useEffect, useRef, useState } from "react";
import VideoPlayer from "@/components/ui/VideoPlayer";

// ─── Hook Scroll Reveal ───────────────────────────────────────────────────────
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} style={{ transition: `all 0.65s ease ${delay}ms`, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}>
      {children}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ display: "inline-block", border: "1px solid rgba(252,162,89,0.45)", color: "#FCA259", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" as const, padding: "0.2rem 0.75rem", borderRadius: "999px" }}>
      {children}
    </span>
  );
}

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
      <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#FCA259" }}>{n}</span>
      <div style={{ flex: 1, height: "1px", background: "rgba(252,162,89,0.18)" }} />
      <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "rgba(237,232,209,0.35)" }}>{label}</span>
    </div>
  );
}

// ─── Card de Activo con imagen de fondo ─────────────────────────────────────
function AssetCard({ titulo, texto, imagenLabel, cifra, delay = 0, imagen }: {
  titulo: string; texto: string; imagenLabel: string; cifra?: string; delay?: number; imagen?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} style={{ position: "relative", borderRadius: "0.9rem", overflow: "hidden", minHeight: "22rem", display: "flex", flexDirection: "column", justifyContent: "flex-end", transition: `all 0.65s ease ${delay}ms`, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", backgroundColor: "rgba(20,18,14,0.65)" }}>
      {/* Fondo de imagen o placeholder */}
      {imagen ? (
        <img src={imagen} alt={titulo} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(108,118,84,0.28) 0%, rgba(20,18,14,0.65) 100%)", border: "1px dashed rgba(108,118,84,0.25)", borderRadius: "0.9rem" }}>
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.5rem", paddingBottom: "6rem" }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(108,118,84,0.3)" strokeWidth="1.2">
              <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
            </svg>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.57rem", color: "rgba(108,118,84,0.35)", letterSpacing: "0.08em", textTransform: "uppercase" as const, textAlign: "center" as const, padding: "0 1.5rem" }}>{imagenLabel}</span>
          </div>
        </div>
      )}
      {/* Gradiente inferior */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "72%", background: "linear-gradient(to top, rgba(26,29,23,0.98) 0%, rgba(26,29,23,0.75) 55%, transparent 100%)" }} />
      {/* Contenido */}
      <div style={{ position: "relative", padding: "1.5rem" }}>
        {cifra && <p style={{ fontFamily: "'Florenza', serif", fontSize: "clamp(1.1rem, 5vw, 1.5rem)", color: "#FCA259", margin: "0 0 0.25rem", lineHeight: 1.1, overflowWrap: "break-word" }}>{cifra}</p>}
        <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.92rem", color: "#EDE8D1", margin: "0 0 0.45rem" }}>{titulo}</h3>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.73rem", color: "rgba(237,232,209,0.58)", margin: 0, lineHeight: 1.75 }}>{texto}</p>
      </div>
    </div>
  );
}

// ─── Fila tabla ──────────────────────────────────────────────────────────────
function TR({ label, valor, bold, note }: { label: string; valor: string; bold?: boolean; note?: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.85rem 1.2rem", borderBottom: "1px solid rgba(255,255,255,0.045)", background: bold ? "rgba(252,162,89,0.07)" : "rgba(255,255,255,0.02)", gap: "1rem", flexWrap: "wrap" as const }}>
      <div>
        <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.78rem", color: "rgba(237,232,209,0.6)" }}>{label}</span>
        {note && <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.62rem", color: "rgba(237,232,209,0.32)", margin: "0.15rem 0 0" }}>{note}</p>}
      </div>
      <span style={{ fontFamily: bold ? "'Florenza', serif" : "'Poppins', sans-serif", fontSize: bold ? "1rem" : "0.82rem", fontWeight: bold ? "normal" : 600, color: bold ? "#FCA259" : "#EDE8D1", textAlign: "right" as const }}>{valor}</span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PÁGINA PRINCIPAL
// ═══════════════════════════════════════════════════════════════════════════════
export default function InvestorsPage() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const BG = "#1E221B";
  const NAV_OPAQUE = scrollY > 80;

  const S = ({ id, children, dark = false, bgImage, style }: { id: string; children: React.ReactNode; dark?: boolean; bgImage?: string; style?: React.CSSProperties }) => (
    <section id={id} style={{ position: "relative", padding: "6rem 1.5rem", background: dark ? "rgba(0,0,0,0.2)" : "transparent", ...style }}>
      {bgImage && (
        <>
          <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.55, zIndex: 0, pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(30,34,27,0.7), rgba(30,34,27,0.95))", zIndex: 0, pointerEvents: "none" }} />
        </>
      )}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "54rem", margin: "0 auto" }}>{children}</div>
    </section>
  );

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: "#EDE8D1", background: BG, minHeight: "100vh" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: rgba(252,162,89,0.3); color: #EDE8D1; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: rgba(108,118,84,0.45); border-radius: 4px; }

        .btn-primary {
          font-family: 'Poppins', sans-serif; font-size: 0.78rem; font-weight: 600;
          letter-spacing: 0.04em; color: #FFFFFF; background: #43281C;
          border: 1px solid rgba(252,162,89,0.3); border-radius: 999px;
          padding: 0.72rem 1.6rem; cursor: pointer; text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.4rem; transition: all 0.25s ease;
        }
        .btn-primary:hover { background: #FCA259; color: #43281C; transform: scale(1.04); box-shadow: 0 8px 24px rgba(252,162,89,0.28); }
        .btn-ghost {
          font-family: 'Poppins', sans-serif; font-size: 0.78rem; font-weight: 600;
          letter-spacing: 0.04em; color: #EDE8D1; background: transparent;
          border: 1px solid rgba(237,232,209,0.22); border-radius: 999px;
          padding: 0.72rem 1.6rem; cursor: pointer; text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.4rem; transition: all 0.25s ease;
        }
        .btn-ghost:hover { border-color: #FCA259; color: #FCA259; }
        .nav-link { font-family: 'Poppins', sans-serif; font-size: 0.68rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(237,232,209,0.6); text-decoration: none; padding: 0.35rem 0.65rem; border-radius: 0.3rem; transition: all 0.18s; }
        .nav-link:hover { color: #FCA259; background: rgba(108,118,84,0.18); }

        .desktop-nav { display: flex; align-items: center; gap: 0.1rem; }
        .mobile-toggle { display: none; background: transparent; border: none; color: #EDE8D1; font-size: 1.5rem; cursor: pointer; padding: 0.5rem; }
        .mobile-menu { display: none; flex-direction: column; gap: 1rem; position: absolute; top: 100%; left: 0; right: 0; background: rgba(30,34,27,0.98); padding: 2rem; border-bottom: 1px solid rgba(108,118,84,0.22); backdrop-filter: blur(20px); }
        
        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .mobile-toggle { display: block; }
          .mobile-menu.open { display: flex; }
          .hero-title { font-size: 2.2rem !important; }
        }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes pulse { 0% { transform: scale(0.85); opacity: 0.7; } 100% { transform: scale(1.5); opacity: 0; } }
        @keyframes bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes grain {
          0%,100%{transform:translate(0,0)} 10%{transform:translate(-4%,-4%)}
          30%{transform:translate(2%,-2%)} 50%{transform:translate(-2%,4%)}
          70%{transform:translate(4%,2%)} 90%{transform:translate(-2%,-2%)}
        }
      `}</style>

      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, height: "4.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2rem", background: (NAV_OPAQUE || menuOpen) ? "rgba(30,34,27,0.98)" : "transparent", backdropFilter: (NAV_OPAQUE || menuOpen) ? "blur(20px)" : "none", borderBottom: (NAV_OPAQUE || menuOpen) ? "1px solid rgba(108,118,84,0.22)" : "none", transition: "all 0.35s ease" }}>
        <a href="#hero" style={{ textDecoration: "none", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <img src="/logo-letras.png" alt="Aroma de Montaña" style={{ height: "24px", objectFit: "contain", marginBottom: "4px" }} />
          <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.48rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#FCA259", marginTop: "1px" }}>Expediente de Inversión</div>
        </a>
        
        <div className="desktop-nav">
          <a href="#mercado" className="nav-link">El Mercado</a>
          <a href="#activo" className="nav-link">El Activo</a>
          <a href="#modelo" className="nav-link">El Modelo</a>
          <a href="#traccion" className="nav-link">Tracción</a>
          <a href="#contacto" className="btn-primary" style={{ marginLeft: "0.75rem", fontSize: "0.68rem", padding: "0.45rem 1rem" }}>Hablemos →</a>
        </div>

        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <a href="#mercado" className="nav-link" onClick={() => setMenuOpen(false)}>El Mercado</a>
          <a href="#activo" className="nav-link" onClick={() => setMenuOpen(false)}>El Activo</a>
          <a href="#modelo" className="nav-link" onClick={() => setMenuOpen(false)}>El Modelo</a>
          <a href="#traccion" className="nav-link" onClick={() => setMenuOpen(false)}>Tracción</a>
          <a href="#contacto" className="btn-primary" style={{ justifyContent: "center", marginTop: "1rem" }} onClick={() => setMenuOpen(false)}>Hablemos →</a>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section id="hero" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "8rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
        {/* Radial verde */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 55% at 50% 44%, rgba(108,118,84,0.14) 0%, transparent 70%)", pointerEvents: "none" }} />
        {/* Grano */}
        <div style={{ position: "absolute", inset: "-50%", backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='0.04'/%3E%3C/svg%3E")`, animation: "grain 9s steps(10) infinite", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(30,34,27,0.15) 0%, rgba(30,34,27,0.55) 65%, rgba(30,34,27,0.98) 100%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", maxWidth: "46rem" }}>
          {/* Tags */}
          <div style={{ display: "flex", gap: "0.55rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "1.6rem", animation: "fadeUp 0.7s ease forwards" }}>
            <Tag>Reserva de Biosfera UNESCO · Loja, Ecuador</Tag>
            <Tag>S.A.S. B.I.C. — Impacto reportado por ley</Tag>
          </div>

          {/* H1 — Opción A */}
          <h1 className="hero-title" style={{ fontFamily: "'Florenza', serif", fontSize: "clamp(2.4rem, 5.8vw, 4.5rem)", color: "#EDE8D1", lineHeight: 1.1, margin: "0 0 1rem", animation: "fadeUp 0.7s ease 0.1s both" }}>
            La tierra ya está.<br />
            <em style={{ color: "#FCA259" }}>Ahora estamos construyendo el negocio.</em>
          </h1>

          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(0.9rem, 1.7vw, 1.05rem)", color: "rgba(237,232,209,0.65)", lineHeight: 1.9, margin: "0 0 0.6rem", animation: "fadeUp 0.7s ease 0.2s both" }}>
            23,5 hectáreas en operación · USD 211.266 ejecutados en terreno · Licencias aprobadas · Marca registrada
          </p>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.8rem", color: "rgba(237,232,209,0.4)", lineHeight: 1.7, margin: "0 0 2.5rem", animation: "fadeUp 0.7s ease 0.28s both" }}>
            Buscamos capital para lanzar el glamping Alpino semilla, terminar la casa modelo y la cafetería, y financiar el posicionamiento comercial.
          </p>

          {/* Video */}
          <div style={{ animation: "fadeUp 0.7s ease 0.38s both", marginBottom: "2.5rem" }}>
            <div style={{ position: "relative", maxWidth: "33rem", margin: "0 auto", aspectRatio: "16/9", borderRadius: "0.9rem", overflow: "hidden", border: "1px solid rgba(252,162,89,0.18)" }}>
              <VideoPlayer
                src="https://cesarweb.b-cdn.net/aroma-assets/Tutellus/Versi%C3%B3n%20web%20Aroma%20de%20Monta%C3%B1a.mp4"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.9rem", justifyContent: "center", flexWrap: "wrap", animation: "fadeUp 0.7s ease 0.48s both" }}>
            <a href="#mercado" className="btn-primary">Ver la oportunidad →</a>
            <a href="#contacto" className="btn-ghost">Conversemos</a>
          </div>

          {/* Scroll dot */}
          <div style={{ marginTop: "4rem", display: "flex", justifyContent: "center", animation: "fadeIn 1s ease 1.2s both" }}>
            <div style={{ position: "relative", width: "1.6rem", height: "1.6rem" }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid rgba(252,162,89,0.3)", animation: "pulse 2.4s ease-out infinite" }} />
              <div style={{ position: "absolute", inset: "0.38rem", borderRadius: "50%", background: "#FCA259", animation: "bob 2.8s ease-in-out infinite" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 0: EL MERCADO (por qué ahora) ─────────────────────────── */}
      <S id="mercado" dark>
        <SectionLabel n="00" label="La Oportunidad" />
        <Reveal>
          <h2 style={{ fontFamily: "'Florenza', serif", fontSize: "clamp(1.8rem, 3.6vw, 2.8rem)", color: "#EDE8D1", lineHeight: 1.18, margin: "0 0 1rem" }}>
            El mercado está creciendo.<br />
            <em style={{ color: "#FCA259" }}>Y Loja tiene un activo que ese mercado no puede fabricar.</em>
          </h2>
          <p style={{ color: "rgba(237,232,209,0.55)", fontSize: "0.9rem", lineHeight: 1.85, maxWidth: "38rem", marginBottom: "3rem" }}>
            Ecuador es el país con el mayor índice de estrés de Latinoamérica (Gallup 2023). Más de <strong style={{ color: "#EDE8D1" }}>550.000 hogares</strong> en Quito, Guayaquil y Cuenca buscan desconexión — y no existe en la zona de Paltas-Loja un glamping estructurado que los reciba.
          </p>
        </Reveal>

        {/* Stats de mercado — datos reales */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))", gap: "1rem", marginBottom: "1rem" }}>
          {[
            { cifra: "USD 894B", label: "Turismo Wellness (2024)", detalle: "Tamaño global del turismo de bienestar en 2024 según Global Wellness Institute." },
            { cifra: "7,6%", label: "Crecimiento anual", detalle: "Crecimiento anual proyectado de la economía wellness hasta 2029." },
            { cifra: "USD 9,8T", label: "Proyección global (2029)", detalle: "Tamaño proyectado de la economía global del wellness en 2029." },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <div style={{ padding: "1.5rem", background: "rgba(108,118,84,0.1)", border: "1px solid rgba(108,118,84,0.2)", borderRadius: "0.85rem", height: "100%" }}>
                <p style={{ fontFamily: "'Florenza', serif", fontSize: "1.9rem", color: "#FCA259", margin: "0 0 0.2rem", lineHeight: 1 }}>{s.cifra}</p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.72rem", fontWeight: 700, color: "#EDE8D1", textTransform: "uppercase" as const, letterSpacing: "0.08em", margin: "0 0 0.5rem" }}>{s.label}</p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.72rem", color: "rgba(237,232,209,0.5)", lineHeight: 1.7, margin: 0 }}>{s.detalle}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Dato de gasto diario */}
        <Reveal delay={180}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))", gap: "0.75rem", marginBottom: "2rem" }}>
            {[
              { n: "USD 300–500", d: "Tarifa prevista por noche para una unidad completa en Aroma de Montaña" },
              { n: "550.000+", d: "Hogares estratos B/C+ en Quito, Guayaquil y Cuenca con capacidad de pago" },
              { n: "1,6M ha", d: "Reserva de Biosfera Transfronteriza Bosques de Paz UNESCO — Ecuador / Perú" },
            ].map((d, i) => (
              <div key={i} style={{ padding: "1rem 1.25rem", background: "rgba(252,162,89,0.05)", border: "1px solid rgba(252,162,89,0.12)", borderRadius: "0.75rem" }}>
                <p style={{ fontFamily: "'Florenza', serif", fontSize: "1.25rem", color: "#FCA259", margin: "0 0 0.25rem", lineHeight: 1 }}>{d.n}</p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.67rem", color: "rgba(237,232,209,0.45)", lineHeight: 1.6, margin: 0 }}>{d.d}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Frase de cierre */}
        <Reveal delay={250}>
          <div style={{ padding: "1.75rem 2rem", background: "rgba(67,40,28,0.25)", border: "1px solid rgba(252,162,89,0.18)", borderRadius: "0.85rem", borderLeft: "3px solid #FCA259" }}>
            <p style={{ fontFamily: "'Florenza', serif", fontSize: "clamp(1.1rem, 2vw, 1.45rem)", color: "rgba(237,232,209,0.85)", lineHeight: 1.65, margin: 0 }}>
              "La oportunidad no depende de crear el mercado. Depende de capturar una pequeña parte de él desde un activo que ya existe."
            </p>
          </div>
        </Reveal>
      </S>

      {/* ── SECCIÓN CREMITA: RESPIRO VISUAL ─────────────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", background: "#EDE8D1" }}>
        <div style={{ maxWidth: "54rem", margin: "0 auto" }}>
          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "1.5rem" }}>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "#6C7654" }}>Aroma de Montaña · Loja, Ecuador</span>
              <h2 style={{ fontFamily: "'Florenza', serif", fontSize: "clamp(1.4rem, 3vw, 2.2rem)", color: "#43281C", lineHeight: 1.22, maxWidth: "38rem", margin: 0 }}>
                23,5 hectáreas dentro de la Reserva de Biosfera UNESCO.
              </h2>
              <p style={{ fontFamily: "'Florenza', serif", fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", color: "#6C7654", margin: "0", lineHeight: 1.3 }}>
                A 1.874 m.s.n.m. y microclima primaveral todo el año.
              </p>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.86rem", color: "rgba(67,40,28,0.65)", lineHeight: 1.85, maxWidth: "35rem", margin: 0 }}>
                Café de especialidad Sidra, Borbón y Típica Mejorada. Cielos Bortle 3–4 libres de contaminación lumínica. 
                Una ubicación que el mercado de bienestar global no puede fabricar — solo encontrar.
              </p>
              <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap" as const, justifyContent: "center", marginTop: "0.5rem" }}>
                {["Reserva UNESCO ✓", "Altitud 1.874 m ✓", "Astroturismo Bortle 3–4 ✓", "Café de Especialidad ✓", "S.A.S. B.I.C. ✓"].map(tag => (
                  <span key={tag} style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.64rem", fontWeight: 600, color: "#43281C", background: "rgba(67,40,28,0.08)", border: "1px solid rgba(67,40,28,0.18)", borderRadius: "999px", padding: "0.28rem 0.9rem", letterSpacing: "0.04em" }}>{tag}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div style={{ height: "1px", background: "rgba(255,255,255,0.04)", margin: "0 2rem" }} />

      {/* ── SECCIÓN 1: EL ACTIVO ─────────────────────────────────────────── */}
      <S id="activo">
        <SectionLabel n="01" label="El Activo" />
        <Reveal>
          <h2 style={{ fontFamily: "'Florenza', serif", fontSize: "clamp(1.8rem, 3.6vw, 2.8rem)", color: "#EDE8D1", lineHeight: 1.18, margin: "0 0 0.85rem" }}>
            Lo que respalda este proyecto<br />
            <em style={{ color: "#FCA259" }}>ya está en el suelo.</em>
          </h2>
          <p style={{ color: "rgba(237,232,209,0.55)", fontSize: "0.88rem", lineHeight: 1.85, marginBottom: "3rem", maxWidth: "38rem" }}>
            No estamos presentando una idea que hay que demostrar. El terreno está escriturado, los permisos aprobados, las vías abiertas y los cultivos en producción. Contamos con <strong style={{ color: "#EDE8D1" }}>USD 211.266 de inversión ejecutada y documentada</strong>. El avalúo bancario verificó USD 152.473 de activos físicos. La diferencia corresponde a inversiones y activos adicionales no incorporados en esa valoración.
          </p>
        </Reveal>

        {/* Cards 2x2 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
          <AssetCard titulo="Agua propia" cifra="8.000 m³" texto="Dos reservorios, tres albarradas ancestrales y pozo propio. Soberanía hídrica total en zona de bosque seco — sin dependencia de redes externas." imagenLabel="ESPACIO: reservorio principal — plano general" delay={0} imagen="https://cesarweb.b-cdn.net/aroma-assets/Images/optimized/Trabajos/PXL_20231130_163726700.webp" />
          <AssetCard titulo="Acceso y vías" cifra="3 km habilitados" texto="Vías internas abiertas sobre la Panamericana E35. A 40 minutos del aeropuerto de Catamayo, sin accesos de tierra difícil." imagenLabel="ESPACIO: vía interna desde la entrada" delay={80} imagen="https://cesarweb.b-cdn.net/aroma-assets/Paisajes/PXL_20240715_181152547.webp" />
          <AssetCard titulo="Café de especialidad" cifra="5.000 plantas" texto="Variedades Sidra, Borbón y Típica Mejorada certificadas en 5 hectáreas. Alianza técnica con Hacienda La Florida, ganadora de la Taza Dorada 2020." imagenLabel="ESPACIO: cafetal o vivero certificado" delay={160} imagen="https://cesarweb.b-cdn.net/aroma-assets/Images/optimized/Caf%C3%A9%20-%20Especialidad/PXL_20240316_163900968.webp" />
          <AssetCard titulo="Territorio habilitado" cifra="6 km de senderos" texto="Senderos interpretativos señalizados, parqueadero de 600 m² y casa modelo en construcción. La experiencia ya tiene forma." imagenLabel="ESPACIO: sendero principal o casa modelo" delay={240} imagen="https://cesarweb.b-cdn.net/aroma-assets/Visitantes/PXL_20240131_174119337.webp" />
        </div>

        {/* Card cumplimiento horizontal */}
        <Reveal delay={300}>
          <div style={{ padding: "1.5rem 2rem", background: "rgba(108,118,84,0.09)", border: "1px solid rgba(108,118,84,0.22)", borderRadius: "0.85rem", display: "flex", gap: "2rem", flexWrap: "wrap" as const, alignItems: "center" }}>
            <div style={{ flex: "1 1 200px" }}>
              <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.82rem", color: "#EDE8D1", margin: "0 0 0.3rem" }}>Cumplimiento regulatorio completo</h4>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.74rem", color: "rgba(237,232,209,0.5)", margin: 0, lineHeight: 1.7 }}>Licencia ambiental MAATE · Marca registrada SENADI (10 años) · Avalúo bancario SBS: USD 152.473</p>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" as const }}>
              {["MAATE ✓", "SENADI ✓", "SBS ✓"].map(b => (
                <span key={b} style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.65rem", fontWeight: 700, color: "#6C7654", background: "rgba(108,118,84,0.15)", border: "1px solid rgba(108,118,84,0.28)", borderRadius: "0.3rem", padding: "0.3rem 0.7rem", letterSpacing: "0.08em" }}>{b}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </S>

      <div style={{ height: "1px", background: "rgba(255,255,255,0.04)", margin: "0 2rem" }} />

      {/* ── SECCIÓN 2: EL MODELO ──────────────────────────────────────────── */}
      <S id="modelo" dark bgImage="https://cesarweb.b-cdn.net/aroma-assets/250k/exterior.jpg">
        <SectionLabel n="02" label="El Modelo" />
        <Reveal>
          <h2 style={{ fontFamily: "'Florenza', serif", fontSize: "clamp(1.8rem, 3.6vw, 2.8rem)", color: "#EDE8D1", lineHeight: 1.18, margin: "0 0 0.85rem" }}>
            Cada glamping Alpino<br />
            <em style={{ color: "#FCA259" }}>se paga antes de construirse.</em>
          </h2>
          <p style={{ color: "rgba(237,232,209,0.55)", fontSize: "0.88rem", lineHeight: 1.85, marginBottom: "2.5rem", maxWidth: "40rem" }}>
            El comprador de cada unidad aporta el 35% de entrada al momento de la reserva. Con ese monto se ejecuta la construcción completa del glamping. La unidad solo se instala cuando ya tiene propietario: el riesgo tradicional de construir sin demanda está eliminado por diseño.
          </p>
        </Reveal>

        {/* Reparto por noche */}
        <Reveal delay={80}>
          <div style={{ marginBottom: "2rem", border: "1px solid rgba(108,118,84,0.25)", borderRadius: "0.85rem", overflow: "hidden" }}>
            <div style={{ padding: "1rem 1.2rem", background: "rgba(108,118,84,0.12)", borderBottom: "1px solid rgba(108,118,84,0.18)" }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: "rgba(237,232,209,0.5)", margin: 0 }}>Así se divide una noche · Tarifa promedio USD 400 (incluye desayuno y comida)</p>
            </div>
            <TR label="Precio promedio ponderado al huésped" valor="USD 400,00" note="USD 300 temporada baja · USD 500 temporada alta · alquiler por casa completa" />
            <TR label="IVA 15% (Ecuador) — cobrado al huésped y liquidado al SRI" valor="– USD 60,00" note="Turistas extranjeros: 0% IVA. Feriados en catastro turístico: 8% IVA." />
            <TR label="Venta neta para reparto (post-IVA)" valor="USD 340,00" />
            <TR label="Al propietario del glamping Alpino (50%)" valor="USD 170,00" bold />
            <TR label="A la hacienda — personal, mantenimiento, operación (50%)" valor="USD 170,00" />
          </div>
        </Reveal>

        {/* ROI y escenarios — CIFRAS RECALCULADAS */}
        <Reveal delay={160}>
          <div style={{ border: "1px solid rgba(252,162,89,0.15)", borderRadius: "0.85rem", overflow: "hidden" }}>
            <div style={{ padding: "1rem 1.2rem", background: "rgba(252,162,89,0.06)", borderBottom: "1px solid rgba(252,162,89,0.12)" }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: "#FCA259", margin: 0 }}>
                Retorno proyectado anual · Escenarios con supuestos, no promesas
              </p>
            </div>
            {[
              { esc: "Conservador", ocu: "24%", noches: "88 noches comercializadas", roi: "15%", usd: "USD 15.000 / año", highlight: false },
              { esc: "Base", ocu: "31%", noches: "112 noches comercializadas", roi: "19%", usd: "USD 19.000 / año", highlight: true },
              { esc: "Optimista", ocu: "39%", noches: "141 noches comercializadas", roi: "24%", usd: "USD 24.000 / año", highlight: false },
            ].map(({ esc, ocu, noches, roi, usd, highlight }, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(6rem, 1fr))", padding: "0.9rem 1.2rem", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.045)" : undefined, background: highlight ? "rgba(252,162,89,0.05)" : "rgba(255,255,255,0.015)", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.82rem", fontWeight: highlight ? 700 : 600, color: highlight ? "#EDE8D1" : "rgba(237,232,209,0.7)" }}>{esc} ({ocu})</span>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.7rem", color: "rgba(237,232,209,0.35)" }}>{noches}</span>
                <span style={{ fontFamily: "'Florenza', serif", fontSize: "1.1rem", color: highlight ? "#FCA259" : "rgba(252,162,89,0.6)" }}>{roi}</span>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.74rem", color: highlight ? "rgba(237,232,209,0.75)" : "rgba(237,232,209,0.42)", textAlign: "right" as const }}>{usd}</span>
              </div>
            ))}
            <div style={{ padding: "0.75rem 1.2rem", background: "rgba(0,0,0,0.15)" }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.63rem", color: "rgba(237,232,209,0.32)", margin: 0, lineHeight: 1.65 }}>
                USD 170/noche al propietario (tarifa USD 400 promedio · IVA 15% · reparto 50/50) · ROI calculado sobre el valor total de la unidad USD 100.000 · El escenario conservador (24%) está 10 puntos bajo el promedio sectorial de lodges boutique andinos en Ecuador (35–50% — AHE). Los motores de demanda incluyen operadores turísticos, retiros de bienestar y retiros corporativos.
              </p>
            </div>
          </div>
        </Reveal>
      </S>

      <div style={{ height: "1px", background: "rgba(255,255,255,0.04)", margin: "0 2rem" }} />

      {/* ── SECCIÓN 3: TRACCIÓN (Movida antes del capital) ────────────────── */}
      <S id="traccion" dark>
        <SectionLabel n="03" label="Tracción" />
        <Reveal>
          <h2 style={{ fontFamily: "'Florenza', serif", fontSize: "clamp(1.8rem, 3.6vw, 2.8rem)", color: "#EDE8D1", lineHeight: 1.18, margin: "0 0 0.85rem" }}>
            La base está construida.<br />
            <em style={{ color: "#FCA259" }}>El capital nos lleva al siguiente nivel.</em>
          </h2>
          <p style={{ color: "rgba(237,232,209,0.5)", fontSize: "0.86rem", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "38rem" }}>
            El proyecto está al 50% de su potencial: tierra, agua, vías, licencias y cultivos están listos. Lo que falta es encender la operación comercial — eso es exactamente para lo que buscamos este capital.
          </p>
        </Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
          {[
            { icon: "📋", text: "Campaña comercial activa sobre la base calificada de operadores del Ministerio de Turismo (MINTUR)." },
            { icon: "✅", text: "Acuerdo de flujos firmado con Abad Castillo Travel — turismo receptivo, canal nacional e internacional." },
            { icon: "🤝", text: "Alianza técnica con Hacienda La Florida, ganadora Taza Dorada 2020 — respaldo técnico en café de especialidad." },
            { icon: "⏳", text: "[ESPACIO: número de compradores interesados o cartas de intención — actualizar antes de compartir este link]" },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 70}>
              <div style={{ display: "flex", gap: "1rem", padding: "1.2rem 1.4rem", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.055)", borderRadius: "0.7rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "0.1rem" }}>{item.icon}</span>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.82rem", color: item.icon === "⏳" ? "rgba(237,232,209,0.38)" : "rgba(237,232,209,0.7)", margin: 0, lineHeight: 1.78, fontStyle: item.icon === "⏳" ? "italic" : "normal" }}>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </S>

      <div style={{ height: "1px", background: "rgba(255,255,255,0.04)", margin: "0 2rem" }} />

      {/* ── SECCIÓN 4: USO DEL CAPITAL ───────────────────────────────────── */}
      <S id="capital">
        <SectionLabel n="04" label="Uso del Capital" />
        <Reveal>
          <h2 style={{ fontFamily: "'Florenza', serif", fontSize: "clamp(1.8rem, 3.6vw, 2.8rem)", color: "#EDE8D1", lineHeight: 1.18, margin: "0 0 0.85rem" }}>
            Este capital no adquiere los glampings.<br />
            <em style={{ color: "#FCA259" }}>Los adquieren los propios socios.</em>
          </h2>
          <p style={{ color: "rgba(237,232,209,0.55)", fontSize: "0.88rem", lineHeight: 1.85, marginBottom: "2.5rem", maxWidth: "38rem" }}>
            EUR 150.000 de capital de arranque para encender la operación comercial antes de que llegue el primer comprador de glamping.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div style={{ border: "1px solid rgba(108,118,84,0.25)", borderRadius: "0.85rem", overflow: "hidden", marginBottom: "2rem" }}>
            <div style={{ padding: "1rem 1.2rem", background: "rgba(108,118,84,0.12)", borderBottom: "1px solid rgba(108,118,84,0.18)" }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: "rgba(237,232,209,0.5)", margin: 0 }}>Desglose EUR 150.000 — Tipo de cambio referencial 1 EUR ≈ 1,08 USD</p>
            </div>
            <TR label="Glamping Alpino semilla — demostración en terreno" valor="EUR 23.000" note="≈ USD 25.000" />
            <TR label="Cafetería y área social — abre caja desde el mes 2, independiente del hospedaje" valor="EUR 42.000" note="≈ USD 45.000" />
            <TR label="Posicionamiento digital y atracción de compradores de unidad" valor="EUR 47.000" note="≈ USD 51.000" />
            <TR label="Capital de trabajo — gerencia profesional, personal local, sistemas" valor="EUR 38.000" note="≈ USD 41.000" />
            <TR label="Total" valor="EUR 150.000" bold />
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div style={{ padding: "2rem", background: "rgba(252,162,89,0.05)", border: "1px solid rgba(252,162,89,0.15)", borderRadius: "0.85rem", borderLeft: "3px solid #FCA259" }}>
            <p style={{ fontFamily: "'Florenza', serif", fontSize: "1.1rem", color: "rgba(237,232,209,0.82)", lineHeight: 1.75, margin: 0 }}>
              Cada comprador de glamping Alpino aporta USD 35.000 de entrada al firmar. Tres compradores devuelven el capital de arranque <strong style={{ color: "#EDE8D1", fontFamily: "'Poppins', sans-serif", fontSize: "0.88rem" }}>solo con las entradas iniciales.</strong> El sistema está diseñado para financiarse a sí mismo desde la primera operación.
            </p>
          </div>
        </Reveal>
      </S>

      <div style={{ height: "1px", background: "rgba(255,255,255,0.04)", margin: "0 2rem" }} />

      {/* ── SECCIÓN 5: EL FUNDADOR ───────────────────────────────────────── */}
      <S id="fundador">
        <SectionLabel n="05" label="El Fundador" />
        <Reveal>
          <h2 style={{ fontFamily: "'Florenza', serif", fontSize: "clamp(1.8rem, 3.6vw, 2.8rem)", color: "#EDE8D1", lineHeight: 1.18, margin: "0 0 1.25rem" }}>
            Más de USD 200.000 de capital propio<br />
            <em style={{ color: "#FCA259" }}>ya están en el activo.</em>
          </h2>
          <div style={{ maxWidth: "42rem" }}>
            <p style={{ color: "rgba(237,232,209,0.6)", fontSize: "0.88rem", lineHeight: 1.88, marginBottom: "1.25rem" }}>
              César Reyes Jaramillo no presenta un proyecto desde cero. Ha invertido su propio patrimonio en hacer realidad lo que otros planean: agua, vías, cultivos, licencias, marca. Cada metro de vía y cada hectárea habilitada salieron de su bolsillo.
            </p>
            <p style={{ color: "rgba(237,232,209,0.6)", fontSize: "0.88rem", lineHeight: 1.88, margin: 0 }}>
              La operación se delega a gerentes profesionales y la estructura S.A.S. B.I.C. obliga por ley al reporte anual de impacto y a la rendición de cuentas pública. <strong style={{ color: "#EDE8D1" }}>El fundador es el arquitecto — no el administrador del día a día.</strong>
            </p>
          </div>
        </Reveal>
      </S>

      <div style={{ height: "1px", background: "rgba(255,255,255,0.04)", margin: "0 2rem" }} />

      {/* ── SECCIÓN 6: LA MISIÓN ─────────────────────────────────────────── */}
      <section id="mision" style={{ padding: "6rem 1.5rem", background: "#EDE8D1" }}>
        <div style={{ maxWidth: "54rem", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6C7654" }}>06</span>
            <div style={{ flex: 1, height: "1px", background: "rgba(108,118,84,0.3)" }} />
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(67,40,28,0.5)" }}>La Misión</span>
          </div>
          <Reveal>
            <blockquote style={{ fontFamily: "'Florenza', serif", fontSize: "clamp(1.4rem, 2.8vw, 2.1rem)", color: "#43281C", lineHeight: 1.68, margin: "0 0 2rem", borderLeft: "3px solid #FCA259", paddingLeft: "1.75rem" }}>
              No vendemos hospedaje:<br /><span style={{ color: "#6C7654" }}>regeneramos la tierra y reconectamos vidas.</span>
            </blockquote>
            <p style={{ fontFamily: "'Poppins', sans-serif", color: "rgba(67,40,28,0.7)", fontSize: "0.88rem", lineHeight: 1.88, maxWidth: "40rem", marginBottom: "1rem" }}>
              Cada glamping Alpino instalado financia un ecosistema vivo: agricultura regenerativa sin químicos, recarga de acuíferos con tecnología ancestral Palta, y una operación que compra directamente a productores, artesanos y guías locales de Loja.
            </p>
            <p style={{ fontFamily: "'Poppins', sans-serif", color: "rgba(67,40,28,0.7)", fontSize: "0.88rem", lineHeight: 1.88, maxWidth: "40rem" }}>
              <strong style={{ color: "#43281C" }}>B.I.C. no es nuestro eslogan: es nuestra obligación legal.</strong> El nodo de Loja es el prototipo. La cordillera, el mercado que sigue.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACTO CTA ─────────────────────────────────────────────────── */}
      <section id="contacto" style={{ padding: "6rem 1.5rem", background: "rgba(0,0,0,0.28)", textAlign: "center" as const }}>
        <div style={{ maxWidth: "36rem", margin: "0 auto" }}>
          <Reveal>
            <Tag>07 — Hablemos</Tag>
            <div style={{ width: "2.5rem", height: "2px", background: "linear-gradient(90deg,#FCA259,transparent)", margin: "1.4rem auto" }} />
            <h2 style={{ fontFamily: "'Florenza', serif", fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)", color: "#EDE8D1", margin: "0 0 0.75rem" }}>
              Conversemos.
            </h2>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.86rem", color: "rgba(237,232,209,0.48)", margin: "0 0 2.5rem", lineHeight: 1.8 }}>
              Sin formularios. Sin intermediarios. Directo al grano.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}>
              <a href="https://wa.me/593963410409" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.135.562 4.134 1.543 5.865L.057 23.886a.5.5 0 0 0 .609.61l6.212-1.63A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.795 9.795 0 0 1-5.045-1.396l-.361-.214-3.742.981.998-3.645-.234-.374A9.797 9.797 0 0 1 2.182 12C2.182 6.574 6.574 2.182 12 2.182c5.426 0 9.818 4.392 9.818 9.818 0 5.426-4.392 9.818-9.818 9.818z"/>
                </svg>
                WhatsApp directo
              </a>
              <a href="mailto:negocios@cesarreyesjaramillo.com" className="btn-ghost">Correo electrónico</a>
            </div>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.63rem", color: "rgba(237,232,209,0.2)", letterSpacing: "0.05em", lineHeight: 1.75 }}>
              Este material es confidencial, compartido bajo invitación directa. No constituye oferta pública de valores.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.045)", padding: "2rem 1.5rem", textAlign: "center" as const }}>
        <p style={{ fontFamily: "'Florenza', serif", fontSize: "0.88rem", color: "rgba(237,232,209,0.22)", margin: "0 0 0.45rem" }}>
          Donde la tierra regenerativa encuentra la rentabilidad real.
        </p>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.6rem", color: "rgba(237,232,209,0.16)", letterSpacing: "0.07em" }}>
          © 2026 Grupo Empresarial Reyes S.A.S. B.I.C. · Paltas, Loja, Ecuador<br />
          Desarrollado por <a href="https://www.cesarreyesjaramillo.com/" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(237,232,209,0.35)", textDecoration: "underline" }}>César Reyes</a>
        </p>
      </footer>
    </div>
  );
}
