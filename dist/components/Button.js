"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Button = /** @class */ (function () {
    function Button() {
        this.button = new NSButton();
        this.button.setOnClick(this.onClick);
    }
    Button.prototype.get = function () {
        return this.button.get();
    };
    Button.prototype.onClick = function () {
        print("tester123");
    };
    return Button;
}());
exports.Button = Button;
