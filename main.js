var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.style.width = "100%";
canvas.width  = canvas.offsetWidth;
canvas.height = 600;

// Code temporaire pour tester le DnD
// new DnD(canvas);
// ctx.fillStyle = '#F0F0F0'; // set canvas' background color
// ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
///

// Code temporaire pour tester l'affiche de la vue
// var ligne = new Line("#000", 2, 25, 103, 746, 409);
// ligne.paint(ctx);
// var rec = new Rectangle("#F00", 5, 10, 60, 214, 124);
// rec.paint(ctx);
// tester également Dessin.
////

// Code final à utiliser pour manipuler Pencil.
var drawing = new Drawing();
var pencil = new Pencil(ctx, drawing, canvas);
drawing.paint(ctx, canvas);

function removeShape(index, listitem) {
    drawing.removeShapeByIndex(index);
    drawing.paint(ctx, canvas);
    listitem.remove();
}
