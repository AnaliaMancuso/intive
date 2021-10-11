// 5 arr = [2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"] 
//   eliminar los elementos repetidos, nota: (el segundo elemento repetido)  
//   output => [2, 4, 7, 1,  "foo", "bar", "qux", 3] 

let arr = [2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"] 

let newArray = Array.from(new Set(arr));
console.log(newArray)