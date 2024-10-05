const express = require('express');
const { Configuration, OpenAIApi } = require('openai');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const configuration = new Configuration({
    apiKey: 'YOUR_OPENAI_API_KEY', // Replace with your OpenAI API key
});
const openai = new OpenAIApi(configuration);

app.post('/chatbot', async (req, res) => {
    const { userInput } = req.body;

    try {
        const response = await openai.createCompletion({
            model: 'text-davinci-003', // GPT-3/4 model
            prompt: `Respond empathetically to the following mental health query: ${userInput}`,
            max_tokens: 150,
        });

        const botResponse = response.data.choices[0].text.trim();
        res.json({ botResponse });
    } catch (error) {
        res.status(500).json({ error: 'Error connecting to OpenAI' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
import React, { useState } from 'react';

function MindsetForm() {
    const [formData, setFormData] = useState({
        mood: '',
        stressLevel: '',
        sleepHours: '',
        energy: '',
        physicalActivity: '',
        emotions: '',
        notes: ''
    });
    const [analysis, setAnalysis] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/analyze-mindset', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            setAnalysis(data.analysis);  // Display analysis returned by the backend
        } catch (error) {
            console.error("Error analyzing mindset:", error);
        }
    };

