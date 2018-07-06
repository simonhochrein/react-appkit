"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StackView = /** @class */ (function () {
    function StackView() {
        this.view = new NSStackView();
    }
    StackView.prototype.appendChild = function (child) {
        this.view.appendChild(child.get());
    };
    StackView.prototype.get = function () {
        return this.view.get();
    };
    return StackView;
}());
exports.StackView = StackView;
