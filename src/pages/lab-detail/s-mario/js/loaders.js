import SpriteSheet from './SpriteSheet.js';
import {createAnim} from './anim.js';
import goombaJson from '../sprites/goomba.json';
import marioJson from '../sprites/mario.json';
import koopaJson from '../sprites/koopa.json';

export function loadImage(url) {
    const image = new Image();
    image.src = url;
    return image;


    // return new Promise(resolve => {
    //     const image = new Image();
    //     image.addEventListener('load', () => {
    //         resolve(image);
    //     });
    //     image.src = url;
    // });
}

export function loadJSON(url) {
    let jsonUrl = null;
    if (url === 'mario') { jsonUrl = marioJson }
    if (url === 'goomba') { jsonUrl = goombaJson }
    if (url === 'koopa') { jsonUrl = koopaJson }

    return jsonUrl;
    // return fetch(url)
    // .then(r => r.json());
}

export function loadSpriteSheet(name) {
    let jsonData = loadJSON(name);
    let loadedImage = loadImage(jsonData.imageURL);
    const sprites = new SpriteSheet(
        loadedImage,
        jsonData.tileW,
        jsonData.tileH);

    if (jsonData.tiles) {
        jsonData.tiles.forEach(tileSpec => {
            sprites.defineTile(
                tileSpec.name,
                tileSpec.index[0],
                tileSpec.index[1]);
        });
    }

    if (jsonData.frames) {
        jsonData.frames.forEach(frameSpec => {
            sprites.define(frameSpec.name, ...frameSpec.rect);
        });
    }

    if (jsonData.animations) {
        jsonData.animations.forEach(animSpec => {
            const animation = createAnim(animSpec.frames, animSpec.frameLen);
            sprites.defineAnim(animSpec.name, animation);
        });
    }

    return sprites;


    // console.log(jsonData);
    // return loadJSON(name)

    
    // .then(sheetSpec => Promise.all([
    //     sheetSpec,
    //     loadImage(sheetSpec.imageURL),
    // ]))
    // .then(([sheetSpec, image]) => {
    //     const sprites = new SpriteSheet(
    //         image,
    //         sheetSpec.tileW,
    //         sheetSpec.tileH);

    //     if (sheetSpec.tiles) {
    //         sheetSpec.tiles.forEach(tileSpec => {
    //             sprites.defineTile(
    //                 tileSpec.name,
    //                 tileSpec.index[0],
    //                 tileSpec.index[1]);
    //         });
    //     }

    //     if (sheetSpec.frames) {
    //         sheetSpec.frames.forEach(frameSpec => {
    //             sprites.define(frameSpec.name, ...frameSpec.rect);
    //         });
    //     }

    //     if (sheetSpec.animations) {
    //         sheetSpec.animations.forEach(animSpec => {
    //             const animation = createAnim(animSpec.frames, animSpec.frameLen);
    //             sprites.defineAnim(animSpec.name, animation);
    //         });
    //     }

    //     return sprites;
    // });
}
