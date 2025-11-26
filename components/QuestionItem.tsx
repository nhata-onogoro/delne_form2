import React from 'react';
import { Question, QuestionType } from '../types';

interface QuestionItemProps {
  question: Question;
  index: number;
}

export const QuestionItem: React.FC<QuestionItemProps> = ({ question }) => {
  const isRating = question.type === QuestionType.RATING_5;
  const isComment = question.title.includes("評価の理由");
  
  // Conditionally smaller margin for comment fields following a rating to save space
  const containerClass = isComment 
    ? "mb-4 break-inside-avoid ml-4 border-l-2 border-gray-200 pl-4 print:border-l print:border-gray-300"
    : "mb-6 break-inside-avoid";

  const renderInput = () => {
    switch (question.type) {
      case QuestionType.RATING_5:
        return (
          <div className="flex flex-col mt-2">
            <div className="flex justify-between w-full max-w-lg mx-auto items-end">
               {/* Label for 1 */}
               <div className="text-xs font-bold text-gray-600 print:text-black w-24 text-center mb-6 leading-tight">
                {question.scaleLabels?.min}
              </div>

              {/* 1 to 5 circles */}
              {[1, 2, 3, 4, 5].map((val) => (
                <div key={val} className="flex flex-col items-center group mx-1">
                   <div className="w-8 h-8 border-2 border-gray-400 rounded-full mb-1 group-print:border-black flex items-center justify-center">
                    <span className="text-gray-300 print:hidden text-xs">{val}</span>
                   </div>
                   <span className="text-sm font-bold mt-1 text-gray-500 print:text-black">{val}</span>
                </div>
              ))}

              {/* Label for 5 */}
              <div className="text-xs font-bold text-gray-600 print:text-black w-24 text-center mb-6 leading-tight">
                {question.scaleLabels?.max}
              </div>
            </div>
          </div>
        );

      case QuestionType.SINGLE_CHOICE:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 ml-1">
            {question.options?.map((opt, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex-shrink-0 print:border-black"></div>
                <span className="text-sm print:text-black">{opt}</span>
              </div>
            ))}
          </div>
        );

      case QuestionType.MULTIPLE_CHOICE:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 ml-1">
            {question.options?.map((opt, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-gray-400 rounded-none flex-shrink-0 print:border-black"></div>
                <span className="text-sm print:text-black">{opt}</span>
              </div>
            ))}
          </div>
        );

      case QuestionType.TEXT_SHORT:
        return (
          <div className="mt-4 border-b border-gray-800 w-full h-8 print:border-black"></div>
        );

      case QuestionType.TEXT_LONG:
        // Use fewer lines if it's just a comment field (2 lines) vs a full question (4 lines)
        const lines = isComment ? [1, 2] : [1, 2, 3, 4];
        return (
          <div className="mt-2 w-full">
            {lines.map((i) => (
               <div key={i} className="w-full border-b border-gray-300 h-8 print:border-gray-400"></div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={containerClass}>
      <h3 className={`${isComment ? 'text-sm font-normal text-gray-700' : 'text-base font-bold text-gray-900'} print:text-black mb-1`}>
        {question.title}
        {question.required && !isComment && <span className="text-xs font-normal ml-2 border border-gray-800 px-1 rounded print:border-black">必須</span>}
      </h3>
      {question.description && (
        <p className="text-xs text-gray-600 mb-2 print:text-gray-800 whitespace-pre-wrap">{question.description}</p>
      )}
      <div className="pl-2">
        {renderInput()}
      </div>
    </div>
  );
};