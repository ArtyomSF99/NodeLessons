const Emitter = require('events')

const emitter = new Emitter();

emitter.on('message', (data, second, third) => {     // once генерирует событие 1раз
    console.log('вы прислали сообщение ' + data)
    console.log('второй аргумент ' + second)
    
})

const MESSAGE = process.env.message || ''

if(MESSAGE){
    emitter.emit('message', MESSAGE, 123)
} else {
    emitter.emit('message', 'Вы не указали сообщение')
}