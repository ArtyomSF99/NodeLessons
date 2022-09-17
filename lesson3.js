const fs = require('fs')
const path = require('path');

//fs.mkdirSync(path.resolve(__dirname, 'dir'))
// fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2', 'dir3'), {recursive:true})

// console.log('START')
// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log('Папка создана')
// })
// console.log('END')


// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if(err) {
//         console.log(err)
//     }
//     console.log("Папка удалена")
// })


// fs.writeFile(path.resolve(__dirname, 'test.txt'), "Hello world",  (err) => {
//     if(err) {
//         console.log(err)
//     }
//     console.log("Файл был создан")
// })


// fs.appendFile(path.resolve(__dirname, 'test.txt'), "Hello world",  (err) => {
//     if(err) {
//         console.log(err)
//     }
//     console.log("Информация была записана")
// })

// Описание про очередность функции и "Callback hell"


/*    РАБОТА С ПРОМИСАМИ 
const fsPromise = require('fs/promises')

fsPromise.mkdir('/').then().catch()
fsPromise.readFile('/').then().catch()
fsPromise.writeFile('/').then().catch()
fsPromise.appendFile('/').then().catch()
fsPromise.rm('/').then().catch()
fsPromise.rmdir('/').then().catch()

*/

// const writeFileAsync = async (path, data) => {
//     return new Promise( (resolve, reject) => fs.writeFile(path, data, (err) =>{
//         if(err){
//             return reject(err.message)
//         }
//         resolve()
//     }))
// }

// const appendFileAsync = async (path, data) => {
//     return new Promise( (resolve, reject) => fs.appendFile(path, data, (err) =>{
//         if(err){
//             return reject(err.message)
//         }
//         resolve()
//     }))
// }


// writeFileAsync(path.resolve(__dirname, 'text.txt' ), 'data')
//     .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'),'123'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'),'456'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'),'789'))
//     .catch((err) => console.log(err))

//------------------------

// const readFileAsync = async (path) => {
//     return new Promise( (resolve, reject) => fs.readFile(path, {encoding:'utf8'}, (err, data) =>{
//         if(err){
//             return reject(err.message)
//         }
//         resolve(data)
//     }))
// }

// writeFileAsync(path.resolve(__dirname, 'text.txt' ), 'data')
//     .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'),'123'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'),'456'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'),'789'))
//     .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
//     .then(data => console.log(data))
//     .catch((err) => console.log(err))

//--------------------

// const removeFileAsync = async (path) => {
//     return new Promise( (resolve, reject) => fs.rm(path, (err) =>{
//         if(err){
//             return reject(err.message)
//         }
//         resolve()
//     }))
// }

// removeFileAsync(path.resolve(__dirname, 'text.txt'))
//     .then(() => console.log('Файл был удален'))

//----------------------
// через env ввести строку и записать в файл
// посчитать кол-во слов
// создать новый файл в котором будет записано кол-во слов
// удалить первый файл 
//---------------------Подсказки
// const text = process.env.TEXT || ' '
// data => data.split(' ').length

//-----------

// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);