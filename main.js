let player_1 = document.getElementById('player-name');
let player_2 = document.getElementById('player-name2');

let form_1 = document.getElementById('form');
let form_2 = document.getElementById('form2');

let player_1_module = document.getElementById('player-modal');
let player_2_module = document.getElementById('player2-modal');

let display_player_1 = document.getElementById('ply-name');
let display_player_2 = document.getElementById('ply-name2');

let strGameBtn = document.getElementById('start-new-btn');
let gameField = document.getElementById('game-field');

let gameFieldElements = document.querySelectorAll('.square');
let switch_player_name = document.getElementById('player-name-switch');

let winnerBanner = document.getElementById("winner-banner");
let winnerName = document.getElementById("winner-name");

let StartNewGameBtn = document.getElementById("start-new-btn");



document.addEventListener('DOMContentLoaded', function () {
  var activePlayer = 0;
  var currentRound = 1;

  var players = [
    {
      name: '',
      symbol: 'X'
    },
    {
      name: '',
      symbol: 'O'
    }
  ];

  const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
  ];


  form_1.addEventListener('submit', (e) => {
    e.preventDefault();
    if (player_1.value == "") {
      alert("Please enter your name");
      return;
    } if(player_2.value == player_1.value ){

      alert("Please enter different name from the other player");
      return;
    }else {
      player_1_module.style.display = "none";
      const modalBackdrops = document.querySelectorAll('.modal-backdrop');
      modalBackdrops.forEach(function (backdrop) {
        backdrop.remove();
      });
    }
    display_player_1.innerHTML = player_1.value;

    const data = new FormData(e.target);
    const name = data.get("name");
    players[0].name = name; 
  });

  form_2.addEventListener('submit', (e) => {
    e.preventDefault();
    if (player_2.value == "") {
      alert("Please enter your name");
      return;
    } if(player_1.value == player_2.value ){

      alert("Please enter different name from the other player");
      return;
    }else {
      player_2_module.style.display = "none";
      const modalBackdrops2 = document.querySelectorAll('.modal-backdrop');
      modalBackdrops2.forEach(function (backdrop) {
        backdrop.remove();
      });
    }

    display_player_2.innerHTML = player_2.value;

    const data = new FormData(e.target);
    const name = data.get("name");
    players[1].name = name; 
  });

  function switchPlayer() {
    if (activePlayer === 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }
    switch_player_name.innerHTML = players[activePlayer].name;
  }
  
  function ResetGame (){
    activePlayer = 0;
    currentRound = 1;
    winnerBanner.style.display = "none";
    document.getElementById("game-field").style.pointerEvents = "all";
    document.querySelectorAll('.square').forEach(function(square) {
      square.classList.remove("disabled");
    });

    let gameBoxIndex = 0;  
    for (let i = 0; i < 3; i++){
      for (let j = 0; j < 3; j++){
        gameData[i][j] = 0;
      }
      for( gameFieldElement of gameFieldElements){
        if(gameBoxIndex <gameFieldElements.length) {
          gameFieldElement.textContent = "";
          gameBoxIndex++;
        }
      }
    }

  };

  
  function StartNewGame() {
    if (players[0].name === "" || players[1].name === "") {
      alert('Please fill out the form');
      return;
    }
    ResetGame();
    switch_player_name.innerHTML = players[activePlayer].name;
    document.getElementById("turn-container").style.display = "block"
    gameField.style.display = "grid";

  }

 
  strGameBtn.addEventListener('click', StartNewGame);

  for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener('click', selectGameField);
  }

  function selectGameField(event) {
    event.target.textContent = players[activePlayer].symbol;
    event.target.classList.add('disabled');
    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col -1;
    const selectedRow = selectedField.dataset.row -1;
  
    gameData[selectedColumn][selectedRow] = activePlayer + 1;

    const testcheckWinning = checkWinng();

    currentRound++;
  
    switchPlayer();
    if(testcheckWinning !== 0){
      EndGame(testcheckWinning)
    }
  }
  
  function checkWinng (){
    for(let i=0; i<3; i++){
      if(
        gameData[i][0] > 0 &&
        gameData[i][0] === gameData[i][1] &&
        gameData[i][0] === gameData[i][2]
      ){
        return gameData[i][0]
      }
    }
  
    for (let i=0; i<3; i++){
      if(
        gameData[0][i] > 0 && 
        gameData[0][i] === gameData[1][i]  &&
        gameData[1][i] === gameData[2][i]
      )
      return gameData [0][i]
    }
  
    if(
      gameData[0][0] > 0 &&
      gameData[0][0] === gameData[1][1] &&
      gameData[1][1] === gameData[2][2]
    ){
      return gameData[0][0];
    }
  
    if(
      gameData[2][0] > 0 &&
      gameData[2][0] === gameData [1][1] &&
      gameData[1][1] === gameData [0][2]
    ){
      return gameData[2][0];
    }

    if(currentRound === 9){
      return -1;
    }
    return 0;
  }

  function EndGame(checkWinng) {
    if(checkWinng === -1){
      winnerBanner.style.display = "flex";
      document.getElementById("turn-container").style.display = "none";
      winnerName.textContent = "It is a draw so please try again";
      gameField.style.pointerEvents = 'none'
    } else {
      winnerBanner.style.display = "flex";
      document.getElementById("turn-container").style.display = "none";
      const winner = players[checkWinng -1].name;
      gameField.style.pointerEvents = 'none'
      winnerName.textContent = "🎉" + winner + ', you won' + "🎉";
      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }
      
      confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 50),
        particleCount: randomInRange(200, 200),
        origin: { y: 0.5 },
      });
    }
  };

});

