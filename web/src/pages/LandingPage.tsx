import React, { useState } from 'react';
import { OrfheussLogo } from '../components/OrfheussLogo';

interface LandingPageProps {
  onToegang: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onToegang }) => {
  const [wachtwoord, setWachtwoord] = useState('');
  const [fout, setFout] = useState(false);
  const [schud, setSchud] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (wachtwoord.trim().toLowerCase() === 'noblesse oblige') {
      localStorage.setItem('prsys-toegang', '1');
      onToegang();
    } else {
      setFout(true);
      setSchud(true);
      setTimeout(() => setSchud(false), 500);
    }
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="landing-logo-wrap">
          <OrfheussLogo variant="nav" className="landing-logo" />
        </div>

        <form
          className={`landing-form${schud ? ' landing-form--schud' : ''}`}
          onSubmit={handleSubmit}
          noValidate
        >
          <input
            className={`landing-input${fout ? ' landing-input--fout' : ''}`}
            type="password"
            placeholder="Wachtwoord"
            value={wachtwoord}
            onChange={e => {
              setWachtwoord(e.target.value);
              if (fout) setFout(false);
            }}
            autoFocus
            autoComplete="current-password"
            aria-label="Wachtwoord"
          />

          {fout && (
            <p className="landing-error" role="alert">
              Toegang geweigerd.
            </p>
          )}

          <button
            className="btn btn-primary landing-btn"
            type="submit"
            disabled={wachtwoord.trim() === ''}
          >
            Betreden
          </button>
        </form>
      </div>
    </div>
  );
};
