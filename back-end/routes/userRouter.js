const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = function userRouter(app, db) {

    app.get("/users", async (req, res) => {
        const allUsers = await db.query(`SELECT * FROM users`)
        res.send(allUsers)

    })

    app.post('/signup', async (req, res) => {
        // const firstname = req.body.firstname
        // const lastname = req.body.lastname
        const email = req.body.email
        const password = req.body.password

        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                return res.status(500).json({
                    error: err
                })
            }

            else {
                db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hash])
            }

        })



        // const responseDB = await db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, password])
        // res.send(responseDB)
    })

    app.get('/login', async (req, res) => {



        const email = req.body.email
        const password = req.body.password

        const userToCheck = await db.query(`SELECT email, password FROM users WHERE email = "${email}"`)

        // if () return res.sendStatus(401)({
        //     message: "L'adresse email n'est pas reconnue"
        //  })

        //res.send(responseDB)

    })
}



// app.put("/categories/:id", async (req, res) => {
//     const name = req.body.name
//     const id = req.params.id
//     const responseDB = await db.query('UPDATE categories SET name = (?) WHERE id = (?)', [name, id])
//     res.send(responseDB)
// })

