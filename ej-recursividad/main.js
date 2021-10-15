//EJERCICIOS DE RECURSIVIDAD
var lista = [4,5,1,3,6,7,9,0,3]; // total de numeros pares e impares

function iterar(lista) {  
    let pos =0;
    let par = 0;
    let impar =0;
    function recursiva(lista) {
        if(pos == lista.length){
            return `pares: ${par} impares: ${impar}`;
        }
        if (lista[pos] % 2 !=0) {
            impar++;
        } else {
            par++;
        }
        pos++;
        return recursiva(lista);
        }
     return recursiva(lista); 
    }
console.log(iterar(lista))

var lista2 = [4,5,1,3,6,3,3,3,7,9,0,3]; // total de veces del numero 3

function veces(lista2) {
    let pos=0;
    let tres=0;
    function igualar(lista2) {
        if(pos == lista2.length){
            return tres;
        }
        if (lista2[pos] == 3) {
            tres++;
        } 
        pos++;
        return igualar(lista2);
    }
    return igualar(lista2)   
}
console.log(veces(lista2))


var lista3 = [4,5,1,3,6,7,9,0,3]; // buscar si existe un numer n en el array
let num = 11;
function existe(lista3) {
    let pos=0;
    function buscar(lista3) {
        if(pos > lista3.length) {
            return `no se encontró el número ${num}`
        }
        if (lista3[pos] == num) {
            return `el número ${num} se encuentra en el array`
        } 
        pos++;
        return buscar(lista3);
    }
    return buscar(lista3)  
}
console.log(existe(lista3))
