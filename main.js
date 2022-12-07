let str = "*"
while (str.length <= 7){
    console.log(str);
    str += "*"   

}





for(let i=1;101>i;i++)
console.log(i%5||i%3?i%3?i%5?i:"Buzz":"Fizz":"FizzBuzz");


let size = 8;
let dot = "#";
let string = '';
for (let i = 0; i<size; i++){
  for (let j = 0; j<size; j++){
    if (i%2===0){
      if (j%2===0){
        string+=dot;
      }else{
        string+=' ';
      }
    }else{
      if (j%2===1){
        string+=dot;
      }else{
        string+=' ';
      }
    }
  }
  string+="\n";
}
console.log(string);



