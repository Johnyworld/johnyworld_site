import { TILES, TILESET, ENTITIES, Rosie } from './rpg-moving-script';

function collisionCheck(dir, entity) {

    let CollisionTile = entity.checkCollision();
    if (CollisionTile !== false) {
        if (entity.go.up + entity.go.down + entity.go.left + entity.go.right === 1) {
            entity.go.ing = 0;
        }
        if (dir === 'left') { entity.pos.x = CollisionTile.box.right - entity.crop.left }
        if (dir === 'right') { entity.pos.x = CollisionTile.box.left - entity.width + entity.crop.right }
        if (dir === 'up') { entity.pos.y = CollisionTile.box.bottom - entity.crop.top }
        if (dir === 'down') { entity.pos.y = CollisionTile.box.top - entity.height + entity.crop.bottom }
    }
}

function KeyState(entity) {
    let GoingLeft = entity.go.left === 1 && entity.go.right === 0;
    let GoingRight = entity.go.right === 1 && entity.go.left === 0;
    let GoingUp = entity.go.up === 1 && entity.go.down === 0;
    let GoingDown = entity.go.down === 1 && entity.go.up === 0;

    if (GoingLeft || GoingRight || GoingUp || GoingDown) {

        let moving;
        moving = Math.floor(entity.go.ing / 15);
        entity.go.ing += entity.speed * 1.5;

        if (GoingLeft) {
            entity.pos.x -= entity.speed;
            entity.dir = 'left';
            collisionCheck(entity.dir, entity, moving);
        }
        if (GoingRight) {
            entity.pos.x += entity.speed;
            entity.dir = 'right';
            collisionCheck(entity.dir, entity, moving);
        }
        if (GoingUp) {
            entity.pos.y -= entity.speed;
            entity.dir = 'up';
            collisionCheck(entity.dir, entity, moving);
        }
        if (GoingDown) {
            entity.pos.y += entity.speed;
            entity.dir = 'down';
            collisionCheck(entity.dir, entity, moving);
        }

        if (moving >= 4) {
            entity.go.ing = 0;
            moving = 3;
        }
        entity.AnimateWalk(moving);
    }
}

export const rollDice = (times, dice, num) => {
    let total = 0;
    for (let i = 0; i < times; i++) {
        total = total + Math.ceil(Math.random() * dice);
    }
    total = total + num;
    return total;
}

class Vec {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

class Crop {
    constructor(crop) {
        this.top = crop[0];
        this.bottom = crop[1];
        this.left = crop[2];
        this.right = crop[3];
    }
}

class Box {
    constructor() {
        this.top = 0;
        this.bottom = 0;
        this.left = 0;
        this.right = 0;
    }
}

class Go {
    constructor() {
        this.up = 0;
        this.down = 0;
        this.left = 0;
        this.right = 0;
        this.ing = 0;
    }
}

class Status {
    constructor(str, con, dex, int, wis, cha) {
        this.str = str;
        this.con = con;
        this.dex = dex;
        this.int = int;
        this.wis = wis;
        this.cha = cha;
        this.maxHealth = rollDice(1, 6, Math.ceil(this.con / 2));
        this.maxMana = rollDice(1, 6, Math.ceil(this.wis / 2));
        this.health = this.maxHealth;
        this.mana = this.maxMana;
    }
}

export class DefineHuman {
    constructor(context, image, Character) {
        this.context = context;
        this.image = image;
        this.image.src = Character.src;
        this.name = Character.name;
        this.race = Character.race;
        this.crop = new Crop(Character.crop);
        this.go = new Go();
        this.box = new Box();
        this.speed = 1;

        this.width = Character.define[0];
        this.height = Character.define[1];
        this.tileX = Character.define[2];
        this.tileY = Character.define[3];

        this.active = {
            "follow": 0
        }

        this.stat = new Status(rollDice(3, 6, 0), rollDice(3, 6, 0), rollDice(3, 6, 0), rollDice(3, 6, 0), rollDice(3, 6, 0), rollDice(3, 6, 0));

        this.Frames = {
            "goNorth": [
                {
                    "name": "goNorth-0",
                    "rect": [0, 1]
                },
                {
                    "name": "goNorth-1",
                    "rect": [1, 1]
                },
                {
                    "name": "goNorth-2",
                    "rect": [0, 1]
                },
                {
                    "name": "goNorth-3",
                    "rect": [2, 1]
                }
            ],
            "goSouth": [
                {
                    "name": "goSouth-0",
                    "rect": [0, 0]
                },
                {
                    "name": "goSouth-1",
                    "rect": [1, 0]
                },
                {
                    "name": "goSouth-2",
                    "rect": [0, 0]
                },
                {
                    "name": "goSouth-3",
                    "rect": [2, 0]
                }
            ],
            "goWest": [
                {
                    "name": "goWest-0",
                    "rect": [0, 2]
                },
                {
                    "name": "goWest-1",
                    "rect": [1, 2]
                },
                {
                    "name": "goWest-2",
                    "rect": [0, 2]
                },
                {
                    "name": "goWest-3",
                    "rect": [2, 2]
                }
            ],
            "goEast": [
                {
                    "name": "goEast-0",
                    "rect": [0, 3]
                },
                {
                    "name": "goEast-1",
                    "rect": [1, 3]
                },
                {
                    "name": "goEast-2",
                    "rect": [0, 3]
                },
                {
                    "name": "goEast-3",
                    "rect": [2, 3]
                }
            ],
            "attackSouth": [
                {
                    "name": "attackSouth-0",
                    "rect": [3, 0]
                },
                {
                    "name": "attackSouth-1",
                    "rect": [4, 0]
                }
            ]
        }

    }   

