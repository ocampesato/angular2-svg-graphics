System.register(['angular2/core'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ArchGrad3Rotate1Ellipses1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ArchGrad3Rotate1Ellipses1 = (function () {
                function ArchGrad3Rotate1Ellipses1() {
                    this.graphics();
                }
                ArchGrad3Rotate1Ellipses1.prototype.graphics = function () {
                    var svgns = "http://www.w3.org/2000/svg";
                    var svg = document.getElementById("svg");
                    var colors = ["#ff0000", "#0000ff"];
                    var basePointX = 440, basePointY = 100;
                    var currentX = 0, currentY = 0;
                    var offsetX = 0, offsetY = 0;
                    var majorX = 30, majorY = 50;
                    var Constant = 0.25, angle = 0;
                    var deltaAngle = 1, maxAngle = 721;
                    var stripWidth = 20, currStrip = 0;
                    var radius = 0, fillColor = "";
                    var hexArray = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f');
                    for (angle = 0; angle < maxAngle; angle += deltaAngle) {
                        currStrip = Math.floor(angle / stripWidth);
                        if (currStrip % 3 == 0) {
                            fillColor = '#' + hexArray[angle % 16] + '00';
                        }
                        else if (currStrip % 3 == 1) {
                            fillColor = '#0' + hexArray[angle % 16] + '0';
                        }
                        else {
                            fillColor = '#00' + hexArray[angle % 16];
                        }
                        radius = Constant * angle;
                        offsetX = radius * Math.cos(angle * Math.PI / 180);
                        offsetY = radius * Math.sin(angle * Math.PI / 180);
                        currentX = basePointX + offsetX;
                        currentY = basePointY - offsetY;
                        var ellipse = document.createElementNS(svgns, "ellipse");
                        ellipse.setAttribute("cx", currentX);
                        ellipse.setAttribute("cy", currentY);
                        ellipse.setAttribute("rx", majorX);
                        ellipse.setAttribute("ry", majorY);
                        ellipse.setAttribute("fill", fillColor);
                        ellipse.setAttribute("transform", "rotate(" + (2 * angle / majorX) + ")");
                        svg.appendChild(ellipse);
                    }
                };
                ArchGrad3Rotate1Ellipses1 = __decorate([
                    core_1.Component({
                        selector: 'graphics',
                        template: "<svg id=\"svg\" width=\"800\" height=\"500\">\n            </svg>\n           "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArchGrad3Rotate1Ellipses1);
                return ArchGrad3Rotate1Ellipses1;
            }());
            exports_1("ArchGrad3Rotate1Ellipses1", ArchGrad3Rotate1Ellipses1);
        }
    }
});
//# sourceMappingURL=ArchGrad3Rotate1Ellipses1.js.map