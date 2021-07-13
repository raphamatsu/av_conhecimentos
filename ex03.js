var meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

function qualMes(mes) {
    if (mes<0 || mes>12) {
        return 'Não é um mês válido'
    }

    return meses[mes-1]
}