    levelup = function () {
        this.level += 1;
        this.stat.health += rollDice(1, 4, Math.floor(this.stat.con / 4));
        this.stat.maxHealth = this.stat.health;
        this.stat.mana += rollDice(1, 4, Math.floor(this.stat.wis / 4));
        this.stat.maxMana = this.stat.mana;
    }

    checkCollision = function () {
        this.setBox();
        for (let i = 0; i < TILES.length; i++) {
            if (TILES[i].layer === "wall") {
                if (
                    this.box.right > TILES[i].box.left && // 주인공의 오른쪽면 충돌
                    this.box.left < TILES[i].box.right && // 주인공의 왼쪽면 충돌
                    this.box.bottom > TILES[i].box.top && // 주인공의 아래쪽면 충돌
                    this.box.top < TILES[i].box.bottom // 주인공의 위쪽면 충돌
                ) {
                    return TILES[i];
                } else {
                    continue;
                }
            }
        }
        for (let i = 0; i < ENTITIES.length; i++) {
            if (this === ENTITIES[i]) { continue; }
            if (
                this.box.right > ENTITIES[i].box.left && // 주인공의 오른쪽면 충돌
                this.box.left < ENTITIES[i].box.right && // 주인공의 왼쪽면 충돌
                this.box.bottom > ENTITIES[i].box.top && // 주인공의 아래쪽면 충돌
                this.box.top < ENTITIES[i].box.bottom // 주인공의 위쪽면 충돌
            ) {
                return ENTITIES[i];
            } else {
                continue;
            }
        }
        return false;
    }

    AnimateWalk(moving) {
        let frmX;
        let frmY;
        if (this.dir === 'up') {
            frmX = this.Frames.goNorth[moving].rect[0];
            frmY = this.Frames.goNorth[moving].rect[1];
            this.tileX = this.width * frmX;
            this.tileY = this.height * frmY;
        }
        if (this.dir === 'down') {
            frmX = this.Frames.goSouth[moving].rect[0];
            frmY = this.Frames.goSouth[moving].rect[1];
            this.tileX = this.width * frmX;
            this.tileY = this.height * frmY;
        }
        if (this.dir === 'left') {
            frmX = this.Frames.goWest[moving].rect[0];
            frmY = this.Frames.goWest[moving].rect[1];
            this.tileX = this.width * frmX;
            this.tileY = this.height * frmY;
        }
        if (this.dir === 'right') {
            frmX = this.Frames.goEast[moving].rect[0];
            frmY = this.Frames.goEast[moving].rect[1];
            this.tileX = this.width * frmX;
            this.tileY = this.height * frmY;
        }
    }

    follow() {
        if (this.active.follow === 1) {
            this.box.left - 5 >= Rosie.box.right ? this.go.left = 1 : this.go.left = 0;
            this.box.right + 5 <= Rosie.box.left ? this.go.right = 1 : this.go.right = 0;
            this.box.top - 5 >= Rosie.box.bottom ? this.go.up = 1 : this.go.up = 0;
            this.box.bottom + 5 <= Rosie.box.top ? this.go.down = 1 : this.go.down = 0;
        }
    }

    setBox() {
        this.box.top = this.pos.y + this.crop.top;
        this.box.bottom = this.pos.y + this.height - this.crop.bottom;
        this.box.left = this.pos.x + this.crop.left;
        this.box.right = this.pos.x + this.width - this.crop.right;
    }

