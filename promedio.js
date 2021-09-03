const lista1 = [
    100,
    200,
    300,
    400,
    500,
    600,
];



function calcularPromedio(lista) {
    const sumaLista = lista.reduce(calcularSuma);

    function calcularSuma(acumulado, numero) {
        return acumulado + numero;
    }   
    const promedio = sumaLista / lista.length;
    return promedio;
}