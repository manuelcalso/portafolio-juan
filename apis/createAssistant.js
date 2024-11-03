import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function createAssistant () {
  try {
    const assistant = await openai.assistants.create({
      name: "Math Tutor",
      instructions:
        "You are a personal math tutor. Write and run code to answer math questions.",
      tools: [{ type: "code_interpreter" }],
      model: "gpt-4",
    });
    console.log("Assistant created successfully:", assistant);
  } catch (error) {
    console.error("Error creating assistant:", error);
  }
}

main();
