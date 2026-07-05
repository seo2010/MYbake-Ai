export default function RecipeEditor() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-orange-500 mb-8">
          🍞 BakeLab AI
        </h1>

        <h2 className="text-2xl font-semibold mb-6">
          🧁 레시피 작성
        </h2>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 font-medium">
              레시피 이름
            </label>

            <input
              type="text"
              placeholder="예) 초코칩 쿠키"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              카테고리
            </label>

            <select className="w-full border rounded-lg p-3">
              <option>쿠키</option>
              <option>케이크</option>
              <option>머핀</option>
              <option>빵</option>
              <option>마카롱</option>
            </select>
          </div>

        </div>

      </div>
    </div>
  );
}