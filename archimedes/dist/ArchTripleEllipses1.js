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
    var ArchTripleEllipses1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ArchTripleEllipses1 = (function () {
                function ArchTripleEllipses1() {
                    this.graphics();
                }
                ArchTripleEllipses1.prototype.graphics = function () {
                    var svgns = "http://www.w3.org/2000/svg";
                    var svg = document.getElementById("svg");
                    var colors1 = ["#ff0000", "#0000ff"];
                    var colors2 = ["#0000ff", "#ffff00"];
                    var colors3 = ["#ffffff", "#ff0000"];
                    var basePointX = 240, basePointY = 200;
                    var currentX = 0, currentY = 0;
                    var offsetX = 0, offsetY = 0;
                    var majorX = 30, majorY = 50;
                    var Constant = 0.25, angle = 0;
                    var deltaAngle = 1, maxAngle = 721;
                    var radius = 0;
                    for (angle = 0; angle < maxAngle; angle += deltaAngle) {
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
                        ellipse.setAttribute("fill", colors1[angle % colors1.length]);
                        svg.appendChild(ellipse);
                        var ellipse2 = document.createElementNS(svgns, "ellipse");
                        ellipse2.setAttribute("cx", currentX + majorX);
                        ellipse2.setAttribute("cy", currentY);
                        ellipse2.setAttribute("rx", majorX);
                        ellipse2.setAttribute("ry", majorY);
                        ellipse2.setAttribute("fill", colors2[angle % colors2.length]);
                        svg.appendChild(ellipse2);
                        var ellipse3 = document.createElementNS(svgns, "ellipse");
                        ellipse3.setAttribute("cx", currentX + majorX / 2);
                        ellipse3.setAttribute("cy", currentY - majorY / 2);
                        ellipse3.setAttribute("rx", majorX);
                        ellipse3.setAttribute("ry", majorY);
                        ellipse3.setAttribute("fill", colors3[angle % colors3.length]);
                        svg.appendChild(ellipse3);
                    }
                };
                ArchTripleEllipses1 = __decorate([
                    core_1.Component({
                        selector: 'graphics',
                        template: "<svg id=\"svg\" width=\"800\" height=\"500\">\n            </svg>\n           "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArchTripleEllipses1);
                return ArchTripleEllipses1;
            }());
            exports_1("ArchTripleEllipses1", ArchTripleEllipses1);
        }
    }
});
//# sourceMappingURL=ArchTripleEllipses1.js.map