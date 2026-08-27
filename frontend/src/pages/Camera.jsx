import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "../components/BottomNavigation";

export default function Camera() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [image, setImage] = useState(null);

  const handleCapture = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  const processImage = () => {
    if (!image) return;

    navigate("/processing");
  };

  return (
    <div className="app-shell">
      <main className="mobile-screen camera-screen">

        <header className="camera-header">
          <button
            className="back-button"
            onClick={() => navigate("/")}
          >
            ←
          </button>

          <h1>Scan Product</h1>

          <span className="lens-pill">FoodLens</span>
        </header>

        <section className="scanner-container">

          <p className="scanner-instruction">
            Align ingredient list inside the frame
          </p>

          <div className="scanner-frame">

            {image ? (
              <img
                src={image}
                alt="Selected product label"
                className="scanned-image"
              />
            ) : (
              <div className="document-placeholder">
                <div className="document-lines">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}

            <div className="corner top-left" />
            <div className="corner top-right" />
            <div className="corner bottom-left" />
            <div className="corner bottom-right" />

            <div className="scan-line" />
          </div>

          <p className="steady-text">
            📷 Hold your phone steady
          </p>

        </section>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleImageChange}
          hidden
        />

        {!image ? (
          <button
            className="capture-button"
            onClick={handleCapture}
          >
            <span className="capture-circle" />
            <strong>Capture</strong>
          </button>
        ) : (
          <button
            className="process-button"
            onClick={processImage}
          >
            Analyze Label →
          </button>
        )}

        <BottomNavigation />

      </main>
    </div>
  );
}