    drop(Drop, level) {
        let x = Drop[0] * TILESET.width;
        let y = Drop[1] * TILESET.height - this.height + this.crop.top;
        this.pos = new Vec(x, y);
        this.setBox();
        this.draw();
        this.level = 1;
        for (let i = 1; i < level; i++) {
            this.levelup();
        }
    }

    draw() {
        this.context.drawImage(
            this.image,
            this.tileX,
            this.tileY,
            this.width,
            this.height,
            this.pos.x,
            this.pos.y,
            this.width,
            this.height)
    }

    update() {
        this.follow();
        this.draw();
        KeyState(this);
    }
}

export class DefineObject {
    constructor(context, image, Obj) {
        this.context = context;
        this.image = image;
        this.image.src = Obj.src;
        this.name = Obj.name;
        this.crop = new Crop(Obj.crop);
        this.go = new Go();
        this.box = new Box();

        this.width = Obj.define[0];
        this.height = Obj.define[1];
        this.tileX = Obj.define[2];
        this.tileY = Obj.define[3];
    }

    setBox() {
        this.box.top = this.pos.y + this.crop.top;
        this.box.bottom = this.pos.y + this.height - this.crop.bottom;
        this.box.left = this.pos.x + this.crop.left;
        this.box.right = this.pos.x + this.width - this.crop.right;
    }

    draw() {
        this.context.drawImage(
            this.image,
            this.tileX,
            this.tileY,
            this.width,
            this.height,
            this.pos.x,
            this.pos.y,
            this.width,
            this.height)
    }

    drop(Drop, level) {
        let x = Drop[0] * TILESET.width;
        let y = Drop[1] * TILESET.height - this.height + this.crop.top;
        this.pos = new Vec(x, y);
        this.setBox();
        this.draw();
    }

