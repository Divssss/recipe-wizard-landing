
/**
 * Calls the Supabase Edge Function to get a recipe from OpenAI given a user message.
 * @param userPrompt e.g. "Suggest a vegan pasta recipe with lentils and broccoli"
 * @returns OpenAI API response object
 */
export async function getRecipeFromAI(userPrompt: string) {
  // Edit path to match your Supabase Edge Function deployment
  const res = await fetch(
    "https://zgiqaxxkrkjhubsausox.supabase.co/functions/v1/get-recipe-from-gpt",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // If your app is authenticated, include the user's JWT token here
      },
      body: JSON.stringify({
        messages: [
          {
            role: "system",
            content: "You are a creative chef assistant. Respond ONLY with one recipe suggestion relevant to the user's request. Respond with detailed steps, ingredients, and nutrition if possible."
          },
          { role: "user", content: userPrompt }
        ]
      }),
    }
  );

  if (!res.ok) throw new Error("AI response failed");
  return res.json();
}
