Shape.prototype.paint = function(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = this.getColor();
    ctx.lineWidth = this.getThickness();
}

Rectangle.prototype.paint = function(ctx) {
    Shape.prototype.paint.call(this, ctx);
    ctx.rect(this.getXStart(), this.getYStart(), this.getWidth(), this.getHeight());
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    Shape.prototype.paint.call(this, ctx);
    ctx.moveTo(this.getXStart(), this.getYStart());
    ctx.lineTo(this.getXEnd(), this.getYEnd());
    ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getShapes().forEach(function(shape) {
        // now fill the canvas
        shape.paint(ctx);
    });
};

function updateShapeList(shape, index) {
    var newListItem = document.createElement("li");
    newListItem.classList.add("list-group-item");
    newListItem.style.color = shape.getColor();
    newListItem.innerHTML = '<button type="button" class="btn btn-default" onclick="removeShape(' + index + ', this.parentNode);"><span class="glyphicon glyphicon-remove-sign"></span></button> Shape ' + index + ' (' + shape.constructor.name + ')';
    document.getElementById("shapeList").append(newListItem);
}
