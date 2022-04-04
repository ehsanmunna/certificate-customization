const { default: Konva } = require("konva");

var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height,
    draggable: true,
  });

var layer = new Konva.Layer();
stage.add(layer);

console.log(width, height)