class Car {
    #brand
    #model
    #yearOfManufacturing
    #maxSpeed
    #maxFuelVolume
    #fuelConsumption
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;

    get brand() {
        return this.#brand;
    }

    set brand(brand) {
        if (typeof brand !== 'string' || brand.length < 1 || brand.length > 50) {
            return;
        }

        this.#brand = brand;
    }

    get model() {
        return this.#model;
    }

    set model(model) {
        if (typeof model !== 'string' || model.length < 1 || model.length > 50) {
            return;
        }

        this.#model = model;
    }

    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }

    set yearOfManufacturing(year) {
        if (typeof year !== 'number' || number < 1900 || number > new Date().getFullYear()) {
            return;
        }

        this.#yearOfManufacturing = year;
    }

    get maxSpeed() {
        return `${this.#maxSpeed} км/ч`;
    }

    set maxSpeed(speed) {
        if (typeof speed !== 'number' || speed < 100 || speed > 300) {
            return;
        }

        this.#maxSpeed = speed;
    }

    get maxFuelVolume() {
        return `${this.#maxFuelVolume} л`;
    }

    set maxFuelVolume(volume) {
        if (typeof volume !== 'number' || volume < 5 || volume > 20) {
            return;
        }

        this.#maxFuelVolume = volume;
    }

    get fuelConsumption() {
        return `${this.#fuelConsumption} л/100км`;
    }

    set fuelConsumption(consumption) {
        if (typeof consumption !== 'number') {
            return;
        }

        this.#fuelConsumption = consumption;
    }

    get currentFuelVolume() {
        return `${this.#currentFuelVolume} л`;
    }

    get isStarted() {
        return this.#isStarted;
    }

    get mileage() {
        return `${this.#mileage} км`;
    }

    start() {
        if (this.#isStarted) {
            throw new Error('Машина уже заведена');
        }

        this.#isStarted = true;
    }

    shutDownEngine() {
        if (!this.#isStarted) {
            throw new Error('Машина ещё не заведена');
        }

        this.#isStarted = false;
    }

    fillUpGasTank(volume) {
        if (typeof volume !== 'number') {
            throw new Error('Неверное количество топлива для заправки');
        }

        if (volume <= 0) {
            throw new Error('Неверное количество топлива для заправки');
        }

        if (this.#currentFuelVolume + volume > this.#maxFuelVolume) {
            throw new Error('Топливный бак переполнен');
        }

        this.#currentFuelVolume += volume;
    }

    drive(speed, hours) {
        if (typeof speed !== 'number' || speed <= 0) {
            throw new Error('Неверная скорость');
        }

        if (typeof hours !== 'number' || hours <= 0) {
            throw new Error( 'Неверное количество часов');
        }

        if (speed > this.#maxSpeed) {
            throw new Error('Машина не может ехать так быстро');
        }

        if (!this.#isStarted) {
            throw new Error('Машина должна быть заведена, чтобы ехать');
        }

        const mileage = hours * speed;
        const fuelVolume = this.#fuelConsumption * mileage / 100;

        if (fuelVolume > this.#currentFuelVolume) {
            throw new Error('Недостаточно топлива');
        }

        this.#mileage += mileage;
        this.#currentFuelVolume -= fuelVolume;
    }
}