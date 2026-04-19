import type {
  CategoryResponse,
  MealDetailResponse,
  MealSummaryResponse,
} from "../types";

/**
 * Base URL for all TheMealDB API requests.
 * Each helper function appends its endpoint to this string.
 */
export const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

/**
 * Fetches data from TheMealDB API and returns it as the expected type.
 *
 * This generic helper keeps the request and error-handling logic in one
 * place so the rest of the app can call small, focused API functions.
 *
 * @template T The expected shape of the JSON response.
 * @param endpoint The API endpoint to append to the base URL.
 * @returns A promise that resolves to the typed API response.
 * @throws Will throw an error if the HTTP response is not successful.
 */
async function fetchFromApi<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

/**
 * Fetches all available meal categories.
 *
 * Used on the home page to display category cards users can browse.
 *
 * @returns A promise containing the category response from TheMealDB.
 */
export function getCategories() {
  return fetchFromApi<CategoryResponse>("/categories.php");
}

/**
 * Fetches a list of meal summaries for a given category.
 *
 * The returned meals include summary information such as the meal ID,
 * name, and thumbnail image. This is useful for category listing pages.
 *
 * @param category The name of the category to filter by.
 * @returns A promise containing the matching meal summaries.
 */
export function getMealsByCategory(category: string) {
  return fetchFromApi<MealSummaryResponse>(
    `/filter.php?c=${encodeURIComponent(category)}`,
  );
}

/**
 * Fetches the full details for a single meal by its ID.
 *
 * This is used on the recipe detail page, where the app needs the
 * instructions, ingredients, measurements, and other full recipe data.
 *
 * @param id The unique meal ID.
 * @returns A promise containing the detailed meal response.
 */
export function getMealById(id: string) {
  return fetchFromApi<MealDetailResponse>(
    `/lookup.php?i=${encodeURIComponent(id)}`,
  );
}

/**
 * Searches for meals by name.
 *
 * The search endpoint can return multiple matching meals, and each result
 * includes detailed recipe fields when matches are found.
 *
 * @param query The search text entered by the user.
 * @returns A promise containing the meals that match the search term.
 */
export function searchMeals(query: string) {
  return fetchFromApi<MealDetailResponse>(
    `/search.php?s=${encodeURIComponent(query)}`,
  );
}
