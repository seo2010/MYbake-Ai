export default function ResultCard({
  recipeName,
  ingredients,
  temperature,
  time,
}) {
  let temperatureMessage = "✅ 적절한 온도입니다.";

if (temperature > 210) {
  temperatureMessage = "🔥 온도가 너무 높습니다.";
} else if (temperature < 160) {
  temperatureMessage = "❄️ 온도가 너무 낮습니다.";
}

let timeMessage = "✅ 적절한 시간입니다.";

if (time > 60) {
  timeMessage = "⚠️ 시간이 너무 깁니다.";
} else if (time < 15) {
  timeMessage = "⏱️ 시간이 너무 짧습니다.";
}
let score = 90;

if (temperature > 210) score -= 15;
if (temperature < 160) score -= 10;

if (time > 60) score -= 10;
if (time < 15) score -= 5;

if (score < 0) score = 0;
let scoreColor = "text-green-600";
let barColor = "bg-green-600";

if (score < 90) {
  barColor = "bg-yellow-500";
}

if (score < 70) {
  barColor = "bg-red-500";
}
if (score < 90) {
  scoreColor = "text-yellow-500";
}

if (score < 70) {
  scoreColor = "text-red-500";
}
let summary = "";

if (score >= 90) {
  summary = "🟢 매우 성공 가능성이 높은 레시피입니다.";
} else if (score >= 70) {
  summary = "🟡 좋은 결과가 예상됩니다.";
} else {
  summary = "🔴 레시피를 조금 수정하는 것을 추천합니다.";
}
let textureMessage = "";

if (temperature >= 220) {
  textureMessage = "🔥 겉이 매우 바삭하고 진한 색으로 구워질 가능성이 높습니다.";
} else if (temperature >= 170) {
  textureMessage = "🍪 겉은 바삭하고 속은 촉촉할 것으로 예상됩니다.";
} else {
  textureMessage = "🧁 부드럽고 촉촉한 식감이 예상됩니다.";
}
let ingredientMessage = "재료 구성이 적절합니다.";
const ingredientText = ingredients.toLowerCase();

if (!ingredientText.includes("버터")) {
  ingredientMessage = "🧈 버터가 없으면 식감이 퍽퍽할 수 있습니다.";
} else if (!ingredientText.includes("계란")) {
  ingredientMessage = "🥚 계란이 없으면 반죽이 잘 뭉치지 않을 수 있습니다.";
} else if (!ingredientText.includes("설탕")) {
  ingredientMessage = "🍯 설탕이 적으면 단맛과 색상이 약해질 수 있습니다.";
}
let recommendedTemperature = temperature;
let recommendedTime = time;
let recommendationReason = "현재 설정이 적절합니다.";

if (temperature > 210) {
  recommendedTemperature = 180;
  recommendationReason = "🔥 현재 온도가 높아 탈 가능성이 있습니다.";
} else if (temperature < 160) {
  recommendedTemperature = 180;
  recommendationReason = "❄️ 현재 온도가 낮아 충분히 익지 않을 수 있습니다.";
}

if (time > 60) {
  recommendedTime = 30;
} else if (time < 15) {
  recommendedTime = 25;
}
 let recipeMessage = "일반 베이킹 레시피입니다.";

if (recipeName.toLowerCase().includes("쿠키")) {
  recipeMessage = "🍪 쿠키는 겉은 바삭하고 속은 촉촉하게 굽는 것이 좋습니다.";
} else if (recipeName.toLowerCase().includes("케이크")) {
  recipeMessage = "🎂 케이크는 너무 높은 온도에서 구우면 갈라질 수 있습니다.";
} else if (recipeName.toLowerCase().includes("머핀")) {
  recipeMessage = "🧁 머핀은 너무 오래 구우면 퍽퍽해질 수 있습니다.";
} 
return (
    <div className="mt-8 rounded-3xl bg-white shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6">
        🤖 AI 분석 결과
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <div className="rounded-2xl bg-[#FFF8F1] p-5 transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="font-bold mb-2">
  ⭐ 성공 확률
</h3>

<p className={`text-5xl font-bold ${scoreColor}`}>
  {score}%
</p>

<div className="w-full h-3 bg-gray-200 rounded-full mt-4">
 <div
  className={`h-3 rounded-full ${barColor} transition-all duration-1000`}
  style={{ width: `${score}%` }}
/>
</div>

<p className="mt-3 text-gray-600">
  AI가 예측한 성공 확률입니다.
</p>
        </div>

        <div className="rounded-2xl bg-[#FFF8F1] p-5 transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="font-bold mb-2">🍞 예상 식감</h3>

         <p>{textureMessage}</p>
        </div>

        <div className="rounded-2xl bg-[#FFF8F1] p-5 transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="font-bold mb-2">🌡 개선 사항</h3>

         <p>{temperatureMessage}</p>
<p className="mt-2">{timeMessage}</p>
        </div>

        <div className="rounded-2xl bg-[#FFF8F1] p-5 transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="font-bold mb-2">💡 AI 한줄 요약</h3>

         <p>{summary}</p>
        </div>
<div className="rounded-2xl bg-[#FFF8F1] p-5 col-span-2">
  <h3 className="font-bold mb-2">🍰 레시피 분석</h3>

  <p>{recipeMessage}</p>
</div>
<div className="rounded-2xl bg-[#FFF8F1] p-5 col-span-2">
  <h3 className="font-bold mb-2">
    🥣 AI 재료 팁
  </h3>

  <p>{ingredientMessage}</p>
</div>
<div className="rounded-2xl bg-[#EAF7FF] p-5 col-span-2">
  <h3 className="font-bold mb-3">
    🤖 AI 추천 설정
  </h3>

  <p>🌡 추천 온도 : <strong>{recommendedTemperature}℃</strong></p>

  <p className="mt-2">⏰ 추천 시간 : <strong>{recommendedTime}분</strong></p>

  <p className="mt-4 text-gray-600">
    {recommendationReason}
  </p>
</div>
      </div>
    </div>
  );
}