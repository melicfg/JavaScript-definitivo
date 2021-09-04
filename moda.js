const lista1 = [
    1,
    1,
    2,
    3,
    5,
    3,
    6,
    4,
    7,
    8,
    8,
    9,
    9,
    9,
    10,
    10,
    2,
    3,
];

const lista1Count = {};

lista1.map(
    function(elemento){
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function(a, b) {
        return a[1] - b [1];
    }
);

console.log(lista1Array);

const moda = lista1Array[lista1Array.length-1];