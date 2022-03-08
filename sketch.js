/// <reference path="./libraries/p5.global-mode.d.ts" />

var data = [210895,199654,194896,187914,196007,196429,198061,196092,204211,218466,240593,262833,285456,294396,301470,315974,353673,395516,419346,443398,480568,522084,560812,603732,680907,739980,789610,846277,932074,1016691,1085022,1137722,1194581,1245402,1304074,1331278,1345217,1380516,1408361,1433728,1462866,1504598,1532851,1547742,1553574,1552669,1538847,1511480,1576950,1561525]



function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
}

function draw() {
  background(220);

  const offset = height / 10;
  const w = width / data.length;
  const min = data.reduce((p,c) => Math.min(p,c));
  const max = data.reduce((p,c) => Math.max(p,c));
  const range = max - min;

  data.forEach((v,i) => {
    var h = (height - offset * 2) * (v - min) / range;
    rect(i * w,height,w,-1 * h - offset);
  });
  noLoop();
}
