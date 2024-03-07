export default class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: "BackgroundScene" });
    }

    create() {
        this.cameras.main.setBackgroundColor("#4ba9e4");
        this.add
            .sprite(0, 0, "atlas", "sky")
            .setScrollFactor(0)
            .setOrigin(0)
            .setScale(3);
    }
}
