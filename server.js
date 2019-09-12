const express = require('express')
const path = require ("path");
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "static", "index.html"));
})

app.use(express.static('static'));

app.listen(process.env.PORT || PORT, () => {
    console.log("server started", PORT);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))