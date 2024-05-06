import express from 'express'
import mysql from 'mysql'
import cors from 'cors'



const app = express();
app.use(cors());
app.use(express.json());




const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "App"

})



app.get('/AllUser', (req, res) => {
    const sql = "SELECT * FROM `app_user`";

    db.query(sql, (err, result) => {

        if (err) return res.json("server error c");
        return res.json(result);
    })


})



app.post("/delete", (req, res) => {
    const { phone } = req.body;

    const sql = 'DELETE FROM `app_user` WHERE phone = ?';
    const values = [phone];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            return res.status(500).json({ message: 'Failed to save data' });
        }

        res.status(200).json({ message: 'Delete User sucessfully' });
    });
});




app.post("/update", (req, res) => {
    const { Name,

        Lang,
        Occupation,
        objective,
        Sub,
        Phone } = req.body;

    const sql = 'UPDATE `app_user` SET `user_name`=?,`user_Language`=?,`user_occupation`=?,`user_objective`=?,`user_subscription`=? WHERE phone`=?';
    const values = [Name,

        Lang,
        Occupation,
        objective,
        Sub,
        Phone];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            return res.status(500).json({ message: 'Failed to save data' });
        }

        res.status(200).json({ message: 'Data Update successfully' });
    });
});


app.post("/insert", (req, res) => {
    const { Name,
        Occupation,
        Lang,
        Sub,
        Phone2,
        objective } = req.body;
    console.log(Phone2)
    const sql = 'INSERT INTO `app_user`(`user_name`, `user_Language`, `user_occupation`, `user_objective`, `user_subscription`, `phone`)VALUES (?, ?, ?, ?, ?,?)';
    const values = [Name,
        Lang,
        Occupation,
        objective,
        Sub,
        Phone2
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            return res.status(500).json({ message: 'Failed to save data' });
        }

        res.status(200).json({ message: 'Data saved successfully' });
    });
});












app.listen(2000, () => {
    console.log("cow")

})