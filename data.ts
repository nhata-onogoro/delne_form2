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
  subtitle: "フェーズ②：実利用評価",
  description: `本アンケートは複数ページあります。各ページ毎に回答をご記入ください。
各項目の五段階評価について、該当する番号にチェックを入れてください。
全てのページに回答が完了したらスタッフへお渡しください。

【評価基準について】
5段階評価の項目は、数字が大きいほど「良い／ポジティブ」な評価になります。
1：低い／悪い／そう思わない
5：高い／良い／そう思う`,
  dateField: true,
  nameField: true,
  sections: [
    {
      id: "attributes",
      title: "属性について",
      questions: [
        {
          id: "attr_1",
          title: "あなたの立場について、該当するものを下記の中からお選びください",
          type: QuestionType.SINGLE_CHOICE,
          options: ["職員", "ケアマネージャ", "介護家族", "その他"],
          required: true
        }
      ]
    },
    {
      id: "s1",
      title: "■通話前の認知症者の様子",
      questions: [
        {
          id: "q1",
          title: "1. 認知症状態",
          description: "認知症の進行状況はどの程度ですか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "重度", max: "軽度" },
          required: true
        },
        createCommentQuestion("q1"),
        {
          id: "q2",
          title: "2. サービス受容度",
          description: "AI電話への関心や態度はどうですか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "嫌がっている/無関心", max: "楽しみにしている" },
          required: true
        },
        createCommentQuestion("q2"),
        {
          id: "q3",
          title: "3. 心理状態",
          description: "通話前の気持ちは落ち着いていますか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "落ち着きがない/不安", max: "落ち着いている" },
          required: true
        },
        createCommentQuestion("q3")
      ]
    },
    {
      id: "s2",
      title: "■通話中の認知症者の様子",
      questions: [
        {
          id: "q4",
          title: "4. 表情・感情反応",
          description: "通話中の表情や気持ちはどうでしたか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "ネガティブ/怒り/不安", max: "ポジティブ/笑顔/穏やか" },
          required: true
        },
        createCommentQuestion("q4"),
        {
          id: "q5",
          title: "5. 会話の成立度",
          description: "スムーズにAIと会話ができていましたか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "成立していない", max: "スムーズに成立" },
          required: true
        },
        createCommentQuestion("q5"),
        {
          id: "q6",
          title: "6. 家族認識状況",
          description: "AIを本当の家族と思っている様子でしたか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "全く思っていない", max: "完全に信じている" },
          required: true
        },
        createCommentQuestion("q6"),
        {
          id: "q7",
          title: "7. 混乱・ストレスの有無",
          description: "戸惑いや不安を示していませんでしたか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "強い不安/混乱", max: "全くない" },
          required: true
        },
        createCommentQuestion("q7")
      ]
    },
    {
      id: "s3",
      title: "■通話後の認知症者の様子",
      questions: [
        {
          id: "q8",
          title: "8. 心理状態の変化",
          description: "通話後の気持ちの変化は見られましたか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "悪化した", max: "良くなった/穏やかになった" },
          required: true
        },
        createCommentQuestion("q8"),
        {
          id: "q9",
          title: "9. 継続意向の表出",
          description: "また話したいという様子が見られますか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "拒否", max: "強く希望" },
          required: true
        },
        createCommentQuestion("q9"),
        {
          id: "q10",
          title: "10. その他変化",
          description: "通話前と通話後で何か変化は見られましたか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "悪い変化", max: "良い変化" },
          required: true
        },
        createCommentQuestion("q10")
      ]
    },
    {
      id: "s4",
      title: "■通話終了後の管理ページ内容評価",
      questions: [
        {
          id: "q11",
          title: "11. 会話記録の分かりやすさ",
          description: "管理ページでの会話履歴の内容は理解しやすく記録されていますか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "分かりにくい", max: "分かりやすい" },
          required: true
        },
        createCommentQuestion("q11"),
        {
          id: "q12",
          title: "12. 緊急度判定の適切さ",
          description: "通話履歴の「緊急度」の判定は正しかったですか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "正しくない", max: "正しい" },
          required: true
        },
        createCommentQuestion("q12"),
        {
          id: "q13",
          title: "13. 情報の有用性",
          description: "記録された情報は役に立ちますか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "役に立たない", max: "役に立つ" },
          required: true
        },
        createCommentQuestion("q13")
      ]
    },
    {
      id: "s5",
      title: "■総合評価",
      questions: [
        {
          id: "q14",
          title: "14. 認知症本人への効果への期待",
          description: "このサービスを導入することで、認知症者の状態が改善しそうですか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "そう思わない", max: "そう思う" },
          required: true
        },
        createCommentQuestion("q14"),
        {
          id: "q15",
          title: "15. 見守り者自身への効果への期待",
          description: "このサービスを導入することで、介護者の負担は軽減しそうですか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "そう思わない", max: "そう思う" },
          required: true
        },
        createCommentQuestion("q15"),
        {
          id: "q16",
          title: "16. 関係性への影響への期待",
          description: "このサービスを導入することで、認知症者様との関係に変化が期待できますか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "期待できない", max: "良い変化が期待できる" },
          required: true
        },
        createCommentQuestion("q16"),
        {
          id: "q17",
          title: "17. サービス全体の満足度",
          description: "サービス全体にどれくらい満足しましたか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "不満", max: "満足" },
          required: true
        },
        createCommentQuestion("q17"),
        {
          id: "q18",
          title: "18. 継続利用意向",
          description: "実験終了後も使い続けたいですか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "使いたくない", max: "使い続けたい" },
          required: true
        },
        createCommentQuestion("q18"),
        {
          id: "q19",
          title: "19. 推奨意向（NPS）",
          description: "このサービスを、他の家族にも勧めたいですか？",
          type: QuestionType.RATING_5,
          scaleLabels: { min: "勧めたくない", max: "勧めたい" },
          required: true
        },
        createCommentQuestion("q19"),
        {
          id: "q20",
          title: "20. 最優先改善点",
          description: "改めて、本サービスで一番直してほしいところはどこですか？",
          type: QuestionType.TEXT_LONG,
          required: false
        },
        {
          id: "q21",
          title: "21. 希望する追加機能",
          description: "改めて、こんな機能があればいい、と思う機能について自由にお書きください",
          type: QuestionType.TEXT_LONG,
          required: false
        },
        {
          id: "q22",
          title: "22. 適正価格感",
          description: `本サービスを実際に使う場合、月額いくらなら妥当だと思いますか？`,
          type: QuestionType.SINGLE_CHOICE,
          options: [
            "1：3000円以下",
            "2：3000円～5000円",
            "3：5000円～7000円",
            "4：7000円～10000円",
            "5：10000円以上"
          ],
          required: true
        },
        createCommentQuestion("q22")
      ]
    }
  ]
};
