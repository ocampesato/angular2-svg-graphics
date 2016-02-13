System.register(['angular2/core'], function(exports_1) {
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
    var ArchEllipses1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ArchEllipses1 = (function () {
                function ArchEllipses1() {
                }
                ArchEllipses1.prototype.graphics = function () {
                    var svgns = "http://www.w3.org/2000/svg";
                    var svg = document.getElementById("svg");
                    var colors = ["#ff0000", "#88ff00", "#3333ff"];
                    var radiusX = 25;
                    var radiusY = 50;
                    var maxCount = 200;
                    for (var x = 0; x < maxCount; x++) {
                        var ellipse = document.createElementNS(svgns, "ellipse");
                        ellipse.setAttribute("cx", x);
                        ellipse.setAttribute("cy", x);
                        ellipse.setAttribute("rx", radiusX);
                        ellipse.setAttribute("ry", radiusY);
                        ellipse.setAttribute("fill", colors[x % colors.length]);
                        svg.appendChild(ellipse);
                    }
                };
                ArchEllipses1 = __decorate([
                    core_1.Component({
                        selector: 'graphics',
                        template: "<svg id=\"svg\" width=\"600\" height=\"400\">\n            </svg>\n           "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArchEllipses1);
                return ArchEllipses1;
            })();
            exports_1("ArchEllipses1", ArchEllipses1);
        }
    }
});
//# sourceMappingURL=ArchEllipses1.js.map