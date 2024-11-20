// This file is used to compile the cloud mirror code editor and ourput the editor as editor.bundle.js.
// to modify the editor, add code mirror plugins to editor.mjs and run rollup -c (make sure it is installed on your system with npm)
// Source: https://codemirror.net/examples/bundle/



import { nodeResolve } from "@rollup/plugin-node-resolve"
export default {
    input: "./src/scripts/editor.mjs",
    output: {
        file: "./src/scripts/editor.bundle.js",
        format: "iife"
    },
    plugins: [nodeResolve()]
}
