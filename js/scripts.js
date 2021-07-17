submitButton.addEventListener("click",function(){
    let nomeUsuario = document.getElementById("name").value;
    let emailUsuario = document.getElementById("email").value;
    localStorage.setItem('nomeUsuario',JSON.stringify(nomeUsuario));
    localStorage.setItem('emailUsuario',JSON.stringify(emailUsuario))  
})
  