class Shaping {
    constructor(shape, color, text, textColor) {
        this.shape = shape;
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
};
class Square extends Shaping {
    constructor(color, text, textColor) {
        super(color, text, textColor)
    }
    render() {
        return `<rect x="70" y="20" width="160" height="160" fill="${this.color}">${this.text}<>`
    };
};

class Circle extends Shaping {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}">${this.text}<>`
    };
};

class Triangle extends Shaping {
    render() {
        return `<polygon points="150 5, 270 170, 30 170" fill="${this.color}">${this.text}<>`
    };
};

module.exports = {Square, Circle, Triangle}