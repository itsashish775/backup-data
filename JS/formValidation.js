function nameValidate(str, id, e) {
  // console.log(str, id);
  let id1 =
    id == "fname" ? "First Name" : id == "mname" ? "Middle Name" : "Last Name";
  if (str == "") {
    if (id == "mname") {
      document.getElementById(e).innerHTML = "";
    } else {
      document.getElementById(e).innerHTML = '* '+id1 + " is mendatory";
    }
  } else if (!checkChar(str)) {
    document.getElementById(e).innerHTML =
      "* In " + id1 + " only white space and a-z and A-Z are allowed";
  } else {
    document.getElementById(e).innerHTML = "";
  }
}
function dobValidate() {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  // console.log(day, month, year);
  if (day != "DD" && month != "MM" && year != "YYYY") {
    document.getElementById("derror").innerHTML = "";
  } else {
    document.getElementById("derror").innerHTML = "* Please Enter valid date";
  }
}
function genderValidate() {
  const arr = document.getElementsByName("gender");
  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].checked == true) {
      document.getElementById("radio").innerHTML = "";
      break;
    } else {
      document.getElementById("radio").innerHTML = "* please choose gender";
    }
  }
}
function ValidateEmail() {
  let inputText=document.getElementById('email');
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    document.getElementById('emailErr').innerHTML='';
    return true;
  } else {
    document.getElementById('emailErr').innerHTML="* You have entered an invalid email address!";
    return false;
  }
}
function validateEducation(){
  let name=document.getElementsByName('education');
  // console.log(name);
  for(let i=0;i<name.length;i++){
    if(name[i].checked==true){
      document.getElementById('qualification').innerHTML="";
      break;
    }else{
      document.getElementById('qualification').innerHTML="* Please select atleast one!!";
    }
  } 
}
function validAddress(){
  let add1=document.getElementById('add1');
  let add2=document.getElementById('add2');
  if(add1.value!=''||add2.value!=''){
    document.getElementById('address').innerHTML='';
  }else{
    document.getElementById('address').innerHTML='* address field is mendatory';
  }
}
function validateMobile(){
  let num=document.getElementById('mobile').value;
  if(num==''){
    document.getElementById('mobileError').innerHTML='* Mobile number is required.';
  }
  else if(Number(num)){
    if(num.length<10){
      document.getElementById('mobileError').innerHTML='* enter at least 10 digit';
    }else{
      document.getElementById('mobileError').innerHTML='';
    }
  }else{
    document.getElementById('mobileError').innerHTML='* only digits 0-9 are allowed';
  }
}
function validTC(){
  let check=document.getElementById('check').checked;
  console.log(check);
  if(check==true){
    document.getElementById('cheError').innerHTML='';
  }else{
    document.getElementById('cheError').innerHTML='Please select check box and read terms and conditions.';
  }
  
}
function validpinCode(){
  let num=document.getElementById('post').value;
  if(num==''){
    document.getElementById('pincodeError').innerHTML='* pincode number is required.';
  }
  else if(Number(num)){
    if(num.length<6){
      document.getElementById('pincodeError').innerHTML='* enter at least 6 digit';
    }else{
      document.getElementById('pincodeError').innerHTML='';
    }
  }else{
    document.getElementById('pincodeError').innerHTML='* only digits 0-9 are allowed';
  }

}
function resetform(){
  location.reload();
}
function uploadData() {
  let fname = document.getElementById("fname").value;
  let mname = document.getElementById("mname").value;
  let lname = document.getElementById("lname").value;
  // console.log(fname, mname, lname);
  // if (fname == "") {
  //   nameValidate(fname, "fname",'err1');
  // } else {
  //   nameValidate(fname, "fname");
  // }
  nameValidate(fname, "fname", "err1");
  nameValidate(mname, "mname", "err2");
  nameValidate(lname, "lname", "err3");
  dobValidate();
  genderValidate();
  ValidateEmail();
  validateEducation();
  validAddress();
  validateMobile();
  validpinCode();
  validTC();
}
function checkChar(str) {
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    if (
      (str.charAt(i) < "a" || str.charAt(i) > "z") &&
      (str.charAt(i) < "A" || str.charAt(i) > "Z")
    ) {
      return false;
    }
  }
  return true;
}
