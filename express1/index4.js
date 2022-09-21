const express = require("express");
  
const app = express();
// создаем парсер для данных в формате json
const jsonParser = express.json();

app.get('/', (req, res) =>{
    res.send("hello node")
})
app.post("/user", jsonParser, function (request, response) {
    console.log(request.body);
    if(!request.body) return response.sendStatus(400);
     
    response.json(request.body); // отправляем пришедший ответ обратно
});
  

  
app.listen(3004);