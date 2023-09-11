const express = require('express');
const notes = require('./data/notes')
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const app = express();
dotenv.config();
connectDB();

app.use(express.json())

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send("API is runnning");
});

app.get('/api/notes', (req, res) => {
    res.json(notes)
})

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started at port ${PORT}`));