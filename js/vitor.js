const botaoPesquisa = document.querySelector('.search-button');
const inputBusca = document.querySelector('input[type="search"]');

// botaoPesquisa.addEventListener('click', () => {
//  alert(`Você pesquisou por: ${inputBusca.value}`);
// });


// Validação do formulário (popup login)
function logar(){
  var login = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;
   if(login == 'teste' && senha == 'teste'){
     alert('sucesso');
   }else {
     alert('Senha ou usuário incorretos')
   }
 }
 