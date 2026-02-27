import React from 'react';

/** Enso + formule — transparant achtergrondwatermark */
export const OrfheussBackground: React.FC = () => (
  <div className="orfheuss-bg" aria-hidden="true">
    <svg
      className="orfheuss-svg"
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <circle cx="300" cy="300" r="226"
        stroke="rgba(255,255,255,0.07)" strokeWidth="22"
        strokeLinecap="round" strokeDasharray="1240 180" strokeDashoffset="50" />
      <circle cx="300" cy="300" r="207"
        stroke="rgba(255,255,255,0.025)" strokeWidth="1" strokeDasharray="6 7" />
      <text x="300" y="250" textAnchor="middle"
        fontFamily="'Inter',system-ui,sans-serif" fontSize="18" fontWeight="700"
        letterSpacing="5" fill="rgba(255,255,255,0.28)">ORFHEUSS ‖ OLYMPIA</text>
      <line x1="200" y1="261" x2="400" y2="261" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <text x="300" y="284" textAnchor="middle" fontFamily="monospace" fontSize="11"
        fill="rgba(255,255,255,0.14)" letterSpacing="0.5">ORFHEUSS ⊥ OLYMPIA</text>
      <text x="300" y="304" textAnchor="middle" fontFamily="monospace" fontSize="9.5"
        fill="rgba(255,255,255,0.10)">(Human × AI)_ORFHEUSS | OLYMPIA</text>
      <text x="300" y="321" textAnchor="middle" fontFamily="monospace" fontSize="9.5"
        fill="rgba(255,255,255,0.08)">ω, τ, σ_ext → Attunement</text>
      <line x1="215" y1="333" x2="385" y2="333" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
      <text x="300" y="351" textAnchor="middle" fontFamily="monospace" fontSize="11"
        fill="rgba(255,255,255,0.13)" letterSpacing="0.5">ω ≤ f(τ − σ_ext)</text>
      <text x="300" y="368" textAnchor="middle" fontFamily="monospace" fontSize="9"
        fill="rgba(255,255,255,0.08)">Attunement iff ω ≤ f(τ − σ_ext)</text>
      <text x="300" y="384" textAnchor="middle" fontFamily="monospace" fontSize="9"
        fill="rgba(255,255,255,0.07)">ω ↑ ∧ τ→ ↑ ⇒ Coordination Failure</text>
      <line x1="205" y1="396" x2="395" y2="396" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
      <text x="300" y="413" textAnchor="middle" fontFamily="monospace" fontSize="8.5"
        fill="rgba(255,255,255,0.07)">Meaning persists (ORFHEUSS)</text>
      <text x="300" y="428" textAnchor="middle" fontFamily="monospace" fontSize="8.5"
        fill="rgba(255,255,255,0.07)">∧ control collapses (OLYMPIA)</text>
    </svg>
  </div>
);
