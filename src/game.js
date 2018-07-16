import { Loader } from './scenes/loader';
import { Main } from './scenes/main';
import { Title } from './scenes/title';

const config = {
  type: Phaser.AUTO,
  parent: "gamecanvas",
  width: 800,
  height: 600,
  scene: [
    Loader,
    Title,
    Main
  ]
};

const game = new Phaser.Game(config);
