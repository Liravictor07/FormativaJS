// Função para contador de visitas (usando localStorage)
function incrementarContador() {
    let visitas = localStorage.getItem('visitas') || 0;
    visitas++;
    localStorage.setItem('visitas', visitas);
    document.getElementById('contador-visitas').textContent = `Número de visitas: ${visitas}`;
}

// Chame a função de incrementarContador quando a página for carregada
window.addEventListener('load', incrementarContador);


// ----------------------------------------------------------------------------------------------------------------------------------

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

// ----------------------------------------------------------------------------------------------------------------------------------


document.addEventListener("DOMContentLoaded", function () {
    var titleText = "Entre em Contato Conosco";
    var paragraphText = "Estamos aqui para responder às suas perguntas. Preencha o formulário abaixo e entraremos em contato em breve.";
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



// ----------------------------------------------------------------------------------------------------------------------------------







var ALERT_TITLE = "Obrigado por entrar em contato conosco! Responderemos em breve.";
var ALERT_BUTTON_TEXT = "Ok";

if(document.getElementById) {
    window.alert = function(txt) {
        createCustomAlert(txt);
    }
}

function createCustomAlert(txt) {
    d = document;

    if(d.getElementById("modalContainer")) return;

    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight + "px";
    
    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
    alertObj.style.visiblity="visible";

    h1 = alertObj.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode(ALERT_TITLE));

    msg = alertObj.appendChild(d.createElement("p"));
    //msg.appendChild(d.createTextNode(txt));
    msg.innerHTML = txt;

    btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
    btn.href = "#";
    btn.focus();
    btn.onclick = function() { removeCustomAlert();
        window.location.href = "techWorld.html";
        return false; }

    alertObj.style.display = "block";
    
}

function removeCustomAlert() {
document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
    }
    function ful(){
    alert('Obrigado por entrar em contato conosco! Responderemos em breve.');
    }
    