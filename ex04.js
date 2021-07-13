var taxa = [10, 25, 30, 50];

function calcular(valor, codigo) {
    return valor*(1+taxa[codigo-1]/100)
}