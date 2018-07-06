"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Reconciler = require("react-reconciler");
var Window_1 = require("./components/Window");
var Button_1 = require("./components/Button");
var View_1 = require("./components/View");
var SplitView_1 = require("./components/SplitView");
var StackView_1 = require("./components/StackView");
var Dropdown_1 = require("./components/Dropdown");
var Editor_1 = require("./components/Editor");
// import "babel-polyfill";
var Root = /** @class */ (function () {
    function Root() {
    }
    Root.prototype.appendChild = function (child) {
    };
    return Root;
}());
var map = {
    "window": Window_1.Window,
    "button": Button_1.Button,
    "view": View_1.View,
    "splitview": SplitView_1.SplitView,
    "stackview": StackView_1.StackView,
    "dropdown": Dropdown_1.Dropdown,
    "editor": Editor_1.Editor
};
var rec = Reconciler({
    appendInitialChild: function (parentInstance, child) {
        // if (parentInstance.appendChild) {
        //     parentInstance.appendChild(child);
        // } else {
        //     parentInstance.document = child;
        // }
        parentInstance.appendChild(child);
    },
    appendChildToContainer: function (parent, child) {
        parent.appendChild(child);
        // print(arguments);
    },
    createInstance: function (type, props, internalInstanceHandle) {
        var component = new map[type]();
        return component;
        // return createElement(type, props, internalInstanceHandle);
    },
    createTextInstance: function (text, rootContainerInstance, internalInstanceHandle) {
        return text;
    },
    finalizeInitialChildren: function (wordElement, type, props) {
        return false;
    },
    getPublicInstance: function (inst) {
        return inst;
    },
    prepareForCommit: function () {
        // noop
    },
    prepareUpdate: function (wordElement, type, oldProps, newProps) {
        return true;
    },
    resetAfterCommit: function () {
        // noop
    },
    resetTextContent: function (wordElement) {
        // noop
    },
    getRootHostContext: function (rootInstance) {
        // You can use this 'rootInstance' to pass data from the roots.
    },
    getChildHostContext: function () {
        return {};
    },
    shouldSetTextContent: function (type, props) {
        return false;
    },
    now: Date.now,
    supportsMutation: true
});
var root = rec.createContainer(new Root());
function render(element) {
    rec.updateContainer(element, root);
}
render(React.createElement("window", null,
    React.createElement("editor", null)));
