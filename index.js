require('dotenv').config();
const express = require('express')
const app = express()
const userRouter = require('./Router/userRouter');

//  Referente a desconstrução - Podemos desconstruir assim ->
// const PORT = process.env.PORT || 3000;
const { PORT = 3000 } = process.env;

app.use('/users', userRouter);




app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))