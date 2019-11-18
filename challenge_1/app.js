var state = {
  counter: 0,
  results: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
  o: false
}

var toggle = function(event) {
  var row = parseInt(event.id[0]);
  var col = parseInt(event.id[1]);
  if (state.counter%2 === 0 && event.innerHTML === "") {
    event.innerHTML = "X";
    state.results[row][col] = 1;
    state.counter++;
  } else if (state.counter%2 === 1 && event.innerHTML === "") {
    event.innerHTML = "O";
    state.counter++;
    state.results[row][col] = 5;
  }
  turn(state.counter);
  winner(state.results);
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
      document.getElementById('x').innerHTML += 'I';
    } else if (arr[i][0] + arr[i][1] + arr[i][2] === 15) {
      document.getElementById('outcome').innerHTML = "O Wins!!";
      document.getElementById('o').innerHTML += 'I';
      state.o = true;
    }
  }
  for (var h = 0; h < arr.length; h++) {
    if (arr[0][h] + arr[1][h] + arr[2][h] === 3) {
      document.getElementById('outcome').innerHTML = "X Wins!!";
      document.getElementById('x').innerHTML += 'I';
    } else if (arr[0][h] + arr[1][h] + arr[2][h] === 15) {
      document.getElementById('outcome').innerHTML = "O Wins!!";
      document.getElementById('o').innerHTML += 'I';
      state.o = true;
    }
  }
  if (arr[0][0] + arr[1][1] + arr[2][2] === 3) {
    document.getElementById('outcome').innerHTML = "X Wins!!";
    document.getElementById('x').innerHTML += 'I';
  } else if (arr[0][0] + arr[1][1] + arr[2][2] === 15) {
    document.getElementById('outcome').innerHTML = "O Wins!!";
    document.getElementById('o').innerHTML += 'I';
    state.o = true;
  }

  if (arr[0][2] + arr[1][1] + arr[2][0] === 3) {
    document.getElementById('outcome').innerHTML = "X Wins!!";
    document.getElementById('x').innerHTML += 'I';
  } else if (arr[0][2] + arr[1][1] + arr[2][0] === 15) {
    document.getElementById('outcome').innerHTML = "O Wins!!";
    document.getElementById('o').innerHTML += 'I';
    state.o = true;
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
  if (state.o === true) {
    document.getElementById('outcome').innerHTML = "0's turn!";
    state.counter = 1
  } else {
    document.getElementById('outcome').innerHTML = "X's turn!";
    state.counter = 0;
  }
  state.o = false;
  state.results = [[0,0,0], [0,0,0], [0,0,0]];
}
