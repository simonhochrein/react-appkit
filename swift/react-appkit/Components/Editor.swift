import AppKit
import JavaScriptCore

@objc protocol EditorProtocol: JSExport {
    init()
    func get() -> NSScrollView
}

class Ruler: NSRulerView {
    weak var textView: NSTextView?
    
    init(_ textView: NSTextView) {
        self.textView = textView
        super.init(scrollView: textView.enclosingScrollView!, orientation: .verticalRuler)
        self.ruleThickness = 40
    }
    
    required init(coder: NSCoder) {
        super.init(coder: coder)
    }
    override func drawHashMarksAndLabels(in rect: NSRect) {
            if let layoutManager = textView?.layoutManager {
                
                let relativePoint = self.convert(NSZeroPoint, from: textView)
                let lineNumberAttributes = [NSAttributedStringKey.font: textView?.font!, NSAttributedStringKey.foregroundColor: NSColor.gray] as [NSAttributedStringKey : Any]
                
                let drawLineNumber = { (lineNumberString:String, y:CGFloat) -> Void in
                    let attString = NSAttributedString(string: lineNumberString, attributes: lineNumberAttributes)
                    let x = 35 - attString.size().width
                    attString.draw(at: NSPoint(x: x, y: relativePoint.y + y))
                }
                
                let visibleGlyphRange = layoutManager.glyphRange(forBoundingRect: (textView?.visibleRect)!, in: (textView?.textContainer!)!)
                let firstVisibleGlyphCharacterIndex = layoutManager.characterIndexForGlyph(at: visibleGlyphRange.location)
                
                let newLineRegex = try! NSRegularExpression(pattern: "\n", options: [])
                // The line number for the first visible line
                var lineNumber = newLineRegex.numberOfMatches(in: (textView?.string)!, options: [], range: NSMakeRange(0, firstVisibleGlyphCharacterIndex)) + 1
                
                var glyphIndexForStringLine = visibleGlyphRange.location
                
                // Go through each line in the string.
                while glyphIndexForStringLine < NSMaxRange(visibleGlyphRange) {
                    
                    // Range of current line in the string.
                    let characterRangeForStringLine = (textView?.string as! NSString).lineRange(
                        for: NSMakeRange( layoutManager.characterIndexForGlyph(at: glyphIndexForStringLine), 0 )
                    )
                    let glyphRangeForStringLine = layoutManager.glyphRange(forCharacterRange: characterRangeForStringLine, actualCharacterRange: nil)
                    
                    var glyphIndexForGlyphLine = glyphIndexForStringLine
                    var glyphLineCount = 0
                    
                    while ( glyphIndexForGlyphLine < NSMaxRange(glyphRangeForStringLine) ) {
                        
                        // See if the current line in the string spread across
                        // several lines of glyphs
                        var effectiveRange = NSMakeRange(0, 0)
                        
                        // Range of current "line of glyphs". If a line is wrapped,
                        // then it will have more than one "line of glyphs"
                        let lineRect = layoutManager.lineFragmentRect(forGlyphAt: glyphIndexForGlyphLine, effectiveRange: &effectiveRange, withoutAdditionalLayout: true)
                        
                        if glyphLineCount > 0 {
                            drawLineNumber("-", lineRect.minY)
                        } else {
                            drawLineNumber("\(lineNumber)", lineRect.minY)
                        }
                        
                        // Move to next glyph line
                        glyphLineCount += 1
                        glyphIndexForGlyphLine = NSMaxRange(effectiveRange)
                    }
                    
                    glyphIndexForStringLine = NSMaxRange(glyphRangeForStringLine)
                    lineNumber += 1
                }
                
                // Draw line number for the extra line at the end of the text
                if layoutManager.extraLineFragmentTextContainer != nil {
                    drawLineNumber("\(lineNumber)", layoutManager.extraLineFragmentRect.minY)
                }
            }
        }
}

extension String {
    func indicesOf(string: String) -> [Range<String.Index>] {
        var indices = [Range<String.Index>]()
        var searchStartIndex = self.startIndex
        
        while searchStartIndex < self.endIndex,
            let range = self.range(of: string, range: searchStartIndex..<self.endIndex),
            !range.isEmpty
        {
            indices.append(range)
            searchStartIndex = range.upperBound
        }
        
        return indices
    }
}


@objc class Editor: NSObject, EditorProtocol, NSTextViewDelegate {
    let editor: NSTextView
    let scrollView: NSScrollView
    
    var onClickListener: JSValue?
    override required init() {
        self.scrollView = NSScrollView()
        self.editor = NSTextView()
        self.editor.autoresizingMask = [.width, .height]
        
        self.scrollView.documentView = self.editor
        let ruler = Ruler(self.editor)
        
        self.editor.enclosingScrollView?.verticalRulerView = ruler
        self.editor.enclosingScrollView?.hasVerticalRuler = true
        self.editor.enclosingScrollView?.rulersVisible = true
        self.editor.enclosingScrollView?.needsDisplay = true
        
        self.editor.string = try! String(contentsOf: URL(string: "https://stackoverflow.com/questions/14646163/change-the-text-of-a-nstextview-programmatically")!)
        // TODO: hook up parser
//        for match in Parser().parse(str: self.editor.string) {
//            self.editor.textStorage?.addAttribute(NSAttributedStringKey.foregroundColor, value: NSColor.red, range: match)
//        }
        
//        var matches = self.editor.string.indicesOf(string: "<")
//        matches += self.editor.string.indicesOf(string: ">")
        
//        for index in matches {
////            print(index)
//            self.editor.textStorage?.addAttribute(NSAttributedStringKey.foregroundColor, value: NSColor.red, range: NSRange(index, in: self.editor.string))
//        }
        
        super.init()
        self.editor.delegate = self

//        self.create()
    }
    func textDidChange(_ notification: Notification) {
        self.editor.enclosingScrollView?.verticalRulerView?.needsDisplay = true
    }
    func create() {
//        self.editor.target = self
//        self.editor.action = #selector(onClick)
    }
    func setOnClick(_ fn: JSValue) {
        self.onClickListener = fn;
    }
    func get() -> NSScrollView {
        return self.scrollView
    }
}
