"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dropdown = /** @class */ (function () {
    function Dropdown() {
        this.button = new NSPopUpButton();
        // this.button.setOnClick(this.onClick)
    }
    Dropdown.prototype.get = function () {
        return this.button.get();
    };
    return Dropdown;
}());
exports.Dropdown = Dropdown;
