/* globals window document console */
"use strict";

const startGameField = {
    "shape": [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1]],
"color": "grey"
},
    blocks = [
        {
            "shapes": [[[1, 1, 1],
                [0, 1, 0]],
                [[0, 1],
                    [1, 1],
                    [0, 1]],
                [[0, 1, 0],
                    [1, 1, 1]],
                [[1, 0],
                    [1, 1],
                    [1, 0]]],
            "color": "red",
            "state": 0
        },
        {
            "shapes": [[[1, 1],
                [1, 0]],
                [[1, 1],
                    [0, 1]],
                [[0, 1],
                    [1, 1]],
                [[1, 0],
                    [1, 1]]],
            "color": "blue",
            "state": 0
        },
        { //cube
            "shapes": [[[1, 1],
                [1, 1]],
                [[1, 1],
                    [1, 1]],
                [[1, 1],
                    [1, 1]],
                [[1, 1],
                    [1, 1]]],
            "color": "purple",
            "state": 0
        },
        {//stretched cube #1 or s-shaped
            "shapes": [[[1, 0],
                [1, 1],
                [0, 1]],
                [[0, 1, 1],
                    [1, 1, 0]],
                [[1, 0],
                    [1, 1],
                    [0, 1]],
                [[0, 1, 1],
                    [1, 1, 0]]],
            "color": "#EA3B28",
            "state": 0
        },
        {//stretched cube #2 or s-shaped
            "shapes": [[[0, 1],
                [1, 1],
                [1, 0]],
                [[1, 1, 0],
                    [0, 1, 1]],
                [[0, 1],
                    [1, 1],
                    [1, 0]],
                [[1, 1, 0],
                    [0, 1, 1]]],
            "color": "#FEBA17",
            "state": 0
        },
        {//bulgarian Г-shaped #1
            "shapes": [[[1, 1],
                [1, 0],
                [1, 0]],
                [[1, 1, 1],
                    [0, 0, 1]],
                [[0, 1],
                    [0, 1],
                    [1, 1]],
                [[1, 0, 0],
                    [1, 1, 1]]],
            "color": "#2BFAAA",
            "state": 0
        },
        {//bulgarian Г-shaped inverted
            "shapes": [[[1, 1],
                [0, 1],
                [0, 1]],
                [[0, 0, 1],
                    [1, 1, 1]],
                [[1, 0],
                    [1, 0],
                    [1, 1]],
                [[1, 1, 1],
                    [1, 0, 0]]],
            "color": "#0B3D84",
            "state": 0
        },
        {//I-shaped
            "shapes": [[[1],
                [1],
                [1],
                [1]],
                [[1, 1, 1, 1]],
                [[1],
                    [1],
                    [1],
                    [1]],
                [[1, 1, 1, 1]]],
            "color": "#57A8C7",
            "state": 0
        }

    ];

