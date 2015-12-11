function checkColor(color){
      if (color.toLowerCase === 'red'){
        return 0;
      } else if (color.toLowerCase === 'blue'){
        return 1;
      } else {
        alert("I'm sorry, I didn't get that. Please choose Red or Blue.");
        console.log(color);
        chooseColor();
      }
    }

function checkWin(player){
    switch (true){
      case $('.box1').hasClass(player) && $('.box2').hasClass(player) && $('.box3').hasClass(player):
        console.log('WIN!');
        newGame();
        break;
      case $('.box4').hasClass(player) && $('.box5').hasClass(player) && $('.box6').hasClass(player):
        console.log('WIN!');
        newGame();
        break;
      case $('.box7').hasClass(player) && $('.box8').hasClass(player) && $('.box9').hasClass(player):
        console.log('WIN!');
        newGame();
        break;
      case $('.box1').hasClass(player) && $('.box4').hasClass(player) && $('.box7').hasClass(player):
        console.log('WIN!');
        newGame();
        break;
      case $('.box2').hasClass(player) && $('.box5').hasClass(player) && $('.box8').hasClass(player):
        console.log('WIN!');
        newGame();
        break;
      case $('.box3').hasClass(player) && $('.box6').hasClass(player) && $('.box9').hasClass(player):
        console.log('WIN!');
        newGame();
        break;
      case $('.box1').hasClass(player) && $('.box5').hasClass(player) && $('.box9').hasClass(player):
        console.log('WIN!');
        newGame();
        break;
      case $('.box3').hasClass(player) && $('.box5').hasClass(player) && $('.box7').hasClass(player):
        console.log('WIN!');
        newGame();
        break;
    }
  }
