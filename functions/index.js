import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';
import functions, { https } from 'firebase-functions';
import { onRequest } from 'firebase-functions/v1/https';

dotenv.config();

const app = express();
app.use(cors());

const port = functions.config().port.key || 8080;

const openai = new OpenAI({
	apiKey: functions.config().openai.key,
});

async function getPuns(req, res) {
	const punPrompt = req.query.punPrompt;

    const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'user',
                content: `Give me a fun pun about ${punPrompt}`
            }
        ]
    })
    res.json(completion.choices[0].message);
}

app.get('/', getPuns);

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});

export const api = functions.https.onRequest(app);