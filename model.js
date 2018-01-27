function Drawing() {
    this.shapes = new Array();

    this.getShapes = function() {
        return this.shapes;
    }.bind(this);

    this.addShape = function(shape) {
        this.shapes.push(shape);
    }.bind(this);
}

function Shape(color, thickness) {
    this.color = color;
    this.thickness = thickness;

    this.getColor = function() {
        return this.color;
    }

    this.getThickness = function() {
        return this.thickness;
    }
}

function Rectangle(color, thickness, xStart, yStart, width, height) {
    Shape.call(this, color, thickness);
    this.topLeft = {
        x : xStart,
        y : yStart
    };
    this.width = width;
    this.height = height;

    this.getXStart = function() {
        return this.topLeft.x;
    }

    this.getYStart = function() {
        return this.topLeft.y;
    }

    this.getWidth = function() {
        return this.width;
    }

    this.getHeight = function() {
        return this.height;
    }
}

function Line(color, thickness, xStart, yStart, xEnd, yEnd) {
    Shape.call(this, color, thickness);
    this.start = {
        x : xStart,
        y : yStart
    }
    this.end = {
        x : xEnd,
        y : yEnd
    }

    this.getXStart = function() {
        return this.start.x;
    }

    this.getYStart = function() {
        return this.start.y;
    }

    this.getXEnd = function() {
        return this.end.x;
    }

    this.getYEnd = function() {
        return this.end.y;
    }
}
