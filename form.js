function validation() {
    var x=document.getElementById("name").value
    var p=document.getElementById("pass").value
    var em=document.getElementById("email").value
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var cp=document.getElementById("cpass").value
    var no=document.getElementById("no").value
    if (x==""){
        alert("Name can't be blank");
        return false;
    } 
    if(p.length<6){  
        alert("Password must be at least 6 characters long.");  
        return false;
    } 
    if(cp!=p){
        alert("Password does not match");
        return false;
    }
    if(em.match(mail)){
        alert("valid email");
        return true;
    }
    if(no!=10){
        alert("invalid mobile no");
        return false;
    }
  }