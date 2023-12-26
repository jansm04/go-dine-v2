const openAI = require('openai');

const openAI_key = process.env.OPENAI_KEY;

const openai = new openAI({ 
    apiKey: openAI_key 
});
export default openai;