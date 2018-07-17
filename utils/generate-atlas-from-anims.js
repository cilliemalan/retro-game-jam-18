// running this script will generate
// the texture atlas from the animations
// file.

const textures = require("../assets/animations.json");
const { writeFileSync } = require("fs");

const atlas = {
  textures: Object.keys(textures).map(image => {
    const anim_data = textures[image];
    const animations = Object.keys(anim_data);
    const frames = [];

    animations.forEach(subimage => {
      const { frames: anim_frames } = anim_data[subimage];

      anim_frames
        .map(({ x, y, width: w, height: h, anchor_x, anchor_y }) => ({
          x: parseFloat(x),
          y: parseFloat(y),
          w: parseFloat(w),
          h: parseFloat(h),
          anchor_x: parseFloat(anchor_x),
          anchor_y: parseFloat(anchor_y)
        }))
        .map(({ x, y, w, h, anchor_x, anchor_y }, i) => ({
          filename: `${subimage}${i.toString().padStart(2, "0")}`,
          sourceSize: { w, h },
          spriteSourceSize: { x: 0, y: 0, w, h },
          frame: { x, y, w, h },
          anchor: { x: anchor_x / w, y: anchor_y / h }
        }))
        .forEach(x => frames.push(x));
    });

    return { image, frames };
  })
};

const atlas_data = JSON.stringify(atlas, null, "  ");
writeFileSync(`${__dirname}/../assets/sprites_atlas.json`, atlas_data);
