export type Role = 'student' | 'docent' | 'begeleider';

export type Level = 'mbo4' | 'hbo' | 'universiteit';

export type Domain =
  | 'marketing'
  | 'social'
  | 'digital'
  | 'finance'
  | 'zorg'
  | 'sociaal_domein';

export interface Track {
  id: string;
  title: string;
  description: string;
  level: Level;
  domain: Domain;
  roles: Role[];
  moduleCount: number;
}

export interface Case {
  id: string;
  trackId: string;
  title: string;
  situation: string;
  questionToAI: string;
  questionToOrfheuss: string;
  orfheussFramework: string[];   // de toetsingscriteria die ORFHEUSS gebruikt
  level: Level;
  domain: Domain;
  roles: Role[];
}

export interface WorkbookEntry {
  caseId: string;
  observation: string;
  aiResponse: string;
  orfheussResponse: string;
  reflection: string;
  savedAt: string;
}
