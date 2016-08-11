<!DOCTYPE html>
<html lang="en">

<head>
    <title>Tetris game</title>
    <meta charset="UTF-8">
    <link href="css/tetris_game.css" rel="stylesheet">
    <script src="js/tetris_game.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
   <!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>-->
</head>

<body>
    <div id="tetris-container">
        <!--<img src="images/logo.png" id="logo">-->
        <svg width ="100" height="65">
            <g style="overflow:hidden; text-anchor: right; font-size:inherit;font-family:Arial, Helvetica, sans-serif;font-weight:bold">
            <defs>
                <filter id="f1" x="0" y="0">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0.2" />
                </filter>
            </defs>
            <polygon points="5,25 30,60 55,25" style="fill:#c6d1d2;stroke:#eaebe7;stroke-width:0" />
            <line x1="24" y1="51" x2="32" y2="31" style="stroke:#48a39b;stroke-width:1.2" />
            <line x1="32" y1="31" x2="42" y2="21" style="stroke:#48a39b;stroke-width:1.2" />
            <path d="M 5 25 Q25 50 30 60" stroke="#eaebe7" fill="none" stroke-width="1.5px"/>
            <path d="M 55 25 Q35 50 30 60" stroke="#eaebe7" fill="#c7d1d2" stroke-width="1.5px"/>
            <ellipse cx="30" cy="25" rx="25" ry="6" style="fill:#adc7c5; stroke:#eaebe7;stroke-width:1" />
            <line x1="32" y1="31" x2="41" y2="8" style="stroke:#205e58;stroke-width:1.2;" />
            <ellipse cx="30" cy="25" rx="25" ry="6" style="fill:none; stroke:#eaebe7;stroke-width:1" />
            <line x1="32.5" y1="30" x2="41" y2="8" style="stroke:#205e58;stroke-width:1.2;" />
            <circle cx="30" cy="58" r="1.5" fill="#eaebe7" />
            <circle cx="30" cy="56" r="1" fill="#c5d1d2" />
            <line x1="30" y1="58" x2="30" y2="65" style="stroke:#eaebe7;stroke-width:1.5;" />
            <circle cx="37" cy="17" r="3.5" fill="#2f8b51" />
            <ellipse cx="38" cy="16" rx="1.5" ry="1" filter="url(#f1)" style="fill:#d2785e;stroke-width:1" />
            <text x="45" y="50" style="fill: #40767c">Dirty</text>
            <text x="34" y="65" style="fill: #40767c">Martini</text>
            </g>
        </svg>
        <h1>TETRIS GAME</h1>
        <button id="start">Start</button>
        <div id="main-container">
            <div id="game-over">
                <p>Game over.</p>
                <button type="button" id="btn_add">OK</button>
                <button type="button" id="restart">Restart the Game</button>
            </div>
            <canvas id="block-canvas"></canvas>
            <canvas id="field-canvas"></canvas>
            <div id="side-container">
                <button id="muteSound" href="#" style="display:block;">Mute</button>
                <h2>NEXT FIGURE</h2>
                <canvas id="next-canvas" width= "200px" height= "100px"></canvas>
                <h2>RESULT</h2>
                <div id="result">000</div>
                <h2>LEVEL</h2>
                <div id="level">1</div>
                <div class="container">
                  <div id="high-score">
                  <h3 align="">HighScore table</h3>
                  <div id="live_data"></div>
                  </div>
              </div>
        </div>
    </div>
  </div>
    <!--<audio id="originalTheme" src="sounds/TetrisLowerVolume.mp3"></audio>-->
    <audio id="startSound" src="sounds/SFX_GameStart.ogg"></audio>
    <audio id="moveLeftRight" src="sounds/SFX_PieceMoveLR.ogg"></audio>
    <audio id="rotateLeftRight" src="sounds/SFX_PieceRotateLR.ogg"></audio>
    <audio id="hardDrop" src="sounds/SFX_PieceHardDrop.ogg"></audio>
    <audio id="fallDown" src="sounds/SFX_PieceFall.ogg"></audio>
    <audio id="coolTetrisVoice" src="sounds/SFX_SpecialTetris.ogg"></audio>
    <audio id="levelUpSound" src="sounds/SFX_LevelUp.ogg"></audio>
</body>
</html>
<script>
    $(document).ready(function(){
        function fetch_data()
        {
            $.ajax({
                url:"select.php",
                method:"POST",
                success:function(data){
                    $('#live_data').html(data);
                }
            });
        }
        fetch_data();
        $(document).on('click', '#btn_add', function(){
            var name = $('#name').text();
            var score = $('#result').text();//$('#score').text();
            if(name == '')
            {
                name = prompt("Enter Name");

            }

            $.ajax({
                url:"insert.php",
                method:"POST",
                data:{name:name, score:score},
                dataType:"text",
                success:function(data)
                {
                    //alert(data);
                    fetch_data();
                }
            });
            $("#restart").css("display", "block");
            $("#btn_add").css("display", "none");

        });

    });
    document.getElementById('restart').addEventListener('click',function(){
        location.reload(true);
    });
</script>
