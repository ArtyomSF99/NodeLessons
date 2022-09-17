// const http = require("http");

// const PORT = process.env.PORT || 5000

// const server = http.createServer((req,res) => {
//     // res.writeHead(200, {
//     //     'content-type':'text/html; charset=utf-8; application/json'
//     // })
//     // res.end('Сервер работает')                              // можно отправить html разметку
//     //-----------
//     if(req.url === '/users'){
//         return res.end('USERS')
//     }
//     if(req.url === '/posts'){
//         return res.end('POSTS')
//     }
//     if(req.url === '/user'){
//         return res.end(JSON.stringify([
//             {id:1, name:'user1'}
//         ]))
//     }
// })

// server.listen(PORT, () => console.log('Сервер был запущен на порте: ' + PORT ))