'use strict';
const rectangle = {
  _width: 5,
  _height: 5,
  set height(value) {
    if (typeof value === 'number') {
      return this._height = value;
    }
  },
  set width(value) {
    if (typeof value === 'number') {
     return this._width = value;
    }
  },
  getPerimiter() {
    return 2 * (this._width + this._height) + ' см';
  },
  getSquare() {
    return this._width * this._height + ' см';
  },
};

rectangle.height = 10;
rectangle.width = 10;
console.log(rectangle.getPerimiter());
console.log(rectangle.getSquare());
