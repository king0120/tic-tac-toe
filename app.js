var counter = 0;
var color = '';

function chooseColor(){
    if (counter === 0) {
    color = prompt("Player 1, choose your color. Red or Blue");
    }
    function checkColor(color){
      console.log(color);
      if (color.toLowerCase() === 'red'){
        counter = 2;
        console.log(counter);
      } else if (color.toLowerCase() === 'blue'){
        counter = 1;
        console.log(counter);
      }
    }
    checkColor(color);
  }


$(document).ready(function(){

  //Red is even colors
  //Blue is odd colors




  function newGame(){
    while (counter < 1){
    chooseColor();
    }

    for (var i=1; i<=9; i++){
      if ($('.box' + i).hasClass('red')){
        $('.box' + i).removeClass('red');

      } else if ($('.box' + i).hasClass('blue')){
        $('.box' + i).removeClass('blue');

      }
    }
  }

  newGame();

  function winMessage(){
    if (counter%2 !== 0){
      alert("Red Wins!");
      counter = 0;
    } else {
      alert("Blue Wins!");
      counter = 0;
    }
  }


  $('.box').on('click', function(){
    if (counter%2===0 && $(this).hasClass('blue') !== true){
      $(this).addClass('red');
      counter++;
      checkWin('red');

      console.log(counter);
    } else if (counter%2===1 && $(this).hasClass('red') !== true){
      $(this).addClass('blue');
      counter++;
      checkWin('blue');

      console.log(counter);
    }
  });

  function checkWin(player){
    switch (true){
      case $('.box1').hasClass(player) && $('.box2').hasClass(player) && $('.box3').hasClass(player):
        winMessage();
        counter = 0;
        newGame();
        break;
      case $('.box4').hasClass(player) && $('.box5').hasClass(player) && $('.box6').hasClass(player):
        winMessage();
        counter = 0;
        newGame();
        break;
      case $('.box7').hasClass(player) && $('.box8').hasClass(player) && $('.box9').hasClass(player):
        winMessage();
        counter = 0;
        newGame();
        break;
      case $('.box1').hasClass(player) && $('.box4').hasClass(player) && $('.box7').hasClass(player):
        winMessage();
        counter = 0;
        newGame();
        break;
      case $('.box2').hasClass(player) && $('.box5').hasClass(player) && $('.box8').hasClass(player):
        winMessage();
        counter = 0;
        newGame();
        break;
      case $('.box3').hasClass(player) && $('.box6').hasClass(player) && $('.box9').hasClass(player):
        winMessage();
        counter = 0;
        newGame();
        break;
      case $('.box1').hasClass(player) && $('.box5').hasClass(player) && $('.box9').hasClass(player):
        winMessage();
        counter = 0;
        newGame();
        break;
      case $('.box3').hasClass(player) && $('.box5').hasClass(player) && $('.box7').hasClass(player):
        winMessage();
        counter = 0;
        newGame();
        break;
    }
  }

});
