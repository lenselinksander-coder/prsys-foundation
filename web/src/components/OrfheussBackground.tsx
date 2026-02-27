import React from 'react';
import { OrfheussLogo } from './OrfheussLogo';

/** Enso-logo als transparant achtergrondwatermark */
export const OrfheussBackground: React.FC = () => (
  <div className="orfheuss-bg" aria-hidden="true">
    <OrfheussLogo variant="hero" className="orfheuss-svg" />
  </div>
);
