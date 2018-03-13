# Canvas - Design

Le framework CSS Bootstrap a été utilisé pour offrir une interface graphique agréable.
L'interaction avec l'utilisateur a été gérée grâce à plusieurs fichiers JavaScript de manière à constituer une architecture MVC (modèle-vue-contrôleur). Ces fichiers sont les suivants :
- ``` model.js ``` : contient la définition des classes Drawing (dessin), Shape (forme), ainsi que toutes les formes proposées à l'utilisateur (Rectangle et Line dans notre cas)
- ``` controller.js ``` : contient la définition de la classe Pencil (crayon), qui gère les paramètres du dessin (couleur, épaisseur du trait, ...) ainsi que l'enregistrement des formes créées par l'utilisateur
- ``` view.js ``` : définit, pour chaque classe, la méthode ``` paint ``` afin de pouvoir dessiner les formes créées par l'utilisateur sur le canvas
- ``` interaction.js ``` : gère l'interaction avec la souris (crée ou met à jour la forme en cours de création)
- ``` main.js ``` : initialise le dessin et gère certains éléments de l'interface (liste des formes par exemple)
