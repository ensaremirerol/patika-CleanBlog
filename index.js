const express = require('express');
const port = 3000;
const app = express();

const data = { id: 1, title: "Blog title", description: "Blog description" }

app.get("/", (req, res) => {
    res.send(data);
});

app.listen(port, () => console.log(`Sunucu ${port} da başladı`));