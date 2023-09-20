module.exports = class Stopwatch {

    #duration = 0;
    #lastStart = null;

    get isRunning() {
        return this.#lastStart !== null;
    }

    get duration() {
        if (this.isRunning) {
            this.stop();
            this.start();
        }
        return this.#duration;
    }

    reset() {
        this.#duration = 0;
    }

    start() {
        if (this.isRunning) throw new Error('Stopwatch: Already running.');
        this.#lastStart = new Date();
    }

    stop() {
        if (!this.isRunning) throw new Error('Stopwatch: Not running.');
        this.#duration += (new Date()).getTime() - this.#lastStart.getTime();
        this.#lastStart = null;
    }
}
