export class Title extends Phaser.Scene {

    constructor() {
        super('Title');
    }

    preload() {
    }

    create() {
        this.add.image(400, 300, 'rgj');
        this.add.sprite(400, 300).setScale(5).play('splash');
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