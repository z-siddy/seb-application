const express = require('express')
const app = express()
const routes = require('./routes/routes')
const PORT = 3000

app.use(express.json())
app.use('/api', routes)

app.listen(PORT, () => console.log('Running on port 3000'))