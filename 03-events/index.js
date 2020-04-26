const EventEmitter = require('events') 

// class MyEmitter extends EventEmitter{

// }

// const myEmitter = new MyEmitter()
// const nameEvent = 'user:click'

// myEmitter.on(nameEvent, (click) => {
//     console.log('User action - ', click)    
// })

// myEmitter.emit(nameEvent,'The user has clicked.')

const stdin= process.openStdin()
stdin.addListener('data', function(value){
    console.log(`You have typed: ${value}`);
})