declare class NSSplitView { appendChild(child); }
declare function print(...args);

export class SplitView {
    view: NSSplitView;
    constructor() {
        // setTimeout(function () {
        // }, 5000);
        this.view = new NSSplitView();
    }
    appendChild(child) {
        this.view.appendChild(child.get());
    }
    get() {
        return this.view.get();
    }
}