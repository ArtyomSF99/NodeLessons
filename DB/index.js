// npm install --save mysql2 
// драейвер для работы с MySQL

const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "node_lesson",  // Ваш ДБ
  password: "root"
});

// тестирование подключения
connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });
 // закрытие подключения
//  connection.end(function(err) {
//   if (err) {
//     return console.log("Ошибка: " + err.message);
//   }
//   console.log("Подключение закрыто");
// });

// connection.query("SELECT * FROM users",
//   function(err, results, fields) {
//     console.log(err);
//     console.log(results); // собственно данные
//     console.log(fields); // мета-данные полей 
// });
// connection.end();


// const user = ["Tom", 29];
// const sql = "INSERT INTO users(name, age) VALUES(?, ?)";
 
// connection.query(sql, user, function(err, results) {
//     if(err) console.log(err);
//     else console.log("Данные добавлены");
// });

// можно пользоваться промисами
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     database: "usersdb2",
//     password: "123456"
//   }).promise();           // надо в конце добавть метод promise()

// connection.query("SELECT * FROM users")
//           .then(result =>{
//             console.log(result);
//           })
//           .catch(err =>{
//             console.log(err);
//           });
// Второй вариант 
// connection.query("SELECT * FROM users")
//           .then(([rows, fields]) =>{
//             console.log(rows);
//           })
//           .catch(err =>{
//             console.log(err);
//           });
// const sql = "INSERT INTO users (name, age) VALUES (?, ?)";
// const user = ["Stan", 19];
// connection.query(sql, user)
//           .then(result =>{
//             console.log(result[0]);
//           })
//           .catch(err =>{
//             console.log(err);
//           });

//----Создание бд с помощью node js 

// connection.query("CREATE DATABASE usersdb2",
//   function(err, results) {
//     if(err) console.log(err);
//     else console.log("База данных создана");
// });

//----Создание таблицы с пмощью node js

// const sql = `create table if not exists users(
//     id int primary key auto_increment,
//     name varchar(255) not null,
//     age int not null
//   )`;
   
//   connection.query(sql, function(err, results) {
//       if(err) console.log(err);
//       else console.log("Таблица создана");
//   });

//----Добавление данных 

// const users = [
//     ["Bob", 22],
//     ["Alice", 25],
//     ["Kate", 28]
//   ];
//   const sql = `INSERT INTO users(name, age) VALUES ?`;
   
//   connection.query(sql, [users], function(err, results) {
//       if(err) console.log(err);
//       console.log(results);
//   });

//----Получение данных

// const sql = "SELECT * FROM users";
// connection.query(sql,  function(err, results) {
//     if(err) console.log(err);
//     const users = results;
//     for(let i=0; i < users.length; i++){
//       console.log(users[i].name);
//     }
// });