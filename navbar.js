// Função para carregar a navbar em todas as páginas
function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar navbar:', error);
        });
}

// Carregar navbar quando a página carregar
document.addEventListener('DOMContentLoaded', loadNavbar);
