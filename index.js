const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const ID = "7103512968";
const TOKEN = "9feaaaa5f6b34247b114e9961dde18315c59118169b9401788";
const PHONE = "919664917815";

app.post('/send', async (req, res) => {
    const { message } = req.body;
    try {
        const url = `https://7103.api.greenapi.com/waInstance${ID}/sendMessage/${TOKEN}`;
        const response = await axios.post(url, {
            chatId: `${PHONE}@c.us`,
            message: message
        });
        res.json({ status: "Success", data: response.data });
    } catch (error) {
        res.status(500).json({ status: "Failed", error: error.message });
    }
});

app.listen(process.env.PORT || 3000, () => console.log('API is live!'));