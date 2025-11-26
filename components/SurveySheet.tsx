import React from 'react';
import { SurveyData } from '../types';
import { QuestionItem } from './QuestionItem';

interface SurveySheetProps {
  data: SurveyData;
}

export const SurveySheet: React.FC<SurveySheetProps> = ({ data }) => {
  let questionCounter = 0;

  return (
    <div className="w-full max-w-[210mm] min-h-[297mm] mx-auto bg-white p-[20mm] shadow-xl print:shadow-none print:w-full print:max-w-none print:h-auto print:mx-0 print:p-[15mm] text-gray-900 box-border leading-relaxed">
      
      {/* Header */}
      <header className="border-b-2 border-black pb-4 mb-6">
        <h1 className="text-2xl font-extrabold text-center mb-2 tracking-wide">{data.title}</h1>
        <h2 className="text-lg font-bold text-center mb-4">{data.subtitle}</h2>
        <p className="text-sm text-gray-700 leading-6 print:text-black text-justify whitespace-pre-wrap">
          {data.description}
        </p>
      </header>

      {/* User Info Fields */}
      {(data.dateField || data.nameField) && (
        <div className="flex justify-end gap-8 mb-8 text-sm">
          {data.dateField && (
            <div className="flex items-end gap-2 w-48">
              <span className="font-bold">記入日:</span>
              <div className="flex-1 border-b border-black text-center pb-1">
                <span className="text-gray-300 text-xs print:hidden">年 月 日</span>
              </div>
            </div>
          )}
          {data.nameField && (
            <div className="flex items-end gap-2 w-64">
              <span className="font-bold">お名前:</span>
              <div className="flex-1 border-b border-black"></div>
            </div>
          )}
        </div>
      )}

      {/* Sections */}
      <div className="space-y-8">
        {data.sections.map((section) => (
          /* Removed break-inside-avoid to allow sections to flow across pages */
          <section key={section.id} className="">
            <div className="bg-gray-100 print:bg-gray-100 print:border print:border-gray-300 p-2 mb-4 rounded-sm break-after-avoid">
              <h3 className="font-bold text-lg">{section.title}</h3>
              {section.description && <p className="text-sm mt-1">{section.description}</p>}
            </div>

            <div className="space-y-1">
              {section.questions.map((question) => {
                const component = (
                  <QuestionItem 
                    key={question.id} 
                    question={question} 
                    index={questionCounter} 
                  />
                );
                questionCounter++;
                return component;
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-4 border-t border-gray-300 text-center text-xs text-gray-500 print:text-black">
        <p>ご協力ありがとうございました。記入漏れがないかご確認の上、スタッフへお渡しください。</p>
      </footer>
    </div>
  );
};