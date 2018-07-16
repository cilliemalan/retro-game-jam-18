const sprites = require('./assets/sprites.json');

const atlas = {
    textures: Object.keys(sprites).map(image => {
        const image_data = sprites[image];
        const subimages = Object.keys(image_data);
        const frames = [];
    
        subimages.forEach(subimage => {
            const subimage_data = image_data[subimage];
    
            subimage_data
                .map(({ x, y, width: w, height: h, hotspot_x, hotspot_y }) => ({
                    x: parseFloat(x),
                    y: parseFloat(y),
                    w: parseFloat(w),
                    h: parseFloat(h),
                    hotspot_x: parseFloat(hotspot_x),
                    hotspot_y: parseFloat(hotspot_y),
                }))
                .map(({ x, y, w, h, hotspot_x, hotspot_y }, i) => ({
                filename: `${subimage}${(i).toString().padStart(2, '0')}`,
                sourceSize: { w, h },
                spriteSourceSize: { x: 0, y: 0, w, h },
                frame: { x, y, w, h },
                anchor: { x: hotspot_x / w, y: hotspot_y / h }
            }))
            .forEach(x => frames.push(x));
        })
    
        return { image, frames };
    })
}

console.log(JSON.stringify(atlas, null, '  '));