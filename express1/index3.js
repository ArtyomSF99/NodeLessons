//Router/Маршруты

// const express = require("express");
// const app = express();
 
// app.use("/about", function (request, response) {
//   response.send("О сайте");
// });
 
// app.use("/products/create",function (request, response) {
//   response.send("Добавление товара");
// });
// app.use("/products/:id",function (request, response) {
//   response.send(`Товар ${request.params.id}`);
// });
// app.use("/products/",function (request, response) {
//   response.send("Список товаров");
// });
 
// app.use("/", function (request, response) {
//   response.send("Главная страница");
// });
// app.listen(3000);

//------Реализация с Router
const express = require("express");
const app = express();
 
// определяем Router
const productRouter = express.Router();
 
// определяем маршруты и их обработчики внутри роутера
productRouter.use("/create", function(request, response){
  response.send("Добавление товара");
});
productRouter.use("/:id", function(request, response){
  response.send(`Товар ${request.params.id}`);
});
productRouter.use("/", function(request, response){
  response.send("Список товаров");
});
// сопотавляем роутер с конечной точкой "/products"
app.use("/products", productRouter);
 
app.use("/about", function (request, response) {
  response.send("О сайте");
});
 
app.use("/", function (request, response) {
  response.send("Главная страница");
});
app.listen(3002);