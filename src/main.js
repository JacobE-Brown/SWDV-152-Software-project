// import '../styles/styles.css';
// import './scripts/diplayLevel.js';
import './scripts/index.js';

// Import CodeMirror Editor
import './scripts/editor.bundle.js';

// import Phaser and set up configuration
import Phaser from 'phaser';




window.onload = () => {

    class GameScene extends Phaser.Scene {
        constructor() {
            super("scene-game")
        }

        preload() {
            this.load.image("bg", "/public/assets/Comando.jpg")
        }
        create() {
            this.add.image(0, 0, "bg").setOrigin(0,0)
        }

        update() { }
    }

    const gameCanvas = document.getElementById('gameCanvas');
    const sizes = {
        width: gameCanvas.clientWidth,
        height: gameCanvas.clientHeight,
    }

    const config = {
        type: Phaser.WEBGL,
        canvas: gameCanvas,
        // width: sizes.width,
        // height: sizes.height,
        scene: [GameScene] // Corrected case of "Scene" to "scene"
    };

    const game = new Phaser.Game(config);
}
