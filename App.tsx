import React from 'react';
import { Printer, FileText, AlertCircle } from 'lucide-react';
import { SurveySheet } from './components/SurveySheet';
import { surveyData } from './data';

const App: React.FC = () => {
  const handlePrint = () => {
    // プレビュー環境での動作安定のため、フォーカスを当ててから少し待って実行
    window.focus();
    setTimeout(() => {
      window.print();
    }, 200);
  };

  return (
    <div className="min-h-screen bg-slate-800 pb-16 print:bg-white print:pb-0">
      
      {/* Web-only Header / Controls */}
      <nav className="bg-slate-900 text-white p-4 shadow-md print:hidden sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-400" />
            <span className="font-bold text-lg">DELNE アンケート印刷ツール</span>
          </div>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-lg"
          >
            <Printer className="w-4 h-4" />
            印刷 / PDF保存
          </button>
        </div>
      </nav>

      {/* Instructions for web user */}
      <div className="max-w-[210mm] mx-auto mt-8 mb-4 text-center text-slate-300 print:hidden px-4">
        <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 mb-6 text-left">
           <h3 className="font-bold text-white mb-3 flex items-center gap-2">
             <AlertCircle className="w-5 h-5 text-yellow-400"/>
             印刷・PDF保存の手順
           </h3>
           <ol className="list-decimal list-inside text-sm space-y-2 text-slate-300 leading-relaxed">
             <li>右上の「印刷 / PDF保存」ボタンをクリックします。</li>
             <li>印刷ダイアログが開いたら、送信先（プリンター）で<strong>「PDFに保存」</strong>を選択します。</li>
             <li>用紙サイズが<strong>A4</strong>、倍率が<strong>100%</strong>（余白の調整：最小/なし）になっていることを確認して保存してください。</li>
           </ol>
           <p className="text-xs text-slate-400 mt-4 pl-4 border-l-2 border-slate-500">
             ※ プレビュー画面でボタンが反応しない場合は、この画面をクリックしてからキーボードの <strong>Ctrl+P</strong> (Windows) または <strong>Cmd+P</strong> (Mac) を押して印刷ダイアログを開いてください。
           </p>
        </div>
      </div>

      {/* The Printable Sheet */}
      <div className="flex justify-center p-4 sm:p-8 print:p-0 print:block">
        <SurveySheet data={surveyData} />
      </div>

    </div>
  );
};

export default App;