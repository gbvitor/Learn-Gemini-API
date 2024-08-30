import * as dotenv from "dotenv";
dotenv.config();
import { GoogleGenerativeAI } from "@google/generative-ai";
import fazerPergunta from "./pergunta.js";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = await fazerPergunta("Me faça uma pergunta: ");

    // Count the number of tokens in the prompt
    const countResult = await model.countTokens(prompt);
    const generateResult = await model.generateContent(prompt);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    console.log(`Tokens: ${countResult.totalTokens}`);
    console.log(generateResult.response.usageMetadata);
}

run();
