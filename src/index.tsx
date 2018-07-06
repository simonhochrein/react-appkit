import * as React from 'react';
import * as Reconciler from 'react-reconciler';
import { Window } from './components/Window';
import { Button } from './components/Button';
import { View } from './components/View';
import { SplitView } from './components/SplitView';
import { StackView } from './components/StackView';
import { Dropdown } from './components/Dropdown';
import { Editor } from './components/Editor';
// import "babel-polyfill";

class Root {
    appendChild(child) {

    }
}

var map = {
    "window": Window,
    "button": Button,
    "view": View,
    "splitview": SplitView,
    "stackview": StackView,
    "dropdown": Dropdown,
    "editor": Editor
}

var rec = Reconciler({
    appendInitialChild(parentInstance, child) {
        // if (parentInstance.appendChild) {
        //     parentInstance.appendChild(child);
        // } else {
        //     parentInstance.document = child;
        // }
        parentInstance.appendChild(child);
    },

    appendChildToContainer(parent, child) {
        parent.appendChild(child);
        // print(arguments);
    },

    createInstance(type, props, internalInstanceHandle) {
        var component = new map[type]();
        return component;
        // return createElement(type, props, internalInstanceHandle);
    },

    createTextInstance(text, rootContainerInstance, internalInstanceHandle) {
        return text;
    },

    finalizeInitialChildren(wordElement, type, props) {
        return false;
    },

    getPublicInstance(inst) {
        return inst;
    },

    prepareForCommit() {
        // noop
    },

    prepareUpdate(wordElement, type, oldProps, newProps) {
        return true;
    },

    resetAfterCommit() {
        // noop
    },

    resetTextContent(wordElement) {
        // noop
    },

    getRootHostContext(rootInstance) {
        // You can use this 'rootInstance' to pass data from the roots.
    },

    getChildHostContext() {
        return {};
    },

    shouldSetTextContent(type, props) {
        return false;
    },

    now: Date.now,

    supportsMutation: true
});

var root = rec.createContainer(new Root());

function render(element) {
    rec.updateContainer(element, root);
}

render(
    <window>
        <editor />
    </window>
);