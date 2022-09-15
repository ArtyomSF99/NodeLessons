const http = require("http");

const PORT = process.env.PORT || 5000

const server = http.createServer((req,res) => {
    res.end('Сервер работает') 
})

server.listen(PORT, () => console.log('Сервер был запущен на порте: ' + PORT ))