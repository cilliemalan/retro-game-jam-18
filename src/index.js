
// load phaser async and then game
import("phaser")
  .then(() => import("./game"))
  .then(() => document.getElementById("loadingmessage").remove());
