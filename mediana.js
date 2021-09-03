const lista1 = [
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
]


function esPar(tamanoLista) {
    if (tamanoLista % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}


function mediana(lista) {
    const mitadLista = parseInt(lista.length / 2);
    const listaOrdenada = lista.sort((a,b)=>a-b);
    const mitadListaPar = (listaOrdenada[mitadLista] + listaOrdenada[mitadLista-1])/2;
    if (esPar(lista.length)) {
        return mitadListaPar;
    } else {
        return listaOrdenada[mitadLista]; 
    }
}

const resultado = mediana(lista1);
