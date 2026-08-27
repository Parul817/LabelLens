import { useNavigate } from "react-router-dom";
import BottomNavigation from "../components/BottomNavigation";
import "../App.css";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="app-shell">
      <main className="mobile-screen home-screen">
        <header className="home-header">
          <h1>Good morning, User 👋</h1>
          <p>What would you like to scan today?</p>
        </header>

        <section className="lens-card">
          <div>
            <h2>◯ FoodLens</h2>
            <p>
              Understand every ingredient
              <br />
              before you buy.
            </p>
          </div>

          <button onClick={() => navigate("/camera")}>
            Scan →
          </button>
        </section>

        <section className="lens-card">
          <div>
            <h2>♧ BeautyLens</h2>
            <p>
              Decode beauty products,
              <br />
              ingredient by ingredient.
            </p>
          </div>

          <button onClick={() => navigate("/camera")}>
            Scan →
          </button>
        </section>

        <section className="recent-section">
          <div className="section-heading">
            <h2>Recent Scans</h2>

            <button onClick={() => navigate("/history")}>
              See all →
            </button>
          </div>

          <div className="recent-grid">
            <div className="recent-card">
              <div className="recent-icon">▧</div>

              <div>
                <strong>Corn Flakes</strong>
                <span>Food</span>
              </div>
            </div>

            <div className="recent-card">
              <div className="recent-icon">▧</div>

              <div>
                <strong>Cetaphil</strong>
                <span>Cosmetics</span>
              </div>
            </div>
          </div>
        </section>

        <BottomNavigation />
      </main>
    </div>
  );
}

