function playGame(playerChoice) {
    document.getElementById('loading').style.display = 'block';
    document.getElementById('result').innerText = '';
    document.getElementById('result').className = '';

    setTimeout(() => {
        const choices = { 'rock': '👊', 'paper': '🖐️', 'scissors': '✌️' };
        const choiceKeys = Object.keys(choices);
        const computerChoice = choiceKeys[Math.floor(Math.random() * 3)];

        document.getElementById('player-choice').innerText = choices[playerChoice];
        document.getElementById('computer-choice').innerText = choices[computerChoice];
        document.getElementById('loading').style.display = 'none';

        let result = '';
        let resultClass = '';
        if (playerChoice === computerChoice) {
            result = "It's a tie!";
            resultClass = 'tie';
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            result = "You win!";
            resultClass = 'win';
        } else {
            result = "You lose!";
            resultClass = 'lose';
        }

        document.getElementById('result').innerText = result;
        document.getElementById('result').className = resultClass;
    }, 1000);
}
