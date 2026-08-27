import { useNavigate, useLocation } from "react-router-dom";

export default function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bottom-nav">
      <button
        className={`nav-item ${isActive("/") ? "active" : ""}`}
        onClick={() => navigate("/")}
      >
        <span>⌂</span>
        <small>Home</small>
      </button>

      <button
        className={`nav-item ${isActive("/camera") ? "active" : ""}`}
        onClick={() => navigate("/camera")}
      >
        <span>▣</span>
        <small>Scan</small>
      </button>

      <button
        className={`nav-item ${isActive("/history") ? "active" : ""}`}
        onClick={() => navigate("/history")}
      >
        <span>◷</span>
        <small>History</small>
      </button>

      <button
        className={`nav-item ${isActive("/profile") ? "active" : ""}`}
        onClick={() => navigate("/profile")}
      >
        <span>♙</span>
        <small>Profile</small>
      </button>
    </nav>
  );
}