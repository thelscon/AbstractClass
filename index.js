// Створіть класи Circle, Rectangle, Square і Triangle. 
// У кожного з них є загальнодоступний метод calculateArea. 
// У кожної фігури є загальнодоступні властивості - колір і назва, які не можна змінювати після створення. 
// У Square і Rectangle зі свого боку є ще додатковий метод print, який виводить рядок із формулою розрахунку площі
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//абс. класс для Circle и Triangle
var GeometricFigures = /** @class */ (function () {
    // общий конструктор
    function GeometricFigures(color, name) {
        this.color = color;
        this.name = name;
    }
    return GeometricFigures;
}());
//наследуемся от общего и реализуем абс. класс для Rectangle и Square с print()
var SquareRectanglePrint = /** @class */ (function (_super) {
    __extends(SquareRectanglePrint, _super);
    function SquareRectanglePrint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // общий print()
    SquareRectanglePrint.prototype.print = function () {
        return "Formula - ".concat(this.printArea);
    };
    return SquareRectanglePrint;
}(GeometricFigures));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.calculateArea = function (radius) {
        return Math.PI * Math.pow(radius, 2);
    };
    ;
    return Circle;
}(GeometricFigures));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Triangle.prototype.calculateArea = function (baseOrBaseA, heightOrBaseB, baseC) {
        if (baseC) {
            var s = (baseOrBaseA + heightOrBaseB + baseC) / 2;
            return Math.sqrt(s * (s - baseOrBaseA) * (s - heightOrBaseB) * (s - baseC));
        }
        else
            return (baseOrBaseA * heightOrBaseB) / 2;
    };
    return Triangle;
}(GeometricFigures));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.printArea = 'S = a * b';
        return _this;
    }
    Rectangle.prototype.calculateArea = function (sideA, sideB) {
        return sideA * sideB;
    };
    return Rectangle;
}(SquareRectanglePrint));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.printArea = 'S = a**2';
        return _this;
    }
    Square.prototype.calculateArea = function (side) {
        return Math.pow(side, 2);
    };
    return Square;
}(SquareRectanglePrint));
