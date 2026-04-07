// Script para alternar entre dark e light mode

// Seleciona o botão de toggle
const themeToggle = document.getElementById('theme-toggle');

// Função para aplicar o tema
function applyTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.textContent = '☀️'; // Sol para light mode
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-mode');
        themeToggle.textContent = '🌙'; // Lua para dark mode
        localStorage.setItem('theme', 'dark');
    }
}

// Verifica a preferência salva ou do sistema
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    applyTheme(savedTheme);
} else if (prefersDark) {
    applyTheme('dark');
} else {
    applyTheme('light');
}

// Event listener para o botão
themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
});

// Animação de abertura
window.addEventListener('load', () => {
    // Tempo que a tela de abertura fica visível (4 segundos)
    setTimeout(() => {
        const openingScreen = document.getElementById('opening-screen');
        const header = document.querySelector('header');
        const main = document.querySelector('main');

        // Adiciona uma classe para sumir suavemente (fade-out)
        if (openingScreen) {
            openingScreen.classList.add('hidden');
            
            // Remove do DOM após a animação de 0.8s para não pesar a página
            setTimeout(() => {
                openingScreen.style.display = 'none';
            }, 800);
        }

        // Mostra o conteúdo do site
        if (header) {
            header.style.opacity = '1';
            header.style.visibility = 'visible';
        }
        if (main) {
            main.style.opacity = '1';
            main.style.visibility = 'visible';
        }
    }, 4000);
});

// Função para os perfis: ao clicar, salva o perfil ativo e vai para o catálogo
document.querySelectorAll('.profile-button:not(.add-profile):not(.edit-profile)').forEach(button => {
    button.addEventListener('click', (e) => {
        const img = button.querySelector('img');
        const name = button.querySelector('.profile-name').textContent;
        if (img && name) {
            localStorage.setItem('perfilAtivoNome', name);
            localStorage.setItem('perfilAtivoImagem', img.src);
        }
        window.location.href = 'catalogo/catalogo.html'; // Vai para o catálogo
    });
});
