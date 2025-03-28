
import Groq from "groq-sdk";

// Initialize Groq client with API key
const groq = new Groq({
  apiKey: "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",
});

export const getGroqChatCompletion = async (messages: Array<{ role: "system" | "user" | "assistant"; content: string }>) => {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages,
      model: "llama-3.3-70b-versatile",
      temperature: 0.5,
      max_completion_tokens: 1024,
      top_p: 1,
      stream: false,
    });
    
    return chatCompletion.choices[0]?.message?.content || "";
  } catch (error) {
    console.error("Error calling Groq API:", error);
    return "I apologize, but I'm having trouble connecting to my knowledge base right now. Please try again in a moment.";
  }
};
