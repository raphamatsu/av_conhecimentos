function liquido(horas, valorHora) {
    var bruto = horas * valorHora;
    var inss
    if(bruto<=1000) {
        inss = bruto*(8,5/100);
    }
    else {
        inss = bruto*(9/100);
    }
    
    return bruto - inss
}