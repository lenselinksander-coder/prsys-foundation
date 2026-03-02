import React, { useState } from 'react';
import { OrfheussLogo } from '../components/OrfheussLogo';
import { login } from '../services/authApi';

interface LandingPageProps {
  onLogin: (token: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [wachtwoord, setWachtwoord] = useState('');
  const [fout, setFout] = useState<string | null>(null);
  const [schud, setSchud] = useState(false);
  const [laden, setLaden] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLaden(true);
    setFout(null);
    try {
      const { token } = await login(email.trim(), wachtwoord);
      onLogin(token);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Inloggen mislukt';
      setFout(msg);
      setSchud(true);
      setTimeout(() => setSchud(false), 500);
    } finally {
      setLaden(false);
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
            className="landing-input"
            type="email"
            placeholder="E-mailadres"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
              if (fout) setFout(null);
            }}
            autoFocus
            autoComplete="email"
            aria-label="E-mailadres"
            disabled={laden}
          />

          <input
            className={`landing-input${fout ? ' landing-input--fout' : ''}`}
            type="password"
            placeholder="Wachtwoord"
            value={wachtwoord}
            onChange={e => {
              setWachtwoord(e.target.value);
              if (fout) setFout(null);
            }}
            autoComplete="current-password"
            aria-label="Wachtwoord"
            disabled={laden}
          />

          {fout && (
            <p className="landing-error" role="alert">
              {fout}
            </p>
          )}

          <button
            className="btn btn-primary landing-btn"
            type="submit"
            disabled={laden || !email.trim() || !wachtwoord.trim()}
          >
            {laden ? 'Inloggen...' : 'Betreden'}
          </button>
        </form>
      </div>
    </div>
  );
};
