//1) MOSTRAR SI EL NUMERO DEL PARAMETRO ES PAR O IMPAR
const unPar = (n) => {
    if(n % 2 == 0) {
        console.log(`El  numero ${n} es par`)
    }
      else if(n % 2 !== 0) 
        console.log(`El numero ${n} es impar`)
    }
    unPar(12);

    //2) MOSTRAR QUE NUMERO DE PARAMETRO ES MAYOR Y MENOR, SI SON IGUALES INDICARLO
 const comparacion = (a, b) => {
    if (a > b) {
        console.log(`${a} es mayor a ${b}`);
    }
    else if(a < b) 
        console.log(`${a} es menor a ${b}`);
    else {
        console.log('A y B son iguales') 
}
        }
 comparacion(2, 2);

 //3)INDICAR SI EL PARAMETRO DE ESTA FUNCION ES MULTIPLO DE 5
const multiplodeCinco = (h) => {
   if(h % 5 == 0){
    console.log(`El numero ${h} es multiplo de 5`);
   }
else if(h % 5 !== 0) {
    console.log(`${h} no es multiplo de 5`)
}
}
multiplodeCinco(14);

//4)MOSTRAR RECORRIDO DESDE 0 HASTA EL NUMERO DEFINIDO POR PARAMETRO
const deCero = (j) => {
    for(let f = 0; f<=j; f++)

    console.log(f);
}
 deCero(7);  
 
 
 //5)REVISAR QUE SALIO MAL!*/
 const numMasString = (e, r) => {
  
console.log(r.repeat(e));
 
  }
 numMasString(3, 'hola');
 
 /*6)REVISAR //NO MUESTRA EL CONTENIDO 
 const arrayN = [1, 2, 3, 4, 5, 6];
 const miArray = (arrayN) => {
    for (let i=0; i < arrayN.length; i++) {
        console.log(arrayN[i]);
    }
}*/
  
 const numerosN = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*for (let i=0; i < numerosN.length; i++) {
    console.log(numerosN[i]);//MUESTRA EL CONTENIDO
}
//7)REVISAR
const restarUnArray = (numerosN) => {
    for(let i=0; i<=numerosN.length; i++) {
        if(i===5){
            continue;
        }
       
    }
    console.log(numerosN[i]);
}*/

//8)MULTIPLICAR EL CONTENIDO DEL ARRAY POR EL PARAMETRO.
       
        const multiplicarArray = (l) => {
           for(i=0; i<numerosN.length; i++) {
            console.log(`${l} por ${i + 1} es igual a ${numerosN[i]*l}`);
           }
        }
multiplicarArray(2);