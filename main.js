canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 150;
car1_height = 90;
car1_x = 10;
car1_y = 10;
car2_width = 150;
car2_height = 90;
car2_x = 10;
car2_y = 100;
background_image = "racing.jpg";
car1_image = "car1.png";
car2_image = "car 2.jpg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == "37") {
        left();
    }

    if (keyPressed == "38") {
        up();
    }

    if (keyPressed == "39") {
        right();
    }

    if (keyPressed == "40") {
        down();
    }

    if (keyPressed == "65") {
        left1();
    }

    if (keyPressed == "87") {
        up1();
    }

    if (keyPressed == "68") {
        right1();
    }

    if (keyPressed == "83") {
        down1();
    }

}

function up() {
    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log(car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function down() {
    if (car1_y <= 500) {
        car1_y = car1_y + 10;
        console.log(car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function left() {
    if (car1_x >= 0) {
        car1_x = car1_x - 10;
        console.log(car1_x);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function right() {
    if (car1_y <= 700) {
        car1_x = car1_x + 10;
        console.log(car1_x);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function up1() {
    if (car2_y >= 0) {
        car2_y = car2_y - 10;
        console.log(car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}

function down1() {
    if (car2_y <= 500) {
        car2_y = car2_y + 10;
        console.log(car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}

function left1() {
    if (car2_x >= 0) {
        car2_x = car2_x - 10;
        console.log(car2_x);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}

function right1() {
    if (car2_y <= 700) {
        car2_x = car2_x + 10;
        console.log(car2_x);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}