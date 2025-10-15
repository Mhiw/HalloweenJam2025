// Settings (If needed):

const TILE_SIZE = 16; 
const SCALE = 2;
const WIDTH = 640;
const HEIGHT = 360;


// Asset Imports:

let playerImg;
let bulletImg;
let gunImg;
let cursorImg;

// Tiles:

// Sounds:
let shootSound;
let bounceSound;
let hitSound;

let tileImgs = {};

function preloadAssets(){
    // Images:

    playerImg = loadImage("assets/player/Player.png");
    bulletImg = loadImage("assets/player/Bullet.png");
    gunImg = loadImage("assets/player/Gun.png");
    cursorImg = loadImage("assets/Cursor.png");

    // Tiles:

    tileImgs = {
        0 : loadImage("assets/tilemap_one/tile9.png"),
        1 : loadImage("assets/tilemap_one/tile2.png"),
        2 : loadImage("assets/tilemap_one/tile16.png"),
        3 : loadImage("assets/tilemap_one/tile8.png"),
        4 : loadImage("assets/tilemap_one/tile10.png")
    };

    // Audio:

    shootSound = loadSound("assets/sounds/shoot.wav");
    bounceSound = loadSound("assets/sounds/bounce.wav");
    hitSound = loadSound("assets/sounds/hit.wav");
}