
var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {  //si no manda nada, se agarra el body y empieza a recorrer de ahi
    startEl = document.body;
  }

  //? recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  //? usa matchFunc para identificar elementos que matchien
  //? TU CÓDIGO AQUÍ

  if(matchFunc(startEl)) resultSet.push(startEl);

  for (let i = 0; i < startEl.children.length; i++) {   // .children me permite agarrar todos los hijos de la etiqueta
    let aux= traverseDomAndCollectElements (matchFunc, startEl.children[i])
    resultSet = [...resultSet, ...aux]  //concatenar los elementos de dos arrays: resultSet y aux. El resultado de esta operación se asigna nuevamente a la variable resultSet.
  }

  return resultSet;
};


//? Detecta y devuelve el tipo de selector
//? devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) { //'#hola' , '.class', 'div', 'span.hola'
  // tu código aquí
  if(selector[0] === '#') return 'id';
  if (selector[0] === '.') return 'class';
  if(selector.split('.').length > 1) return 'tag.class';  //['span', 'hola']
  return 'tag';
};


//? NOTA SOBRE LA FUNCIÓN MATCH
//? recuerda, la función matchFunction devuelta toma un elemento como un
//? parametro y devuelve true/false dependiendo si el elemento
//? matchea el selector.

let matchFunctionMaker = function (selector) {   //'#hola' , '.class', 'div', 'span.hola'
  let selectorType = selectorTypeMatcher(selector);
  console.log(selectorType)
  let matchFunction;
  if (selectorType === "id") {
    matchFunction = (element)=> `#${element.id}` === selector  //retorna una funcion

  } else if (selectorType === "class") {
    console.log("clase")
    matchFunction = (element)=> {  //<span class="clase1 clase2 clase3"></span>
      let clases = element.classList;
      return clases.contains(selector.slice(1));  //el slice borra el punto
    }

  } else if (selectorType === "tag.class") {   //div.buenos  (tag y clase)

    matchFunction=(element) =>{
      const [tag, className] = selector.split('.')  // ['div','buenos']
      //matchFunctionMaker retorna una función y se llama enviando el element
      return (matchFunctionMaker(tag)(element) && matchFunctionMaker(`.${className}`)(element))
    }

  } else if (selectorType === "tag") {
    matchFunction = (element)=> element.tagName.toLowerCase() === selector
  }
  return matchFunction;
};

var matchFunc = matchFunctionMaker(".title");   //funcion de coincidencia generada


var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
