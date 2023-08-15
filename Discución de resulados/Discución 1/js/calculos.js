function contarCifras(numero) {
    // Convertir el número en una cadena y contar la longitud
    const cantidadCifras = Math.abs(numero).toString().length;
    return cantidadCifras;
}
function contarCifrasImpares(hastaNumero) {
    let cifrasImpares = 0;

    for (let i = 1; i <= hastaNumero; i++) {
        if (i % 2 !== 0) {
            cifrasImpares++;
        }
    }

    return cifrasImpares;
}
function contarNumerosPares(hastaNumero) {
    let numerosPares = 0;

    for (let i = 1; i <= hastaNumero; i++) {
        if (i % 2 === 0) {
            numerosPares++;
        }
    }

    return numerosPares;
}

function sumarCifrasImpares(hastaNumero) {
    let sumaImpares = 0;

    for (let i = 1; i <= hastaNumero; i++) {
        if (i % 2 !== 0) {
            sumaImpares += i;
        }
    }

    return sumaImpares;
}

function sumarNumerosPares(hastaNumero) {
    let sumaPares = 0;

    for (let i = 1; i <= hastaNumero; i++) {
        if (i % 2 === 0) {
            sumaPares += i;
        }
    }

    return sumaPares;
}
function sumarTodasCifras(numero) {
    let sumaTotal = 0;

    for (let i = 1; i <= numero; i++) {
        const digitos = Array.from(i.toString()).map(Number);
        sumaTotal += digitos.reduce((acc, curr) => acc + curr, 0);
    }

    return sumaTotal;
}
function encontrarNumeroMenor(hastaNumero) {
    let numeroMenor = Infinity;

    for (let i = 1; i <= hastaNumero; i++) {
        if (i < numeroMenor) {
            numeroMenor = i;
        }
    }

    return numeroMenor;
}

function encontrarNumeroMayor(hastaNumero) {
    let numeroMayor = -Infinity;

    for (let i = 1; i <= hastaNumero; i++) {
        if (i > numeroMayor) {
            numeroMayor = i;
        }
    }

    return numeroMayor;
}

const numeroIngresado = parseInt(prompt("Ingrese un número entero:"));
const cantidadCifras = contarCifras(numeroIngresado);
const cantidadCifrasImpares =  contarCifrasImpares(numeroIngresado);
const cantidadNumerosPares = contarNumerosPares(numeroIngresado);
const sumaCifrasImpares = sumarCifrasImpares(numeroIngresado);
const sumaNumerosPares = sumarNumerosPares(numeroIngresado);
const sumaTodasCifras = sumarTodasCifras(numeroIngresado);
const numeroMenor = encontrarNumeroMenor(numeroIngresado);
const numeroMayor = encontrarNumeroMayor(numeroIngresado);







document.write("<header><h1>Cantidad de cifras: ", cantidadCifras, "</h1><hr></header>");
document.write("<header><h1>Impares : ", cantidadCifrasImpares, "</h1><hr></header>");
document.write("<header><h1>Pares : ", cantidadNumerosPares, "</h1><hr></header>");
document.write("<header><h1>Suma de impares : ", sumaCifrasImpares, "</h1><hr></header>");
document.write("<header><h1>Suma de pares : ", sumaNumerosPares, "</h1><hr></header>");
document.write("<header><h1>Suma de todas las cifras : ", sumaTodasCifras, "</h1><hr></header>");
document.write("<header><h1>Cifra menor : ", numeroMenor, "</h1><hr></header>");
document.write("<header><h1>Cifra mayor : ", numeroMayor, "</h1><hr></header>");
