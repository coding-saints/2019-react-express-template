const path = require('path')
const express = require('express')

const app = express()

const DIST_DIR = './dist'
const HTML_FILE = path.join(DIST_DIR, 'index.html')

const mockResponse = {
    name: "Nick",
    title: "Cloud Engineer"
}
console.log(__dirname)
app.use(express.static(DIST_DIR))

app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
})

app.get('/api', (req, res) => {
    res.send(mockResponse)
})

// app.get('/', (req,res) => {
//     console.log(__dirname)
//     res.status(200).sendFile(__dirname, 'dist/index.html')
// })

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server on ${PORT}`)
})