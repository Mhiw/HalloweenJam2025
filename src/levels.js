
const level1 = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
];


let tileMap = level1;

function loadLevel(level) {
    tileMap = level;

    // collision stuff? Not sure haha
}

function drawTiles() {
    for (let y = 0; y < tileMap.length; y++) {
        for (let x = 0; x < tileMap[y].length; x++) {
            const tile = tileMap[y][x];
            const img = tileImgs[tile];

            if (img) {
                imageMode(CORNER);
                image(
                    img,
                    x * TILE_SIZE * SCALE,
                    y * TILE_SIZE * SCALE,
                    TILE_SIZE * SCALE,
                    TILE_SIZE * SCALE
                );
            }
        }
    }
}


