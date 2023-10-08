class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.guessnumber = Math.ceil((this.max + this.min) / 2)
        return this.guessnumber;
    }

    lower() {
        this.max = this.guessnumber;
    }

    greater() {
        this.min = this.guessnumber;
    }
}

module.exports = GuessingGame;
