import {Component} from 'angular2/core';

@Component({
 selector: 'graphics',
 template: `<svg id="svg" width="800" height="500">
            </svg>
           `
})
export class ConchoidGrad3Ellipses1 {
   constructor() {
      this.graphics();
   } 

   graphics() {
     var svgns = "http://www.w3.org/2000/svg";
     var svg   = document.getElementById("svg");
     var colors = ["#ff0000", "#0000ff"];

     var basePointX  = 240,  basePointY  = 200;
     var currentX    = 0,    currentY    = 0;
     var offsetX     = 0,    offsetY     = 0;
     var majorX      = 30,   majorY      = 50;
     var Constant    = 0.25, angle       = 0;
     var Constant1   = 120,  Constant2   = 80;
     var deltaAngle  = 1,    maxAngle    = 721;
     var stripWidth  = 20,   currStrip   = 0;
     var radius      = 0,    fillColor   = "";

     var hexArray    = new Array('0','1','2','3','4','5','6','7',
                                 '8','9','a','b','c','d','e','f');
 
     for(angle=0; angle<maxAngle; angle+=deltaAngle) {
        currStrip = Math.floor(angle/stripWidth);
        if(currStrip % 3 == 0) { 
           fillColor = '#' + hexArray[angle%16] +'00';
        } else if(currStrip % 3 == 1) { 
           fillColor = '#0' + hexArray[angle%16] +'0';
        } else { 
           fillColor = '#00' + hexArray[angle%16];
        } 

        radius   = Constant1+Constant2/
                        Math.cos(angle*Math.PI/180);
 
        offsetX  = radius*Math.cos(angle*Math.PI/180);
        offsetY  = radius*Math.sin(angle*Math.PI/180);
        currentX = basePointX+offsetX;
        currentY = basePointY-offsetY;
   
        var ellipse = document.createElementNS(svgns, "ellipse");
        ellipse.setAttribute("cx", currentX);
        ellipse.setAttribute("cy", currentY);
        ellipse.setAttribute("rx", majorX);
        ellipse.setAttribute("ry", majorY);
        ellipse.setAttribute("fill", fillColor);
        svg.appendChild(ellipse);
     } 
   } 
}

