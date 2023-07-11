let events = require('events');
let myEmitter = new events.EventEmitter()

let listenerCallback = (data) => {
    console.log('Celebrate ' + data);
}


myEmitter.on('celebration', listenerCallback)
myEmitter.emit('celebration', 'Atsuki')

// .on() first arg is the name of func, second is func
// .emit() first one is the same as above, second is actual data
