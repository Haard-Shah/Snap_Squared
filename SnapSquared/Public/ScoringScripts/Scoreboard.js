// -----JS CODE-----
// Scoreboard.js
// Version: 0.0.1
// Event: Lens Initialized
// Description: Scoreboard for SnapSquared

// @input Component.Text p1ScoreText
// @input Component.Text p2ScoreText


var P1Score = 0;
var P2Score = 0;

// Script API interface
script.api.incrementP1 = incrementP1;
script.api.incrementP2 = incrementP2;
script.api.endGame = endGame;

function updateScoreText() {
    script.p1ScoreText.text = P1Score.toString();
    script.p2ScoreText.text = P2Score.toString();
}

function incrementP1() {
    P1Score++;
    print(P1Score);
    updateScoreText();
}

function incrementP2() {
    P2Score++;
    print(P2Score);

    updateScoreText();
}

function resetGame() {
    P1Score = 0;
    P2Score = 0;
    updateScoreText();
}

function endGame() {
    resetGame();
}