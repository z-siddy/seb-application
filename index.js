const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/routes");
var path = require("path");
var PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use("/api",routes);

app.use(express.static(path.join(__dirname, 'build')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + 'build/index.html'))
})

app.listen(PORT, () => console.log("Running on port %s", PORT));
