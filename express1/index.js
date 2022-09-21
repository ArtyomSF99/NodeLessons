const express = require("express");

const app = express();


app.use(express.static(__dirname + "/public"));
app.use("/", function(request, response){
     
    response.send("<h1>Главная страница</h1>");
});
// app.get("/", function(req, res){
//     res.send("<h2>Привет Express!</h2>");
// });

// app.use(function (request, response) {
//         response.sendFile(__dirname + "/index.html");
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

//----------символы маршрута "?", "+", "*", "()"
// app.get("/bo?k", function (request, response) {
//     response.send(request.url)
// });
// предыдущий символ может встречаться 1 раз или отсутствовать "/bk" === "/bok"

// app.get("/bo+k", function (request, response) {
//     response.send(request.url)
// });
// предыдущий символ может встречаться 1 и более раз >>>> "/bok", "/book", "/boook"

// app.get("/book(.html)?", function (request, response) {
//     response.send(request.url)
// });
// позволяют оформить группу символов, которые могут встречаться в запросе >>> "/book" === "/book.html"

// app.get(/.*(\.)html$/, function (request, response) {
//     response.send(request.url)
// });
// перехватывает все запросы которые имею ".html"

// Переадресация
// redirect([status,] path) //первый аргумент по умолчанию 302-временная переадресация
// response.redirect("https://google.com")

// Примеры
// /home ----> /about
// app.use("/home",function (request, response) {
//     response.redirect("about")
// });
//  app.use("/about", function (request, response) {
//     response.send("<h1>About</h1>");
// });

//  /home/bar ----> home/about
// app.use("/home/bar",function (request, response) {
//     response.redirect("about")
//   });
//   app.use("/home/about", function (request, response) {
//     response.send("<h1>About</h1>");
//   });
 
// /home/bar ----> /about
// app.use("/home/bar",function (request, response) {
//     response.redirect("/about")
//   });
//   app.use("/about", function (request, response) {
//     response.send("<h1>About</h1>");
//   });

// /home/foo/bar ----> /home/foo/about
// app.use("/home/foo/bar",function (request, response) {
//     response.redirect("./about")
// });
