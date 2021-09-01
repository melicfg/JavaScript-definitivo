//Cuadrado
console.group("Cuadrado");



// const ladoCuadrado = 5;

// console.log("Los lados del cuadrado miden " + ladoCuadrado + " cm");

function perimetroCuadrado (lado) {
    return lado*4;
}

//console.log("El perimetro del cuadrado es " + perimetroCuadrado + " cm");

function areaCuadrado(lado) {
   return lado**2; 
} 

// console.log("El area del cuadrado es " + areaCuadrado + "cm^2");

console.groupEnd();

//Triangulo
console.group("Triangulo");


// const ladoTriangulo1 = 5;

// const ladoTriangulo2 = 5;

// const baseTriangulo = 5;

// const alturaTriangulo = 5;

// console.log("Los lados del triangulo miden " + ladoTriangulo1 + " cm y " + ladoTriangulo2 + " su base " + baseTriangulo + " cm y su altura" +alturaTriangulo+ " cm.");

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}
 

// console.log("El perimetro del Triangulo es " + perimetroTriangulo + " cm");

function areaTriangulo (base, altura) {
    return (base*altura)/2;
} 

// console.log("El area del Triangulo es " + areaTriangulo + "cm^2");

console.groupEnd();

//Circulo
console.group("Circulo");


// const radioCirculo = 5;

// console.log("El radio del Circulo miden " + radioCirculo + " cm");

const PI = Math.PI;

function perimetroCirculo(radio) {
   return radio*2*PI;
} 

// console.log("El perimetro del Circulo es " + perimetroCirculo + " cm");

function areaCirculo(radio) {
    return (radio**2)*PI;
}  

//console.log("El area del Circulo es " + areaCirculo + "cm^2");

console.groupEnd();

function calcPerimetroCuadrado () {
    const value = document.getElementById("input_cuadrado").value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcAreaCuadrado () {
    const value = document.getElementById("input_cuadrado").value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcPerimetroTriangulo () {
    const lado1 = parseInt(document.getElementById("input_triangulo").value);
    const lado2 = parseInt(document.getElementById("input_triangulo2").value);
    const base = parseInt(document.getElementById("input_triangulo3").value);
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcAreaTriangulo () {
    const altura = document.getElementById("altura_triangulo").value;
    const base = document.getElementById("input_triangulo3").value;
    const area = areaTriangulo(base, altura);
    alert(area);
}

function calcPerimetroCirculo () {
    const radio = document.getElementById("input_circulo").value;
    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcAreaCirculo () {
    const radio = document.getElementById("input_circulo").value;
    const area = areaCirculo(radio);
    alert(area);
}