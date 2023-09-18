class Shaping {
    constructor(shape) {
    this.shape = data.shape;
    this.color = data.color;
    this.text = data.text;
    }
};
class Square extends Shaping {
    render() {
        return `<rect x="70" y="20" width="160" height="160" fill="${this.color}"/>`
    };
};

class Circle extends Shaping {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    };
};

class Triangle extends Shaping {
    render() {
        return `<polygon points="150 5, 270 170, 30 170" fill="${this.color}"/>`
    };
};

module.exports = {Square, Circle, Triangle}