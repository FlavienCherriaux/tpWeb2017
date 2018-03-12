
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = document.getElementById("spinnerWidth").value;
	this.currColour = document.getElementById("colour").value;
	this.currentShape = null;
	this.canvas = canvas;
	this.drawing = drawing;
	this.ctx = ctx;

	document.getElementById("butRect").addEventListener("click", function(evt) {
		this.currEditingMode = editingMode.rect;
	}.bind(this));

	document.getElementById("butLine").addEventListener("click", function(evt) {
		this.currEditingMode = editingMode.line;
	}.bind(this));

	document.getElementById("spinnerWidth").addEventListener("input", function(evt) {
		this.currLineWidth = document.getElementById("spinnerWidth").value;
	}.bind(this));

	document.getElementById("colour").addEventListener("change", function(evt) {
		this.currColour = document.getElementById("colour").value;
	}.bind(this));

	new DnD(this.canvas, this);

	this.onInteractionStart = function(dnd) {
		switch (this.currEditingMode) {
			case editingMode.rect:
				this.currentShape = new Rectangle(this.currColour, this.currLineWidth, dnd.xStart, dnd.yStart, 0, 0);
				break;
			case editingMode.line:
				this.currentShape = new Line(this.currColour, this.currLineWidth, dnd.xStart, dnd.yStart, dnd.xEnd, dnd.yEnd);
				break;
			default:
				break;
		}

		this.drawing.paint(this.ctx);
	}.bind(this);

	this.onInteractionUpdate = function(dnd) {
		var xStart = dnd.xStart, yStart = dnd.yStart, xEnd = dnd.xEnd, yEnd = dnd.yEnd;

		switch (this.currEditingMode) {
			case editingMode.rect:
				if (xStart <= xEnd) {
					this.currentShape.width = xEnd - xStart;
				} else {
					this.currentShape.topLeft.x = xEnd;
					this.currentShape.width = xStart - xEnd;
				}

				if (yStart <= yEnd) {
					this.currentShape.height = yEnd - yStart;
				} else {
					this.currentShape.topLeft.y = yEnd;
					this.currentShape.height = yStart - yEnd;
				}
				break;
			case editingMode.line:
				this.currentShape.end = {
					x : xEnd,
					y : yEnd
				};
				break;
			default:
				break;
		}

		this.drawing.paint(this.ctx);
		this.currentShape.paint(this.ctx);
	}.bind(this);

	this.onInteractionEnd = function(dnd) {
		var newShape = this.currentShape;
		var index = this.drawing.addShape(newShape);
		this.currentShape = null;
		this.drawing.paint(this.ctx);
		updateShapeList(newShape, index);
	}.bind(this);
};
