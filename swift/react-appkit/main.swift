//
//  main.swift
//  Bridge
//
//  Created by Simon Hochrein on 6/25/18.
//  Copyright © 2018 Simon Hochrein. All rights reserved.
//

import AppKit
import JavaScriptCore

let vm = JSVirtualMachine()
let ctx = JSContext(virtualMachine: vm)!


let log: @convention(block) (JSValue) -> Void = { str in
        print(str.toObject())
}

ctx.exceptionHandler = {(ctx: JSContext?, err: JSValue?) in
    print(err!, err?.objectForKeyedSubscript("line"), err?.objectForKeyedSubscript("column"), err?.objectForKeyedSubscript("stack"))
}


ctx.setObject(log, forKeyedSubscript: "print" as NSCopying & NSObjectProtocol)
ctx.setObject(Window.self, forKeyedSubscript: "NSWindow" as NSCopying & NSObjectProtocol)
ctx.setObject(Button.self, forKeyedSubscript: "NSButton" as NSCopying & NSObjectProtocol)
ctx.setObject(View.self, forKeyedSubscript: "NSView" as NSCopying & NSObjectProtocol)
ctx.setObject(SplitView.self, forKeyedSubscript: "NSSplitView" as NSCopying & NSObjectProtocol)
ctx.setObject(StackView.self, forKeyedSubscript: "NSStackView" as NSCopying & NSObjectProtocol)
ctx.setObject(PopUpButton.self, forKeyedSubscript: "NSPopUpButton" as NSCopying & NSObjectProtocol)

ctx.setObject(Editor.self, forKeyedSubscript: "MyEditor" as NSCopying & NSObjectProtocol)

ctx.evaluateScript(try String(contentsOfFile: CommandLine.arguments[1]));

let app = NSApplication.shared
app.setActivationPolicy(.regular)
let appDelegate = AppDelegate()
app.delegate = appDelegate
app.run()
