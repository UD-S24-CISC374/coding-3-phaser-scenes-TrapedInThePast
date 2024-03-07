export default class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: "GameOver" });
    }

    create() {
        this.cameras.main.setBackgroundColor("#ff5ccd");
        this.add
            .sprite(0, 0, "atlas", "sky")
            .setScrollFactor(0)
            .setOrigin(0)
            .setScale(3);
    }
}