function createGame(tetrisSelector) {

    const buildBlockSize = 15,
        blockDirections = 4,
        step = buildBlockSize,
        blockLineWidth = 2,
        blockLineColor = "green",
        emptyFieldColor = "white",
        fieldWidth = startGameField.shape[0].length,
        fieldHeight = startGameField.shape.length,
        enterFieldLeft = 10,
        enterFieldTop = 0;

    var tetrisCanvas = document.querySelector(tetrisSelector),
        ctxTetris = tetrisCanvas.getContext("2d"),
        gotToBottom = false,
        tetrisBlock = getRandomBlock(),
        currentFieldPosition = {
            "left": enterFieldLeft,
            "top": enterFieldTop
        },
        speed = 1000,
        gameField = startGameField;

    function drawGameFieldBlocks(field) {
        for (var i = 0; i < field.shape.length; i += 1) {
            for (var j = 0; j < field.shape[0].length; j += 1) {
                if (field.shape[i][j] === 1) {
                    drawSingleBlock({
                        "left": j,
                        "top": i,
                        "size": buildBlockSize,
                        "color": field.color,
                        "lineColor": blockLineColor
                    });
                } else {
                    drawSingleBlock({
                        "left": j,
                        "top": i,
                        "size": buildBlockSize,
                        "color": emptyFieldColor,
                        "lineColor": blockLineColor
                    });
                }
            }
        }
    }

    function drawSingleBlock(block) {
        ctxTetris.fillStyle = block.color;
        ctxTetris.strokeStyle = block.lineColor;
        ctxTetris.lineWidth = blockLineWidth;
        ctxTetris.beginPath();
        ctxTetris.fillRect(block.left * block.size, block.top * block.size, block.size, block.size);
        ctxTetris.strokeRect(block.left * block.size, block.top * block.size, block.size, block.size);
    }

    function drawTetrisBlock(pattern, position) {
        var shape = pattern.shapes[pattern.state],
            vLen = shape.length,
            hLen,
            v,
            h;

        for (v = 0; v < vLen; v += 1) {
            hLen = shape[v].length;
            for (h = 0; h < hLen; h += 1) {
                if (shape[v][h] === 1) {
                    drawSingleBlock({
                        "left": position.left + h,
                        "top": position.top + v,
                        "size": buildBlockSize,
                        "color": pattern.color,
                        "lineColor": blockLineColor
                    });
                }
            }
        }
    }

    function getRandomBlock() {
        var randBlock = blocks[Math.floor(Math.random() * blocks.length)];
        randBlock.state = Math.floor(Math.random() * blockDirections);
        return randBlock;
    }

    function isValidBlockPosition() {
        var currShape = tetrisBlock.shapes[tetrisBlock.state],
            vLen = currShape.length,
            hLen,
            v,
            h;

        //Check for LEFT boundary
        if (currentFieldPosition.left < 0) {
            return false;
        }
        //Check for RIGHT boundary
        if (currentFieldPosition.left + currShape[0].length > fieldWidth) {
            return false;
        }
        //Check for BOTTOM boundary
        if (currentFieldPosition.top + currShape.length > fieldHeight) {
            return false;
        }

        //Check for COLLISION inside the field
        for (v = 0; v < vLen; v += 1) {
            hLen = currShape[v].length;
            for (h = 0; h < hLen; h += 1) {
                if (currShape[v][h] === 1 &&
                    gameField.shape[currentFieldPosition.top + v][currentFieldPosition.left + h] === 1) {
                    return false;
                }
            }
        }

        return true;
    }

    function respondToKeyDown(ev) {
        switch (ev.keyCode) {
            case 37: {//left
                //play sound
                document.getElementById('moveLeftRight').play();
                currentFieldPosition.left -= 1;
                if (!isValidBlockPosition()) {
                    currentFieldPosition.left += 1;
                }
                break;
            }
            case 39: {//right
                document.getElementById('moveLeftRight').play();
                currentFieldPosition.left += 1;
                if (!isValidBlockPosition()) {
                    currentFieldPosition.left -= 1;
                }
                break;
            }
            case 38: {//up: rotate clockwise
                var prevState = tetrisBlock.state;
                tetrisBlock.state = (tetrisBlock.state + 1) % blockDirections;
                if (!isValidBlockPosition()) {
                    tetrisBlock.state = prevState;
                }
                break;
            }
            case 40: {//down: rotate counter-clockwise
                var prevState = tetrisBlock.state;
                tetrisBlock.state === 0 ? tetrisBlock.state = blockDirections - 1 :
                    tetrisBlock.state -= 1;
                if (!isValidBlockPosition()) {
                    tetrisBlock.state = prevState;
                }
                break;
            }
            case 32://interval - position block to bottom
                //TO DO: POSITION BLOCK TO BOTTOM
                moveBlockDown();
                break;
            default:
                break;
        }
    }

    function moveBlockDown() {
        currentFieldPosition.top += 1;
        if (!isValidBlockPosition()) {
            currentFieldPosition.top -= 1;
            updateGameFieldWithBlock();
            gotToBottom = true;
        }
    }

    function updateGameFieldWithBlock() {
        var currShape = tetrisBlock.shapes[tetrisBlock.state],
            vLen = currShape.length,
            hLen,
            v,
            h;

        for (v = 0; v < vLen; v += 1) {
            hLen = currShape[v].length;
            for (h = 0; h < hLen; h += 1) {
                if (currShape[v][h] === 1) {
                    gameField.shape[currentFieldPosition.top + v][currentFieldPosition.left + h] = 1;
                }
            }
        }

    }

    function gameLoop() {

        if (gotToBottom) {
            tetrisBlock = getRandomBlock();
            currentFieldPosition = {
                "left": enterFieldLeft,
                "top": enterFieldTop
            };
            gotToBottom = false;
        };

        ctxTetris.clearRect(0, 0, tetrisCanvas.clientWidth, tetrisCanvas.clientHeight);
        drawGameFieldBlocks(gameField);
        drawTetrisBlock(tetrisBlock, currentFieldPosition);

        window.requestAnimationFrame(gameLoop);
    }

    ctxTetris.canvas.width = fieldWidth * buildBlockSize;
    ctxTetris.canvas.height = fieldHeight * buildBlockSize;
    document.body.addEventListener("keydown", respondToKeyDown);
    setInterval(moveBlockDown, speed);

    return {
        "start": function () {
            gameLoop();
        }
    };
}