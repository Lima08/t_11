require('dotenv').config();
const express = require('express')
const app = express()


//  Referente a desconstrução - Podemos desconstruir assim ->
// const { PORT } = process.env.PORT || 3000;
const { PORT } = process.env;

app.get('/user/', (req, res) => res.send('Hello World!'))
app.listen(PORT = 3000, () => console.log(`Example app listening on port ${PORT}!`))