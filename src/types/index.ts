/**
 * A recipe category returned by the `categories.php` endpoint.
 * Used to render the category cards on the home page.
 */
export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

/**
 * A lightweight recipe object returned by list-style endpoints such as
 * category filters and search results.
 */
export interface MealSummary {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

/**
 * A full recipe record returned by the `lookup.php` endpoint.
 * It extends `MealSummary` because the detail response includes the
 * basic meal card fields plus instructions, metadata, ingredients,
 * and measurements.
 */
export interface MealDetail extends MealSummary {
  strMealAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strTags: string | null;
  strYoutube: string;
  strSource: string | null;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strIngredient16: string | null;
  strIngredient17: string | null;
  strIngredient18: string | null;
  strIngredient19: string | null;
  strIngredient20: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strMeasure16: string | null;
  strMeasure17: string | null;
  strMeasure18: string | null;
  strMeasure19: string | null;
  strMeasure20: string | null;
}

/**
 * Response shape for the categories endpoint.
 * The API returns all categories under a `categories` key.
 */
export interface CategoryResponse {
  categories: Category[];
}

/**
 * Response shape for endpoints that return a list of meals.
 * `meals` can be `null` when no results are found.
 */
export interface MealSummaryResponse {
  meals: MealSummary[] | null;
}

/**
 * Response shape for a recipe detail lookup.
 * `meals` is usually a single-item array, but can be `null`
 * when the provided meal ID does not exist.
 */
export interface MealDetailResponse {
  meals: MealDetail[] | null;
}

/**
 * The shared value exposed by FavoritesContext.
 * Stores favorite recipe IDs and helper functions for adding,
 * removing, and checking favorites anywhere in the app.
 */
export interface FavoritesContextType {
  /** An array of saved recipe IDs persisted in localStorage. */
  favorites: string[];
  /** Adds a recipe ID to the favorites list. */
  addFavorite: (id: string) => void;
  /** Removes a recipe ID from the favorites list. */
  removeFavorite: (id: string) => void;
  /** Returns `true` when the given recipe ID is already favorited. */
  isFavorite: (id: string) => boolean;
}
