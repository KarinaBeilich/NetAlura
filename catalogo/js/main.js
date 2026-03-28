// Aqui estamos dizendo ao computador que queremos usar as categorias de filmes
// e a função para criar carrosséis. É como pegar brinquedos de outras caixas.
import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

// Quando a página da web termina de carregar, fazemos algumas coisas mágicas!
// É como esperar todos os amigos chegarem para começar a brincadeira.
document.addEventListener('DOMContentLoaded', () => {
    // Pegamos o nome e a imagem do perfil que o usuário escolheu antes.
    // É como lembrar qual boneco você estava usando na última vez.
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    // Se encontramos o perfil salvo, atualizamos a página com ele.
    // É como colocar o nome e a foto do seu perfil na tela.
    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    // Agora, encontramos o lugar na página onde vamos colocar os carrosséis.
    // É como encontrar a mesa onde vamos montar os brinquedos.
    const container = document.getElementById('main-content');
    
    // Se encontramos o lugar, para cada categoria de filmes, criamos um carrossel e colocamos lá.
    // É como fazer uma fila de cartões para cada tipo de brinquedo.
    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
