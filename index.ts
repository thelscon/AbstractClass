// Створіть класи Circle, Rectangle, Square і Triangle. 
// У кожного з них є загальнодоступний метод calculateArea. 
// У кожної фігури є загальнодоступні властивості - колір і назва, які не можна змінювати після створення. 
// У Square і Rectangle зі свого боку є ще додатковий метод print, який виводить рядок із формулою розрахунку площі

//Circle = Math.PI * r**2 
//Rectangle = a * b
//Square = a ** 2
//Triangle = (baseValue * heightValue) / 2 или s = (a + b + c) / 2 => Math.sqrt( s * (s - a) * (s - b) * (s - c) )


// общий
interface IGeometricFigures {
    readonly color : string ,
    readonly name : string
}

// интерфейсы с реализациями calculateArea() для разных фигур
interface ICircle extends IGeometricFigures {
    calculateArea : (radius : number) => number
}
interface IRectangle extends IGeometricFigures {
    calculateArea : (sideA : number , sideB : number) => number
}
interface ISquare extends IGeometricFigures {
    calculateArea : (side : number) => number
}
interface ITriangle extends IGeometricFigures {
    calculateArea (baseOrBaseA : number , heightOrBaseB : number , baseC ?: number) : number
}

// интерфейс с print()
interface ISquareRectanglePrint {
    print : () => string
}

//абс. класс для Circle и Triangle
abstract class GeometricFigures implements IGeometricFigures {
    // общий конструктор
    constructor (
        public readonly color : string ,
        public readonly name : string
    ) {}
}
//наследуемся от общего и реализуем абс. класс для Rectangle и Square с print()
abstract class SquareRectanglePrint extends GeometricFigures implements ISquareRectanglePrint{
    protected abstract printArea : string ;
    
    // общий print()
    print () : string {
        return `Formula - ${this.printArea}` ;
    }
}


class Circle extends GeometricFigures implements ICircle {
    calculateArea (radius : number ) : number {
        return Math.PI * radius**2 ;
    } ;
}
class Triangle extends GeometricFigures implements ITriangle {
    calculateArea (baseOrBaseA : number , heightOrBaseB : number , baseC ?: number) : number {
        if ( baseC ) {
            const s = (baseOrBaseA + heightOrBaseB + baseC) / 2 ;
            return Math.sqrt( s * (s - baseOrBaseA) * (s - heightOrBaseB) * (s - baseC) ) ;
        }
        else
            return (baseOrBaseA * heightOrBaseB) / 2 ;
    }
}

class Rectangle extends SquareRectanglePrint implements IRectangle {
    protected printArea : string = 'S = a * b' ;
    
    calculateArea (sideA : number , sideB : number) : number {
        return sideA * sideB ;
    }
}
class Square extends SquareRectanglePrint implements ISquare {
    protected printArea : string = 'S = a**2' ;

    calculateArea (side : number) : number {
        return side**2 ;
    }
}
