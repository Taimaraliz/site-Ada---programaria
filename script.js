document.getElementByID("botaoEnviar").addEventlistener("click",validaformulario)

function validaformulario(){
  if(document.getElementByID("nome").value != "" && 
  document.getElementByID("telefone").value !="" &&
  document.getElementbyID("email").value != ""){
    alert ("prontinho! Você receberá as novidades por email.")
  }else{
     alert ("Por favor, preencha os campos de nome, telefone e email.")
  }
}