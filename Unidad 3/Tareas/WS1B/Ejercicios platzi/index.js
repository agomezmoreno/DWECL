// ejercicio 3
export function addNewAttr(array) {
    for (let i = 0; i < array.length; i++) {
      let taxes = Math.floor(array[i].price * 0.19);
      array[i].taxes = taxes;
    }
    return array;
  }
  

  // ejercicio 4
  export function filterByLength(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].length >= 4) {
        result.push(array[i]);
      }
    }
    return result;
  }
  

  // ejercicio 5
  export function filterOrders(arrays) {
    let result = [];
    for (let i = 0; i < arrays.length; i++) {
      if (arrays[i].total >= 100 && arrays[i].delivered === true) {
        result.push(arrays[i]);
      }
    }
    return result;
  }


  // ejercicio 6
  export function checkInString(text, term) {
    text = text.toLowerCase();
    term = term.toLowerCase();
  
    if (text.includes(term)) {
      return true;
    } else {
      return false;
    }
  
  }

 // ejercicio 7
