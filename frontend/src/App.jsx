import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/Home";
import Camera from "./pages/Camera";
import Processing from "./pages/Processing";
import Results from "./pages/Results";
import IngredientReport from "./pages/IngredientReport";
import IngredientDetails from "./pages/IngredientDetails";




function CompareProducts() {
  return <h1>Compare Products</h1>;
}

function History() {
  return <h1>History</h1>;
}

function Profile() {
  return <h1>Profile</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/camera" element={<Camera />} />

        <Route path="/processing" element={<Processing />} />

        <Route path="/results" element={<Results />} />

        <Route
          path="/ingredient-report"
          element={<IngredientReport />}
        />

        <Route
          path="/ingredient-details"
          element={<IngredientDetails />}
        />

        <Route
          path="/compare"
          element={<CompareProducts />}
        />

        <Route path="/history" element={<History />} />

        <Route path="/profile" element={<Profile />} />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;