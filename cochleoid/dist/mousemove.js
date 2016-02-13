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
    var MouseMove;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MouseMove = (function () {
                function MouseMove() {
                    this.radius = 10;
                }
                MouseMove.prototype.mouseMove = function (event) {
                    var svgns = "http://www.w3.org/2000/svg";
                    var svg = document.getElementById("svg");
                    var colors = ["#f00", "#00f"];
                    var circle = document.createElementNS(svgns, "circle");
                    circle.setAttribute("cx", event.clientX);
                    circle.setAttribute("cy", event.clientY);
                    circle.setAttribute("r", this.radius);
                    circle.setAttribute("fill", colors[event.clientX % colors.length]);
                    svg.appendChild(circle);
                };
                MouseMove = __decorate([
                    core_1.Component({
                        selector: 'mouse-move',
                        template: "<svg id=\"svg\" width=\"600\" height=\"400\"\n              (mousemove)=\"mouseMove($event)\">\n            </svg>\n           "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MouseMove);
                return MouseMove;
            })();
            exports_1("MouseMove", MouseMove);
        }
    }
});
//# sourceMappingURL=mousemove.js.map