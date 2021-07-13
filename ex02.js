var ano = [15000, 23000, 17000, 12000, 15000, 19000, 18000, 21000, 22000, 20000, 240000, 23000];
var soma = 0;

function calculaTri(mesInicio, mesFim) {

    for (i=mesInicio-1;i<mesFim;i++) {
        var mes = ano[i]
        soma += mes;
    }
    
    return soma
}