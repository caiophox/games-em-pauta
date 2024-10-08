// Menu hambúrguer
const menuDiv = document.getElementById("menu-mobile");
const btnAnimar = document.getElementById("btn-menu");

menuDiv.addEventListener("click", animarMenu)

function animarMenu(){
    menuDiv.classList.toggle("abrir");
    btnAnimar.classList.toggle("ativar");
};

// Validação do formulário (Login)
function logar(){
  var login = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;
   if(login == 'teste' && senha == 'teste'){
     alert('sucesso');
   }else {
     alert('Senha ou usuário incorretos')
   }
 }

// Validação Popup
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", ()=>{
    wrapper.classList.add("active");
});

loginLink.addEventListener("click", ()=>{
    wrapper.classList.remove("active");
});

iconClose.addEventListener("click", ()=>{
    wrapper.classList.remove("active-popup");
    togglePopup.checked = false;
});

// Validação do Formulário de Cadastro

    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");
   
    
    usernameInput.addEventListener("change", (evento)=>{
   
        const valor = evento.target.value

        let usernameValido = valor.length >= 3
        
        if(usernameValido){
            alert("Username Válido")
    
            usernameInput.classList.add("correct")
            usernameInput.classList.remove("error")
    
        } else {
            alert("Nome deve conter pelo menos 3 caracteres")
        }
    });

    emailInput.addEventListener("change", (evento)=>{
   
        const valor = evento.target.value
       
        if(valor.includes("@")){
            alert("Email Válido")
    
            emailInput.classList.add("correct")
            emailInput.classList.remove("error")
    
        } else {
        alert("Email Inválido. Deve conter um @")
        }
    });

    senhaInput.addEventListener("change", (evento)=>{
   
        const valor = evento.target.value

        let senhaValida = valor.length >= 6
        
        if(senhaValida){
            alert("Senha Válida.")
    
            senhaInput.classList.add("correct")
            senhaInput.classList.remove("error")
    
        } else {
            alert("Sua senha deve conter pelo menos 6 caracteres!")
        }

    });


// Container NoticiaReview
const container = document.querySelector('.containerNoticiaReview');

// Remove o conteúdo do container
container.innerHTML = '';

// Cria os elementos 
const reviews = [
  {
    title: 'Reviews',
    reviews: [
      {
        imagem: 'imagem-roblox',
        text: 'No Roblox, um dos título que merece estar entre os melhores jogos do ano de 2024 é o Anime Defenders | por Lenon Klein 02/04/2024'
      },
      {
        imagem: 'imagem-factorio',
        text: 'Factorio é um jogo futurístico de construção, onde se constrói e otimiza fábricas em um planeta alienígena | por Jonas Belaro 13/05/2024'
      },
      {
        imagem: 'imagem-mario',
        text: `A Nintendo revitalizou um clássico com o relançamento de Mario Vs Donkey Kong para o Switch | por Rômulo Justen 18/03/24`
      },
      {
        imagem: 'imagem-zelda',
        text:`O novo The Legend of Zelda: Echoes of Wisdom veio mesmo para fazer 
						história, o primeiro jogo a ser protagonizado pela Princesa Zelda
						| por Durval Ramos 18/06/24`
      },
      {
        imagem: 'imagem-sims',
        text: `The Sims 4 Rent é a mais nova expansão do jogo da EA
								permiti o jogador ser dono de imóvel e gerenciar famílias diferentes no mesmo lugar |
								por Rômulo Justen 16/12/23`
      },
    ]
  },
  
  {
    title: 'Notícias',
    noticias: [
      {
        image: 'img-roblox',
        text:`O Roblox chegou ao PS 4 e PS 5 em OUT/2023. O anúncio aconteceu durante a Roblox Developer 
              Conference (RDC), sediada em San Franscisco.`
      },
      {
        image: 'img-factorio',
        text: `McDonald's lança uma linha exclusiva de hambúrgueres com "carne alienígena", 
               inspirada em Factorio. A novidade é aprovada pela ANVISA`
      },
      {
        image: 'img-mario',
        text: `Mario & Luigi Brothership - Um novo RPG da saga, para o Nintendo Switch os irmãos 
        			estão com um visual em cel-shading que se assemelha a um desenho animado.`
      },
      {
        image: 'img-zelda',
        text:`Um novo The Legend of Zelda: Echoes of Wisdom protagonizado pela princesa que dá nome à série 
							e o primeiro trailer de Metroid Prime 4.`
      },
      {
        image: 'img-sims',
        text: `O novo pacote de expansão para The Sims 4 nos leva em uma jornada de romancepara o mundo charmoso
							e inspirado na Cidade do México de Ciudad Enamorada.`
      },
    ]
  }
];

