/* globals window document console */
"use strict";

const blocks = [
    {
        "shapes": [[[1,1,1],
                    [0,1,0]],
                   [[0,1],
                    [1,1],
                    [0,1]],
                   [[0,1,0],
                    [1,1,1]],
                   [[1,0],
                    [1,1],
                    [1,0]]],
        "color": "red",
        "state": 0
    },
    {
        "shapes": [[[1,1],
                   [1,0]],
                  [[1,1],
                   [0,1]],
                  [[0,1],
                   [1,1]],
                  [[1,0],
                   [1,1]]],
        "color": "blue",
        "state": 0
    }
];

function createGame(tetrisSelector) {
   
   const buildBlockSize = 15,
         blockDirections = 4,
         step = buildBlockSize,
         blockLineWidth = 2,
         blockLineColor = "green",
         maxWidth = 20 * buildBlockSize,
         maxHeight = 40 * buildBlockSize,
         enterPosition = {
            "left": 10 * buildBlockSize,
            "top": 0
          };
          
    var tetrisCanvas = document.querySelector(tetrisSelector),
        ctxTetris = tetrisCanvas.getContext("2d"),
        gotToBottom = false,
        tetrisBlock = getRandomBlock(),
        currentPosition = enterPosition,
        delay = 2000;
        
    function drawSingleBlock(block) {
        ctxTetris.fillStyle = block.color;
        ctxTetris.strokeStyle = block.lineColor;
        ctxTetris.lineWidth = blockLineWidth;
        ctxTetris.beginPath();
        ctxTetris.fillRect(block.left, block.top, block.size, block.size);
        ctxTetris.strokeRect(block.left, block.top, block.size, block.size);
    }
    
    function drawTetrisBlock(pattern, position) {
        var shape = pattern.shapes[pattern.state],
            vLen = shape.length,
            hLen,
            v,
            h,
            len;
            
        for (v = 0; v < vLen; v+=1) {
            hLen = shape[v].length;
            for (h = 0; h < hLen; h+=1) {
                if (shape[v][h] === 1) {
                    drawSingleBlock({
                    "left": position.left + h * buildBlockSize,
                    "top": position.top + v * buildBlockSize,
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
    
    function respondToKeyDown(ev) {
        console.log(ev.keyCode);
        switch (ev.keyCode) {
            case 37: {//left
                if (currentPosition.left > 0) {
                    currentPosition.left -= step;
                }
                break;
            }
            case 39:{//right
                var maxLeftPosition = maxWidth - tetrisBlock.shapes[tetrisBlock.state][0].length * buildBlockSize;
                if (currentPosition.left < maxLeftPosition) {
                    currentPosition.left += step;
                } 
                break;
            }
            case 38://up: rotate clockwise
                tetrisBlock.state = (tetrisBlock.state + 1) % blockDirections;
                break;
            case 40://down: rotate counter-clockwise
                tetrisBlock.state === 0 ? tetrisBlock.state = blockDirections - 1 : 
                                          tetrisBlock.state -= 1;
                break;
            case 32://interval - position block to bottom
                //TO DO: POSITION BLOCK TO BOTTOM
                break;
            default:
                break;
        }
    }
    
    function moveBlockDown() {
        currentPosition.top += step;
    }
    
    function gameLoop() {
        if (gotToBottom) {
            ctxTetris.clearRect(0,0, tetrisCanvas.clientWidth, tetrisCanvas.clientHeight);
            tetrisBlock = getRandomBlock();
            currentPosition = enterPosition;
            gotToBottom = false;
        } else {
            //clear only BLOCK - TO DO!!!!
            ctxTetris.clearRect(0,0, tetrisCanvas.clientWidth, tetrisCanvas.clientHeight);
        }
        
        drawTetrisBlock(tetrisBlock, currentPosition);
        
        window.requestAnimationFrame(gameLoop);
    }
    
    ctxTetris.canvas.width = maxWidth;
    ctxTetris.canvas.height = maxHeight;    
    document.body.addEventListener("keydown", respondToKeyDown);
    setInterval(moveBlockDown, delay);
     
    return {
        "start": function() {
            gameLoop();
        }
    };
}