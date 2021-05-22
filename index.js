const express = require('express')
const app = express()
const port = process.env.TOKEN || 3000;

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`this app listeming on port ${port}`)
})