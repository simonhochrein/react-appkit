import AppKit
import JavaScriptCore

@objc protocol StackViewProtocol: JSExport {
    init()
    func appendChild(_ component: NSView)
    func get() -> NSStackView
}

@objc class StackView: NSObject, StackViewProtocol {
    let view: NSStackView
    
    override required init() {
        self.view = NSStackView()
        self.view.orientation = .vertical
        //        self.view
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    func appendChild(_ component: NSView) {
        //        let item = NSSplitViewItem()
        //        print(component)
        //        self.view.addArrangedSubview(component)
        self.view.addView(component, in: .bottom)
        
    }
    func get() -> NSStackView {
        return self.view
    }
}
