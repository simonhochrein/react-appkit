declare class NSView { appendChild(child); }
declare function print(...args);

export class View {
    view: NSView;
    constructor() {
        this.view = new NSView();
    }
    appendChild(child) {
        this.view.appendChild(child.get());
    }
    get() {
        return this.view.get();
    }
}