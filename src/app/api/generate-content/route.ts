export async function POST(req: Request) {
  const body = await req.json();
  const { prompt, apiKey } = body;

  const resolvedApiKey = apiKey || process.env.OPENAI_API_KEY;
  if (!resolvedApiKey) {
    return new Response(
      JSON.stringify("OpenAI API key is missing. Add one in the app or set OPENAI_API_KEY in your environment."),
      { status: 400 },
    );
  }

  try {
    const openAiUrl = process.env.OPENAI_BASE_URL || "https://api.openai.com/v1/chat/completions";

    const response = await fetch(openAiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resolvedApiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        temperature: 1,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        messages: prompt,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      const message = responseData?.error?.message || "Failed to generate content.";
      return new Response(JSON.stringify(message), { status: response.status || 500 });
    }

    const generatedContent = responseData?.choices?.[0]?.message?.content;
    return new Response(JSON.stringify(generatedContent));
  } catch (error: any) {
    const message = error?.message || "Failed to generate content.";
    return new Response(JSON.stringify(message), { status: 500 });
  }
}
