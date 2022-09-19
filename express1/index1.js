const express = require("express");
  
const app = express();
app.get("/", function(request, response){
      
    response.send("<h1>Главная страница</h1>");
});
// app.use("/about", function(request, response){
      
//     let id = request.query.id;
//     let userName = request.query.name;
//     response.send("<h1>Информация</h1><p>id=" + id +"</p><p>name=" + userName + "</p>");
// });


// app.use("/about", function(request, response){
      
//     console.log(request.query);
//     let names = request.query.name;
//     let responseText = "<ul>";
//     for(let i=0; i < names.length; i++){
//         responseText += "<li>" + names[i] + "</li>";
//     }
//     responseText += "</ul>";
//     response.send(responseText);
// });

//---------- /about?user[id]=10&user[name]=Tom
// app.use("/about", function(request, response){    
//     console.log(request.query);
//     let id = request.query.user.id;
//     let name = request.query.user.name;
     
//     response.send("<h3>id:" + id + "<br>name: " + name +"</h3>");
// });
 
app.listen(3000);