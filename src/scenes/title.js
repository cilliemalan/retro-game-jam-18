export class Title extends Phaser.Scene {

    constructor() {
        super('Title');
    }

    preload() {
    }

    create() {
        this.add.sprite(30, 30).setScale(1).play('rabbit1_r_run');
        // var logo = this.add.image(400, 150, "logo");

        // this.tweens.add({
        //   targets: logo,
        //   y: 450,
        //   duration: 2000,
        //   ease: "Power2",
        //   yoyo: true,
        //   loop: -1
        // });
    }

}