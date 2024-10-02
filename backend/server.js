import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());

const port = process.env.PORT || 8080;

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

async function getPuns(req, res) {
	const punPrompt = req.query.punPrompt;

    const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'user',
                content: `Give me a pun about ${punPrompt}`
            }
        ]
    })
    res.json(completion.choices[0].message);
}

app.get('/', getPuns);

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});