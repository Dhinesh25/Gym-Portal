  function Form_validation(){
    let Username = 
        document.forms['loginform']['uname'];
    let Password = 
        document.forms['loginform']['psw'];

    if(Username.value == ""){
        alert("Enter the user name");
        return false;
    }    
    if(Password.value == ""){
        alert("Enter the Password");
        return false;
    } 

    var username_pattern = /^[a-zA-Z0-9]{8,15}$/;
    if(username_pattern.test(Username.value)==false){
      alert("Please enter a valid username");
      return false;
    }
    var pass_pattern=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(pass_pattern.test(Password.value)==false){
      alert("Please enter a strong password with a special character, an uppercase letter and smaller case letter with a number");
      return false;
    }
  }

