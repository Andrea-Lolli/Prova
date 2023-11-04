// Inizializza la matrice del gioco Tris con celle vuote ("-") e la partita
var board = [["-","-","-"],["-","-","-"],["-","-","-"]];

// La partita viene caricata iniziata quando l'intero contenuto dell'html è stato caricato
document.addEventListener("DOMContentLoaded", setup);

function setup() {
	// Aggiungi un gestore di eventi per il pulsante "Inizia Partita" e "Conferma Mossa"
	var startGameButton = document.getElementById("startGame");
	var confirmMoveButton = document.getElementById("confirmMove");
	startGameButton.addEventListener("click", iniziaPartita);
	confirmMoveButton.addEventListener("click", confermaMossa);
}

// Funzione per iniziare la partita
function iniziaPartita() {
	// Resettare la matrice del gioco
	board = [["-","-","-"],["-","-","-"],["-","-","-"]];
	console.log(board);
	
	// celle contiene una lista di tutte le celle
	var celle = document.getElementsByClassName("tris-cell");
	
	// quando la partita inizia imposto tutti i testi delle celle a "-"
	for (var i = 0; i < celle.length; i++) {
		celle[i].innerText = "-";
	}
}

// Funzione eseguita per aggiungere una mossa
function confermaMossa() {
	
	var x = document.getElementById("coordinatesX").value;
	var y = document.getElementById("coordinatesY").value;
	
	document.getElementById("cell-1").innerText = "X";
	
	//TODO getElementById
	// 1 - Controllare che la mossa inserita dall'utente ha senso
	
	console.log("risolto bug");
	
	// 2 - inserire X o O nella cella di coordinate x,y
	
	// 3 - Controllare se il gioco è terminato (output tramite console.log() 
	// o per i più intraprendenti aggiungere una label/textBox all'html dove appare l'esito della partita)
}

// Funzione per verificare se il gioco è finito o se c'è un vincitore
function isFinalConfiguration(Configuration) {
	// Verifica orizzontale
	for (let i = 0; i < 3; i++) {
		if (Configuration[i][0] === Configuration[i][1] && Configuration[i][1] === Configuration[i][2] && Configuration[i][0] !== "-") {
			return true;
		}
	}

	// Verifica verticale
	for (let j = 0; j < 3; j++) {
		if (Configuration[0][j] === Configuration[1][j] && Configuration[1][j] === Configuration[2][j] && Configuration[0][j] !== "-") {
			return true;
		}
	}

	// Verifica diagonale principale
	if (Configuration[0][0] === Configuration[1][1] && Configuration[1][1] === Configuration[2][2] && Configuration[0][0] !== "-") {
		return true;
	}

	// Verifica diagonale secondaria
	if (Configuration[0][2] === Configuration[1][1] && Configuration[1][1] === Configuration[2][0] && Configuration[0][2] !== "-") {
		return true;
	}

	// Verifica se non ci sono più caselle vuote "-"
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (Configuration[i][j] === "-") {
				return false;
			}
		}
	}

	return true;
}
