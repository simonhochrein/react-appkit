declare class NSPopUpButton { }

export class Dropdown {
    button: NSPopUpButton;
    constructor() {
        this.button = new NSPopUpButton();
        // this.button.setOnClick(this.onClick)
    }
    get() {
        return this.button.get();
    }
    // onClick() {
    //     print("tester123");
    // }
}