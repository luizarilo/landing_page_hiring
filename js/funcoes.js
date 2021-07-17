$(function(){
    var tbClientes = localStorage.getItem("tbClientes");
    tbClientes = JSON.parse(tbClientes); 
    if(tbClientes == null)
    tbClientes = [];
});

function Adicionar(){
    var cliente = JSON.stringify({
        Nome     : $("name").val(),
        Email    : $("email").val()
    });
    tbClientes.push(cliente);
	localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
	alert("Registro adicionado.");
	return true;
}

$("#contactForm").on("submit",function(){
			return Adicionar();
}); 