const TEXT_AREA = document.querySelector('textarea');
const TEXTO_RETORNADO = document.querySelector(".text-desencript");

const BOTON_ENCRIPTAR = document.querySelector('.btn--primary');
const BOTON_DESENCRIPTAR = document.querySelector('.btn--secondary');
const BOTON_COPY = document.getElementById('btn-copy');


function botones (modo) {
    const CONTENEDOR_TEXTO = document.querySelector('.content-text');
    CONTENEDOR_TEXTO.classList.add('active');

    modo == "Encriptar" 
    ? textoEncriptado = encriptarDesencriptar(modo, TEXT_AREA.value) 
    : textoEncriptado = encriptarDesencriptar(modo, TEXT_AREA.value)
    
    TEXTO_RETORNADO.innerHTML = textoEncriptado
}

function encriptarDesencriptar(modo, texto) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"], ["u", "ufat"]]

    texto = texto.toLowerCase()
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto.includes(matrizCodigo[i][0]) && modo == "Encriptar") {
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
        
        if (texto.includes(matrizCodigo[i][1]) && modo == "Desencriptar")  {
            texto = texto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])  
        }
    }

    return texto;
}

TEXT_AREA.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}.bind(TEXT_AREA), false);

BOTON_ENCRIPTAR.addEventListener('click', ()=> {
    botones("Encriptar");

})
BOTON_DESENCRIPTAR.addEventListener('click', ()=> {
    botones("Desencriptar");
})

BOTON_COPY.addEventListener('click', ()=> {
    let auxiliar = document.createElement("textarea");
    auxiliar.textContent = TEXTO_RETORNADO.textContent;
    document.body.appendChild(auxiliar);
    auxiliar.select();
    document.execCommand("copy");
    document.body.removeChild(auxiliar);    
    alert("¡Texto copiado!");
})
