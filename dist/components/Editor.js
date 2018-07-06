"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Editor = /** @class */ (function () {
    function Editor() {
        this.editor = new MyEditor();
    }
    Editor.prototype.get = function () {
        return this.editor.get();
    };
    return Editor;
}());
exports.Editor = Editor;
