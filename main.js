
// Slice()----------------------------------------------------Recortando arrays

//Parámetros : el primer parámetro es incluido, el segundo es el límite y no es incluido.
//                                                (     *                             /    x    )
//positions:                   0      1       2         3            4         5           6          7      8   9 
        // let arrayExample = ["auto","moto","lancha","bicicleta","patineta","paracaidas","triciclo","rollers","x","j",]
        // let arrayPostSlice = arrayExample.slice(3,5)
        // console.log(arrayPostSlice)



// Splice()---------------------------------------------------
//Parámetros : El valor del primer argumento es incluido y el segundo argumento indica la cantidad total de elementos que quiero apartir del primero.

//                                                 (    *                                                     * )
//positions:                  0       1       2         3            4         5           6          7       8   9 
        // let arrayExample2 = ["auto","moto","lancha","bicicleta","patineta","paracaidas","triciclo","rollers","x","j",]
        // let arrayPostSplice2 = arrayExample2.splice(3,6)
        // console.log(arrayPostSplice2)


// For anidado: Queremos imprimir todos los numeros que estan en los arrays del array principal:

        // let arrayBase = [
        //   [1, 2, 3],  // 0
        //   [4, 5, 6], // 1
        //   [7, 8, 9] //2
        // ];
// 
        // let sumaTotal = 0 //28

        // for (let x = 0; x < arrayBase.length; x++) {
        
        //   //x = 3
        //   for (let j = 0; j < arrayBase[x].length; j++) {
        //     sumaTotal = sumaTotal + arrayBase[x][j]
        // //     console.log(    arrayBase[x]    [j]);
        //     //               [7, 8, 9]       2
        //   }
        
          
        // }


        // const parientes = [
        //         {
        //                 nombre:"Juan",
        //                 numerosDeSuerte: [234,54],
        //                 altura: 180
        //         },
        //         {
        //                 nombre:"Pepe",
        //                 numerosDeSuerte: [263,753,747,5325235,346,7,6,666,7],
        //                 altura: 190
        //         },
        //         {
        //                 nombre:"Martin",
        //                 numerosDeSuerte: [969,33,347],
        //                 altura: 165
        //         }
        // ]

        // let sumaNumerosSuerte = 0

        // for(let i = 0 ; i < parientes.length ; i++){

        //         for(let j = 0 ; j < parientes[i].numerosDeSuerte.length ; j++){
        //                 sumaNumerosSuerte = sumaNumerosSuerte + parientes[i].numerosDeSuerte[j]

        //         }
        // }


//         console.log(sumaTotal)

// --Y con for of ?--------------------------------------------------------------------------------------

        // const array = [
        //   [1, 2, 3], //fila
        //   [4, 5, 6], //fila
        //   [7, 8, 9]  //fila
        // ];

        // let arrRondCounter = 0

        // for (const fila of array) {

        //   for (const elemento of fila) {
        //     console.log(elemento); //Mostrar truco de sumar un "" string vacio para cambiar el tipo.
        //   }  
          
        //   contadorArraysRecorridos += 1

        // }
        // console.log("La cantidad de arrays recorridos son : ", contadorArraysRecorridos)

// ----Y si es un array de objetos?----------------------------------------------------------------------



        // let arrayBase = [
        //   {nombre:"Eugenio",edad:17},
        //   {nombre:"Maria",edad:19},
        //   {nombre:"Juan",edad:18}
        // ];

        // for (const obj of arrayBase) {
        //       console.log(obj.nombre) 
        // }


// -------Y si es un objeto con arrays en sus propiedades?----------------------------------------------

        // let objetoBase = {
        //   marcas: ["McLaren", "Volvo", "Ferrari"],
        //   tipos: ["motos", "autos", "camionetas"],
        //   pesos: [1200, 850, 1600]
        // };

        // for (const propiedad in objetoBase) {
 
          
          
        //       const array = objetoBase[propiedad];
          
        //           for (const valor of array) {
        //             console.log(valor);
        //           }
          
          
          
        // }

// ----------------------------------------------------

//                           0   1   2  3  4
        // let mySampleArray = [23,12, "x",14,39]



        // let initialValue = Math.floor(mySampleArray.length / 2);
        // let stopValue = mySampleArray.length;
        // let increasingValue = 1;

        // for(let i = initialValue; i<stopValue; i = i + increasingValue){
        // 	console.log(mySampleArray[i]);
        // }



        // let primerValor =  Math.floor(mySampleArray.length / 2);

        // console.log(mySampleArray.slice(primerValor,4))
     



// 1 - Crear array para recorrer

// let array = [[1,2,3],[,4,5,6],[7,8,9]]

// 2 - Crear funcion que ejecute lo que quiero hacer

// let functionToConsoleLog = (arrayRecibed) => {


//         let contador = 0;

//         for( arr of arrayRecibed){


//                 for(number of arr){
//                         console.log()
//                 }
//         }



// }

// functionToConsoleLog(array)

// 3 - La funcion necesita de algo? - Preparo el area de argumentos

// 4 - Contenido de la funcion./ Escuche recorrer? Pienso en un bucle for of (en el caso de un array)

// 5 - Si tenemos que recorrer un elemento de un array ( tenemos una situacion de for anidado )

// 6 - Para que estamos recorriendo todos los elementos de los arrays dentro del array general ?

        // - Si sumamos valores, necesitamos contadores.