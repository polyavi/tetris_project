/* globals window document console */
"use strict";

window.onload = function() {
    var game = createGame("#field-canvas", "#block-canvas", "#next-canvas");
    game.start();
    document.getElementById('startSound').play();
    document.getElementById('coolTetrisVoice').play();
    //document.getElementById('originalTheme').play();
    // prevents page scrolling when usin arrow keys
    window.addEventListener("keydown", function(e) {
        // space and arrow keys
        if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);
};

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
        "color": "rgb(89, 204, 9)",
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
        "color": "rgb(58, 116, 204)",
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
        "color": "rgb(196, 44, 227)",
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
        "color": "rgb(244, 81, 21)",
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
        "color": "rgb(255, 247, 54)",
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
        "color": "rgb(22, 191, 135)",
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
        "color": "rgb(252, 42, 121)",
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
        "color": "rgb(34, 235, 144)",
        "state": 0
    }, { //blinking block
        "shapes": [
            [
                [1]
            ],
            [
                [1]
            ],
            [
                [1]
            ],
            [
                [1]
            ]
        ],
        "color": "rgb(6, 166, 176)",
        "blinkColor": "rgb(107, 229, 246)",
        "state": 0
    }];

function createGame(fieldSelector, blockSelector, tetrisNextSelector) {

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

    var fieldCanvas = document.querySelector(fieldSelector),
        blockCanvas = document.querySelector(blockSelector),
        tetrisNextCanvas = document.querySelector(tetrisNextSelector),
        ctxBlocks = blockCanvas.getContext("2d"),
        ctxField = fieldCanvas.getContext("2d"),
        ctxTetrisNext = tetrisNextCanvas.getContext("2d"),
        gotToBottom = false,
        nextBlock = getRandomBlock(),
        tetrisBlock = getRandomBlock(),
        currentFieldPosition = {
            "left": enterFieldLeft,
            "top": enterFieldTop
        },
        speed,
        gameField = startGameField,
        counterPoints = 0,
        lines = 0,
        level = 1,
        isPushedStart = false,
        isMuted = false,
        isBlink = false,
        interval;

    function drawGameFieldBlocks(field, ctx) {
        //console.log("drawing field");
        for (var i = 0; i < field.shape.length; i += 1) {
            for (var j = 0; j < field.shape[0].length; j += 1) {
                if (field.shape[i][j] === 1) {
                    drawSingleBlock({
                        "left": j,
                        "top": i,
                        "size": buildBlockSize,
                        "color": field.color,
                        "lineColor": "rgb(255, 255, 255)"
                    }, ctx);
                } else {
                    drawSingleBlock({
                        "left": j,
                        "top": i,
                        "size": buildBlockSize,
                        "color": "rgba(0, 0, 0, 0)",
                        "lineColor": "rgba(0, 0, 0, 0)"
                    }, ctx);
                }
            }
        }
    }

    function drawSingleBlock(block, ctx) {
        ctx.fillStyle = block.color;
        ctx.strokeStyle = block.lineColor;
        ctx.lineWidth = blockLineWidth;
        ctx.beginPath();
        ctx.fillRect(block.left * block.size, block.top * block.size, block.size, block.size);
        ctx.strokeRect(block.left * block.size, block.top * block.size, block.size, block.size);
    }

    function drawTetrisBlock(pattern, position, ctx) {
        var shape = pattern.shapes[pattern.state],
            vLen = shape.length,
            hLen,
            v,
            h;

        for (v = 0; v < vLen; v += 1) {
            hLen = shape[v].length;
            for (h = 0; h < hLen; h += 1) {
                if (shape[v][h] === 1) {
                    if(!pattern.blinkColor)
                    {
                        drawSingleBlock({
                        "left": position.left + h,
                        "top": position.top + v,
                        "size": buildBlockSize,
                        "color": pattern.color,
                        "lineColor": "rgb(255, 255, 255)"
                    }, ctx);
                } else {
                    if(!isBlink){
                        drawSingleBlock({
                        "left": position.left + h,
                        "top": position.top + v,
                        "size": buildBlockSize,
                        "color": pattern.color,
                        "lineColor": "rgb(255, 255, 255)"
                    }, ctx);
                    isBlink = true;
                } else{
                    drawSingleBlock({
                    "left": position.left + h,
                    "top": position.top + v,
                    "size": buildBlockSize,
                    "color": pattern.blinkColor,
                    "lineColor": "rgb(255, 255, 255)"
                }, ctx);
                isBlink = false;
                }
                }
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

                //Check for game over (could also take it out in a separate function)
                if (currentFieldPosition.top === 1 &&
                    gameField.shape[currentFieldPosition.top + v][currentFieldPosition.left + h] === 1) {

                    if (confirm("Game Over!! Press OK to restart the game!")) {
                        alert("Thanks for that!");
                    } else {
                        alert("Why did you press cancel? You should have confirmed cause the game will restart anyways :) !");
                    }

                    refresh();
                }
                //End of game-over piece

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
                    ctxBlocks.clearRect(0, 0, blockCanvas.clientWidth, blockCanvas.clientHeight);
                    drawTetrisBlock(tetrisBlock, currentFieldPosition, ctxBlocks);
                    break;
                }
            case 39:
                { //right
                    document.getElementById('moveLeftRight').play();
                    currentFieldPosition.left += 1;
                    if (!isValidBlockPosition()) {
                        currentFieldPosition.left -= 1;
                    }
                    ctxBlocks.clearRect(0, 0, blockCanvas.clientWidth, blockCanvas.clientHeight);
                    drawTetrisBlock(tetrisBlock, currentFieldPosition, ctxBlocks);
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
                    ctxBlocks.clearRect(0, 0, blockCanvas.clientWidth, blockCanvas.clientHeight);
                    drawTetrisBlock(tetrisBlock, currentFieldPosition, ctxBlocks);
                    break;
                }
            case 40:
                { //down: interval - position block to bottom
                document.getElementById('hardDrop').play();
                moveBlockDown();
                break;
            }
            default:
                break;
        }
    }

    function moveBlockDown() {
        currentFieldPosition.top += 1;
        if (!isValidBlockPosition()) {
            currentFieldPosition.top -= 1;
            updateGameFieldWithBlock();
            ctxField.clearRect(0, 0, fieldCanvas.clientWidth, fieldCanvas.clientHeight);
            drawGameFieldBlocks(gameField, ctxField);

            gotToBottom = true;
        } else {
            ctxBlocks.clearRect(0, 0, blockCanvas.clientWidth, blockCanvas.clientHeight);
            drawTetrisBlock(tetrisBlock, currentFieldPosition, ctxBlocks);
        }
        //sound for down
        document.getElementById('fallDown').play();


    }

    function updateSpeed() {
        moveBlockDown();
        interval = setTimeout(updateSpeed, speed);
        //console.log(lines);
        //console.log(speed);
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

    function clearFullRows(ctx) {
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
                counterPoints += 1;
                lines += 1;
                level +=1;
                ctx.clearRect(0, 0, fieldCanvas.clientWidth, fieldCanvas.clientHeight);
                drawGameFieldBlocks(gameField, ctx);
            }

            countRow = 0;

            document.getElementById('result').innerHTML = counterPoints * 10;

            document.getElementById('level').innerHTML = level;
            
            //restarting when 250 points reached
            /*if(document.getElementById('result').innerHTML>=1000){

              if (confirm("You win!! You reached 250 points! Press OK to restart the game!")) {
                        alert("Thanks for that!");
              } else {
                        alert("Why did you press cancel? Press Ok next time :) :) !");
              }

             refresh();}*/
        }

    }

    function gameLoop() {
        speed = 500 - lines * 30;

        if (gotToBottom) {
            tetrisBlock = nextBlock;
            nextBlock = getRandomBlock();

            currentFieldPosition = {
                "left": enterFieldLeft,
                "top": enterFieldTop
            };
            gotToBottom = false;
        }

        var nextFieldPosition = {
            "left": 5,
            "top": 2
        };

        ctxTetrisNext.clearRect(0, 0, tetrisNextCanvas.clientWidth, tetrisNextCanvas.clientHeight);
        drawTetrisBlock(nextBlock, nextFieldPosition, ctxTetrisNext);

        clearFullRows(ctxField);
        window.requestAnimationFrame(gameLoop);
        //console.log(isPushedStart);
    }

    ctxField.canvas.width = fieldWidth * buildBlockSize;
    ctxField.canvas.height = fieldHeight * buildBlockSize;
    ctxBlocks.canvas.width = fieldWidth * buildBlockSize;
    ctxBlocks.canvas.height = fieldHeight * buildBlockSize;

    ctxBlocks.font = "30px monospace";
    ctxBlocks.fillStyle = "rgb(64, 118, 124)";
    ctxBlocks.strokeStyle = "rgb(64, 118, 124)";
    ctxBlocks.fillText("CLICK ",100,200);
    ctxBlocks.strokeText("CLICK ",100,200);
    ctxBlocks.fillText("'Start' BUTTON",30,250);
    ctxBlocks.strokeText("'Start' BUTTON",30,250);
    ctxBlocks.fillText("TO BEGIN GAME!",30,300);
    ctxBlocks.strokeText("TO BEGIN GAME!",30,300);
    document.body.addEventListener("keydown", respondToKeyDown);


    document.getElementById('start').addEventListener('click', function() {
        if (isPushedStart === false) {
            setTimeout(updateSpeed, speed);
            isPushedStart = true; //starting the game
            this.innerText = "Pause";
            drawGameFieldBlocks(gameField, ctxField);

            ctxBlocks.clearRect(0, 0, blockCanvas.clientWidth, blockCanvas.clientHeight);
            drawTetrisBlock(tetrisBlock, currentFieldPosition, ctxBlocks);
        } else {
            clearTimeout(interval);
            isPushedStart = false; // pausing the game
            this.innerText = "Start";
        }
    });

    //sounds mute
    var audio = document.getElementById('coolTetrisVoice');

    document.getElementById('muteSound').addEventListener('click', function() {
        var audios = document.querySelectorAll('audio');
        if (isMuted === false) {
            isMuted = true; //starting the game
            this.innerText = "Mute";
            [].forEach.call(audios, function(audio) { audio.muted = true;
            audio.pause();
        });
        } else {
            isMuted = false;
            this.innerText = "Unmute";
            [].forEach.call(audios, function(audio) { audio.muted = false;
        });
        }
    });
    return {
        "start": function() {
            gameLoop();

        }
    };
}

function refresh() {
    //refreshing the page function

    setTimeout(function() {
        location.reload()
    });
}
