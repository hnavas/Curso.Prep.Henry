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
  var newArray = Object.entries(objeto);
  
  return newArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var newObject = {};
  for(var i = 0; i < string.length; i++){
       //Opcion Uno
    //if(!newObject[string.charAt(i)]){
    //newObject[string.charAt(i)] = 1;
    //}else {
      //newObject[string.charAt(i)] = newObject[string.charAt(i)] + 1;
    //}

       //Opcion Dos
    newObject[string[i]] = (newObject[string[i]] || 0) + 1;
  }
  return newObject;
  
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var upper = '',
      lower = '';
  for(var i = 0; i < s.length; i++){
    if(s[i] === s[i].toUpperCase()){
      upper += s[i];
    }else{
      lower += s[i];
    }
  }
  return upper + lower;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  
  var strText = str.split(' ');
  var strReverse = [];
  var strResult = [];
  for(var i = 0; i < strText.length; i++){
    for(var j = 0; j < strText[i].length; j++){
        strReverse.unshift(strText[i].charAt(j));
      }
      strResult.push(strReverse.join(''));
      strReverse = [];
      }
      return strResult.join(' ');
    } 



function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  c = numero.toString();
  inversa=[]
  for(var i=1 ; i<=c.length ; i++){
    inversa.push(c.charAt(c.length-i));
  }
  if(inversa.join('') === c){
        return "Es capicua";
  }else{
        return "No es capicua";
  }
} 


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var newString ="";
  for(var i = 0; i < cadena.length; i++){
    if( cadena[i] !== 'a' && cadena[i] !== 'b' && cadena[i] !== 'c' ){
      newString += cadena[i]; 
    }
  }
  return newString;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var arr1 = arr.sort((a, b) => a.length - b.length);
  return arr1;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  var newArray = [];
  for ( var i = 0; i < arreglo1.length; i++) {
    for ( var j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]){
        newArray.push(arreglo1[i]);
      }
    }
  }
  return newArray;
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

