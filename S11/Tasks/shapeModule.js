class Shape {
    #color;

    constructor(color) {
        this.#color = color;
    }

    get Color() {
        return this.#color;
    }

    set Color(value) {
        this.#color = value;
    }

    DrawShape() {
        console.log(`Shape Color: ${this.#color}`);
    }
}

export default Shape;
