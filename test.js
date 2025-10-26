const car = {
  brand: "Toyota",
  start() {
    console.log(`Starting ${this.brand}`);
  }
};

const startFn = car.start;
car.start();      // What happens?
startFn();        // What happens here?
