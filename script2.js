// const { default: Konva } = require("konva");

const width = window.innerWidth;
const height = window.innerHeight;
const color = '#273746';

const jsonData = {"attrs":{"width":1280,"height":391,"draggable":true},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":640,"y":15,"text":"Bangladesh Technical Education Board","fontSize":30,"fontFamily":"Calibri","fill":"#273746","offsetX":232.44873046875},"className":"Text"},{"attrs":{"x":50,"y":341,"points":[0,0,290,0],"stroke":"#273746","tension":1},"className":"Line"}]}]}

const konva = Konva.Node.create(jsonData, "container")
const layer = konva.children[0];
// const stage = new Konva.Stage({
//   container: 'container',
//   width: width,
//   height: height,
//   draggable: true,
// });

// var simpleText = new Konva.Text({
//   x: stage.width() / 2,
//   y: 15,
//   text: 'Bangladesh Technical Education Board',
//   fontSize: 30,
//   fontFamily: 'Calibri',
//   fill: color,
// });
// simpleText.offsetX(simpleText.width() / 2);

// signature image
var imageObj = new Image();
imageObj.onload = function () {
  var signature1 = new Konva.Image({
    x: 50,
    y: height - 180,
    image: imageObj,
    width: 106,
    height: 118,
  });

  // add the shape to the layer
  layer.add(signature1);
};
imageObj.src = './assets/signature/sign-1.png';

// // footer line
// const startFromX = 0;
// const startFromY = 0;
// const widthLine = 290;


// var line = new Konva.Line({
//   x: 50,
//   y: height - 50,
//   points: [startFromX, startFromY, (startFromX + widthLine), startFromY],
//   stroke: color,
//   tension: 1
// });

// const layer = new Konva.Layer();
// const lineLayer = new Konva.Layer();
// const watermarkLayer = new Konva.Layer();

// layer.add(simpleText)
// layer.add(line);
// stage.add(layer);
// konva.a
console.log(konva.children)