let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let homeScoreCount = 0;
let guestScoreCount = 0;

function increaseHomeScore(increment) {
  homeScoreCount += increment;
  homeScore.textContent = homeScoreCount;
}

function increaseGuestScore(increment) {
  guestScoreCount += increment;
  guestScore.textContent = guestScoreCount;
}

function resetPoints() {
  homeScoreCount = 0;
  homeScore.textContent = 0;

  guestScoreCount = 0;
  guestScore.textContent = 0;
}
