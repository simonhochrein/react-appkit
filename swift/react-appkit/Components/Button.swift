import AppKit
import JavaScriptCore

@objc protocol ButtonProtocol: JSExport {
    init()
    func get() -> NSButton
    func setOnClick(_ fn: JSValue)
}

@objc class Button: NSObject, ButtonProtocol {
    let button: NSButton
    var onClickListener: JSValue?
    override required init() {
        self.button = NSButton(title: "test", target: nil, action: nil)
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
    func get() -> NSButton {
        return self.button
    }
    @objc func onClick() {
        self.onClickListener!.call(withArguments: nil)
    }
}
