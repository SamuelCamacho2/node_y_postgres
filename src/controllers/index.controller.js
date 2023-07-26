const e = require('express');
const {Pool} = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'samuelcamachotorres',
    password: '',
    database: 'firstapi',
    port: '5432'
})

const getUser = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');
    res.json(response.rows);
}

const crearteUser = async (req, res) => {
    const { name, email } = req.body
    const response = await pool.query('INSERT INTO users (name,email) VALUES ($1,$2)', [name,email])
    console.log(response)
    res.json({
        message : 'user created',
        body: {
            user: {name, email}
        }
    })
}

const getUserById = async (req, res) =>{
    const id = req.params.id
    const response = await pool.query('SELECT * FROM users WHERE id=$1',[id])
    res.json(response.rows)
}

const deleteUser = async (req, res) => {
    const id = req.params.id
    const response = await pool.query("DELETE FROM users WHERE id=$1", [id])
    res.json({message : 'user deleted',
    body: {
        user: {response}
    }})
}

const updateUser = async (req, res) => {
    const id = req.params.id
    const {name,email} = req.body
    const response = await pool.query('update users set name = $1, email = $2 where id = $3', [name,email,id])
    console.log(response)
    res.json('update successfuly')
}

module.exports = {
    getUser,
    crearteUser,
    getUserById,
    deleteUser,
    updateUser
}