reviews.forEach((review) => {
  const titleElement = document.createElement('h6');
  titleElement.textContent = review.title;
  titleElement.className = 'tituloNoticiaReview';
  container.appendChild(titleElement);

  if (review.reviews) {
    const reviewsContainer = document.createElement('div');
    reviewsContainer.className = 'reviews-container';

    review.reviews.forEach((item) => {
      const cardElement = document.createElement('div');
      cardElement.className = 'cardReview';

      const reviewElement = document.createElement('div');
      reviewElement.className = 'review-imagem-texto';

      const imagemElement = document.createElement('div');
      imagemElement.className = `review-imagem ${item.imagem}`;
      reviewElement.appendChild(imagemElement);

      const textElement = document.createElement('p');
      textElement.textContent = item.text;
      reviewElement.appendChild(textElement);

      cardElement.appendChild(reviewElement);
      reviewsContainer.appendChild(cardElement);
    });

    container.appendChild(reviewsContainer);
  }

  if (review.noticias) {
    const noticiasContainer = document.createElement('div');
    noticiasContainer.className = 'noticias-container';

    review.noticias.forEach((item) => {
      const cardElement = document.createElement('div');
      cardElement.className = 'cardNoticia';

      const noticiaElement = document.createElement('div');
      noticiaElement.className = 'noticia-imagem-texto';

      const imageElement = document.createElement('div');
      imageElement.className = `noticia-imagem ${item.image}`;
      noticiaElement.appendChild(imageElement);

      const textElement = document.createElement('p');
      textElement.textContent = item.text;
      noticiaElement.appendChild(textElement);

      cardElement.appendChild(noticiaElement);
      noticiasContainer.appendChild(cardElement);
    });

    container.appendChild(noticiasContainer);
  }
});


// Selecione os elementos tornando clicáveis
const cardReviews = document.querySelectorAll('.cardReview .review-imagem-texto');
const cardNoticias = document.querySelectorAll('.cardNoticia .noticia-imagem-texto');

cardReviews.forEach((card, index) => {
  card.addEventListener('click', () => {
    switch (index) {
      case 0:
        window.location.href = "priscilla.html";
        break;
      case 1:
        window.location.href = "caio.html";
        break;
      case 2:
        window.location.href = "erika.html";
        break;
      case 3:
        window.location.href = "vitor.html";
        break;
      case 4:
        window.location.href = "vivian.html";
        break;
    }
  });
});

cardNoticias.forEach((card, index) => {
  card.addEventListener('click', () => {
    switch (index) {
      case 0:
        window.location.href = "priscilla.html";
        break;
      case 1:
        window.location.href = "caio.html";
        break;
      case 2:
        window.location.href = "erika.html";
        break;
      case 3:
        window.location.href = "vitor.html";
        break;
      case 4:
        window.location.href = "vivian.html";
        break;
    }
  });
});

//lista de games roblox

const games = [
  {
    name: "Natural Disaster Survival",
    image: "img-roblox",
  },
  {
    name: "Royale High School",
    image: "imagem-roblox",
  },
  {
    name: "Jailbreak",
    image: "img-roblox",
  },
  // add more games to the array
];

const gameList = document.querySelector(".game-list");

games.forEach((game) => {
  const gameItem = document.createElement("div");
  gameItem.className = "game-item";

  const gameImage = document.createElement("img");
  gameImage.src = game.image;
  gameImage.alt = game.name;

  gameItem.appendChild(gameImage);

  gameList.appendChild(gameItem);
});

