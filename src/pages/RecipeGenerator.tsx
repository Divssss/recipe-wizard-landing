
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { getRecipeFromAI } from "@/integrations/supabase/recipes-ai";

const parseAIRecipe = (content: string) => {
  // Very basic: break by lines for display, extract title/steps if formatted.
  // For better layouts, use smarter parsing if needed.
  return content.split("\n").map((line, idx) => <div key={idx}>{line}</div>);
};

const RecipeGeneratorPage = () => {
  const [ingredients, setIngredients] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    setRecipe(null);

    const prompt = ingredients.trim()
      ? `Suggest a recipe using: ${ingredients}`
      : "Suggest an easy dinner recipe";

    try {
      const aiResult = await getRecipeFromAI(prompt);

      // OpenAI response: result.choices[0].message.content
      let content = aiResult?.choices?.[0]?.message?.content ?? null;

      if (!content) throw new Error("No recipe found in AI response.");
      setRecipe(content);

      toast({
        title: "Recipe generated!",
        description: "Scroll down to see your AI-powered recipe.",
      });
    } catch (e: any) {
      setError(e.message || "Failed to generate recipe.");
      toast({
        title: "Error generating recipe",
        description: e.message || "Something went wrong.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-brand-neutral flex items-center justify-center py-6 px-2">
      <Card className="w-full max-w-lg shadow-xl">
        <CardHeader>
          <CardTitle>Recipe Generator</CardTitle>
          <div className="text-muted-foreground mt-2 text-base">
            Enter ingredients you have, and get a custom recipe from AI!
          </div>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="E.g. chicken, spinach, feta, lemon"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="mb-4"
            disabled={loading}
            rows={3}
          />
          <Button
            onClick={handleGenerate}
            disabled={loading || !ingredients.trim()}
            className="w-full font-semibold mb-2"
          >
            {loading ? "Generating..." : "Generate Recipe"}
          </Button>
          {error && (
            <div className="text-red-500 text-sm mt-2">{error}</div>
          )}
          {recipe && (
            <div className="mt-6 bg-muted/40 p-4 rounded-lg border leading-relaxed max-h-96 overflow-y-auto whitespace-pre-line">
              <h3 className="font-bold text-xl mb-2 text-emerald-700">AI Recipe:</h3>
              {parseAIRecipe(recipe)}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RecipeGeneratorPage;
