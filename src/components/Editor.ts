declare class MyEditor { }

export class Editor {
    editor: MyEditor;
    constructor() {
        this.editor = new MyEditor();
    }
    get() {
        return this.editor.get();
    }
}