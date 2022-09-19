const express = require("express");
   
const app = express();
   
// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = express.urlencoded({extended: false});
  
app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index1.html");
});
app.post("/", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);
});

//--------Параметры маршрута
app.get("/products/:productId", function (request, response) {
    response.send("productId: " + request.params["productId"])
  });

//более сложные конструкции 
app.get("/categories/:categoryId/products/:productId", function (request, response) {
    let catId = request.params["categoryId"];
    let prodId = request.params["productId"];
    response.send(`Категория: ${catId}  Товар: ${prodId}`);
});
   
app.listen(3000, ()=>console.log("Сервер запущен..."));