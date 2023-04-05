const express = require('express')
const app = express()


app.post("/register", (req, res) => {
    res.json([])
});

app.post("/login", (req, res) => {
    res.json([])
});

///

app.get("/questions", (req, res) => {
    res.json({
        "questions": 
            ["how to start a band", "how to learn not to curse", "why is my roomate always so loud", "how much does beer costs"]
        })
})

app.post("/questions", (req, res) => {
    res.json({"questions": []})
})

app.patch("/questions/:id", (req, res) => {
    res.json({"questions": []})
})

app.delete("/questions/:id", (req, res) => {
    res.json({"questions": []})
})

///

app.get("/questions/:id/answers", (req, res) => {
    res.json({
        "questions": 
            ["how to start a band", "how to learn not to curse", "why is my roomate always so loud", "how much does beer costs"],
        "answers": 
            ["you just do it", "stop doing that", "because he is an arse", "too much"]
        })
})

app.get("/answers", (req, res) => {
    res.json({"answers": ["you just do it", "stop doing that", "because he is an arse", "too much"]})
})

app.post("/answers", (req, res) => {
    res.json({"answers": ["you just do it", "stop doing that", "because he is an arse", "too much"]})
})

app.patch("/answers/:id", (req, res) => {
    res.json({"answers": []})
})

app.delete("/answers/:id", (req, res) => {
    res.json({"answers": []})
})

app.listen(5000, () => {console.log("server started on port 5000")})