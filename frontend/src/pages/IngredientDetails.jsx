import { useNavigate, useSearchParams } from "react-router-dom";
import BottomNavigation from "../components/BottomNavigation";

const ingredients = {
  "corn-grits": {
    name: "Corn Grits",
    type: "Main Ingredient",
    tag: "Main Ingredient",
    color: "blue",

    whatItDoes:
      "Corn grits are the main ingredient in this cereal, providing its corn base and contributing carbohydrates for energy.",

    whyItMatters:
      "As the main ingredient, corn provides most of the cereal's base. The label also shows that the product contains added sugar.",

    labelInsight:
      "LabelLens identified corn grits as the primary ingredient from the product label.",
  },

  sugar: {
    name: "Sugar",
    type: "Added sugar",
    tag: "Added Sugar",
    color: "orange",

    whatItDoes:
      "Sugar adds sweetness to the cereal and contributes to its total sugar content.",

    whyItMatters:
      "Because sugar is listed as an ingredient, it contributes to the product's overall added sugar content.",

    labelInsight:
      "LabelLens identified sugar as an added sugar ingredient from the product label.",
  },

  "wheat-barley": {
    name: "Wheat & Barley",
    type: "Cereal grain",
    tag: "Allergen",
    color: "red",

    whatItDoes:
      "Wheat and barley are cereal grains used as ingredients in the product.",

    whyItMatters:
      "Wheat and barley can be important allergens for sensitive individuals, so their presence should be clearly identified on the label.",

    labelInsight:
      "LabelLens identified wheat and barley from the product label and flagged them as allergens.",
  },

  antioxidant: {
    name: "Antioxidant (INS 307b)",
    type: "Antioxidant",
    tag: "Antioxidant",
    color: "purple",

    whatItDoes:
      "Used to help protect the product from oxidation and maintain quality.",

    whyItMatters:
      "Antioxidants are added to help maintain product quality and stability during storage.",

    labelInsight:
      "LabelLens identified INS 307b as an antioxidant ingredient from the product label.",
  },
};

export default function IngredientDetails() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const ingredientKey = searchParams.get("ingredient") || "corn-grits";

  const ingredient =
    ingredients[ingredientKey] || ingredients["corn-grits"];

  return (
    <div className="app-shell">
      <main className="mobile-screen ingredient-details-screen">

        {/* Header */}
        <header className="ingredient-details-header">
          <button
            className="back-button"
            onClick={() => navigate("/ingredient-report")}
          >
            ←
          </button>

          <h1>Ingredient Details</h1>
        </header>

        {/* Ingredient title */}
        <section className="ingredient-details-title">

          <h2>{ingredient.name}</h2>

          <p>{ingredient.type}</p>

          <span
            className={`details-tag ${ingredient.color}-details-tag`}
          >
            {ingredient.tag}
          </span>

        </section>

        {/* What it does */}
        <section className="details-section">

          <h3>What it does</h3>

          <p>
            {ingredient.whatItDoes}
          </p>

        </section>

        {/* Why it matters */}
        <section className="details-section">

          <h3>Why it matters</h3>

          <p>
            {ingredient.whyItMatters}
          </p>

        </section>

        {/* Label Insight */}
        <section className="details-section label-insight">

          <h3>Label Insight</h3>

          <p>
            {ingredient.labelInsight}
          </p>

          <span className="ai-analysis-tag">
            AI ANALYSIS
          </span>

        </section>

        <BottomNavigation />

      </main>
    </div>
  );
}