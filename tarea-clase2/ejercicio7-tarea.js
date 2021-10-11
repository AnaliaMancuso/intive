// 7 str = "hola mundo desde javascript" 
//   pasar un string en array, indicar los espacios en blanco por "-"  
//   output => ["hola","-", "mundo", "-", "desde", "-", "javascript"] 

let str = "hola mundo desde javascript";

let replace = str.replaceAll(' ', ' - ')
console.log(replace)

let arr2 = replace.split(' '); 
console.log(arr2)


