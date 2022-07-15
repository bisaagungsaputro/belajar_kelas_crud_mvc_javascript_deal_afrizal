const port = 9001
const express = require("express")
const server = express()

// Routing
// - server.use => Library Bawaan Dari Express Untuk Membuka Ke Browser Yaitu
//   (Metode HTTP Yang Ada Di Browser Ada HTTP Request Dan HTTP Response)
// - Karena Ini Backend Kita Kirim Response (Menjawab Permintaan), Kirim Response Ke Browser / Aplikasi Mobile / Aplikasi Web
// - function(request, response) => Callback Ada 2 (request, response), Request Itu Dari Browser Apa Saja Yang Dibutuhin Datanya Mereka Minta
//   Response Itu Dari Server / Dari Kita (Request Dari Luar Kirim Ke Dalam , Response Dari Dalam Kirim Ke Luar)
server.use("/", function(request, response) {
    response.send("MAIN SERVER SUCCESS OK")
})

//  Server Express Untuk Menjalankan Server
// port dari 9001
server.listen(port, function () {
    // console.log => Untuk Memunculkan Output Ke Terminal
    console.log("server running on " + port)
})


