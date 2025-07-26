import express from 'express';
import dotenv from 'dotenv'

dotenv.config()

const app = express();

app.use(express.json())

app.get('/', async (req, res) => {
    try {
        res.status(200).json({ data: 'NIGGA' })
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});