let first = document.getElementById("num");
let second = document.getElementById("num1");
let output = document.getElementById("result");
let user = document.getElementById("user");
let input1 = Math.random() * 100;
let check1 = Math.ceil(input1);
let int = parseInt(check1);
first.textContent = check1;
let input2  = Math.random() * 100;
let check2 = Math.ceil(input2);
let int2 = parseInt(check2);
second.textContent = check2;
let final = int + int2;
function check(){
  let last = user.value;
  let last1 = parseInt(last);
  // if(last == " "){
  //   alert("Please Enter The Value  Before Check")
  // }else{
  //   alert("Time Out!")
  // }
  if(last1 === final){
    output.textContent = "Yes The Answer is correct!";
    last1 = "";
  }
  else{
    output.textContent = "Wrong answer Entered!";
  }

}
function reset(){

let input1 = Math.random() * 100;
let check1 = Math.ceil(input1);
// let int = parseInt(check1);
first.textContent = check1;

let input2  = Math.random() * 100;
let check2 = Math.ceil(input2);
// let int2 = parseInt(check2);
second.textContent = check2;

// let final = int + int2;
// let last = user.value;
// let last1 = parseInt(last);
// user.value.textContent = " ";
// if(last1 === final){
//   output.textContent = "Yes The Answer";
//   last1 = "";
// }
// else{
//   output.textContent = "Wrong answer Entered";
//   last.textContent = " ";
// }
// last1.textContent = " ";
}