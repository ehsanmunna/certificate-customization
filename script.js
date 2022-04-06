// const { default: Konva } = require("konva");

const width = window.innerWidth;
const height = window.innerHeight;
const color = '#273746';

const layer = new Konva.Layer();
const lineLayer = new Konva.Layer({
  name: 'line-layer',
});
const watermarkLayer = new Konva.Layer({
  name: 'watermark-layer'
});

const stage = new Konva.Stage({
  container: 'container',
  width: width,
  height: height,
  draggable: true,
});

var simpleText = new Konva.Text({
  x: stage.width() / 2,
  y: 15,
  text: 'Bangladesh Technical Education Board',
  fontSize: 30,
  fontFamily: 'Calibri',
  fill: color,
});
simpleText.offsetX(simpleText.width() / 2);

// signature image
var imageObj = new Image();
imageObj.onload = function () {
  var signature1 = new Konva.Image({
    x: 50,
    y: height - 180,
    image: imageObj,
    width: 106,
    height: 118
  });

  // add the shape to the layer
  signature1.setAttr('src', './assets/signature/sign-1.png');
  console.log('image load');
  watermarkLayer.add(signature1);
  watermarkLayer.draw();
  console.log(stage.toJSON())
};
// imageObj.src = './assets/signature/sign-1.png';
console.log('image init');
imageObj.setAttribute('src', './assets/signature/sign-1.png');

// footer line
const startFromX = 0;
const startFromY = 0;
const widthLine = 290;


var line = new Konva.Line({
  x: 50,
  y: height - 50,
  points: [startFromX, startFromY, (startFromX + widthLine), startFromY],
  stroke: color,
  tension: 1
});



layer.add(simpleText)
lineLayer.add(line);
stage.add(layer);
stage.add(lineLayer);
stage.add(watermarkLayer);
console.log(stage.toObject());
// console.log(stage.toJSON())