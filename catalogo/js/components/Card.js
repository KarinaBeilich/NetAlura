// Aqui estamos dizendo ao computador que queremos usar algumas ferramentas especiais
// que estão guardadas em outro arquivo chamado utils.js. É como pegar brinquedos de uma caixa.
import { getYouTubeId, getRandomMatchScore, getRandomDuration, getRandomAgeBadge } from '../utils.js';

// Esta é uma função mágica que cria um cartão de filme, como um cartão de Pokémon!
// Ela recebe um "item" que é como uma ficha com informações sobre o filme.
export function createCard(item) {
    // Primeiro, criamos uma caixa vazia (div) onde vamos colocar tudo sobre o filme.
    // É como uma folha de papel em branco onde vamos desenhar o cartão.
    const card = document.createElement('div');
    card.className = 'movie-card';
    
    // Se o filme já foi assistido um pouco, adicionamos uma classe especial para mostrar isso.
    // É como colocar um adesivo "já comecei" no cartão.
    if (item.progress) {
        card.classList.add('has-progress');
    }

    // Agora, criamos uma imagem bonita da capa do filme.
    // É como colocar uma foto no cartão.
    const img = document.createElement('img');
    img.src = item.img;
    img.alt = `Movie cover`;

    // Também criamos um espaço para um vídeo do YouTube.
    // É como um telinho dentro do cartão que pode mostrar um pedacinho do filme.
    const iframe = document.createElement('iframe');
    iframe.frameBorder = "0";
    iframe.allow = "autoplay; encrypted-media";

    // Pegamos o código especial do vídeo do YouTube usando uma ferramenta.
    // É como encontrar o número secreto do vídeo.
    const videoId = getYouTubeId(item.youtube);

    // Colocamos a imagem e o vídeo dentro da caixa do cartão.
    // Primeiro o vídeo, depois a imagem por cima.
    card.appendChild(iframe);
    card.appendChild(img);

    // Criamos um adesivo com a idade recomendada para o filme.
    // É como um selo que diz "para maiores de 10 anos".
    const ageBadge = getRandomAgeBadge();

    // Agora, criamos uma parte com detalhes sobre o filme, como botões e informações.
    // É como a parte de trás do cartão com mais informações.
    const details = document.createElement('div');
    details.className = 'card-details';
    details.innerHTML = `
        <div class="details-buttons">
            <div class="left-buttons">
                <button class="btn-icon btn-play-icon"><i class="fas fa-play" style="margin-left:2px;"></i></button>
                ${item.progress ? '<button class="btn-icon"><i class="fas fa-check"></i></button>' : '<button class="btn-icon"><i class="fas fa-plus"></i></button>'}
                <button class="btn-icon"><i class="fas fa-thumbs-up"></i></button>
            </div>
            <div class="right-buttons">
                <button class="btn-icon"><i class="fas fa-chevron-down"></i></button>
            </div>
        </div>
        <div class="details-info">
            <span class="match-score">${getRandomMatchScore()}% relevante</span>
            <span class="age-badge ${ageBadge.class}">${ageBadge.text}</span>
            <span class="duration">${getRandomDuration(item.progress)}</span>
            <span class="resolution">HD</span>
        </div>
        <div class="details-tags">
            <span>Empolgante</span>
            <span>Animação</span>
            <span>Ficção</span>
        </div>
    `;
    // Colocamos os detalhes dentro do cartão.
    card.appendChild(details);

    // Se o filme foi assistido um pouco, mostramos uma barrinha de progresso.
    // É como uma régua que mostra quanto você já viu.
    if (item.progress) {
        const pbContainer = document.createElement('div');
        pbContainer.className = 'progress-bar-container';
        const pbValue = document.createElement('div');
        pbValue.className = 'progress-value';
        pbValue.style.width = `${item.progress}%`;
        pbContainer.appendChild(pbValue);
        card.appendChild(pbContainer);
    }

    // Agora, vamos adicionar magia ao cartão: quando você passa o mouse por cima,
    // ele vai mostrar um pedacinho do vídeo!
    let playTimeout;
    
    // Quando o mouse entra no cartão...
    card.addEventListener('mouseenter', () => {
        // Verificamos onde o cartão está na tela para posicionar direito.
        // É como ajustar o cartão para que caiba na mesa.
        const rect = card.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        
        if (rect.left < 100) {
            card.classList.add('origin-left');
        } else if (rect.right > windowWidth - 100) {
            card.classList.add('origin-right');
        }

        // Esperamos um pouquinho (600 milissegundos, como contar até 6) e então...
        playTimeout = setTimeout(() => {
            // Colocamos o vídeo do YouTube para tocar automaticamente, sem som, em loop.
            // É como ligar a TV para ver um preview do filme.
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${videoId}`;
            iframe.classList.add('playing');
            img.classList.add('playing-video');
        }, 600);
    });

    // Quando o mouse sai do cartão...
    card.addEventListener('mouseleave', () => {
        // Cancelamos o timer se ainda não tocou o vídeo.
        clearTimeout(playTimeout);
        // Tiramos as classes especiais e paramos o vídeo.
        // É como desligar a TV e guardar o cartão.
        iframe.classList.remove('playing');
        img.classList.remove('playing-video');
        iframe.src = "";
        card.classList.remove('origin-left');
        card.classList.remove('origin-right');
    });

    // Finalmente, devolvemos o cartão pronto para ser usado!
    // É como entregar o cartão desenhado para alguém brincar.
    return card;
}
