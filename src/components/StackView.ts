declare class NSStackView { appendChild(child); }
declare function print(...args);

export class StackView {
    view: NSStackView;
    constructor() {
        this.view = new NSStackView();
    }
    appendChild(child) {
        this.view.appendChild(child.get());
    }
    get() {
        return this.view.get();
    }
}