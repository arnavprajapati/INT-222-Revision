import EventEmitter from 'events';

const event = new EventEmitter();

const showMessage = (message) => {
    console.log(`${message}`);
}

// Register an event listener
event.on('sayHello', (name) => {
    console.log(`Hello, ${name}!`);
})
event.on('greet', (greeting, name) => {
    console.log(`${greeting}, ${name}!`);
});
event.on('farewell', showMessage)
event.once('bye', (name) => {
    console.log(`This: will be logged only once Hello, ${name}!`);
});
event.on('remove', () => {
    console.log("This listener will be removed soon.");
});

// Trigger the event and also pass some data
event.emit('sayHello', "Arnav");
event.emit('sayHello', "Rahul");
event.emit('greet', "Good Morning", "Arnav");
event.emit('farewell', "Goodbye, Arnav!");
event.emit('bye', "Arnav");
event.emit('bye', "Rahul"); // This will not trigger the listener again
event.emit('remove');

// Remove the 'remove' event listener
event.removeAllListeners('remove');
event.emit('remove'); // This will not log anything as the listener has been removed
event.emit('sayHello', "Rahul");

// Anonymous function = remove nahi hota
// Named / referenced function = remove ho jata hai
event.removeListener('sayHello', (name) => {
    console.log(`Hello, ${name}!`);
});
event.emit('sayHello', "Karan"); // This will still log as the listener was not removed correctly
event.removeListener('farewell', showMessage);
event.emit('farewell', "Goodbye, Karan!"); // This will not log anything as the listener has been removed