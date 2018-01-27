// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
    this.canvas = canvas;
    this.interactor = interactor;
    this.xStart = 0;
    this.yStart = 0;
    this.xEnd = 0;
    this.yEnd = 0;

    this.onMousePressed = function(evt) {
        var coordonnees = getMousePosition(canvas, evt);
        this.xStart = coordonnees.x;
        this.yStart = coordonnees.y;
        this.xEnd = coordonnees.x;
        this.yEnd = coordonnees.y;
        this.interactor.onInteractionStart(this);
    }.bind(this);

    this.onMouseMoved = function(evt) {
        if (this.interactor.currentShape != null) {
            var coordonnees = getMousePosition(canvas, evt);
            this.xEnd = coordonnees.x;
            this.yEnd = coordonnees.y;
            this.interactor.onInteractionUpdate(this);
        }
    }.bind(this);

    this.onMouseReleased = function(evt) {
        var coordonnees = getMousePosition(canvas, evt);
        this.interactor.onInteractionEnd(this);
    }.bind(this);

    canvas.addEventListener("mousedown", this.onMousePressed);
    canvas.addEventListener("mousemove", this.onMouseMoved);
    canvas.addEventListener("mouseup", this.onMouseReleased);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
