// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  const array = Object.entries(objeto)
  return array
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const arrString = string.split('')
  const object = {}
  arrString.forEach(letter => {
    object[letter] = object[letter] ? object[letter] + 1 : 1
  })
  return object
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  const arrStr = s.split('')
  let arrUpper = []
  let arrLower = []
  arrStr.forEach((letter) => {
    letter === letter.toUpperCase() ?
      (arrUpper = [...arrUpper, letter]) :
      (arrLower = [...arrLower, letter])
  })
  const strFinal = [...arrUpper, ...arrLower].join('')
  return strFinal
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  const arrStr = str.split('')
  let arr = []
  arrStr.forEach((letter) => {
    arr = [letter, ...arr]
  })
  let arr2 = arr.join('').split(' ')
  let arr2Aux = []
  arr2.forEach(word => {
    arr2Aux = [word, ...arr2Aux]
  })
  const finalStr =  arr2Aux.join(' ')

  return finalStr
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  const strNum = numero.toString()
  const strNumRev = strNum.split('').reverse().join('')
  return strNum === strNumRev ? "Es capicua" : "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  const letters = {
    a: 'a',
    b: 'b',
    c: 'c'
  }
  const arrLetters = cadena.split('')
  const arrLettersFinal = arrLetters.filter(letter => letter !== letters[letter])
  return arrLettersFinal.join('')
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  const sortedArr = arr.sort((a, b) => a.length > b.length ? 1 : (a.length < b.length) ? -1 : 0)
  return sortedArr
}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  let arr = []
  arreglo1.forEach(number => {
    const index = arreglo2.findIndex(number2 => number2 === number)
    index > -1 && (arr = [...arr, arreglo2[index]])
  })
  return arr
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

