import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-[#F6EFE8] border-r border-[#E5D6C8] p-6">
      <h1 className="text-3xl font-bold text-[#7A5230] mb-10">
        🧁 MyBake AI
      </h1>

      <nav className="flex flex-col gap-4">
        <Link
          to="/"
          className="rounded-xl px-4 py-3 hover:bg-[#E9D9C8] transition"
        >
          🏠 홈
        </Link>

        <Link
          to="/recipe"
          className="rounded-xl px-4 py-3 hover:bg-[#E9D9C8] transition"
        >
          📝 새 레시피
        </Link>

        <div className="rounded-xl px-4 py-3 text-gray-400">
          📚 내 레시피
        </div>

        <div className="rounded-xl px-4 py-3 text-gray-400">
          🤖 AI 분석
        </div>

        <div className="rounded-xl px-4 py-3 text-gray-400">
          📊 결과
        </div>

        <div className="rounded-xl px-4 py-3 text-gray-400">
          ⚙ 설정
        </div>
      </nav>
    </div>
  );
}