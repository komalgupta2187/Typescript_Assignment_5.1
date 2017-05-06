var Shapes;
(function (Shapes) {
    var Rectangle = (function () {
        function Rectangle(height, width) {
            this.height = height;
            this.width = width;
        }
        return Rectangle;
    }());
    Shapes.Rectangle = Rectangle;
    var Square = (function () {
        function Square(side) {
            this.side = side;
        }
        return Square;
    }());
    Shapes.Square = Square;
})(Shapes || (Shapes = {}));
