import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ResultCard from "../components/ResultCard";
export default function RecipeEditor() {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [temperature, setTemperature] = useState(180);
  const [time, setTime] = useState(30);
const [showResult, setShowResult] = useState(false);
const [loading, setLoading] = useState(false);
const [loadingProgress, setLoadingProgress] = useState(0);
  return (
    <div className="flex min-h-screen bg-[#FFF8F1]">
      <Sidebar />

      <main className="flex-1 p-10">
        <h1 className="text-4xl font-bold text-[#6B4226] mb-2">
          🧁 새 레시피 만들기
        </h1>

        <p className="text-gray-500 mb-8">
          나만의 베이킹 레시피를 만들고 AI로 결과를 예측해보세요.
        </p>

        <div className="bg-white rounded-3xl shadow-lg p-8 max-w-3xl">

          <div className="mb-6">
            <label className="block font-semibold mb-2">
              레시피 이름
            </label>

            <input
              className="w-full rounded-xl border p-3"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
              placeholder="예) 초코칩 쿠키"
            />
          </div>

          <div className="mb-6">
            <label className="block font-semibold mb-2">
              재료
            </label>

            <textarea
              className="w-full rounded-xl border p-3"
              rows={6}
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="밀가루 300g&#10;버터 100g&#10;설탕 80g"
            />
          </div>

          <div className="mb-6">
            <label className="block font-semibold">
              🌡 오븐 온도 ({temperature}℃)
            </label>

            <input
              className="w-full"
              type="range"
              min="100"
              max="250"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
            />
          </div>

          <div className="mb-8">
            <label className="block font-semibold">
              ⏰ 굽는 시간 ({time}분)
            </label>

            <input
              className="w-full"
              type="range"
              min="5"
              max="120"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <button
onClick={() => {
  setLoading(true);
  setShowResult(false);
  setLoadingProgress(0);

  let progress = 0;

  const interval = setInterval(() => {
    progress += 10;
    setLoadingProgress(progress);

    if (progress >= 100) {
      clearInterval(interval);
      setLoading(false);
      setShowResult(true);
    }
  }, 200);
}}
 className="w-full rounded-2xl bg-[#8B5E3C] text-white py-4 text-lg font-bold transition-all duration-300 hover:bg-[#6F472C] hover:scale-[1.02] hover:shadow-xl"
>
  🤖 AI 분석하기
</button>
{loading && (
  <div className="mt-8 rounded-3xl bg-white shadow-lg p-8 text-center">
    <div className="text-5xl mb-4">🤖</div>

    <h2 className="text-2xl font-bold text-[#8B5E3C]">
      AI 분석 중...
    </h2>

    <p className="text-gray-500 mt-2">
      레시피를 분석하고 있습니다.
    </p>

   <div className="w-full h-3 bg-gray-200 rounded-full mt-6 overflow-hidden">
  <div
    className="h-full bg-[#8B5E3C] transition-all duration-200"
    style={{ width: `${loadingProgress}%` }}
  ></div>
</div>

<p className="mt-3 text-sm text-gray-600">
  {loadingProgress}%
</p>
  </div>
)}
{showResult && (
<ResultCard
  recipeName={recipeName}
  ingredients={ingredients}
  temperature={temperature}
  time={time}
/>
)}
        </div>
      </main>
    </div>
  );
}