declare class NSButton { }

export class Button {
    button: NSButton;
    constructor() {
        this.button = new NSButton();
        this.button.setOnClick(this.onClick)
    }
    get() {
        return this.button.get();
    }
    onClick() {
        print("tester123");
    }
}