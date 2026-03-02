import React, { useState } from 'react';
import { OrfheussLogo } from '../components/OrfheussLogo';
import { completeAiGate, storeToken } from '../services/authApi';

interface AiGatePageProps {
  onComplete: (token: string) => void;
}

const CHECKS = [
  'Ik begrijp dat AI-antwoorden fouten kunnen bevatten en altijd menselijke verificatie vereisen.',
  'Ik gebruik AI als aanvulling op mijn oordeel — niet als vervanging ervan.',
  'Ik deel geen vertrouwelijke of persoonsgebonden informatie met AI-systemen.',
  'Ik documenteer AI-gebruik wanneer dit invloed heeft op besluiten die anderen raken.',
  'Ik begrijp dat ORFHEUSS een ethisch toetsingsinstrument is, geen definitief advies.',
];

export const AiGatePage: React.FC<AiGatePageProps> = ({ onComplete }) => {
  const [checked, setChecked] = useState<boolean[]>(new Array(CHECKS.length).fill(false));
  const [laden, setLaden] = useState(false);
  const [fout, setFout] = useState<string | null>(null);

  const allChecked = checked.every(Boolean);

  const toggle = (i: number) => {
    setChecked(prev => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  const handleConfirm = async () => {
    setLaden(true);
    setFout(null);
    try {
      const { token } = await completeAiGate();
      storeToken(token);
      onComplete(token);
    } catch {
      setFout('Bevestiging mislukt. Probeer opnieuw.');
      setLaden(false);
    }
  };

  return (
    <div className="landing-page gate-101">
      <div className="landing-content gate-101-content">
        <div className="landing-logo-wrap">
          <OrfheussLogo variant="nav" className="landing-logo" />
        </div>

        <h2 className="gate-101-title">AI &amp; Veiligheid 101</h2>
        <p className="gate-101-lead">
          Vink elk punt aan om verder te gaan. Dit zijn de basisprincipes voor verantwoord
          AI-gebruik binnen ORFHEUSS Academy.
        </p>

        <div className="gate-101-checks">
          {CHECKS.map((tekst, i) => (
            <label
              key={i}
              className={`gate-101-item${checked[i] ? ' gate-101-item--checked' : ''}`}
            >
              <input
                type="checkbox"
                checked={checked[i]}
                onChange={() => toggle(i)}
                className="gate-101-checkbox"
              />
              <span className="gate-101-check-text">{tekst}</span>
            </label>
          ))}
        </div>

        <div className="gate-101-progress">
          {checked.filter(Boolean).length} / {CHECKS.length} bevestigd
        </div>

        {fout && (
          <p className="landing-error" role="alert">
            {fout}
          </p>
        )}

        <button
          className="btn btn-primary landing-btn"
          onClick={handleConfirm}
          disabled={!allChecked || laden}
        >
          {laden ? 'Bevestigen...' : 'Bevestigen en beginnen →'}
        </button>
      </div>
    </div>
  );
};
