import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Processing() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/results");
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="app-shell">
      <main className="mobile-screen processing-screen">

        <div className="processing-content">

          <div className="processing-logo">
            <div className="processing-logo-icon">
              🔍
            </div>
            <strong>LabelLens</strong>
          </div>

          <h1>Understanding your label</h1>

          <p className="processing-subtitle">
            We're decoding the ingredients
            <br />
            so you don't have to.
          </p>

          <div className="processing-steps">

            <div className="processing-step active">
              <span className="step-dot">✓</span>
              <span>Reading label</span>
            </div>

            <div className="processing-step active">
              <span className="step-dot">✓</span>
              <span>Identifying ingredients</span>
            </div>

            <div className="processing-step">
              <span className="step-dot"></span>
              <span>Preparing your report</span>
            </div>

          </div>

          <div className="processing-progress">
            <div className="processing-progress-bar"></div>
          </div>

          <p className="processing-percent">
            83%
          </p>

          <p className="processing-footer">
            Your label is being analyzed securely.
          </p>

        </div>

      </main>
    </div>
  );
}