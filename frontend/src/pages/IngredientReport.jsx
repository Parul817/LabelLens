import { useNavigate } from "react-router-dom";
import BottomNavigation from "../components/BottomNavigation";

export default function IngredientReport() {
  const navigate = useNavigate();

  return (
    <div className="app-shell">
      <main className="mobile-screen report-screen">

        {/* Header */}
        <header className="report-header">
          <button
            className="back-button"
            onClick={() => navigate("/results")}
          >
            ←
          </button>

          <div>
            <h1>Ingredient Report</h1>
            <p>Corn Flakes</p>
          </div>
        </header>

        {/* Summary */}
        <section className="report-summary">
          <h2>Corn Flakes</h2>
          <p>7 ingredients analyzed</p>
        </section>

        {/* Highlights */}
        <section className="report-section">
          <h2>Highlights</h2>
          <p className="section-subtitle">
            What LabelLens found at a glance
          </p>

          <div className="highlight-grid">

            <div className="report-stat-card">
              <div className="stat-top">
                <span className="stat-dot green"></span>
                <strong>3</strong>
              </div>
              <span>General Ingredients</span>
            </div>

            <div className="report-stat-card">
              <div className="stat-top">
                <span className="stat-dot orange"></span>
                <strong>1</strong>
              </div>
              <span>Additives</span>
            </div>

            <div className="report-stat-card">
              <div className="stat-top">
                <span className="stat-dot red"></span>
                <strong>2</strong>
              </div>
              <span>Allergen</span>
            </div>

            <div className="report-stat-card">
              <div className="stat-top">
                <span className="stat-dot purple"></span>
                <strong>1</strong>
              </div>
              <span>Preservative</span>
            </div>

          </div>
        </section>

        {/* Ingredient breakdown */}
        <section className="report-section">

          <h2>Ingredient Breakdown</h2>

          <p className="section-subtitle">
            AI-powered explanations for each ingredient
          </p>

          {/* Corn Grits */}
          <div className="ingredient-card">
            <div className="ingredient-card-header">
              <div>
                <h3>Corn Grits</h3>
                <p>Main ingredient</p>
              </div>

              <span className="ingredient-indicator blue"></span>
            </div>

            <p className="ingredient-description">
              Makes up the majority of the cereal and provides its corn base.
            </p>

            <div className="ingredient-card-footer">
              <span className="ingredient-tag blue-tag">
                MAIN INGREDIENT
              </span>

              <button
                onClick={() =>
                  navigate("/ingredient-details?ingredient=corn-grits")
                }
              >
                View details →
              </button>
            </div>
          </div>

          {/* Sugar */}
          <div className="ingredient-card">
            <div className="ingredient-card-header">
              <div>
                <h3>Sugar</h3>
                <p>Added sugar</p>
              </div>

              <span className="ingredient-indicator orange"></span>
            </div>

            <p className="ingredient-description">
              Adds sweetness to the cereal and contributes to its total sugar content.
            </p>

            <div className="ingredient-card-footer">
              <span className="ingredient-tag orange-tag">
                ADDED SUGAR
              </span>

              <button
                onClick={() =>
                  navigate("/ingredient-details?ingredient=sugar")
                }
              >
                View details →
              </button>
            </div>
          </div>

          {/* Wheat & Barley */}
          <div className="ingredient-card">
            <div className="ingredient-card-header">
              <div>
                <h3>Wheat &amp; Barley</h3>
                <p>Cereal grain</p>
              </div>

              <span className="ingredient-indicator red"></span>
            </div>

            <p className="ingredient-description">
              The product label states that it contains wheat and barley.
            </p>

            <div className="ingredient-card-footer">
              <span className="ingredient-tag red-tag">
                ALLERGEN
              </span>

              <button
                onClick={() =>
                  navigate("/ingredient-details?ingredient=wheat-barley")
                }
              >
                View details →
              </button>
            </div>
          </div>

          {/* Antioxidant */}
          <div className="ingredient-card">
            <div className="ingredient-card-header">
              <div>
                <h3>Antioxidant (INS 307b)</h3>
                <p>Antioxidant</p>
              </div>

              <span className="ingredient-indicator purple"></span>
            </div>

            <p className="ingredient-description">
              Used to help protect the product from oxidation and maintain quality.
            </p>

            <div className="ingredient-card-footer">
              <span className="ingredient-tag purple-tag">
                ANTIOXIDANT
              </span>

              <button
                onClick={() =>
                  navigate("/ingredient-details?ingredient=antioxidant")
                }
              >
                View details →
              </button>
            </div>
          </div>

        </section>

        <BottomNavigation />

      </main>
    </div>
  );
}