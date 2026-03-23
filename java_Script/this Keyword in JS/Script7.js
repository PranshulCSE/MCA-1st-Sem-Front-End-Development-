// Making am Stopwatch using this keyword

const Stopwatch={
    seconds : 0,
    start: function() {
        setInterval(() => {
            this.seconds++;
            console.log(this.seconds);
        }, 1000);
    }
};

Stopwatch.start(); // This will log the seconds every second

// In this example, 'this' inside the arrow function refers to the Stopwatch object, allowing us to correctly increment and log the seconds property.

// if we want to use regular function instead of arrow function, we need to bind 'this' to the Stopwatch object like this:

const Stopwatch2={
    seconds : 0,
    start: function() {
        setInterval(function() {
            this.seconds++;
            console.log(this.seconds);
        }.bind(this), 1000);
    }
};
Stopwatch2.start(); // This will also log the seconds every second
