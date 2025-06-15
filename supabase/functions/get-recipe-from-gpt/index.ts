
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = "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";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();

    const openAIResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages,
        store: true
      }),
    });

    const data = await openAIResponse.json();
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Failed to connect to OpenAI", detail: e.message }), {
      status: 500,
      headers: corsHeaders,
    });
  }
});
