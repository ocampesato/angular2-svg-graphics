import {Component} from 'angular2/core';

@Component({
 selector: 'graphics',
 template: `<svg id="svg" width="800" height="500">
            </svg>
           `
})
export class CissoidGrad3Scale1Ellipses1FP1 {
   constructor() {
      this.graphics();
   } 

   graphics() {
     var svgns = "http://www.w3.org/2000/svg";
     var svg   = document.getElementById("svg");
     var colors = ["#ff0000", "#0000ff"];

   //var fixedPointX = 700,  fixedPointY = 100;
     var fixedPointX = 100,  fixedPointY = 500;
     var basePointX  = 440,  basePointY  = 200;
     var currentX    = 0,    currentY    = 0;
     var offsetX     = 0,    offsetY     = 0;
     var majorX      = 30,   majorY      = 50;
     var Constant    = 200,  angle       = 0;
     var sine        = 0,    cosine      = 0;
     var radius      = 0,    factor      = 1;
     var deltaAngle  = 1,    maxAngle    = 721;
     var stripWidth  = 20,   currStrip   = 0;
     var fillColor   = "";

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

        sine     = Math.sin(factor*angle*Math.PI/180);
        cosine   = Math.cos(factor*angle*Math.PI/180);
        radius   = Constant*sine*sine/cosine;
 
        offsetX  = radius*Math.cos(angle*Math.PI/180);
        offsetY  = radius*Math.sin(angle*Math.PI/180);
        currentX = basePointX+offsetX;
        currentY = basePointY-offsetY;
   
        var line1 = document.createElementNS(svgns, "line");
        line1.setAttribute("x1", fixedPointX);
        line1.setAttribute("y1", fixedPointY);
        line1.setAttribute("x2", currentX);
        line1.setAttribute("y2", currentY);
        line1.setAttribute("stroke", fillColor);
        svg.appendChild(line1);
   
        var ellipse = document.createElementNS(svgns, "ellipse");
        ellipse.setAttribute("cx", currentX);
        ellipse.setAttribute("cy", currentY);
        ellipse.setAttribute("rx", majorX);
        ellipse.setAttribute("ry", majorY);
        ellipse.setAttribute("fill", fillColor);
      //ellipse.setAttribute("transform", "rotate("+(2*angle/majorX)+")");
        ellipse.setAttribute("transform", "scale("+(angle/maxAngle)+")");
        svg.appendChild(ellipse);
     } 
   } 
}

