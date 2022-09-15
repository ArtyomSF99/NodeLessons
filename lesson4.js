// const os = require('os');
// const cluster = require('cluster'); 

// // console.log(os.platform());
// // console.log(os.arch())
// // console.log(os.cpus())    //.length  кол-во ядер

// if(cluster.isMaster){
//     for(let i = 0; i < os.cpus().length - 2; i++) {
//         cluster.fork()
//     }
//     // cluster.on('exit', (worker) => {
//     //     console.log( `воркер с pid ${worker.process.pid} умер`)
//     //     cluster.fork()
//     // })
// } else {
//      console.log(`просцес с pid ${process.pid} запущен`)

//      setInterval( () => {
//         console.log(`просцес с pid ${process.pid} запущен`)
//      }, 5000)
// }

