import React from 'react';

interface OrfheussLogoProps {
  /** 'hero' = groot transparant watermark | 'nav' = klein opaque logo */
  variant?: 'hero' | 'nav';
  className?: string;
}

/**
 * ORFHEUSS enso-logo — zen-cirkel met ORFHEUSS / PRSYS tekst.
 * variant="nav"  → compact, opaque, geschikt voor navbar (28–32px hoog)
 * variant="hero" → groot, low-opacity watermark voor hero/achtergrond
 */
export const OrfheussLogo: React.FC<OrfheussLogoProps> = ({
  variant = 'nav',
  className,
}) => {
  const isNav = variant === 'nav';

  /* ── kleuren per variant ── */
  const ensoStroke   = isNav ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.18)';
  const ensoInner    = isNav ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.05)';
  const titleFill    = isNav ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.22)';
  const subFill      = isNav ? 'rgba(255,255,255,0.60)' : 'rgba(255,255,255,0.10)';
  const subSubFill   = isNav ? 'rgba(255,255,255,0.38)' : 'rgba(255,255,255,0.06)';
  const sepStroke    = isNav ? 'rgba(255,255,255,0.28)' : 'rgba(255,255,255,0.07)';
  const ensoWidth    = isNav ? 7 : 9;

  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-label="ORFHEUSS logo"
    >
      {/* ── subtiele binnenring ── */}
      <circle
        cx="100" cy="100" r="71"
        stroke={ensoInner}
        strokeWidth="0.75"
        strokeDasharray="3.5 5"
        fill="none"
      />

      {/* ── enso brush-stroke cirkel ──
          Start ~12 uur, draait 340° met een bewuste opening */}
      <path
        d="M 100 22
           A 78 78 0 1 1 117 24.8"
        stroke={ensoStroke}
        strokeWidth={ensoWidth}
        strokeLinecap="round"
        fill="none"
      />

      {/* ── tweede, dunnere binnenste boog voor diepte ── */}
      <path
        d="M 100 31
           A 69 69 0 1 1 113 33.5"
        stroke={ensoInner}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* ── ORFHEUSS ── */}
      <text
        x="100" y="94"
        textAnchor="middle"
        fontFamily="'EB Garamond', Georgia, serif"
        fontSize="17"
        fontWeight="700"
        letterSpacing="5"
        fill={titleFill}
      >
        ORFHEUSS
      </text>

      {/* ── scheidingslijn ── */}
      <line
        x1="46" y1="105"
        x2="154" y2="105"
        stroke={sepStroke}
        strokeWidth="0.6"
      />

      {/* ── PRSYS ── */}
      <text
        x="100" y="120"
        textAnchor="middle"
        fontFamily="'EB Garamond', Georgia, serif"
        fontSize="9.5"
        letterSpacing="4.5"
        fill={subFill}
      >
        PRSYS
      </text>

      {/* ── ACADEMY ── */}
      <text
        x="100" y="134"
        textAnchor="middle"
        fontFamily="'EB Garamond', Georgia, serif"
        fontSize="7.5"
        letterSpacing="3.5"
        fill={subSubFill}
      >
        ACADEMY
      </text>
    </svg>
  );
};
