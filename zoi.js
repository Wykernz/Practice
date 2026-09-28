let canvas = document.getElementById("heartCanvas");
let ctx = canvas.getContext("2d");
let centerText = document.getElementById("centerText");

canvas.width = 650;
canvas.height = 650;

let centerX = canvas.width / 2;
let centerY = canvas.height / 2;

let messages = [
    "I",
    "LOVE",
    "YOU",
    "AND",
     "I",
    "MISS",
    "YOU",
    "MORE",
    "EVERY",
    "SINGLE",
    "DAY",
    "Babiluvs",
    "Sweetheart",
    "Zoi",
    "Forever",
    "ALWAYS",
    "❤️"
];

let layers = [];

let totalLayers = 15;
let outerScale = 15;
let layerSpacing = 0.20;

for (let i = 0; i < totalLayers; i++) {
    layers.push({
        scale: outerScale - i * layerSpacing,
        offset: i * 0.45,
        speed: 0.005 + i * 0.00010
    });
}

function getHeartPoint(t, scale) {
    let x = 16 * Math.pow(Math.sin(t), 3);

    let y = -(
        13 * Math.cos(t)
        - 5 * Math.cos(2 * t)
        - 2 * Math.cos(3 * t)
        - Math.cos(4 * t)
    );

    return {
        x: centerX + x * scale,
        y: centerY + y * scale
    };
}

function drawLayer(layer, index) {
    layer.offset += layer.speed;

    let text =
        "I LOVE YOU  ZOI • ";

    let letters = text.length;

    ctx.font = "bold 12px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillStyle = `hsl(350, 90%, ${60 + index * 1.5}%)`;

    for (let i = 0; i < letters; i++) {

        let t = (i / letters) * Math.PI * 2;

        t += layer.offset;

        let point = getHeartPoint(
            t,
            layer.scale
        );

        let nextPoint = getHeartPoint(
            t + 0.015,
            layer.scale
        );

        let angle = Math.atan2(
            nextPoint.y - point.y,
            nextPoint.x - point.x
        );

        ctx.save();

        ctx.translate(
            point.x,
            point.y
        );

        ctx.rotate(angle);

        ctx.fillText(
            text[i],
            0,
            0
        );

        ctx.restore();
    }
}

function drawHeart() {
    layers.forEach((layer, index) => {
        drawLayer(layer, index);
    });
}

function animate() {
    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    drawHeart();

    requestAnimationFrame(animate);
}

let currentMessage = 0;

function changeMessage() {
    centerText.style.opacity = 0;

    setTimeout(() => {

        centerText.textContent =
            messages[currentMessage];

        centerText.style.opacity = 1;

        currentMessage++;

        if (currentMessage >= messages.length) {
            currentMessage = 0;
        }

    }, 300);
}

centerText.textContent = messages[0];

setInterval(changeMessage, 1800);

animate();