    update() {
        this.draw();
    }
}

// export const DefineOrcs = () => {
//     this.Define = function (image, width, height, tileX, tileY, drawX, drawY) {
//         this.image = image;
//         this.width = width;
//         this.height = height;
//         this.tileX = width * tileX;
//         this.tileY = width * tileY;

//         this.drawX = drawX;
//         this.drawY = drawY;
//         if (!drawX) { this.drawX = this.width; }
//         if (!drawY) { this.drawY = this.height; }

//         this.offsetX = this.width - this.drawX;
//         this.offsetY = this.width - this.drawY;
//     }

//     this.pos = {
//         "x": 0,
//         "y": 0
//     }

//     this.go = {
//         "up": 0,
//         "down": 0,
//         "left": 0,
//         "right": 0,
//         "ing": 0
//     }

//     this.Frames = {
//         "goNorth": [
//             {
//                 "name": "goNorth-0",
//                 "rect": [0, 1]
//             },
//             {
//                 "name": "goNorth-1",
//                 "rect": [1, 1]
//             },
//             {
//                 "name": "goNorth-2",
//                 "rect": [0, 1]
//             },
//             {
//                 "name": "goNorth-3",
//                 "rect": [2, 1]
//             }
//         ],
//         "goSouth": [
//             {
//                 "name": "goSouth-0",
//                 "rect": [0, 0]
//             },
//             {
//                 "name": "goSouth-1",
//                 "rect": [1, 0]
//             },
//             {
//                 "name": "goSouth-2",
//                 "rect": [0, 0]
//             },
//             {
//                 "name": "goSouth-3",
//                 "rect": [2, 0]
//             }
//         ],
//         "goWest": [
//             {
//                 "name": "goWest-0",
//                 "rect": [0, 2]
//             },
//             {
//                 "name": "goWest-1",
//                 "rect": [1, 2]
//             },
//             {
//                 "name": "goWest-2",
//                 "rect": [0, 2]
//             },
//             {
//                 "name": "goWest-3",
//                 "rect": [2, 2]
//             }
//         ],
//         "goEast": [
//             {
//                 "name": "goEast-0",
//                 "rect": [0, 3]
//             },
//             {
//                 "name": "goEast-1",
//                 "rect": [1, 3]
//             },
//             {
//                 "name": "goEast-2",
//                 "rect": [0, 3]
//             },
//             {
//                 "name": "goEast-3",
//                 "rect": [2, 3]
//             }
//         ]
//     }

//     this.AnimateWalk = function (moving) {
//         if (this.dir === 'up') {
//             let frmX = this.Frames.goNorth[moving].rect[0];
//             let frmY = this.Frames.goNorth[moving].rect[1];
//             this.tileX = this.drawX * frmX;
//             this.tileY = this.drawY * frmY;
//         }
//         if (this.dir === 'down') {
//             let frmX = this.Frames.goSouth[moving].rect[0];
//             let frmY = this.Frames.goSouth[moving].rect[1];
//             this.tileX = this.drawX * frmX;
//             this.tileY = this.drawY * frmY;
//         }
//         if (this.dir === 'left') {
//             let frmX = this.Frames.goWest[moving].rect[0];
//             let frmY = this.Frames.goWest[moving].rect[1];
//             this.tileX = this.drawX * frmX;
//             this.tileY = this.drawY * frmY;
//         }
//         if (this.dir === 'right') {
//             let frmX = this.Frames.goEast[moving].rect[0];
//             let frmY = this.Frames.goEast[moving].rect[1];
//             this.tileX = this.drawX * frmX;
//             this.tileY = this.drawY * frmY;
//         }
//     }

//     this.Status = function (str, con, dex, int, wis, cha) {
//         this.str = str;
//         this.con = con;
//         this.dex = dex;
//         this.int = int;
//         this.wis = wis;
//         this.cha = cha;

//         this.health = rollDice(1, 6, Math.ceil(con / 2));
//         this.maxHealth = this.health;
//         this.mana = rollDice(1, 6, Math.ceil(wis / 2));
//         this.maxMana = this.mana;
//     }

//     this.drawCharacter = function (x, y) {
//         this.pos.x = x * TILESET.width;
//         this.pos.y = y * TILESET.height;
//         this.draw();
//     }

//     this.draw = function () {
//         context.drawImage(
//             this.image,
//             this.tileX,
//             this.tileY,
//             this.drawX,
//             this.drawY,
//             this.pos.x + this.offsetX,
//             this.pos.y + this.offsetY,
//             this.drawX,
//             this.drawY)
//     }

//     let collisionGroup = [TILES, OBJECTS];
//     this.checkCollision = function () {
//         for (let k = 0; k < collisionGroup; k++) {
//             for (let i = 0; i < collisionGroup[k].length; i++) {
//                 if (collisionGroup[k][i].layer === "wall") {
//                     if (
//                         this.pos.x + this.width > collisionGroup[k][i].startX * collisionGroup[k][i].width && // 주인공의 오른쪽면 충돌
//                         this.pos.x < (collisionGroup[k][i].startX + collisionGroup[k][i].timesX) * collisionGroup[k][i].width && // 주인공의 왼쪽면 충돌
//                         this.pos.y + this.height > (collisionGroup[k][i].startY - 1) * collisionGroup[k][i].height + this.height && // 주인공의 아래쪽면 충돌
//                         this.pos.y < (collisionGroup[k][i].startY + collisionGroup[k][i].timesY - 1) * collisionGroup[k][i].height + this.height // 주인공의 위쪽면 충돌
//                     ) {
//                         return collisionGroup[k][i];
//                     } else {
//                         continue;
//                     }
//                 }
//             }
//         }
//         return false;
//     }

//     this.update = function () {
//         this.draw();
//     }
// }

export class DefineTile {
    constructor(context, contextl2, image, name, layer, width, height) {
        this.context = context;
        this.contextl2 = contextl2;
        this.image = image;
        this.name = name;
        this.layer = layer;
        this.width = width;
        this.height = height;

        this.pos = {
            "x": 0,
            "y": 0
        }

        this.box = {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0
        }

        this.crop = {
            "left": 0,
            "right": 0,
        }
    }

    cropSet(left, right) {
        this.crop.left = left;
        this.crop.right = right;
    }

    boxSet() {
        this.box.top = this.startY * this.height;
        this.box.bottom = this.pos.y + this.height;
        this.box.left = this.startX * this.width + this.crop.left;
        this.box.right = this.pos.x + this.width - this.crop.right;
    }

    define(tileX, tileY) {
        this.tileX = this.width * tileX;
        this.tileY = this.width * tileY;
    }

    drawTiles(startX, startY, timesX, timesY) {
        this.startX = startX;
        this.startY = startY;
        this.timesX = timesX;
        this.timesY = timesY;
        for (let x = startX; x < timesX + startX; x++) {
            for (let y = startY; y < timesY + startY; y++) {
                this.draw(x, y);
            }
        }
    }

    draw(x, y) {
        let buffer;
        if (this.layer === 'over') {
            buffer = this.contextl2;
        } else {
            buffer = this.context;
        }
        this.pos.x = x * this.width;
        this.pos.y = y * this.height;
        buffer.drawImage(
            this.image,
            this.tileX,
            this.tileY,
            this.width,
            this.height,
            this.pos.x,
            this.pos.y,
            this.width,
            this.height
        )
    }

    update() {
        this.boxSet();
        this.drawTiles(this.startX, this.startY, this.timesX, this.timesY);
    }
}