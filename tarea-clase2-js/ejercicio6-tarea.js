// 6 arr = [1,3,4,2,6,7,9,1, 8] 
//  indicar el total de elementos impares 
//  output => 5 

let arr = [1,3,4,2,6,7,9,1,8];
let x=0;
for(let i= 0;i<arr.length;i++){
    if(arr[i] % 2 !=0){
        x++;
    }
}
console.log(x)