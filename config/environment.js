const dotenv = require("dotenv")
dotenv.config()

const HOST = process.env.NODE_HOST
const PORT = process.env.NODE_PORT
const NODE_EMAIL = process.env.NODE_EMAIL
const NODE_PASS = process.env.NODE_PASS
const MY_EMAIL = process.env.MY_EMAIL
const API_URL = process.env.API_URL

module.exports = { HOST, PORT, NODE_EMAIL, NODE_PASS, MY_EMAIL, API_URL }