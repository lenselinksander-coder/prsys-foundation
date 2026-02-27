import React, { useState } from 'react';
import { WORKBOOKS } from '../data/workbooks';
import { LESSONS, CASE_LESSONS, ETHICS_LESSONS } from '../data/lessons';
import type { CaseLesson, EthicsLesson, Lesson } from '../types';
import { CaseCompareView } from './CaseCompareView';
import { useUser } from '../context/UserContext';
import { useWorkbook } from '../context/WorkbookContext';

// ── Markdown renderer (simpel, zonder dependency) ─────────────────────────
const SimpleMarkdown: React.FC<{ text: string }> = ({ text }) => {
  const lines = text.trim().split('\n');
  return (
    <div className="markdown-body">
      {lines.map((line, i) => {
        if (line.startsWith('# '))  return <h1 key={i}>{line.slice(2)}</h1>;
        if (line.startsWith('## ')) return <h2 key={i}>{line.slice(3)}</h2>;
        if (line.startsWith('### ')) return <h3 key={i}>{line.slice(4)}</h3>;
        if (line.startsWith('**') && line.endsWith('**')) {
          return <p key={i}><strong>{line.slice(2, -2)}</strong></p>;
        }
        if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ')) {
          return <li key={i} className="md-li">{line.slice(3)}</li>;
        }
        if (line === '---') return <hr key={i} className="md-hr" />;
        if (line === '') return <div key={i} className="md-spacer" />;
        // inline bold
        const parts = line.split(/\*\*(.*?)\*\*/g);
        return (
          <p key={i}>
            {parts.map((part, j) =>
              j % 2 === 1 ? <strong key={j}>{part}</strong> : part
            )}
          </p>
        );
      })}
    </div>
  );
};

