const converteMaiusculas = texto => texto.toUpperCase();

const converteMinusculas = texto => texto.toLowerCase();

function formataMoeda(valor) {
    return valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    });
}

export {
    converteMaiusculas,
    converteMinusculas,
    formataMoeda
}