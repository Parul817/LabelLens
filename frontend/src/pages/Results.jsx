import { useNavigate } from "react-router-dom";
import BottomNavigation from "../components/BottomNavigation";

export default function Results() {
  const navigate = useNavigate();

  return (
    <div className="app-shell">
      <main className="mobile-screen results-screen">

        {/* Header */}
        <header className="results-header">
          <button
            className="back-button"
            onClick={() => navigate("/camera")}
          >
            ←
          </button>

          <h1>Scan Result</h1>
        </header>

        {/* Product image area */}
        <section className="product-image-box">
          <div className="product-placeholder">
            <span>CORN</span>
            <span>FLAKES</span>
          </div>
        </section>

        {/* Product name */}
        <section className="product-info">
          <h2>Corn Flakes</h2>
          <p>Food &amp; Beverage</p>
        </section>

        {/* Score */}
        <section className="score-card">
          <div className="score-number">
            82
            <span>/ 100</span>
          </div>

          <div className="score-label">
            Good Choice
          </div>
        </section>

        {/* Highlights */}
        <section className="result-highlights">

          <div className="highlight">
            <span className="highlight-dot green"></span>
            <span>No artificial colours detected</span>
          </div>

          <div className="highlight">
            <span className="highlight-dot orange"></span>
            <span>Contains added sugar</span>
          </div>

          <div className="highlight">
            <span className="highlight-dot purple"></span>
            <span>Contains barley</span>
          </div>

        </section>

        {/* Actions */}
        <section className="result-actions">

          <button
            className="primary-result-button"
            onClick={() => navigate("/ingredient-report")}
          >
            <span>View Ingredient Report</span>
            <span className="button-arrow">→</span>
          </button>

          <button
            className="secondary-result-button"
            onClick={() => navigate("/compare")}
          >
            Compare Product
          </button>

        </section>

        <BottomNavigation />

      </main>
    </div>
  );
}