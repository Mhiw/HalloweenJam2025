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
let enemyImg;
let shadowImg;

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
    enemyImg = loadImage("assets/enemies/Eye.png");
    shadowImg = loadImage("assets/shadow.png");

    // Tiles:

    tileImgs = {
        0 : loadImage("assets/tilemap_one/tile9.png"), // Ground
        1 : loadImage("assets/tilemap_one/tile2.png"), // Upper Wall
        2 : loadImage("assets/tilemap_one/tile16.png"), // Lower Wall
        3 : loadImage("assets/tilemap_one/tile8.png"), // Left Wall
        4 : loadImage("assets/tilemap_one/tile10.png"), // Right Wall
        5 : loadImage("assets/tilemap_one/tile1.png"), // TopLeft Corner
        6 : loadImage("assets/tilemap_one/tile3.png"), // TopRight Corner
        7 : loadImage("assets/tilemap_one/tile19.png"), // BottomLeft Corner
        8: loadImage("assets/tilemap_one/tile21.png") // BottomRight Corner 
    };

    // Audio:

    shootSound = loadSound("assets/sounds/shoot.wav");
    bounceSound = loadSound("assets/sounds/bounce.wav");
    hitSound = loadSound("assets/sounds/hit.wav");
}