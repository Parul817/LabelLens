const products = {
  cornFlakes: {
    id: "corn-flakes",
    name: "Corn Flakes",
    category: "Food & Beverage",
    score: 82,

    ingredients: [
      {
        name: "Corn Grits",
        type: "Main Ingredient",
        description:
          "Corn grits are the main ingredient in this cereal, providing its corn base and contributing carbohydrates for energy.",
        whyItMatters:
          "As the main ingredient, corn provides most of the cereal's base. The label also shows that the product contains added sugar.",
        tag: "Main Ingredient",
      },
      {
        name: "Sugar",
        type: "Added sugar",
        description:
          "Sugar adds sweetness to the cereal and contributes to its total sugar content.",
        whyItMatters:
          "Because sugar is listed as an ingredient, it contributes to the product's overall added sugar content.",
        tag: "Added Sugar",
      },
      {
        name: "Wheat & Barley",
        type: "Cereal grain",
        description:
          "Wheat and barley are cereal grains used as ingredients in the product.",
        whyItMatters:
          "Wheat and barley can be important allergens for sensitive individuals, so their presence should be clearly identified on the label.",
        tag: "Allergen",
      },
      {
        name: "Antioxidant (INS 307b)",
        type: "Antioxidant",
        description:
          "Used to help protect the product from oxidation and maintain quality.",
        whyItMatters:
          "Antioxidants are added to help maintain product quality and stability during storage.",
        tag: "Antioxidant",
      },
    ],

    highlights: {
      generalIngredients: 3,
      additives: 1,
      allergens: 2,
      preservatives: 1,
    },

    concerns: [
      "No artificial colours detected",
      "Contains added sugar",
      "Contains barley",
    ],
  },

  productB: {
    id: "product-b",
    name: "Product B",
    category: "Food & Beverage",
    score: 76,

    ingredients: [
      {
        name: "Ingredient 1",
        type: "Main Ingredient",
        description: "Product B main ingredient.",
        whyItMatters: "This ingredient contributes to the product's composition.",
        tag: "Main Ingredient",
      },
      {
        name: "Sugar",
        type: "Added sugar",
        description: "Added sugar used in Product B.",
        whyItMatters:
          "Added sugar contributes to the product's overall sugar content.",
        tag: "Added Sugar",
      },
    ],

    highlights: {
      generalIngredients: 2,
      additives: 1,
      allergens: 1,
      preservatives: 0,
    },

    concerns: [
      "Contains added sugar",
      "Check allergen information",
    ],
  },
};

export default products;