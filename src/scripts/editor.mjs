// This File Defines our CodeMirror Code editor and after compiling with rollup 
// will give us an editor named editor.bundle.js which can be called with a script
// tag to create our code editor. The Editor appears on the element with id of "input"

import { EditorView, basicSetup } from "codemirror"
import { javascript } from "@codemirror/lang-javascript"
import { nord } from 'cm6-theme-nord'

document.addEventListener('DOMContentLoaded', () => {
    const parentElement = document.getElementById('input');

    if (parentElement) {
        let editor = new EditorView({
            doc: '//Welcome To CodeMirror Everyone \n\nlet MSG = "Hello World!"; \nconsole.log(MSG);',
            extensions: [basicSetup, javascript()],
            parent: parentElement,
        });
    } else {
        console.error('Parent element #input not found');
    }
});


// extensions: [basicSetup, javascript(), nord],