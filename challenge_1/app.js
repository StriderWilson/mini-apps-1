var counter = 0;
var results = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var toggle = function(event) {
  var row = parseInt(event.id[0]);
  var col = parseInt(event.id[1]);
  if (counter%2 === 0 && event.innerHTML === "") {
    event.innerHTML = "X";
    results[row][col] = 1;
    counter++;
  } else if (counter%2 === 1 && event.innerHTML === "") {
    event.innerHTML = "O";
    counter++;
    results[row][col] = 5;
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
var reset = function(e) {
  document.getElementById('00').innerHTML = "";
  document.getElementById('01').innerHTML = "";
  document.getElementById('02').innerHTML = "";
  document.getElementById('10').innerHTML = "";
  document.getElementById('11').innerHTML = "";
  document.getElementById('12').innerHTML = "";
  document.getElementById('20').innerHTML = "";
  document.getElementById('21').innerHTML = "";
  document.getElementById('22').innerHTML = "";
  document.getElementById('outcome').innerHTML = "X's turn!";
  counter = 0;
  results = [[0,0,0], [0,0,0], [0,0,0]];
}
