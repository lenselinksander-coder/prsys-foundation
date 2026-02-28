export type Role = 'student' | 'docent' | 'begeleider';

export type Level = 'mbo4' | 'hbo' | 'universiteit';

export type Domain =
  | 'marketing'
  | 'social'
  | 'digital'
  | 'finance'
  | 'zorg'
  | 'sociaal_domein';

// ── Track (leergang-overzicht) ─────────────────────────────────────────────
export interface Track {
  id: string;
  title: string;
  description: string;
  level: Level;
  domain: Domain;
  roles: Role[];
  moduleCount: number;
  workbookId?: string;    // koppeling naar werkboek indien aanwezig
  replitPrompt?: string;  // standaard openingsprompt voor de Replit-agent
}

// ── Case (los, via TrackPage) ──────────────────────────────────────────────
export interface Case {
  id: string;
  trackId: string;
  title: string;
  situation: string;
  questionToAI: string;
  questionToOrfheuss: string;
  orfheussFramework: string[];
  level: Level;
  domain: Domain;
  roles: Role[];
}

// ── Werkboek-structuur ─────────────────────────────────────────────────────
export interface Workbook {
  id: string;
  title: string;
  level: Level;
  domain: Domain;
  roles: Role[];
  introMd: string;
}

export interface Lesson {
  id: string;
  workbookId: string;
  title: string;
  order: number;
  type: 'intro' | 'case' | 'ethics' | 'summary';
}

export interface CaseLesson extends Lesson {
  type: 'case';
  situation: string;
  questionToAI: string;
  questionToOrfheuss: string;
  orfheussFramework?: string[];
  domain: Domain;
  level: Level;
}

export interface EthicsLesson extends Lesson {
  type: 'ethics';
  questions: {
    prompt: string;
    subQuestions: string[];
  }[];
}

// ── Werkboek invulstate (localStorage) ────────────────────────────────────
export interface WorkbookEntry {
  caseId: string;
  observation: string;
  aiResponse: string;
  orfheussResponse: string;
  reflection: string;
  savedAt: string;
}

export interface EthicsEntry {
  lessonId: string;
  answers: Record<string, string>;   // key = subQuestion, value = antwoord
  savedAt: string;
}
