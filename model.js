function Drawing() {
    this.shapes = new Array();

    this.getShapes = function() {
        return this.shapes;
    }.bind(this);

    this.addShape = function(shape) {
        this.shapes.push(shape);
        // On retourne l'index de la nouvelle forme
        return this.shapes.length;
    }.bind(this);

    this.removeShape = function(shape) {
        // On ne supprime pas complètement l'élément du tableau
        // pour garder la correspondance entre l'index des formes encore existantes et leur position dans le tableau
        delete this.shapes[this.shapes.indexOf(shape)];
    }.bind(this);

    this.removeShapeByIndex = function(index) {
        // On ne supprime pas complètement l'élément du tableau
        // pour garder la correspondance entre l'index des formes encore existantes et leur position dans le tableau
        delete this.shapes[index - 1];
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
