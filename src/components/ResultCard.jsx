export default function ResultCard({
  recipeName,
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

        <div className="rounded-2xl bg-[#FFF8F1] p-5">
          <h3 className="font-bold mb-2">⭐ 예상 결과</h3>

          <p className="text-3xl">⭐⭐⭐⭐☆</p>

          <p className="mt-2 text-gray-600">
            매우 좋은 결과가 예상됩니다.
          </p>
        </div>

        <div className="rounded-2xl bg-[#FFF8F1] p-5">
          <h3 className="font-bold mb-2">🍞 예상 식감</h3>

          <p>
            겉은 바삭하고 속은 촉촉할 것으로 예상됩니다.
          </p>
        </div>

        <div className="rounded-2xl bg-[#FFF8F1] p-5">
          <h3 className="font-bold mb-2">🌡 개선 사항</h3>

         <p>{temperatureMessage}</p>
<p className="mt-2">{timeMessage}</p>
        </div>

        <div className="rounded-2xl bg-[#FFF8F1] p-5">
          <h3 className="font-bold mb-2">💡 AI 한줄 요약</h3>

          <p>
            현재 레시피는 성공 확률이 매우 높습니다.
          </p>
        </div>
<div className="rounded-2xl bg-[#FFF8F1] p-5 col-span-2">
  <h3 className="font-bold mb-2">🍰 레시피 분석</h3>

  <p>{recipeMessage}</p>
</div>
      </div>
    </div>
  );
}