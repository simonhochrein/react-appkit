"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SplitView = /** @class */ (function () {
    function SplitView() {
        // setTimeout(function () {
        // }, 5000);
        this.view = new NSSplitView();
    }
    SplitView.prototype.appendChild = function (child) {
        this.view.appendChild(child.get());
    };
    SplitView.prototype.get = function () {
        return this.view.get();
    };
    return SplitView;
}());
exports.SplitView = SplitView;
