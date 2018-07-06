import AppKit
import JavaScriptCore

@objc protocol ViewProtocol: JSExport {
    init()
    func appendChild(_ component: NSView)
    func get() -> NSView
}

@objc class View: NSObject, ViewProtocol {
    var view: NSView;
    override required init() {
        self.view = NSView()
        self.view.wantsLayer = true
        self.view.layer?.backgroundColor = NSColor.blue.cgColor
//        self.view = NSVisualEffectView()
//        self.view.wantsLayer = true
//        self.view.blendingMode = .behindWindow
//        self.view.material = .dark
//        self.view.state = .active
    }
    func appendChild(_ component: NSView) {
        component.autoresizingMask = [.height, .width]
        self.view.addSubview(component)
    }
    func get() -> NSView {
        return self.view
    }
}
