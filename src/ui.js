let elements = [];

function updateUIElements() {
    for(let i = 0; i < elements.length; i++) {
        if(mouseX > elements[i].x && mouseX < elements[i].x + elements[i].w && mouseY > elements[i].y && mouseY < elements[i].y + elements[i].h) {
            elements[i].onClick();
        }
    }
}

function drawUIElements() {
    for(let i = 0; i < elements.length; i++) {
        elements[i].draw();
    }
}

class UIElement {
    constructor(x, y, w, h, onClick) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.onClick = onClick;
    }

    draw() {
        rect(this.x, this.y, this.w, this.h);
    }
};

class Button extends UIElement {
    constructor(x, y, w, h, imgUp, imgDown, onClick) {
        super(x, y, w, h, onClick);
        this.imgUp = imgUp;
        this.imgDown = imgDown;
    }

    draw() {
        image(startBtnImg, this.x, this.y, this.w, this.h);
    }
}