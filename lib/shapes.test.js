const {Circle, Square, Triangle} = require('./shapes.js');

describe('Circle', () => {
    it('should return a circle with CIR', () => {
        const shape = new Circle();
        var color = 'orange'
        shape.setColor(orange);
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}">CIR<>`)
        });
});

describe('Triangle', () => {
    it('should return a triangle with TRI', () => {
        const shape = new Triangle();
        var color = 'green'
        shape.setColor(green);
        expect(shape.render()).toEqual(`<polygon points="150 5, 270 170, 30 170" fill="${color}">TRI<>`)
    })
});

describe('Square', () => {
    it('should return a square with REC', () => {
        const shape = new Square();
        var color = 'blue'
        shape.setColor(blue);
        expect(shape.render()).toEqual(`<rect x="70" y="20" width="160" height="160" fill="${color}">REC<>`)
    })
});