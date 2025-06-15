
/**
 * Calls the Supabase Edge Function to get a recipe from Gemini given a user message.
 * @param userPrompt e.g. "Suggest a vegan pasta recipe with lentils and broccoli"
 * @returns Gemini API response object
 */
export async function getRecipeFromAI(userPrompt: string) {
  // Call the new Gemini-based function!
  const res = await fetch(
    "https://zgiqaxxkrkjhubsausox.supabase.co/functions/v1/get-recipe-from-gemini",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: userPrompt }),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error?.error || "AI response failed");
  }

  return res.json(); // { recipe }
}
