import React from 'react';

/**
 * Enso + formule visual gebaseerd op het ORFHEUSS || OLYMPIA ontwerp.
 * Volledig SVG — geen externe afbeelding nodig.
 */
export const OrfheussBackground: React.FC = () => (
  <div className="orfheuss-bg" aria-hidden="true">
    <svg
      className="orfheuss-svg"
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {/* ── Enso cirkel (kwaststreek-effect via dasharray) ── */}
      <circle
        cx="300"
        cy="300"
        r="220"
        stroke="rgba(255,255,255,0.13)"
        strokeWidth="18"
        strokeLinecap="round"
        strokeDasharray="1230 200"
        strokeDashoffset="60"
      />
      {/* Binnenste subtiele ring */}
      <circle
        cx="300"
        cy="300"
        r="205"
        stroke="rgba(255,255,255,0.04)"
        strokeWidth="1"
        strokeDasharray="8 6"
      />

      {/* ── Hoofdtitel bovenin cirkel ── */}
      <text
        x="300"
        y="248"
        textAnchor="middle"
        fontFamily="'Inter', system-ui, sans-serif"
        fontSize="20"
        fontWeight="700"
        letterSpacing="4"
        fill="rgba(255,255,255,0.72)"
      >
        ORFHEUSS ‖ OLYMPIA
      </text>

      {/* Subtiele scheidingslijn */}
      <line x1="195" y1="260" x2="405" y2="260" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

      {/* ── Formules in cirkel ── */}
      <text x="300" y="286" textAnchor="middle" fontFamily="'Inter', monospace" fontSize="11.5" fill="rgba(255,255,255,0.38)" letterSpacing="0.5">
        ORFHEUSS ⊥ OLYMPIA
      </text>
      <text x="300" y="308" textAnchor="middle" fontFamily="'Inter', monospace" fontSize="10" fill="rgba(255,255,255,0.28)" letterSpacing="0.3">
        (Human × AI)_ORFHEUSS | OLYMPIA
      </text>
      <text x="300" y="325" textAnchor="middle" fontFamily="'Inter', monospace" fontSize="10" fill="rgba(255,255,255,0.22)" letterSpacing="0.3">
        ω, τ, σ_ext → Attunement
      </text>

      {/* Scheidingslijn midden */}
      <line x1="210" y1="338" x2="390" y2="338" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />

      <text x="300" y="357" textAnchor="middle" fontFamily="'Inter', monospace" fontSize="11" fill="rgba(255,255,255,0.32)" letterSpacing="0.5">
        ω ≤ f(τ − σ_ext)
      </text>
      <text x="300" y="375" textAnchor="middle" fontFamily="'Inter', monospace" fontSize="9.5" fill="rgba(255,255,255,0.2)" letterSpacing="0.3">
        Attunement iff ω ≤ f(τ − σ_ext)
      </text>
      <text x="300" y="393" textAnchor="middle" fontFamily="'Inter', monospace" fontSize="9.5" fill="rgba(255,255,255,0.18)" letterSpacing="0.3">
        ω ↑ ∧ τ→ ↑ ⇒ Coordination Failure
      </text>

      {/* Scheidingslijn onder */}
      <line x1="200" y1="405" x2="400" y2="405" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

      {/* Slotformule */}
      <text x="300" y="424" textAnchor="middle" fontFamily="'Inter', monospace" fontSize="9" fill="rgba(255,255,255,0.15)" letterSpacing="0.3">
        Meaning persists (ORFHEUSS)
      </text>
      <text x="300" y="439" textAnchor="middle" fontFamily="'Inter', monospace" fontSize="9" fill="rgba(255,255,255,0.15)" letterSpacing="0.3">
        ∧ control collapses (OLYMPIA)
      </text>

      {/* Kleine opening in de cirkel (enso-stijl — kwast die niet sluit) */}
      <path
        d="M 300 80 A 220 220 0 0 0 300 80"
        stroke="none"
      />
    </svg>
  </div>
);
