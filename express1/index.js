const express = require("express");

const app = express();

// app.get("/", function(req, res){
//     res.send("<h2>Привет Express!</h2>");
// });

//---------------------midlleware

// app.use(function(request, response, next){
     
//     console.log("Middleware 1");
//     next();
// });
// app.use(function(request, response, next){
     
//     console.log("Middleware 2");
//     next();
// });
// app.use("/about", function(request, response, next){
     
//     console.log("About Middleware");
//     response.send("About Middleware");
// });
 
// app.get("/", function(request, response){
     
//     console.log("Route /");
//     response.send("Hello");
// });

app.listen(3000);


// отправка ответов response.send() может принимать буффер строку js обьект или массив
// response.sendFile()
// пример
// app.use(function (request, response) {
//       response.sendFile(__dirname + "/index.html");
//     });
// response.sendStatus(404).send('статус не найден')