import { OpenAI } from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  api_key: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  const { prompt } = await request.json();

  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: prompt ?? "a white siamese cat",
    // n: 1,
    // size: "1024x1024",
  });
  try {
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      return NextResponse.json({ error: error.response.data }, { status: 500 });
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      return NextResponse.json(
        { error: "An error occurred during your request." },
        { status: 500 }
      );
    }
  }
}
