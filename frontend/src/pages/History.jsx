import { useNavigate } from "react-router-dom";
import BottomNavigation from "../components/BottomNavigation";

function History() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <main className="page">
        <header className="page-header">
          <button
            className="back-button"
            onClick={() => navigate("/")}
          >
            ←
          </button>

          <div>
            <h1>Scan History</h1>
            <p>Your previously analyzed products</p>
          </div>
        </header>

        <section className="empty-state">
          <div className="empty-icon">◷</div>

          <h2>No scans yet</h2>

          <p>
            Products you analyze will appear here.
          </p>

          <button
            className="primary-button"
            onClick={() => navigate("/camera")}
          >
            Scan a Product →
          </button>
        </section>
      </main>

      <BottomNavigation />
    </div>
  );
}

export default History;