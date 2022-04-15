'use strict';
const rectangle = {
  main_width: 5,
  main_height: 5,
  set height(value) {
    if (typeof(value) === 'number') {
      this.main_height = value;
    }
  },
  set width(value) {
    if (typeof(value) === 'number') {
      this.main_width = value;
    }
  },
  getPerimiter() {
    return 2 * (this.main_width + this.main_height) + ' см';
  },
  getSquare() {
    return this.main_width * this.main_height + ' см';
  },
};

rectangle.height = 10;
rectangle.width = 10;
console.log(rectangle.getPerimiter());
console.log(rectangle.getSquare());
