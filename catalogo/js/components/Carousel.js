// Aqui estamos dizendo ao computador que queremos usar a função createCard
// que está guardada no arquivo Card.js. É como pegar um brinquedo de outra caixa.
import { createCard } from './Card.js';

// Esta é uma função mágica que cria um carrossel de filmes, como um trem de cartões!
// Ela recebe uma "categoria" que é como uma pasta com vários filmes.
export function createCarousel(category) {
    // Primeiro, criamos uma seção grande onde vai ficar o carrossel.
    // É como uma prateleira onde vamos colocar os cartões em fila.
    const section = document.createElement('div');
    section.className = 'slider-section';

    // Agora, criamos um cabeçalho para o título e os indicadores.
    // É como o nome da prateleira e uns pontinhos que mostram onde estamos.
    const header = document.createElement('div');
    header.className = 'slider-header';

    // Criamos um título com o nome da categoria.
    // É como escrever "Filmes de Aventura" na prateleira.
    const title = document.createElement('h2');
    title.className = 'slider-title';
    title.innerText = category.title;

    // Criamos um espaço para os indicadores (como bolinhas que mostram a página).
    // É como uns pontinhos que piscam para dizer em qual parte do trem estamos.
    const indicators = document.createElement('div');
    indicators.className = 'slider-indicators';

    // Colocamos o título e os indicadores dentro do cabeçalho.
    header.appendChild(title);
    header.appendChild(indicators);
    // E o cabeçalho dentro da seção.
    section.appendChild(header);

    // Agora, criamos uma fila de filmes.
    // É como uma linha reta onde os cartões vão ficar lado a lado.
    const row = document.createElement('div');
    row.className = 'movie-row';

    // Para cada filme na categoria, criamos um cartão usando a função createCard.
    // É como fazer um cartão para cada boneco na caixa.
    category.items.forEach(item => {
        const card = createCard(item);
        row.appendChild(card);
    });

    // Colocamos a fila dentro da seção.
    section.appendChild(row);
    
    // Finalmente, devolvemos a seção pronta!
    // É como entregar a prateleira cheia de cartões para brincar.
    return section;
}
