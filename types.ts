export enum QuestionType {
  SINGLE_CHOICE = 'SINGLE_CHOICE',
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  RATING_5 = 'RATING_5', // 5-point Likert scale (1 to 5)
  TEXT_SHORT = 'TEXT_SHORT',
  TEXT_LONG = 'TEXT_LONG',
}

export interface Question {
  id: string;
  title: string;
  description?: string;
  type: QuestionType;
  options?: string[]; // For choice-based questions
  required?: boolean;
  scaleLabels?: { min: string; max: string }; // Label for 1 and 5
}

export interface Section {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
}

export interface SurveyData {
  title: string;
  subtitle?: string;
  description: string;
  dateField: boolean;
  nameField: boolean;
  sections: Section[];
}