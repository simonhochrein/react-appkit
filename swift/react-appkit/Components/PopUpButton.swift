import AppKit
import JavaScriptCore

@objc protocol PopUpButtonProtocol: JSExport {
    init()
    func get() -> NSPopUpButton
    func setOnClick(_ fn: JSValue)
}

@objc class PopUpButton: NSObject, PopUpButtonProtocol {
    let button: NSPopUpButton
    var onClickListener: JSValue?
    
    override required init() {
        self.button = NSPopUpButton(title: "test", target: nil, action: nil)
        self.button.addItems(withTitles: ["test", "test2"])
        super.init()
        self.create()
    }
    func create() {
        self.button.target = self
        self.button.action = #selector(onClick)
    }
    func setOnClick(_ fn: JSValue) {
        self.onClickListener = fn;
    }
    func get() -> NSPopUpButton {
        return self.button
    }
    @objc func onClick() {
        print(self.button.selectedItem?.title)
//        self.onClickListener!.call(withArguments: nil)
    }
}