// ── CaseBlock ─────────────────────────────────────────────────────────────
const CaseBlock: React.FC<{ lesson: CaseLesson }> = ({ lesson }) => {
  const { role } = useUser();
  const { getEntry, saveEntry } = useWorkbook();
  const existing = getEntry(lesson.id);

  const [observation, setObservation] = useState(existing?.observation ?? '');
  const [aiResponse, setAiResponse] = useState(existing?.aiResponse ?? '');
  const [orfheussResponse, setOrfheussResponse] = useState(existing?.orfheussResponse ?? '');
  const [reflection, setReflection] = useState(existing?.reflection ?? '');
  const [saved, setSaved] = useState(false);

  const isComplete = observation && aiResponse && orfheussResponse && reflection;

  const handleSave = () => {
    saveEntry({ caseId: lesson.id, observation, aiResponse, orfheussResponse, reflection, savedAt: new Date().toISOString() });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <section className="lesson lesson-case">
      <div className="lesson-number">Case {lesson.order - 1}</div>
      <h2 className="lesson-title">{lesson.title}</h2>

      <div className="lesson-step">
        <div className="step-label">
          <span className="step-number">1</span>
          <span className="step-title">Situatie</span>
        </div>
        <div className="case-situation">
          {lesson.situation.trim().split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <label className="field-label">Jouw observatie — wat is het ethische spanningsveld?</label>
        <textarea className="case-textarea" rows={4} placeholder="Schrijf hier je observatie..."
          value={observation} onChange={e => setObservation(e.target.value)} />
      </div>

      <div className="lesson-step">
        <div className="step-label">
          <span className="step-number">2</span>
          <span className="step-title">Vraag aan gewone AI</span>
        </div>
        <div className="case-question case-question--ai">
          <div className="question-tag">Zoals gesteld aan een gewone AI:</div>
          <blockquote className="question-text">{lesson.questionToAI}</blockquote>
        </div>
        <label className="field-label">Wat antwoordt een gewone AI? Wat ontbreekt?</label>
        <textarea className="case-textarea" rows={4} placeholder="Beschrijf het verwachte AI-antwoord..."
          value={aiResponse} onChange={e => setAiResponse(e.target.value)} />
      </div>

      <div className="lesson-step">
        <div className="step-label">
          <span className="step-number">3</span>
          <span className="step-title">Vraag via ORFHEUSS</span>
        </div>
        <div className="case-question case-question--orfheuss">
          <div className="question-tag">Met de TaoGate-toets:</div>
          <blockquote className="question-text">{lesson.questionToOrfheuss}</blockquote>
        </div>
        {lesson.orfheussFramework && lesson.orfheussFramework.length > 0 && (
          <div className="framework-chips">
            <span className="framework-label">ORFHEUSS toetst op:</span>
            {lesson.orfheussFramework.map(f => <span key={f} className="chip">{f}</span>)}
          </div>
        )}

        <CaseCompareView
          caseId={lesson.id}
          domain={lesson.domain}
          level={lesson.level}
          role={role}
        />

        <label className="field-label" style={{ marginTop: '1rem' }}>Hoe toetst ORFHEUSS dit? Wat is het verschil?</label>
        <textarea className="case-textarea" rows={5} placeholder="Beschrijf de ORFHEUSS-toetsing..."
          value={orfheussResponse} onChange={e => setOrfheussResponse(e.target.value)} />
      </div>

      <div className="lesson-step">
        <div className="step-label">
          <span className="step-number">4</span>
          <span className="step-title">Jouw reflectie</span>
        </div>
        <label className="field-label">Wat is jouw conclusie en standpunt?</label>
        <textarea className="case-textarea" rows={5} placeholder="Schrijf hier je eigen reflectie..."
          value={reflection} onChange={e => setReflection(e.target.value)} />
      </div>

      <div className="case-actions">
        <button className={`btn btn-save ${!isComplete ? 'btn-disabled' : ''}`}
          onClick={handleSave} disabled={!isComplete}>
          {saved ? '✓ Opgeslagen' : 'Opslaan in werkboek'}
        </button>
        {!isComplete && <span className="save-hint">Vul alle vier stappen in om op te slaan.</span>}
        {existing?.reflection && !saved && <span className="save-hint" style={{ color: 'var(--green)' }}>✓ Eerder opgeslagen</span>}
      </div>
    </section>
  );
};

// ── EthicsBlock ───────────────────────────────────────────────────────────
const EthicsBlock: React.FC<{ lesson: EthicsLesson }> = ({ lesson }) => {
  const { getEthicsEntry, saveEthicsEntry } = useWorkbook();
  const existing = getEthicsEntry(lesson.id);
  const [answers, setAnswers] = useState<Record<string, string>>(existing?.answers ?? {});
  const [saved, setSaved] = useState(false);

  const handleChange = (key: string, val: string) => setAnswers(prev => ({ ...prev, [key]: val }));

  const handleSave = () => {
    saveEthicsEntry({ lessonId: lesson.id, answers, savedAt: new Date().toISOString() });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const isSummary = (lesson as unknown as { type: string }).type === 'summary';

  return (
    <section className={`lesson ${isSummary ? 'lesson-summary' : 'lesson-ethics'}`}>
      <h2 className="lesson-title">{lesson.title}</h2>
      {lesson.questions.map((q, qi) => (
        <div key={qi} className="ethics-block">
          <p className="ethics-prompt"><strong>{q.prompt}</strong></p>
          {q.subQuestions.map((sub, si) => {
            const key = `${qi}-${si}`;
            return (
              <div key={si} className="ethics-sub">
                <label className="field-label">{sub}</label>
                <textarea
                  className="case-textarea"
                  rows={3}
                  placeholder="Jouw antwoord..."
                  value={answers[key] ?? ''}
                  onChange={e => handleChange(key, e.target.value)}
                />
              </div>
            );
          })}
        </div>
      ))}
      <div className="case-actions">
        <button className="btn btn-save" onClick={handleSave}>
          {saved ? '✓ Opgeslagen' : 'Opslaan'}
        </button>
        {existing && !saved && <span className="save-hint" style={{ color: 'var(--green)' }}>✓ Eerder opgeslagen</span>}
      </div>
    </section>
  );
};

// ── WorkbookView ──────────────────────────────────────────────────────────
interface Props {
  workbookId: string;
}

export const WorkbookView: React.FC<Props> = ({ workbookId }) => {
  const workbook = WORKBOOKS.find(w => w.id === workbookId);
  if (!workbook) return <div className="error-page"><p>Werkboek niet gevonden.</p></div>;

  const all: Lesson[] = [
    ...LESSONS.filter(l => l.workbookId === workbookId),
    ...CASE_LESSONS.filter(l => l.workbookId === workbookId),
    ...ETHICS_LESSONS.filter(l => l.workbookId === workbookId),
  ].sort((a, b) => a.order - b.order);

  return (
    <div className="workbook-view">
      <div className="workbook-intro">
        <div className="workbook-badges">
          <span className="badge badge-level">{workbook.level.toUpperCase()}</span>
          <span className="badge badge-domain">{workbook.domain}</span>
        </div>
        <SimpleMarkdown text={workbook.introMd} />
      </div>

      <div className="workbook-lessons">
        {all.map(lesson => {
          if (lesson.type === 'case') {
            return <CaseBlock key={lesson.id} lesson={lesson as CaseLesson} />;
          }
          if (lesson.type === 'ethics' || lesson.type === 'summary') {
            return <EthicsBlock key={lesson.id} lesson={lesson as EthicsLesson} />;
          }
          // intro
          return (
            <section key={lesson.id} className="lesson lesson-intro">
              <h2 className="lesson-title">{lesson.title}</h2>
              <div className="intro-instruction">
                <p>Per case volg je vier stappen:</p>
                <ol>
                  <li>Situatie lezen — begrijp de context en het dilemma</li>
                  <li>Vraag aan gewone AI — observeer wat een gewone AI adviseert</li>
                  <li>Vraag via ORFHEUSS — zie hoe ORFHEUSS toetst en eventueel blokkeert</li>
                  <li>Jouw reflectie — schrijf je eigen observatie en standpunt</li>
                </ol>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
