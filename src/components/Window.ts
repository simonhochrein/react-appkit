declare class NSWindow { appendChild(child); }
declare function print(...args);

export class Window {
    win: NSWindow;
    constructor() {
        this.win = new NSWindow();
    }
    appendChild(child) {
        this.win.appendChild(child.get());
    }
    get() {
        return this.win.get();
    }
}