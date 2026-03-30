// Este arquivo é como uma caixa de ferramentas mágicas.
// Aqui temos funções que ajudam a fazer coisas legais, como pegar códigos de vídeos ou escolher números aleatórios.

// Esta função pega o código especial de um vídeo do YouTube.
// É como encontrar o número secreto dentro do link do vídeo.
export function getYouTubeId(url) {
    // Se não tem link, usamos um vídeo padrão.
    if (!url) return "7RUA0IOfar8";
    // Se o link tem 'v=', pegamos o que vem depois.
    if (url.includes('v=')) {
        return url.split('v=')[1].split('&')[0];
    }
    // Senão, pegamos a última parte do link.
    return url.split('/').pop();
}

// Esta função cria um número aleatório entre 80 e 99 para dizer o quão "relevante" é o filme.
// É como rolar um dado para ver se o filme é super legal para você.
export function getRandomMatchScore() {
    return Math.floor(Math.random() * 20 + 80);
}

// Esta função cria uma duração aleatória para o filme ou série.
// Se já viu um pouco, diz "10 temporadas", senão uma hora e minutos aleatórios.
export function getRandomDuration(hasProgress) {
    return hasProgress ? '10 temporadas' : '2h ' + Math.floor(Math.random() * 59) + 'm';
}

// Esta função escolhe aleatoriamente um selo de idade: "A16" vermelho ou "16" normal.
// É como sortear se o filme é para maiores ou não.
export function getRandomAgeBadge() {
    return Math.random() > 0.5 ? { text: 'A16', class: 'red-accent' } : { text: '16', class: '' };
}

