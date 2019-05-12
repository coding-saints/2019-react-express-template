const express = require('express')
const app = express()
const PORT = process.env.PORT || 3337

const mockResponse = {
    name: "Nick",
    title: "Cloud Engineer"
}

app.get('/api', (req,res) => {
    res.send(mockResponse)
})

app.get('/', (req,res) => {
    res.status(200).send("Hey there buddy...")
})

app.listen((PORT) => console.log(`server on ${PORT}`))