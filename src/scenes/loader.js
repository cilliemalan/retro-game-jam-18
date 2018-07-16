export class Loader extends Phaser.Scene {
    constructor() {
        super('Loader');
    }
    preload() {
        const { load } = this;

        // load assets
        load.path = 'assets/';
        load.image('rgj', 'rgj.jpg');
        load.image("logo", "logo.png");
        load.multiatlas('frames', 'sprites_atlas.json');

        // progress bar
        load.on("progress", value => {
            const loadingprogresstext = document.getElementById("loadingprogresstext");
            const loadingprogressbar = document.getElementById("loadingprogressbar");
            const progress = `${parseInt(50 + value * 50)}%`;
            loadingprogresstext.textContent = progress;
            loadingprogressbar.style.width = progress;
        });

        load.once("complete", () => {
            document.getElementsByTagName("canvas")[0].style.display = "block";
            document.getElementById("loading").style.display = "none";
        });
    }

    create() {

        this.anims.create({
            key: 'rabbit1_r_run',
            frames: this.anims.generateFrameNames('frames', {
                prefix: 'rabbit1_r_run',
                start: 0,
                end: 3,
                zeroPad: 2
            }),
            repeat: -1,
            frameRate: 8,
        });

        this.scene.start('Title');
    }
}
