var counter = 0;
var results = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var toggle1 = function(event) {
  if (counter%2 === 0 && document.getElementById('1').innerHTML === "") {
    document.getElementById('1').innerHTML = "X";
    results[0][0] = 1;
    counter++;
  } else if (counter%2 === 1 && document.getElementById('1').innerHTML === "") {
    document.getElementById('1').innerHTML = "O";
    counter++;
    results[0][0] = 5;
  }
  turn(counter);
  winner(results);
}
var toggle2 = function(event) {
  if (counter%2 === 0 && document.getElementById('2').innerHTML === "") {
    document.getElementById('2').innerHTML = "X";
    counter++;
    results[0][1] = 1;
  } else if (counter%2 === 1 && document.getElementById('2').innerHTML === "") {
    document.getElementById('2').innerHTML = "O";
    counter++;
    results[0][1] = 5;
  }
  turn(counter);
  winner(results);
}
var toggle3 = function(event) {
  if (counter%2 === 0 && document.getElementById('3').innerHTML === "") {
    document.getElementById('3').innerHTML = "X";
    counter++;
    results[0][2] = 1;
  } else if (counter%2 === 1 && document.getElementById('3').innerHTML === "") {
    document.getElementById('3').innerHTML = "O";
    counter++;
    results[0][2] = 5;
  }
  turn(counter);
  winner(results);
}
var toggle4 = function(event) {
  if (counter%2 === 0 && document.getElementById('4').innerHTML === "") {
    document.getElementById('4').innerHTML = "X";
    counter++;
    results[1][0] = 1;
  } else if (counter%2 === 1 && document.getElementById('4').innerHTML === "") {
    document.getElementById('4').innerHTML = "O";
    counter++;
    results[1][0] = 5;
  }
  turn(counter);
  winner(results);
}
var toggle5 = function(event) {
  if (counter%2 === 0 && document.getElementById('5').innerHTML === "") {
    document.getElementById('5').innerHTML = "X";
    counter++;
    results[1][1] = 1;
  } else if (counter%2 === 1 && document.getElementById('5').innerHTML === "") {
    document.getElementById('5').innerHTML = "O";
    counter++;
    results[1][1] = 5;
  }
  turn(counter);
  winner(results);
}
var toggle6 = function(event) {
  if (counter%2 === 0 && document.getElementById('6').innerHTML === "") {
    document.getElementById('6').innerHTML = "X";
    counter++;
    results[1][2] = 1;
  } else if (counter%2 === 1 && document.getElementById('6').innerHTML === "") {
    document.getElementById('6').innerHTML = "O";
    counter++;
    results[1][2] = 5;
  }
  turn(counter);
  winner(results);
}
var toggle7 = function(event) {
  if (counter%2 === 0 && document.getElementById('7').innerHTML === "") {
    document.getElementById('7').innerHTML = "X";
    counter++;
    results[2][0] = 1;
  } else if (counter%2 === 1 && document.getElementById('7').innerHTML === "") {
    document.getElementById('7').innerHTML = "O";
    counter++;
    results[2][0] = 5;
  }
  turn(counter);
  winner(results);
}
var toggle8 = function(event) {
  if (counter%2 === 0 && document.getElementById('8').innerHTML === "") {
    document.getElementById('8').innerHTML = "X";
    counter++;
    results[2][1] = 1;
  } else if (counter%2 === 1 && document.getElementById('8').innerHTML === "") {
    document.getElementById('8').innerHTML = "O";
    counter++;
    results[2][1] = 5;
  }
  turn(counter);
  winner(results);
}
var toggle9 = function(event) {
  if (counter%2 === 0 && document.getElementById('9').innerHTML === "") {
    document.getElementById('9').innerHTML = "X";
    counter++;
    results[2][2] = 1;
  } else if (counter%2 === 1 && document.getElementById('9').innerHTML === "") {
    document.getElementById('9').innerHTML = "O";
    counter++;
    results[2][2] = 5;
  }
  turn(counter);
  winner(results);
}
var turn = function(num) {
  if (num%2 === 0) {
    document.getElementById('outcome').innerHTML = "X's turn!";
  } else {
    document.getElementById('outcome').innerHTML = "O's turn!"
  }

}
var winner = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] + arr[i][1] + arr[i][2] === 3) {
      document.getElementById('outcome').innerHTML = "X Wins!!";
    } else if (arr[i][0] + arr[i][1] + arr[i][2] === 15) {
      document.getElementById('outcome').innerHTML = "O Wins!!";
    }
  }
  for (var h = 0; h < arr.length; h++) {
    if (arr[0][h] + arr[1][h] + arr[2][h] === 3) {
      document.getElementById('outcome').innerHTML = "X Wins!!";
    } else if (arr[0][h] + arr[1][h] + arr[2][h] === 15) {
      document.getElementById('outcome').innerHTML = "O Wins!!";
    }
  }
  if (arr[0][0] + arr[1][1] + arr[2][2] === 3) {
    document.getElementById('outcome').innerHTML = "X Wins!!";
  } else if (arr[0][0] + arr[1][1] + arr[2][2] === 15) {
    document.getElementById('outcome').innerHTML = "O Wins!!";
  }

  if (arr[0][2] + arr[1][1] + arr[2][0] === 3) {
    document.getElementById('outcome').innerHTML = "X Wins!!";
  } else if (arr[0][2] + arr[1][1] + arr[2][0] === 15) {
    document.getElementById('outcome').innerHTML = "O Wins!!";
  }
}
var reset = function() {
  document.getElementById('1').innerHTML = "";
  document.getElementById('2').innerHTML = "";
  document.getElementById('3').innerHTML = "";
  document.getElementById('4').innerHTML = "";
  document.getElementById('5').innerHTML = "";
  document.getElementById('6').innerHTML = "";
  document.getElementById('7').innerHTML = "";
  document.getElementById('8').innerHTML = "";
  document.getElementById('9').innerHTML = "";
  document.getElementById('outcome').innerHTML = "";
  counter = 0;
  results = [[0,0,0], [0,0,0], [0,0,0]];
}
