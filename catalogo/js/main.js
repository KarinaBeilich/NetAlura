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

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
            themeToggle.textContent = '☀️';
        } else {
            themeToggle.textContent = '🌙';
        }

        // Toggle theme on click
        themeToggle.addEventListener('click', () => {
            const isLight = document.body.classList.toggle('light-mode');
            if (isLight) {
                themeToggle.textContent = '☀️';
                localStorage.setItem('theme', 'light');
            } else {
                themeToggle.textContent = '🌙';
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // Profile dropdown functionality
    const profileCaret = document.getElementById('profile-caret');
    const profileDropdown = document.getElementById('profile-dropdown');
    if (profileCaret && profileDropdown) {
        profileCaret.addEventListener('click', (e) => {
            e.preventDefault();
            profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!profileCaret.contains(e.target) && !profileDropdown.contains(e.target)) {
                profileDropdown.style.display = 'none';
            }
        });

        // Handle profile selection
        profileDropdown.addEventListener('click', (e) => {
            const button = e.target.closest('.profile-button');
            if (button) {
                const name = button.dataset.name;
                const img = button.dataset.img;
                if (name === 'add') {
                    // Redirect to index.html for adding profile
                    window.location.href = '../index.html';
                } else {
                    // Set active profile
                    localStorage.setItem('perfilAtivoNome', name);
                    localStorage.setItem('perfilAtivoImagem', img);
                    // Update UI
                    const kidsLink = document.querySelector('.kids-link');
                    const profileIcon = document.querySelector('.profile-icon');
                    if (kidsLink) kidsLink.textContent = name;
                    if (profileIcon) profileIcon.src = img;
                    // Hide dropdown
                    profileDropdown.style.display = 'none';
                }
            }
        });
    }
});
