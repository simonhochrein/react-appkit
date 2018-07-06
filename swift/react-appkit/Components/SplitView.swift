import AppKit
import JavaScriptCore

@objc protocol SplitViewProtocol: JSExport {
    init()
    func appendChild(_ component: NSView)
    func get() -> NSSplitView
}

class FileItem {
    let subitems: [FileItem]
    let title: String
    
    init(title: String, subitems: [FileItem]) {
        self.title = title
        self.subitems = subitems
    }
}

@objc class SplitView: NSObject, SplitViewProtocol, NSOutlineViewDelegate, NSOutlineViewDataSource {
    let view: NSSplitView
    let root: FileItem
    let outline: NSOutlineView
    
    override required init() {
        self.view = NSSplitView()
        self.view.isVertical = true
        self.view.dividerStyle = .thin
        
        self.root = FileItem(title: "test", subitems: [
            FileItem(title: "Folder", subitems: [
                FileItem(title: "Sub Folder", subitems: [
                    FileItem(title: "Item", subitems: []),
                    FileItem(title: "Item", subitems: []),
                    FileItem(title: "Item", subitems: []),
                    FileItem(title: "Item", subitems: [])
                ])
            ])
        ])
        
        
        self.outline = NSOutlineView()
        
        super.init()
        let column = NSTableColumn(identifier: NSUserInterfaceItemIdentifier("test"))
        column.title = "arrow"
        column.width = 10
        self.outline.addTableColumn(column)
        self.outline.outlineTableColumn = column
        self.outline.backgroundColor = .clear
        
        self.outline.delegate = self
        self.outline.dataSource = self
        self.view.addSubview(self.outline)
//        self.view
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    func appendChild(_ component: NSView) {
//        let item = NSSplitViewItem()
//        print(component)
//        self.view.addArrangedSubview(component)
        self.view.subviews.append(component)
        
    }
    func get() -> NSSplitView {
        return self.view
    }
    
    func outlineView(_ outlineView: NSOutlineView, isItemExpandable item: Any) -> Bool {
        return (item as! FileItem).subitems.count > 0
    }
    func outlineView(_ outlineView: NSOutlineView, numberOfChildrenOfItem item: Any?) -> Int {
        if(item != nil) {
            return (item as! FileItem).subitems.count
        }
        return self.root.subitems.count
    }
    func outlineView(_ outlineView: NSOutlineView, child index: Int, ofItem item: Any?) -> Any {
        if(item != nil) {
            return (item as! FileItem).subitems[index]
        }
        return self.root.subitems[index]
    }
    func outlineView(_ outlineView: NSOutlineView, objectValueFor tableColumn: NSTableColumn?, byItem item: Any?) -> Any? {
        return nil
    }
//    func outlineView(_ outlineView: NSOutlineView, rowViewForItem item: Any) -> NSTableRowView? {
//        let row = NSTableRowView()
//        let text = NSTextField(string: (item as! FileItem).title)
//
//        let button = NSButton(title: "toggle", target: self, action: #selector(clickButton(sender: )));
//        row.addSubview(button)
//        row.addSubview(text)
//        return row
//        return nil
//    }
    func outlineView(_ outlineView: NSOutlineView, shouldExpandItem item: Any) -> Bool {
        return true;
    }
    func outlineView(_ outlineView: NSOutlineView, shouldShowOutlineCellForItem item: Any) -> Bool {
        return true
    }
    func outlineView(_ outlineView: NSOutlineView, viewFor tableColumn: NSTableColumn?, item: Any) -> NSView? {
        
        let columnIdentifier = tableColumn!.identifier
        
        if let recycledCell = outlineView.makeView(withIdentifier: columnIdentifier, owner: self) as? NSTableCellView {
            return recycledCell
        }
        
        let newCell = NSTableCellView(frame: NSMakeRect(0, 0, 150, outlineView.rowHeight))
        
        
        newCell.identifier = columnIdentifier
        newCell.autoresizesSubviews = true
        
        let textField = NSTextField(frame: NSMakeRect(0, 0, 150, outlineView.rowHeight))
        textField.stringValue = (item as! FileItem).title
        textField.isBordered = false
        textField.drawsBackground = false
        textField.textColor = .white
        
        newCell.addSubview(textField)
        
        return newCell
    }
}
