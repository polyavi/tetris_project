/* globals window document console */
"use strict";

const startGameField = {
        "shape": [
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
            [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1]
        ],
        "color": "rgb(56, 92, 122)"
    },
    blocks = [{
        "shapes": [
            [
                [1, 1, 1],
                [0, 1, 0]
            ],
            [
                [0, 1],
                [1, 1],
                [0, 1]
            ],
            [
                [0, 1, 0],
                [1, 1, 1]
            ],
            [
                [1, 0],
                [1, 1],
                [1, 0]
            ]
        ],
        "color": "rgb(187, 35, 67)",
        "state": 0
    }, {
        "shapes": [
            [
                [1, 1],
                [1, 0]
            ],
            [
                [1, 1],
                [0, 1]
            ],
            [
                [0, 1],
                [1, 1]
            ],
            [
                [1, 0],
                [1, 1]
            ]
        ],
        "color": "rgb(73, 90, 184)",
        "state": 0
    }, { //cube
        "shapes": [
            [
                [1, 1],
                [1, 1]
            ],
            [
                [1, 1],
                [1, 1]
            ],
            [
                [1, 1],
                [1, 1]
            ],
            [
                [1, 1],
                [1, 1]
            ]
        ],
        "color": "rgb(153, 28, 140)",
        "state": 0
    }, { //stretched cube #1 or s-shaped
        "shapes": [
            [
                [1, 0],
                [1, 1],
                [0, 1]
            ],
            [
                [0, 1, 1],
                [1, 1, 0]
            ],
            [
                [1, 0],
                [1, 1],
                [0, 1]
            ],
            [
                [0, 1, 1],
                [1, 1, 0]
            ]
        ],
        "color": "rgb(215, 122, 24)",
        "state": 0
    }, { //stretched cube #2 or s-shaped
        "shapes": [
            [
                [0, 1],
                [1, 1],
                [1, 0]
            ],
            [
                [1, 1, 0],
                [0, 1, 1]
            ],
            [
                [0, 1],
                [1, 1],
                [1, 0]
            ],
            [
                [1, 1, 0],
                [0, 1, 1]
            ]
        ],
        "color": "rgb(222, 231, 61)",
        "state": 0
    }, { //bulgarian Г-shaped #1
        "shapes": [
            [
                [1, 1],
                [1, 0],
                [1, 0]
            ],
            [
                [1, 1, 1],
                [0, 0, 1]
            ],
            [
                [0, 1],
                [0, 1],
                [1, 1]
            ],
            [
                [1, 0, 0],
                [1, 1, 1]
            ]
        ],
        "color": "rgb(20, 232, 124)",
        "state": 0
    }, { //bulgarian Г-shaped inverted
        "shapes": [
            [
                [1, 1],
                [0, 1],
                [0, 1]
            ],
            [
                [0, 0, 1],
                [1, 1, 1]
            ],
            [
                [1, 0],
                [1, 0],
                [1, 1]
            ],
            [
                [1, 1, 1],
                [1, 0, 0]
            ]
        ],
        "color": "rgb(204, 60, 134)",
        "state": 0
    }, { //I-shaped
        "shapes": [
            [
                [1],
                [1],
                [1],
                [1]
            ],
            [
                [1, 1, 1, 1]
            ],
            [
                [1],
                [1],
                [1],
                [1]
            ],
            [
                [1, 1, 1, 1]
            ]
        ],
        "color": "rgb(91, 187, 228)",
        "state": 0
    }];

function createGame(tetrisSelector) {

    const buildBlockSize = 15,
        blockDirections = 4,
        step = buildBlockSize,
        blockLineWidth = 2,
        //blockLineColor = "green",
        //emptyFieldColor = "white",
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
                        "lineColor": "rgb(26, 29, 50)"
                    });
                } else {
                    drawSingleBlock({
                        "left": j,
                        "top": i,
                        "size": buildBlockSize,
                        "color":"rgba(0, 0, 0, 0)",
                        "lineColor": "rgba(0, 0, 0, 0)"
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
                        "lineColor": "rgb(255, 255, 255)"
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
            case 37:
                { //left
                    //play sound
                    document.getElementById('moveLeftRight').play();
                    currentFieldPosition.left -= 1;
                    if (!isValidBlockPosition()) {
                        currentFieldPosition.left += 1;
                    }
                    break;
                }
            case 39:
                { //right
                    document.getElementById('moveLeftRight').play();
                    currentFieldPosition.left += 1;
                    if (!isValidBlockPosition()) {
                        currentFieldPosition.left -= 1;
                    }
                    break;
                }
            case 38:
                { //up: rotate clockwise
                    document.getElementById('rotateLeftRight').play();

                    var prevState = tetrisBlock.state;
                    tetrisBlock.state = (tetrisBlock.state + 1) % blockDirections;
                    if (!isValidBlockPosition()) {
                        tetrisBlock.state = prevState;
                    }
                    break;
                }
            case 40:
                { //down: rotate counter-clockwise
                    document.getElementById('rotateLeftRight').play();

                    var prevState = tetrisBlock.state;
                    tetrisBlock.state === 0 ? tetrisBlock.state = blockDirections - 1 : tetrisBlock.state -= 1;
                    if (!isValidBlockPosition()) {
                        tetrisBlock.state = prevState;
                    }
                    break;
                }
            case 32: //interval - position block to bottom
                //TO DO: POSITION BLOCK TO BOTTOM
                document.getElementById('hardDrop').play();

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
        //sound for down
        document.getElementById('fallDown').play();
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

    function clearFullRows() {

        var vLen = startGameField.shape[0].length, //length of rows = 20
            hLen = startGameField.shape.length, // length of cols = 40
            countRow = 0,
            h,
            v,
            zeroArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (h = 0; h < hLen; h += 1) {



            for (v = 0; v < vLen; v += 1) {
                countRow += startGameField.shape[h][v];
            }
            if (countRow === 20) // check if all are 1
            {
                startGameField.shape.splice(h, 1); // remove row
                startGameField.shape.unshift(zeroArray); // add zeroArray at front
            }
            countRow = 0;
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
        clearFullRows();
        window.requestAnimationFrame(gameLoop);
    }

    ctxTetris.canvas.width = fieldWidth * buildBlockSize;
    ctxTetris.canvas.height = fieldHeight * buildBlockSize;
    document.body.addEventListener("keydown", respondToKeyDown);
    setInterval(moveBlockDown, speed);


    //sounds mute
    var audio = document.getElementById('originalTheme');

    document.getElementById('muteSound').addEventListener('click', function(e) {
        e = e || window.event;
        audio.muted = !audio.muted;
        e.preventDefault();
    }, false);

    return {
        "start": function() {
            gameLoop();

        }
    };
}
