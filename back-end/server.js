require('dotenv').config()
const express = require('express')
const app = express()
const mysql = require('promise-mysql')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = process.env.PORT

const connectionOptions = {
    host: process.env.DB_HOST,
    database: process.env.DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    port: process.env.DB_PORT
}

app.listen(port, () => {
    console.log("Scooter, Écouteurs: le port 5000 est guetteur 🎶")
})

mysql.createConnection(connectionOptions)
    .then(async (db) => {
        app.get("/", async (req, res) => {

            res.send("Test OK")

        })


    })
    // .catch(error)