// Este script seria para um painel de administração simples
// Aqui você pode definir músicas e suas letras
function setSongForTheDay(songName, lyrics) {
    // Isso poderia ser feito com um banco de dados ou arquivo JSON, mas aqui apenas define diretamente.
    songs.push({ name: songName, lyrics: lyrics });
    console.log(`Música definida: ${songName}`);
    document.getElementById("adminMessage").textContent = `Nova música definida: ${songName}`;
}

// Exemplo de uso: Definindo uma nova música
setSongForTheDay("Imagine", ["Imagine there's no heaven", "It's easy if you try"]);
