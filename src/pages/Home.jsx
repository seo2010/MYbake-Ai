import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar />

      <div
        style={{
          padding: "40px",
        }}
      >
        <h1>👋 환영합니다!</h1>

        <p>AI 베이킹 시뮬레이터에 오신 것을 환영합니다.</p>

        <button
        onClick={() => navigate("/recipe")}
          style={{
            padding: "12px 25px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          새 레시피 만들기
        </button>
      </div>
    </div>
  );
}