require('dotenv').config()
const express = require('express')
const cors = require('cors')
const db = require('./db')
const app = express()

/* Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources 
on a web page to be requested from another domain outside the domain from which the first 
resource was served. 
*/
app.use(cors());

/* Is necessary to access req.body */
app.use(express.json());

/* Endpoint to post a signup user to postgresql database. */
app.post("/post-user-details", async (req, res) => { 
    const {username, email, password} = req.body;

    /* Checking if user is already signed up. */
    const checkEmail = await db.query('SELECT * FROM "user" WHERE email=$1;', [email]);
    if(checkEmail.rowCount > 0) {
        res.status(201).json({
            success: false,
            user: checkEmail.rows[0].username
        });
        console.log(checkEmail.rows[0].username);

    /* Posting user's username email and password to postgresql database. */
    } else {
        const insertUser = await db.query('INSERT INTO "user" (username, email, password) VALUES ($1, $2, $3) RETURNING *;', [username, email, password]);
        res.status(201).json({
            success: true,
            user: insertUser.rows[0].username
        });
    }
})

const port = process.env.PORT || 3002
app.listen(port, () => {
    console.log('server is up and listening on port ' + port)
})