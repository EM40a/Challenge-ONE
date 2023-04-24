const BOTON_ENCRIPTAR = document.getElementById('btn-encript');
const BOTON_DESENCRIPTAR = document.getElementById('btn-decript');
const BOTON_COPY = document.getElementById('btn-copy');
const CONTENEDOR_TEXTO = document.getElementById('content-text');
const TEXTO_INGRESADO = document.getElementById('textarea');
const TEXTO_RETORNADO = document.getElementById("textoDecodificado");

function validarTexto(texto) {
    const REGEX = /^[a-z0-9\s,.!?]+$/;
    REGEX.test(texto) && texto.length > 0 ? estado = true : estado = false
    return estado;
}

function encriptar(texto) {
    //Recibe un texto como parametro y lo encripta con las claves dadas
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    return texto;
}

function desencriptar(texto) {
    // Reemplazar las letras encriptadas con su versión original
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    return texto;
}

function encriptarODesencriptar(texto, accion) {
    //Valida el texto y de ser valido ejecuta la accion indicada
    if (validarTexto(texto) == true) {
        CONTENEDOR_TEXTO.classList.add('active');
        accion == 'Encriptar' ? textoFinal = encriptar(texto) : textoFinal = desencriptar(texto)
        TEXTO_RETORNADO.innerHTML = textoFinal
    }
    else {
        console.log('El texto es invalido');
    }
}

TEXTO_INGRESADO.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}.bind(TEXTO_INGRESADO), false);

BOTON_ENCRIPTAR.addEventListener('click', ()=> {
    encriptarODesencriptar(TEXTO_INGRESADO.value, 'Encriptar')
})
BOTON_DESENCRIPTAR.addEventListener('click', ()=> {
    encriptarODesencriptar(TEXTO_INGRESADO.value, 'Desencriptar')
})

BOTON_COPY.addEventListener('click', ()=> {
    //Copia el texto al portapapeles
    navigator.clipboard.writeText(TEXTO_RETORNADO.innerHTML);
})
