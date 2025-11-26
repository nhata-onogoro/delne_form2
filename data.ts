import { SurveyData, QuestionType, Question } from './types';

// Helper to generate the standard comment question that follows every rating
// The script adds: "上記項目について、評価の理由や気になった点があればご記入ください。"
const createCommentQuestion = (id: string): Question => ({
  id: `${id}_comment`,
  title: "上記項目について、評価の理由や気になった点があればご記入ください。",
  type: QuestionType.TEXT_LONG,
  required: false
});

export const surveyData: SurveyData = {
  title: "DELNE実証実験アンケート",
  subtitle: "フェーズ①：製品評価",
  description: `本アンケートは複数ページあります。各ページ毎に回答をご記入ください。\n全てのページに回答が完了したらスタッフへお渡しください。\n\n【評価基準について】\n5段階評価の項目は、数字が大きいほど「良い／簡単／適切」という高評価になります。\n1：低い／悪い／難しい\n5：高い／良い／簡単`,
  dateField: true,
  nameField: true,
  sections: [
    {
      id: "attributes",
      title: "属性について",
      questions: [
        {
          id: "attr_1",
          title: "あなたの属性を教えてください",
          type: QuestionType.SINGLE_CHOICE,
          options: ["職員", "ケアマネージャ", "介護家族", "その他"],
          required: true
        }
      ]
    },
    {
      id: "s1",
      title: "■システム操作性",
      questions: [
        {
          id: "q1",
          title: "1. 初期設定のしやすさ",
          description: "最初の設定作業は簡単でしたか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "難しい", max: "簡単" },
          required: true
        },
        createCommentQuestion("q1"),
        {
          id: "q2",
          title: "2. 電話通話の使いやすさ",
          description: "電話での通話は使いやすかったですか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "使いにくい", max: "使いやすい" },
          required: true
        },
        createCommentQuestion("q2"),
        {
          id: "q3",
          title: "3. 管理画面の情報のみやすさ",
          description: "管理画面の情報は見やすく整理されていますか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "見にくい", max: "見やすい" },
          required: true
        },
        createCommentQuestion("q3"),
        {
          id: "q4",
          title: "4. 管理画面の使いやすさ",
          description: "管理画面の設定は使いやすいですか。設定項目の意味が直感的に理解できますか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "使いにくい", max: "使いやすい" },
          required: true
        },
        createCommentQuestion("q4"),
        {
          id: "q5",
          title: "5. 通知(メール/SMS)の分かりやすさ",
          description: "メールやSMSで届く通知の内容はすぐ理解できましたか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "分かりにくい", max: "分かりやすい" },
          required: true
        },
        createCommentQuestion("q5"),
        {
          id: "q6",
          title: "6. マニュアルの分かりやすさ",
          description: "マニュアルは理解しやすいですか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "分かりにくい", max: "分かりやすい" },
          required: true
        },
        createCommentQuestion("q6"),
      ]
    },
    {
      id: "s2",
      title: "■AI音声・会話品質の評価",
      questions: [
        {
          id: "q7",
          title: "7. 音声の明瞭さ",
          description: "AIの声ははっきり聞き取れますか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "聞き取れない", max: "はっきり聞こえる" },
          required: true
        },
        createCommentQuestion("q7"),
        {
          id: "q8",
          title: "8. 音声認識の精度",
          description: "AIは話した言葉を正しく聞き取っていますか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "正しくない", max: "正しい" },
          required: true
        },
        createCommentQuestion("q8"),
        {
          id: "q9",
          title: "9. 応答速度/間合いの適切さ",
          description: "AIの返事が返ってくる速さや間の取り方は自然ですか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "不自然", max: "自然" },
          required: true
        },
        createCommentQuestion("q9"),
        {
          id: "q10",
          title: "10. 会話の自然さ",
          description: "人と話しているような自然な会話ですか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "不自然", max: "自然" },
          required: true
        },
        createCommentQuestion("q10"),
        {
          id: "q11",
          title: "11. 話題内容の適切さ",
          description: "AIが話す内容や話題の選び方は適切ですか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "不適切", max: "適切" },
          required: true
        },
        createCommentQuestion("q11"),
        {
          id: "q12",
          title: "12. 情報の正確さ",
          description: "AIが会話で返す情報は正確でしたか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "不正確", max: "正確" },
          required: true
        },
        createCommentQuestion("q12"),
        {
          id: "q13",
          title: "13. 音声応答失敗の発生頻度",
          description: "AIが会話を返さず黙ってしまったことはどれくらいありましたか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "頻繁にあった", max: "全くなかった" },
          required: true
        },
        createCommentQuestion("q13"),
        {
          id: "q14",
          title: "14. 声の再現度（見守り者の声）",
          description: "AIの声は本人の声にどれくらい似ていますか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "似ていない", max: "そっくり" },
          required: true
        },
        createCommentQuestion("q14"),
      ]
    },
    {
      id: "s3",
      title: "■認知症患者様への適合性評価",
      questions: [
        {
          id: "q15",
          title: "15. 認知症の方への配慮",
          description: "AIの会話は認知症特有の困難に配慮した会話になっていますか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "配慮がない", max: "配慮されている" },
          required: true
        },
        createCommentQuestion("q15"),
        {
          id: "q16",
          title: "16. 安全性（心理的負担の少なさ）",
          description: "AIの会話は使用者に不安や混乱を与えない会話になっていますか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "不安を与える", max: "安心できる" },
          required: true
        },
        createCommentQuestion("q16"),
        {
          id: "q17",
          title: "17. 実用性（日常ケアでの活用）",
          description: "このサービスは実際の介護現場で認知症患者様相手に使えそうですか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "使えない", max: "使える" },
          required: true
        },
        createCommentQuestion("q17"),
        {
          id: "q18",
          title: "18. 家族の負担軽減への貢献",
          description: "このサービスは介護する家族の助けになりそうですか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "助けにならない", max: "助けになる" },
          required: true
        },
        createCommentQuestion("q18"),
      ]
    },
    {
      id: "s4",
      title: "■緊急度判定機能の評価",
      questions: [
        {
          id: "q19",
          title: "19. 緊急時判定の適切性(緊急性の高い会話)",
          description: "病気や苦痛などの会話を行った場合、「重要」「緊急」等が正しく表示されていますか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "正しくない", max: "正しい" },
          required: true
        },
        createCommentQuestion("q19"),
        {
          id: "q20",
          title: "20. 緊急時判定の適切性(緊急性の低い日常会話)",
          description: "日常会話の場合、誤って緊急と判定されていませんか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "誤判定が多い", max: "正しく判定" },
          required: true
        },
        createCommentQuestion("q20"),
      ]
    },
    {
      id: "s5",
      title: "■総合評価",
      questions: [
        {
          id: "q21",
          title: "21. 最初にデモを見たときの率直な印象",
          description: "このサービスを利用した上での第一印象を自由にお聞かせください",
          type: QuestionType.TEXT_LONG,
          required: false
        },
        {
          id: "q22",
          title: "22. 予想と違った点",
          description: "「AI電話サービス」と聞いて想像していたものと違う部分はありますか？",
          type: QuestionType.TEXT_LONG,
          required: false
        },
        {
          id: "q23",
          title: "23. 認知症の方のQOL向上への貢献",
          description: "認知症者の生活の質、感情状態が良くなりそうですか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "そう思わない", max: "そう思う" },
          required: true
        },
        createCommentQuestion("q23"),
        {
          id: "q24",
          title: "24. 家族の安心",
          description: "このサービスを利用することで介護家族は安心できるようになりそうですか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "そう思わない", max: "そう思う" },
          required: true
        },
        createCommentQuestion("q24"),
        {
          id: "q25",
          title: "25. 職員の業務負担軽減",
          description: "このサービスを利用することでスタッフの仕事が楽になりそうですか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "そう思わない", max: "そう思う" },
          required: true
        },
        createCommentQuestion("q25"),
        {
          id: "q26",
          title: "26. 認知症家族に導入する価値があるか",
          description: "このサービスは認知症家族に必要だと思いますか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "不要", max: "必要" },
          required: true
        },
        createCommentQuestion("q26"),
        {
          id: "q27",
          title: "27. 施設でも導入する価値があるか",
          description: "このサービスは施設に必要だと思いますか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "不要", max: "必要" },
          required: true
        },
        createCommentQuestion("q27"),
        {
          id: "q28",
          title: "28. 本人の声でない場合の予想",
          description: "利用者(ご家族)以外の声(既存AI音声等)で答えた場合、どのような反応をされると思いますか？",
          type: QuestionType.TEXT_LONG,
          required: false
        },
        {
          id: "q29",
          title: "29. 本人の声でない場合の適切な対応方針",
          description: "上記のような反応が想定される場合、どのような運用をすれば安心して利用いただけると思いますか？",
          type: QuestionType.TEXT_LONG,
          required: false
        },
        {
          id: "q30",
          title: "30. 懸念されるリスク",
          description: "このサービスを利用することで、どのような問題が起きる心配がありますか？",
          type: QuestionType.TEXT_LONG,
          required: false
        },
        {
          id: "q31",
          title: "31. 最優先で改善してほしい点",
          description: "本サービスで一番直してほしいところはどこですか？",
          type: QuestionType.TEXT_LONG,
          required: false
        },
        {
          id: "q32",
          title: "32. あったら便利だと思う機能",
          description: "こんな機能があればいい、と思う機能について自由にお書きください",
          type: QuestionType.TEXT_LONG,
          required: false
        },
      ]
    }
  ]
};