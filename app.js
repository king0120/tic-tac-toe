$(document).ready(function(){

  //Red is even colors
  //Blue is odd colors
  var counter = 0;
  function chooseColor(){
    var color = prompt("Choose your player. Red or Blue");
    if (color.toLowerCase === 'red'){
      counter = 0;
    } else if (color.toLowerCase === 'blue'){
      counter = 1;
    } else {
      color = prompt("I'm sorry, I didn't get that. Please choose Red or Blue.");
    }
  }

  function newGame(){
    for (var i=1; i<=9; i++){
      if ($('.box' + i).hasClass('red')){
        $('.box' + i).removeClass('red');

      } else if ($('.box' + i).hasClass('blue')){
        $('.box' + i).removeClass('blue');

      }
    }
  }

  chooseColor();

  function checkWin(player){
    switch (true){
      case $('.box1').hasClass(player) && $('.box2').hasClass(player) && $('.box3').hasClass(player):
        alert('WIN!');
        newGame();
        break;
      case $('.box4').hasClass(player) && $('.box5').hasClass(player) && $('.box6').hasClass(player):
        alert('WIN!');
        newGame();
        break;
      case $('.box7').hasClass(player) && $('.box8').hasClass(player) && $('.box9').hasClass(player):
        alert('WIN!');
        newGame();
        break;
      case $('.box1').hasClass(player) && $('.box4').hasClass(player) && $('.box7').hasClass(player):
        alert('WIN!');
        newGame();
        break;
      case $('.box2').hasClass(player) && $('.box5').hasClass(player) && $('.box8').hasClass(player):
        alert('WIN!');
        newGame();
        break;
      case $('.box3').hasClass(player) && $('.box6').hasClass(player) && $('.box9').hasClass(player):
        alert('WIN!');
        newGame();
        break;
      case $('.box1').hasClass(player) && $('.box5').hasClass(player) && $('.box9').hasClass(player):
        alert('WIN!');
        newGame();
        break;
      case $('.box3').hasClass(player) && $('.box5').hasClass(player) && $('.box7').hasClass(player):
        alert('WIN!');
        newGame();
        break;
    }
  }




  $('.box').on('click', function(){
    if (counter%2===0 && $(this).hasClass('blue') !== true){
      $(this).addClass('red');
      checkWin('red');
      counter++;
    } else if (counter%2===1 && $(this).hasClass('red') !== true){
      $(this).addClass('blue');
      checkWin('blue');
      counter++;
    }
  });
});
