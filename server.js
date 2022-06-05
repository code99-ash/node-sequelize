const cors = require('cors');
const express = require('express');
// const bodyParser = require('body-parser')

const app = express();
const PORT = 3000;

const corOptions = {
    origin: 'http://localhost:8081',
}

// Middlewares
app.use(cors(corOptions))
app.use(express.json());
app.use(express.urlencoded({extended: true}))

require('./database/connection')

// routers
app.use('/api/products', require('./routes/productRouter.js'))


// testing api
app.get('/', (req, res) => {
    res.send("Hey, Watsup")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});