import imageTileUrl from '../../../images/rpg-moving/landsprite.png';
import { heroes, enemies, objects, stage1, stage_home } from './rpg-moving-data';
import { DefineHuman, DefineObject, DefineTile } from './rpg-moving-define';

export let TILES = [];
export let ENTITIES = [];
export let OBJECTS = [];
export let HEROES = [];
export let ENEMIES = [];
export let Rosie;
export let Utarag;

export const TILESET = {
    'width': 16,
    'height': 16
}

const rpgMovingScript = () => {

    var canvasRpg = document.getElementById('rpgMovingScreen');
    var contextRpg = canvasRpg.getContext('2d');
    var canvasl2Rpg = document.getElementById('rpgMovingScreen2');
    var contextRpg2 = canvasl2Rpg.getContext('2d');

    function reset() {
        TILES = [];
        ENTITIES = [];
        OBJECTS = [];
        HEROES = [];
        ENEMIES = [];
        Rosie = null;
        Utarag = null;
    }

    // function showPosition() {
    //     var xTimes = 30;
    //     var yTimes = 30;
    //     for (var x = 0; x < xTimes; x++) {
    //         for (var y = 0; y < yTimes; y++) {
    //             contextRpg2.font = '8px Open sans';
    //             contextRpg2.fillStyle = "black";
    //             contextRpg2.fillText(x, TILESET.width * x, TILESET.height * y + 6);
    //             contextRpg2.fillStyle = "red";
    //             contextRpg2.fillText(' ' + y, TILESET.width * x, TILESET.height * y + 12);
    //         }
    //     }
    // }

    function drawTilesInit() {
        var imageTile = new Image();
        imageTile.addEventListener('load', function () {
            var idx = 0;
            for (var i = 0; i < stage_home.backgrounds.length; i++) {
                for (var j = 0; j < stage_home.backgrounds[i].tile.length; j++) {
                    TILES.push(
                        new DefineTile(contextRpg, contextRpg2, imageTile, stage_home.backgrounds[i].name, stage_home.backgrounds[i].layer, 16, 16)
                    );
                    var t = stage_home.backgrounds[i].tile[j];
                    TILES[idx].define(stage_home.backgrounds[i].define[0], stage_home.backgrounds[i].define[1]);
                    TILES[idx].drawTiles(t[0], t[1], t[2], t[3]);
                    if (stage_home.backgrounds[i].crop) {
                        TILES[idx].cropSet(stage_home.backgrounds[i].crop[0], stage_home.backgrounds[i].crop[1]);
                    }
                    idx++;
                }
            }
        })
        imageTile.src = imageTileUrl;
    }

    function setHeroes() {
        Rosie = HEROES[0];
        Utarag = HEROES[1];
    }

    function defineObjectsEach(i, image, array, ARRAY, stage) {
        for (var j = 0; j < stage.length; j++) {
            if (array[i].id === stage[j].id) {
                for (var k = 0; k < stage[j].drop.length; k++) {
                    if (array[i].race === "Human" || array[i].race === "Orc") {
                        ARRAY.push(new DefineHuman(contextRpg, image, array[i]));
                    } else {
                        ARRAY.push(new DefineObject(contextRpg, image, array[i]));
                    }
                    ARRAY[i + k].drop(stage[j].drop[k], stage[j].level);
                }
            }
        }
    }

    function defineObjects(array, ARRAY, stage) {
        var image = [];
        for (var i = 0; i < array.length; i++) {
            image.push(new Image());
            image[i].addEventListener('load', defineObjectsEach(i, image[i], array, ARRAY, stage));
        }
        ENTITIES = ENTITIES.concat(ARRAY);
        setHeroes();
    }

    function objectInit() {
        defineObjects(heroes, HEROES, stage1);
        defineObjects(enemies, ENEMIES, stage1);
        defineObjects(objects, OBJECTS, stage1);
    }

    // 키 이벤트 등록
    var keyControl = ['keydown', 'keyup'];

    function rosieKeyStates(event) {
        var key = event.keyCode;
        var isKeyDown = event.type;
        if (key === 38) {
            isKeyDown === 'keydown' ? Rosie.go.up = 1 : Rosie.go.up = 0;
        }
        if (key === 40) {
            isKeyDown === 'keydown' ? Rosie.go.down = 1 : Rosie.go.down = 0;
        }
        if (key === 37) {
            isKeyDown === 'keydown' ? Rosie.go.left = 1 : Rosie.go.left = 0;
        }
        if (key === 39) {
            isKeyDown === 'keydown' ? Rosie.go.right = 1 : Rosie.go.right = 0;
        }
        if (isKeyDown !== 'keydown') {
            Rosie.go.ing = 0;
            Rosie.AnimateWalk(0); // 키를 멈췄을때 캐릭터 멈춰있는 애니메이션
        }
    }

    for (var i = 0; i < keyControl.length; i++) {
        window.addEventListener(keyControl[i], rosieKeyStates );
    }

    let canvasFrames;
    function update() {
        canvasFrames = requestAnimationFrame(update);

        for (let i = 0; i < TILES.length; i++) {
            TILES[i].update();
        }
        for (let i = 0; i < ENTITIES.length; i++) {
            ENTITIES.sort(function (a, b) { return a.box.bottom - b.box.bottom; });
        }
        for (let i = 0; i < ENTITIES.length; i++) {
            ENTITIES[i].update();
        }

        if (window.location.pathname !== "/lab/rpg-moving") {
            cancelAnimationFrame(canvasFrames);
        }
    }

    // RUN
    if ( window.location.pathname === '/lab/rpg-moving' ) {
        reset();
        objectInit();
        drawTilesInit();
        update();
    }
}

export default rpgMovingScript;