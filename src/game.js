const config = {
  type: Phaser.AUTO,
  parent: "gamecanvas",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  const { load, add, make, cameras } = this;
  const { width, height } = cameras.main;

  // load assets
  load.image("logo", "assets/logo.png");
  load.image("objects", "assets/objects.png");
  load.image("rabbit", "assets/rabbit.png");

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

function create() {
  var logo = this.add.image(400, 150, "logo");

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });
}
