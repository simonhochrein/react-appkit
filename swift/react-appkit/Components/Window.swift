import AppKit
import JavaScriptCore

@objc protocol WindowProtocol: JSExport {
    init()
    func appendChild(_ component: NSView)
}

@objc class Window: NSObject, WindowProtocol {
    let win: NSWindow;
    override required init() {
        self.win = NSWindow(contentRect: NSMakeRect(100, 100, 100, 100),
                            styleMask: [.titled, .closable, .miniaturizable, .resizable],
                            backing: NSWindow.BackingStoreType.buffered, defer: true)
        self.win.center()
        self.win.makeKeyAndOrderFront(win)
        
        let view = NSVisualEffectView()
        view.blendingMode = .behindWindow
        view.wantsLayer = true
        view.material = .dark
        view.state = .active
        
        self.win.contentView = view
    }
    func appendChild(_ component: NSView) {
        component.frame = (self.win.contentView?.frame)!
        component.autoresizingMask = [.height, .width]
        self.win.contentView?.addSubview(component)
//        self.win.contentView = component
    }
}
