// Função para rolar suavemente para as seções do site ao clicar nos links do menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});


// Função para contador de visitas (usando localStorage)
function incrementarContador() {
    let visitas = localStorage.getItem('visitas') || 0;
    visitas++;
    localStorage.setItem('visitas', visitas);
    document.getElementById('contador-visitas').textContent = `Número de visitas: ${visitas}`;
}

// Chame a função de incrementarContador quando a página for carregada
window.addEventListener('load', incrementarContador);





// ---------------------------------------------


document.addEventListener("DOMContentLoaded", function () {
    var titleText = "Bem-vindo a TECHWORLD";
    var paragraphText = "Explore as últimas inovações e tendências tecnológicas.";
    var index = 0;
    var speed = 100;

    function typeTitle() {
        if (index < titleText.length) {
            document.getElementById("titulo-digitacao").textContent += titleText.charAt(index);
            index++;
            setTimeout(typeTitle, speed);
        } else {
            index = 0; // Reinicia o índice
            typeParagraph(); // Chama a função para digitar o parágrafo
        }
    }

    function typeParagraph() {
        if (index < paragraphText.length) {
            document.getElementById("paragrafo-digitacao").textContent += paragraphText.charAt(index);
            index++;
            setTimeout(typeParagraph, speed);
        }
    }

    typeTitle(); // Inicia digitando o título
});



