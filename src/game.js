import { Loader } from "./scenes/loader";
import { Main } from "./scenes/main";
import { Title } from "./scenes/title";

const zoom = 4;

const config = {
  type: Phaser.WEBGL,
  parent: "gamecanvas",
  backgroundColor: "#1b2632",
  pixelArt: true,
  zoom,
  width: innerWidth / zoom,
  height: innerHeight / zoom,

  scene: [Loader, Title, Main]
};

const game = new Phaser.Game(config);
window.game = game;
window.addEventListener("resize", resize);
resize();

function resize() {
  const { innerWidth: w, innerHeight: h } = window;
  const { canvas } = game;

  game.resize(w / zoom, h / zoom);
  canvas.style.width = `${w}px`;
  canvas.style.height = `${h}px`;
}
