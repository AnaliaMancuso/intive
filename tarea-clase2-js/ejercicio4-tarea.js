// 4 arr = [10, "20", 30, "40", 50] 
//   verificar cada elemento sea de  tipo number y sino lo es cambiar su  tipo 
//   a number 
//   output => [10, 20, 30, 40, 50] 

let arr = [10, "20", 30, "40", 50];

let newArray = arr.map(Number);
console.log(newArray)

