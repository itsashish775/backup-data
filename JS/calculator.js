let c="";
let str="";
function get(ele){
    c=ele.id;
    let x=document.getElementById(c).innerHTML;
    str+=x;
    console.log(str);
    show();
}
function delOne(){
    // console.log("this is del");
    let str1="";
    for(let i=0;i<str.length-1;i++){
        str1+=str.charAt(i);
    }
    
    str=str1;
    show();
}
function show(){
    document.getElementById("textField").value=str;
}
function showResult(){
    let str1=solve(str);
    document.getElementById("result").innerHTML=str1;
    
}
function reset(){
    document.getElementById("textField").value="0";
    document.getElementById("result").innerHTML="0";
    str=0;
    
}
function solve(str) {
  var expressionIndex = Math.max(str.lastIndexOf("-"), str.lastIndexOf("+"));
  if (expressionIndex === -1) {
    expressionIndex = Math.max(str.lastIndexOf("*"), str.lastIndexOf("/"));
  }
  if (expressionIndex === -1) {
    var num = Number.parseInt(str.trim());
    if (isNaN(num)) {
      throw Exception("not a valid number");
    } else {
      return num;
    }
  } else {
    var leftVal = solve(str.substring(0, expressionIndex).trim());
    var rightVal = solve(str.substring(expressionIndex + 1).trim());
    switch (str[expressionIndex]) {
      case "+":
        return leftVal + rightVal;
      case "-":
        return leftVal - rightVal;
      case "*":
        return leftVal * rightVal;
      case "/":
        return leftVal / rightVal;
    }
  }
}
