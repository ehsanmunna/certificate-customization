const width = window.innerWidth;
const height = window.innerHeight;
const color = '#273746';

const jsonData = JSON.parse(localStorage.getItem('konvadata'));
console.log('get data ',  jsonData);
const konva = Konva.Node.create(jsonData, "container");
konva.find('Image').forEach((imageNode) => {
  const src = imageNode.getAttr('src');
  const image = new Image();
  image.onload = () => {
      imageNode.image(image);
      imageNode.getLayer().batchDraw();
  }
  image.src = src;
});