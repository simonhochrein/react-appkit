"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Window = /** @class */ (function () {
    function Window() {
        this.win = new NSWindow();
    }
    Window.prototype.appendChild = function (child) {
        this.win.appendChild(child.get());
    };
    Window.prototype.get = function () {
        return this.win.get();
    };
    return Window;
}());
exports.Window = Window;
