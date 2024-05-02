const express = require("express")
const corsOptions = require("./config/cors")
const cors = require('cors')
const { initializeFirebaseApp } = require('./lib/firebase')
const { handler } = require('./handler')

const app = express()

app.use(express.json())
initializeFirebaseApp()

app.use(cors(corsOptions))

app.post('*', async (req, res) => {
    console.log(req.body)
    res.send(await handler(req, "POST"))
})

app.get('*', async (req, res) => {
    res.send(await handler(req, "GET"))
})

const PORT = 4040

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
