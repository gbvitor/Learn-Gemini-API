import * as dotenv from "dotenv";

dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";
export async function inicializaModelo(modelo) {
    // Access your API key as an environment variable (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({
        model: modelo,
        generationConfig: {
            candidateCount: 1,
            maxOutputTokens: 1000,
            temperature: 1.0,
        },
    });

    return model;
}
