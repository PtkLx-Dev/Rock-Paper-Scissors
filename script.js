const games = 5;
let computerSelection;
let playerSelection;

const gamesResults = {
	player: 0,
	computer: 0,
};

function computerPlay() {
	let random = Math.floor(Math.random() * 3);
	switch (random) {
		case 0:
			return 'rock';
		case 1:
			return 'paper';
		case 2:
			return 'scissor';
		default:
			break;
	}
}

function showSelections(playerSelection, computerSelection) {
	if (playerSelection) {
		console.log(`Player: ${playerSelection}
    Computer: ${computerSelection}`);
	}
}

function playRound(playerSelection, computerSelection) {
	// rock / paper = paper
	// rock / scissor = rock
	// paper / rock = paper
	// paper / scissor = scissor
	// scissor / paper = scissor
	// scissor / rock = rock
	let results;
	if (playerSelection === 'rock' && computerSelection === 'rock') {
		results = 'tie';
	} else if (playerSelection === 'rock' && computerSelection === 'paper') {
		results = 'lose';
	} else if (playerSelection === 'rock' && computerSelection === 'scissor') {
		results = 'win';
	} else if (playerSelection === 'paper' && computerSelection === 'paper') {
		results = 'tie';
	} else if (playerSelection === 'paper' && computerSelection === 'scissor') {
		results = 'lose';
	} else if (playerSelection === 'paper' && computerSelection === 'rock') {
		results = 'win';
	} else if (playerSelection === 'scissor' && computerSelection === 'scissor') {
		results = 'tie';
	} else if (playerSelection === 'scissor' && computerSelection === 'rock') {
		results = 'lose';
	} else if (playerSelection === 'scissor' && computerSelection === 'paper') {
		results = 'win';
	}

	switch (results) {
		case 'win':
			gamesResults.player++;
			break;

		case 'lose':
			gamesResults.computer++;
			break;

		case 'tie':
			break;

		default:
			console.log('Case not evaluated');
			break;
	}
	return gamesResults;
}

function promptPlayer() {
	do {
		playerSelection = prompt('Tack you pick');
		playerSelection = playerSelection.toLowerCase();
	} while (
		playerSelection != 'rock' &&
		playerSelection != 'paper' &&
		playerSelection != 'scissor'
	);
}

function game() {
	for (let i = 1; i <= games; i++) {
		console.log(`Game ${i}`);

		computerSelection = computerPlay();
		promptPlayer();

		showSelections(playerSelection, computerSelection);

		playRound(playerSelection, computerSelection);

		console.log(
			`Player: ${gamesResults.player} / Computer: ${gamesResults.computer}`
		);
	}
	if (gamesResults.player > gamesResults.computer) {
		console.log(
			`Player won ${gamesResults.player} to ${gamesResults.computer}.`
		);
	} else if (gamesResults.player < gamesResults.computer) {
		console.log(
			`Computer won ${gamesResults.computer} to ${gamesResults.player}.`
		);
	} else {
		console.log("It' a tie!");
	}
}

game();
