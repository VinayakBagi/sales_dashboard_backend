const { HfInference } = require("@huggingface/inference");
const config = require("../config");

const hf = new HfInference(config.HUGGINGFACE_API_KEY);

const generateInsights = async (salesData) => {
  const salesJSON = JSON.stringify(salesData);
  const prompt = `Analyze the following sales data and provide insights: ${salesJSON}`;
  const gptResponse = await hf.textGeneration({
    model: "meta-llama/Meta-Llama-3-8B-Instruct",
    inputs: prompt,
    parameters: { max_new_tokens: 200 },
  });
  const insights = gptResponse?.generated_text?.split(prompt)[1];
  return insights;
};

const generateForecast = async (salesData) => {
  const salesJSON = JSON.stringify(salesData);
  const prompt = `Based on the following sales data, provide an average predict for each category in next month in one line: ${salesJSON}`;

  const gptResponse = await hf.textGeneration({
    model: "meta-llama/Meta-Llama-3-8B-Instruct",
    inputs: prompt,
    parameters: { max_new_tokens: 200 },
  });
  const forecast = gptResponse?.generated_text?.split(prompt)[1];

  return forecast;
};

const answerQuery = async (query, salesData) => {
  const salesJSON = JSON.stringify(salesData);
  const prompt = `Based on the following sales data : ${salesJSON}, answer in one line without any code snippets and with prefix *ANSWER* - ${query}?`;

  const gptResponse = await hf.textGeneration({
    model: "meta-llama/Meta-Llama-3-8B-Instruct",
    inputs: prompt,
    parameters: { max_new_tokens: 200 },
  });
  const answer = gptResponse?.generated_text?.split(prompt)[1];

  return answer;
};

module.exports = { generateInsights, generateForecast, answerQuery };
