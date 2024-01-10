<?php

  include 'config/configdb.php';

?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../img/bezouro.png" type="image/x-icon">
    <link rel="stylesheet" href="../css/home.css">
    <!-- <link rel="stylesheet" href="../css/glitch.css"> -->
    <title> NexOS </title>
</head>
<body>
    <header>
      <pre id="canvas" style="color: #fff; white-space: pre;"></pre>
    </header>
<!-- Teste de Menu________________________________________________________________________________________________________________________________________ -->
    <div class="taskbar">
        <div class="menu-icon">
            <div class="icons-left">
                <a href="" id="menu-logo"><img src="../img/bezouro.png"></a>
                <a href="" id="search"></a>
                <a href="" id="tabs-windows"></a>
                <a href="" class="px"></a>
                <a href="" id="folder" class="border"></a>
                <a href="" id="chrome" class="border"></a>
            </div>
            <div class="icons-right">
                <a href="" id="up" class="small-icons"><i class="fas fa-chevron-up"></i></a>
                <a href="" id="sound" class="small-icons"></a>
                <a href="" id="wifi" class="small-icons"></a>
                <div class="datetime">
                    <span class="hour">17:44</span>
                    <span class="date">25/11/2022</span>
                </div>
                <a href="" id="notifications"><i class="far fa-bell"></i></a>
                <a href="" class="clear disabled"></a>
                <a href="" id="return"></a>
            </div>
        </div>
    </div>

    <main>
        <div class="icon blocoi" id="wordpadIcon">
        </div>
        
        <div class="icon terminali" id="consoleIcon">
        </div>
        
        <div class="icon calci" id="calcIcon">
        </div>
          
        <div class="icon missi" id="missionIcon">
        </div>
        
        <div class="icon boti" id="chatIcon">
        </div>
        <!-- Bloco de Notas________________________________________________________________________________________________________________________________________ --> 
          <div class="app movableDiv wordi" id="wordpadApp">
            <div class="headerApp">
              <input type="button" class="headerActionBtn minimizeApp">
              <input type="button" class="headerActionBtn expandApp">
              <input type="button" class="headerActionBtn exitApp">
            </div>
            <div class="bodyApp">
              <textarea name="inputWordpad" id="wordpadText" cols="30" rows="10"></textarea>
            </div>
          </div>
        <!-- Terminal________________________________________________________________________________________________________________________________________ --> 
          <div class="app movableDiv" id="consoleApp">
            <div class="headerApp">
              <input type="button" class="headerActionBtn minimizeApp">
              <input type="button" class="headerActionBtn expandApp">
              <input type="button" class="headerActionBtn exitApp">
            </div>
            <div class="bodyApp">
              <textarea name="outputConsole" id="outputConsole" disabled></textarea>
              <input type="text" id="inputConsole">
            </div>
          </div>
          <div class="app movableDiv calculatorApp" id="calculatorApp">
            <div class="headerApp">
              <input type="button" class="headerActionBtn minimizeApp">
              <input type="button" class="headerActionBtn expandApp">
              <input type="button" class="headerActionBtn exitApp">
            </div>
            <div class="bodyApp">
              <table class="calc_body">
                <tr>
                  <div id="lblResult" class="lblResult"> </div>
                </tr>  
                <tr>
                            <td><button class="calcKey btnOp1" id="clearAll"> CE</button></td>
                            <td><button class="calcKey btnOp2" id="vazio"> </button></td>
                            <td><button class="calcKey btnOp3" id="delete">del</button></td>
                            <td><button class="calcKey btnOp4" id="divisao">/</button></td>
                          </tr>
                          <tr>
                            <td><button class="calcKey btnCalc1" id="num7">7</button></td>
                            <td><button class="calcKey btnCalc2" id="num8">8</button></td>
                            <td><button class="calcKey btnCalc3" id="num9">9</button></td>
                            <td><button class="calcKey btnOp5" id="multiplicacao">X</button></td>
                          </tr>
                          <tr>
                            <td><button class="calcKey btnCalc1" id="num4">4</button></td>
                            <td><button class="calcKey btnCalc2" id="num5">5</button></td>
                            <td><button class="calcKey btnCalc3" id="num6">6</button></td>
                            <td><button class="calcKey btnOp6" id="subtracao">-</button></td>
                          </tr>
                          <tr>
                            <td><button class="calcKey btnCalc1" id="num1">1</button></td>
                            <td><button class="calcKey btnCalc2" id="num2">2</button></td>
                            <td><button class="calcKey btnCalc3" id="num3">3</button></td>
                            <td><button class="calcKey btnOp7" id="adicao">+</button></td>
                          </tr>
                          <tr>
                            <td><button class="calcKey btnOp8" id="inverter">+/-</button></td>
                            <td><button class="calcKey btnCalc1" id="num0">0</button></td>
                            <td><button class="calcKey btnOp9" id="ponto">,</button></td>
                            <td><button class="calcKey btnOp10" id="resultado">=</button></td>
                          </tr>
                        </table>
            </div>
        </div>
        <!-- Missões________________________________________________________________________________________________________________________________________ --> 
        <div class="app movableDiv missao" id="missonApp">
          <div class="headerApp">
            <input type="button" value="" class="headerActionBtn minimizeApp">
            <input type="button" value="" class="headerActionBtn expandApp">
            <input type="button" value="" class="headerActionBtn exitApp">
          </div>
          <div class="bodyApp" id="bodyMissions">
          </div>
          </div>
          <div class="app movableDiv" id="chatApp">
            <div class="headerApp">
              <input type="button" class="headerActionBtn minimizeApp">
              <input type="button" class="headerActionBtn expandApp">
              <input type="button" class="headerActionBtn exitApp">
            </div>
            <div class="bodyApp">
              <div id="conversation">
              <div id="message">Welcome to the Dialog Tree!</div>
              <div id="options">
              <!-- Options will be added here dynamically using JavaScript -->
              </div>
              </div>
            </div>
          </div>
        </main>
    <footer>

    </footer>
    <script>
        // Function to load the JavaScript code after the document is ready
        document.addEventListener("DOMContentLoaded", function () {
            // Include the external JavaScript file
            const script = document.createElement("script");
            script.src = "../js/commands/dialogTree.js";
            document.body.appendChild(script);
        });
    </script>
    <?php

        include '../php/config/allScr.php';

    ?>
</body>
</html>