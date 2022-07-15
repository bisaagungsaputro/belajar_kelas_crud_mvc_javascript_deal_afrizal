// Mengambil HTTPS Request Pakai Express
const express = require("express")
// Mengambil Router => Untuk URL, Punya URL Sendiri / Endpoint Sendiri
const router = express.Router()

// Router URL

// get => Untuk Mengambil Data
// /hero => URL Router Endpoint
// Mengambil Request Dan Memberikan Response Kepada User Apa Yang Kita Kasih
// Bisa kasih (req, res) === (request, response)
router.get('/test', (request, response) => {
    console.log('Request Get To Hero')
    response.send("Hero Anda Diterima - Test")
})

// :id => Get Parameter
router.get('/:id', (request, response) => {
    // request => Pengen Tau Cari Hero Id Ke Berapa
    // params => URL
    // id => Ambil Id Dari Data
    console.log('Request Hero By Id', request.params.id)
    response.send("Request Hero By Id Diterima " + request.params.id)
})

// Module Untuk Menghandle Endpoint Kirim Ke server.js
module.exports = router


