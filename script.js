let currentSong = "";
let currentLyrics = [];
let lyricIndex = 0;
let attempts = 5;

const songs = [
    { name: "Shape of You", lyrics: ["The club isn't the best place to find a lover", "So the bar is where I go"] },
    { name: "Blinding Lights", lyrics: ["I've been tryna call", "I've been on my own for long enough"] },
    // Adicione mais músicas aqui
];

function startGame() {
    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    currentSong = randomSong.name;
    currentLyrics = randomSong.lyrics;
    lyricIndex = 0; // Resetando o índice da letra
    document.getElementById("lyrics").textContent = `Letra Parcial: ${currentLyrics[lyricIndex]}`;
    document.getElementById("attemptsLeft").textContent = `Tentativas restantes: ${attempts}`;
    document.getElementById("feedback").textContent = "";
}

function submitGuess() {
    const guess = document.getElementById("guessInput").value.trim();
    if (guess.toLowerCase() === currentSong.toLowerCase()) {
        document.getElementById("feedback").textContent = "Você acertou!";
        document.getElementById("feedback").style.color = "green";
    } else {
        attempts--;
        document.getElementById("feedback").textContent = `Errado! Tente novamente.`;
        document.getElementById("feedback").style.color = "red";
        document.getElementById("attemptsLeft").textContent = `Tentativas restantes: ${attempts}`;
        if (attempts === 0) {
            document.getElementById("feedback").textContent = "Você perdeu! A resposta era " + currentSong;
            document.getElementById("feedback").style.color = "red";
        } else {
            showNextLyric();
        }
    }
}

function showNextLyric() {
    lyricIndex++; // Avançando para a próxima parte da letra
    if (currentLyrics[lyricIndex]) {
        document.getElementById("lyrics").textContent = `Letra Parcial: ${currentLyrics[lyricIndex]}`;
    }
}

function showSuggestions() {
    const input = document.getElementById("guessInput").value.toLowerCase();
    const suggestions = songs.filter(song => song.name.toLowerCase().includes(input)).map(song => song.name);
    const suggestionList = document.getElementById("suggestions");
    suggestionList.innerHTML = "";
    suggestions.forEach(suggestion => {
        const li = document.createElement("li");
        li.textContent = suggestion;
        li.onclick = function() {
            document.getElementById("guessInput").value = suggestion;
            suggestionList.innerHTML = ""; // Limpar sugestões
        };
        suggestionList.appendChild(li);
    });
}

// Iniciar o jogo ao carregar a página
startGame();