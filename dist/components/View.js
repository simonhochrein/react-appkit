"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var View = /** @class */ (function () {
    function View() {
        this.view = new NSView();
    }
    View.prototype.appendChild = function (child) {
        this.view.appendChild(child.get());
    };
    View.prototype.get = function () {
        return this.view.get();
    };
    return View;
}());
exports.View = View;
