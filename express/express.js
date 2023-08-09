import express from "express"


const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.status(200).send("Welcome to the home page")
})

app.get('/signup', (req, res) => {
    res.status(200).send("Welcome to the sign up page")
})

app.get('/login', (req, res) => {
    res.status(200).send("Welcome to the login page")
})

app.get('/dashboard', (req, res) => {
    res.status(200).send("Welcome to the dashboard page")
})

app.get('/profiles', (req, res) => {
    res.status(200).json({
        user: 1,
        posts: 10,
        username: "Hammad Ur Rehman"
    })
})

app.post('/profiles', (req, res) => {
    res.status(200).send("User is found name Hammad Ur Rehman")
})

app.delete('/profiles', (req, res) => {
    res.status(200).send("User is deleted")
})

app.put('/profiles', (req, res) => {
    res.status(200).send("User is updated")
})




app.listen(port, () => {
    console.log("server is running")
})