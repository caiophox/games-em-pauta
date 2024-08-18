const buttonFactorio = document.getElementById('buttonFactorio');
const buttonHardspace = document.getElementById('buttonHardspace');
const buttonCyberpunk = document.getElementById('buttonCyberpunk');
const tituloLogo = document.getElementById('tituloLogo');
const reflection = document.getElementById('reflection');
const loadingOverlay = document.getElementById('loadingOverlay');
const favicon = document.querySelector('link[rel="icon"]');
const icons = document.querySelectorAll('.iconNota');
const imgReview1 = document.getElementById('imgReview1');
const imgReview2 = document.getElementById('imgReview2');
const titleReview = document.querySelectorAll('.tituloReview p');
const authorReview = document.querySelectorAll('.tituloReview h6');
const textReview = document.querySelectorAll('.textoReview p');
const titleNews = document.querySelectorAll('.tituloNoticia p');
const textNews = document.querySelectorAll('.textoNoticia p');
const imgUser1 = document.getElementById('imgUser1');
const imgUser2 = document.getElementById('imgUser2');
const imgUser3 = document.getElementById('imgUser3');
const authorAvalia = document.querySelectorAll('.textoAvalia h3');
const textAvalia = document.querySelectorAll('.textoAvalia p');
const titleFree = document.querySelectorAll('.textoLivre h2');
const textFree = document.querySelectorAll('.textoLivre p');
const stickyLogo = document.getElementById('stickyLogo');
const videoLoop = document.getElementById('videoLoop');
const stickyImg = document.querySelector('.stickyJogo');
const priceColor = document.querySelectorAll('.advertisement');
const adsImg1 = document.getElementById('adsImg1');
const adsImg2 = document.getElementById('adsImg2');
const adsImg3 = document.getElementById('adsImg3');
const adsImg4 = document.getElementById('adsImg4');
const adsImg5 = document.getElementById('adsImg5');
const adsImg6 = document.getElementById('adsImg6');
const textPrice = document.querySelectorAll('.adsText');

buttonFactorio.addEventListener('click', function () {
	loadingOverlay.classList.add('show');

	setTimeout(function () {
		// Change the src of the img elements
		textPrice[0].innerText = 'Biter de pelúcia\nR$ 15,99';
		textPrice[1].innerText = 'Refrigerante de lava\nR$ 12,99';
		textPrice[2].innerText = 'Spidertron miniatura\nR$ 155';
		textPrice[3].innerText = 'Carregador de celular\nR$ 40';
		textPrice[4].innerText = 'Isqueiro elétrico\nR$ 18,99';
		textPrice[5].innerText = 'Almofada de mofo\nR$ 35';
		priceColor.forEach(element => {
			element.classList.add('gradFactorio');
			element.classList.remove('gradHardspace');
			element.classList.remove('gradCyberpunk');
		});
		adsImg1.src = 'img/caio/factorio/Ad1.webp';
		adsImg2.src = 'img/caio/factorio/Ad2.webp';
		adsImg3.src = 'img/caio/factorio/Ad3.webp';
		adsImg4.src = 'img/caio/factorio/Ad4.webp';
		adsImg5.src = 'img/caio/factorio/Ad5.webp';
		adsImg6.src = 'img/caio/factorio/Ad6.webp';
		videoLoop.classList.add('videoLoopOff');
		stickyLogo.src = 'img/caio/factorio/FactorioLogo.png';
		stickyImg.style.backgroundImage = 'url(../img/caio/factorio/Rocket.png)';
		tituloLogo.src = 'img/caio/factorio/FactorioLogo.png';
		reflection.src = 'img/caio/factorio/FactorioLogo.png';
		favicon.href = 'img/caio/factorio/Factorio.ico';
		imgReview1.src = 'img/caio/factorio/FactorioReview1.png';
		imgReview2.src = 'img/caio/factorio/FactorioReview2.png';
		titleReview[0].innerText = 'Factorio: Fábrica Espacial';
		titleReview[1].innerText = 'Trabalho ou diversão?';
		authorReview[0].innerText = 'por Jonas Belaro';
		authorReview[1].innerText = 'por Higor Duarte';
		textReview[0].innerText =
			'Factorio é um jogo futurístico de construção e gerenciamento, onde você constrói e otimiza fábricas em um planeta alienígena. Com a DLC "Space Age" iminente, prometendo viagens interplanetárias, o jogo oferece ação intensa ao lutar contra monstros alienígenas e um profundo desafio estratégico na criação de linhas de produção eficientes. Amplamente aclamado na Steam, Factorio é uma escolha excelente tanto para fãs de ação quanto para entusiastas de automação e estratégia.';
		textReview[1].innerText =
			'Eu sempre gostei de jogos que desafiam minha mente, e quando comecei a jogar Factorio, não imaginava o quão profundo ele seria. Como engenheiro, fiquei impressionado com a complexidade técnica e a precisão do jogo, que roda perfeitamente. O suporte a mods é incrível, tornando a instalação e personalização extremamente fáceis. A Wube Software não só apoia a comunidade de modding, mas também incorpora mods populares e até contrata modders talentosos. Isso aumenta a longevidade do jogo e me permite adaptar a experiência às minhas preferências. Factorio é uma verdadeira obra-prima de engenharia interativa.';
		titleNews[0].innerText = 'Factorio: Realidade Aumentada';
		titleNews[1].innerText = 'Hamburguer de biter? Nuggets alien?';
		textNews[0].innerText =
			'Wube Software anuncia parceria com Vale para criar uma experiência onde jogadores podem construir fábricas em ambientes reais em Minas Gerais, transformando qualquer espaço em uma fábrica alienígena.';
		textNews[1].innerText =
			'McDonald`s lança uma linha exclusiva de hambúrgueres com "carne alienígena", inspirada em Factorio. A novidade é aprovada pela ANVISA e promete uma experiência de sabor intergaláctico para os fãs do jogo.';
		imgUser1.src = 'img/caio/factorio/FactorioUser1.jpg';
		imgUser2.src = 'img/caio/factorio/FactorioUser2.jpg';
		imgUser3.src = 'img/caio/factorio/FactorioUser3.jpg';
		authorAvalia[0].innerText = 'João_FactoryM';
		authorAvalia[1].innerText = 'Techie_Tom';
		authorAvalia[2].innerText = 'MariaGamer_82';
		textAvalia[0].innerText =
			'Factorio é incrível! A complexidade e detalhes me prendem por horas. Cada atualização é melhor que a anterior. Totalmente viciante e vale cada minuto!';
		textAvalia[1].innerText =
			'Curti bastante o jogo, cheio de desafios e estratégias legais. Pode ficar meio repetitivo depois de um tempo, mas ainda assim, recomendo muito pra quem gosta de automação e construção!';
		textAvalia[2].innerText =
			'Amo Factorio! A mistura de estratégia e ação é demais. A curva de aprendizado é difícil, mas ver minha fábrica funcionando certinho é super recompensador. Recomendo!';
		titleFree[0].innerText = 'Um Universo de Possibilidades';
		titleFree[1].innerText = 'Jogabilidade e Mecânicas: Construção e Combate';
		titleFree[2].innerText = 'Estratégias e Dicas: Otimizando Sua Fábrica';
		titleFree[3].innerText = 'Um Gênero Único';
		titleFree[4].innerText = 'Futuro de Factorio: Novas Fronteiras';
		textFree[0].innerText =
			'Factorio, desenvolvido pela Wube Software, é um jogo de construção e gerenciamento que transporta os jogadores para um universo futurístico onde a automação é a chave para a sobrevivência. O jogo começa com o protagonista preso em um planeta alienígena, com o objetivo de construir uma fábrica capaz de produzir todos os componentes necessários para escapar. O mundo de Factorio é vasto e repleto de recursos, com desafios únicos como fauna alienígena hostil e a necessidade de gerenciar poluição. A atmosfera é densa e imersiva, com uma trilha sonora que complementa a sensação de aventura e exploração.\n\n O jogo ganhou uma base de fãs dedicada e é um dos títulos mais bem avaliados na Steam, graças à sua jogabilidade profunda e gratificante. A iminente expansão "Space Age" promete expandir ainda mais o universo de Factorio, introduzindo viagens interplanetárias e novos desafios. O jogo é tanto uma simulação complexa de gestão quanto um título de ação, oferecendo uma experiência diversificada para diferentes tipos de jogadores. Se você é alguém que aprecia desafios intelectuais ou simplesmente gosta de criar sistemas eficientes, Factorio oferece um campo vasto de possibilidades.';
		textFree[1].innerText =
			'Em Factorio, o objetivo principal é criar uma fábrica eficiente que possa produzir todos os itens necessários para construir um foguete e escapar do planeta. Isso envolve a extração de recursos, processamento de materiais, e montagem de produtos finais. A jogabilidade é baseada na otimização, com jogadores constantemente ajustando e melhorando suas linhas de produção para alcançar maior eficiência. O jogo é incrivelmente detalhado, com cada aspecto da fábrica, desde a mineração até a produção final, necessitando de atenção cuidadosa.\n\n Além da construção e gestão, Factorio também inclui elementos de combate. Os jogadores enfrentam uma fauna alienígena hostil que se torna mais agressiva à medida que a fábrica se expande e polui o ambiente. Isso adiciona uma camada de ação ao jogo, exigindo que os jogadores construam defesas e desenvolvam tecnologias de combate para proteger suas instalações. A combinação de construção estratégica e combate tático faz de Factorio uma experiência única e envolvente, que desafia tanto a mente quanto os reflexos.';
		textFree[2].innerText =
			'Para ter sucesso em Factorio, é crucial desenvolver uma fábrica eficiente. Uma das principais estratégias é o uso de layouts modulares, que permitem a fácil expansão e ajuste das linhas de produção. Isso inclui a criação de sistemas de transporte bem organizados, como esteiras e trens, para mover recursos entre diferentes áreas da fábrica. A otimização do uso de energia é outra consideração importante, com jogadores frequentemente buscando maneiras de reduzir o consumo de energia e aumentar a produção.\n\n Outra estratégia essencial é a gestão de recursos e a prevenção de gargalos. Identificar e solucionar problemas que impedem a produção eficiente é uma habilidade crítica. Além disso, os jogadores devem estar sempre prontos para adaptar suas fábricas a novas tecnologias e desafios, como a necessidade de produzir novos itens ou se defender contra ataques alienígenas. A flexibilidade e a capacidade de planejar à frente são habilidades fundamentais para qualquer jogador que queira dominar Factorio.';
		textFree[3].innerText =
			'Factorio é frequentemente comparado a outros jogos de construção e gerenciamento, como Satisfactory, RimWorld e Cities: Skylines. No entanto, Factorio se destaca por sua profundidade e complexidade únicas. Enquanto Satisfactory compartilha a ênfase na automação e na construção de fábricas, Factorio é mais focado na otimização de linhas de produção e na gestão de recursos. RimWorld, por outro lado, se concentra mais na sobrevivência e nas interações sociais dos colonos, enquanto Factorio se mantém firme na construção e automação.\n\n Cities: Skylines, embora também seja um jogo de construção, é mais voltado para a gestão de uma cidade e suas infraestruturas. Factorio, em contraste, oferece uma experiência mais técnica e industrial, onde cada decisão pode ter um impacto significativo na eficiência geral da fábrica. O nível de personalização e complexidade em Factorio é inigualável, tornando-o uma experiência única para os jogadores que apreciam desafios intelectuais e estratégicos.';
		textFree[4].innerText =
			'Com a expansão "Space Age" no horizonte, o futuro de Factorio parece mais promissor do que nunca. Esta atualização promete adicionar uma nova camada de complexidade ao jogo, permitindo que os jogadores explorem e colonizem outros planetas. Isso abrirá novas oportunidades para a exploração de recursos e a construção de fábricas em diferentes ambientes. A expansão também trará novas tecnologias e desafios, incluindo a necessidade de gerenciar múltiplas fábricas em planetas distintos.\n\n Além da expansão, a comunidade de Factorio é incrivelmente ativa, com mods que ampliam e modificam o jogo de várias maneiras. Desde novos sistemas de transporte até alterações na mecânica de combate, esses mods permitem aos jogadores personalizar sua experiência de jogo de maneira significativa. Com uma base de fãs dedicada e uma equipe de desenvolvimento comprometida, Factorio está preparado para continuar evoluindo e oferecendo novos desafios para seus jogadores. Se você ainda não experimentou este jogo incrível, agora é o momento perfeito para embarcar nesta jornada de automação e descoberta.';
		icons.forEach(element => {
			element.classList.remove('iconHardspace');
			element.classList.add('iconFactorio');
			element.classList.remove('iconCyberpunk');
			element.classList.remove('notaRuim');
			element.classList.remove('notaMedia');
		});
		icons[9].classList.add('notaMedia');
		icons[14].classList.add('notaMedia');

		// Hide the loading overlay after the images have changed
		setTimeout(function () {
			loadingOverlay.classList.remove('show');
		}, 500); // Wait for 1 second before hiding the overlay
	}, 500); // Wait for 0.5 second before changing the images
});

buttonHardspace.addEventListener('click', function () {
	loadingOverlay.classList.add('show');

	setTimeout(function () {
		// Change the src of the img elements
		textPrice[0].innerText = 'Chips de batata sintética\nR$ 177';
		textPrice[1].innerText =
			'Seguro de vida (radiação apenas)\nR$ 12.499\n p/ semana';
		textPrice[2].innerText = 'Nave miniatura\nR$ 370.990\n 12cmX14cm';
		textPrice[3].innerText =
			'Mini poster de nave miniatura\nR$ 43,98\n 120mmX140mm';
		textPrice[4].innerText = 'Cópia original do poster\nR$ 380';
		textPrice[5].innerText =
			'Processo seletivo L.Y.N.X.\nR$ 23.600\npor tentativa';
		priceColor.forEach(element => {
			element.classList.add('gradHardspace');
			element.classList.remove('gradCyberpunk');
			element.classList.remove('gradFactorio');
		});
		adsImg1.src = 'img/caio/hardspace/Ad1.webp';
		adsImg2.src = 'img/caio/hardspace/Ad2.webp';
		adsImg3.src = 'img/caio/hardspace/Ad3.webp';
		adsImg4.src = 'img/caio/hardspace/Ad4.webp';
		adsImg5.src = 'img/caio/hardspace/Ad5.webp';
		adsImg6.src = 'img/caio/hardspace/Ad6.webp';
		videoLoop.classList.add('videoLoopOff');
		stickyLogo.src = 'img/caio/hardspace/HardspaceShipbreakerLogo.png';
		stickyImg.style.backgroundImage = 'url(../img/caio/hardspace/Rookie.png)';
		tituloLogo.src = 'img/caio/hardspace/HardspaceShipbreakerLogo.png';
		reflection.src = 'img/caio/hardspace/HardspaceShipbreakerLogo.png';
		favicon.href = 'img/caio/hardspace/Hardspace.ico';
		imgReview1.src = 'img/caio/hardspace/HardspaceReview1.png';
		imgReview2.src = 'img/caio/hardspace/HardspaceReview2.png';
		titleReview[0].innerText = 'Desmontagem Espacial Inédita';
		titleReview[1].innerText = 'Explodindo o Futuro';
		authorReview[0].innerText = 'por Marcos Oliveira';
		authorReview[1].innerText = 'por Luana Silva';
		textReview[0].innerText =
			'Como mecânico de longa data, Hardspace Shipbreaker é uma verdadeira maravilha. Adoro como o jogo detalha cada peça e ferramenta — desmontar naves em gravidade zero é um desafio incrível e parece muito real. A cada atualização, eles trazem novas peças e equipamentos, o que mantém o jogo sempre interessante. É como estar numa oficina espacial de verdade, e isso me encanta. Se você curte um bom trabalho mecânico, vai se amarrar nesse jogo!';
		textReview[1].innerText =
			'Hardspace Shipbreaker é um jogo futurista onde você tenta desmontar naves espaciais em um ambiente de gravidade zero sem explodir. Com gráficos impressionantes e uma física realista, a jogabilidade é uma mistura empolgante de desafio técnico e ação intensa. A nova atualização traz missões de desmantelamento em estações espaciais, oferecendo um nível ainda maior de complexidade e imersão. Amado pelos fãs de simuladores e exploração espacial, Hardspace Shipbreaker é um marco no gênero.';
		titleNews[0].innerText = 'Desmonte Seu Carro com Laser e Venda!';
		titleNews[1].innerText = 'Trabalhe para a L.Y.N.X.!';
		textNews[0].innerText =
			'Agora, as ferramentas laser e gravitacionais de Hardspace Shipbreaker, desenvolvidas pela Black+Decker, estão disponíveis para uso real. Desmonte e venda seu carro com tecnologia de ponta!';
		textNews[1].innerText =
			'Endividado e sem rumo? A L.Y.N.X. abriu uma fábrica no Amapá para desenvolver naves espaciais, oferecendo contratos de trabalho de no mínimo 70 anos. Prepare-se para a aventura intergaláctica!';
		imgUser1.src = 'img/caio/hardspace/HardspaceUser1.jpg';
		imgUser2.src = 'img/caio/hardspace/HardspaceUser2.jpg';
		imgUser3.src = 'img/caio/hardspace/HardspaceUser3.jpg';
		authorAvalia[0].innerText = 'GalacticNerd42';
		authorAvalia[1].innerText = 'MãeDesmontadora';
		authorAvalia[2].innerText = 'AeroMechanic';
		textAvalia[0].innerText =
			'Hardspace Shipbreaker é uma maravilha técnica, com física realista e complexidade detalhada que desafia a mente. Cada componente e processo é uma sinfonia de engenharia espacial!';
		textAvalia[1].innerText =
			'Como mãe de nove filhos, Hardspace Shipbreaker é meu escape perfeito. Desmontar naves me ajuda a relaxar e desestressar. É uma diversão incrível que encaixa bem na minha rotina!';
		textAvalia[2].innerText =
			'Como ex-mecânico de aviões, adoro a precisão e o desafio de Hardspace Shipbreaker. A necessidade de ordem e o perigo constante são emocionantes, embora o jogo pudesse ter mais variedade nas missões.';
		titleFree[0].innerText = 'Desmonte Naves e Pague Suas Dívidas';
		titleFree[1].innerText = 'Quebra-Cabeças Espaciais em Gravidade Zero';
		titleFree[2].innerText = 'Como Desmontar Naves com Precisão Cirúrgica';
		titleFree[3].innerText =
			'Hardspace vs. O Resto: O Rei dos Simuladores Espaciais';
		titleFree[4].innerText = 'O Que Vem a Seguir em Hardspace Shipbreaker';
		textFree[0].innerText =
			'Hardspace Shipbreaker, desenvolvido pela Blackbird Interactive, é um simulador de desmantelamento espacial que coloca os jogadores no papel de um trabalhador da Lynx Corporation. Em um futuro distópico, a Lynx oferece aos jogadores a oportunidade de pagar suas dívidas desmontando naves espaciais abandonadas em um ambiente de gravidade zero. O jogo combina elementos de física realista, gerenciamento de recursos e desafios mecânicos para criar uma experiência única e envolvente.\n\n A premissa do jogo é simples, mas sua execução é profunda e complexa. Equipado com ferramentas futurísticas, como lasers de corte e raios trator, o jogador deve desmontar cuidadosamente cada nave, evitando perigos como explosões e vazamentos de combustível. O objetivo é recuperar o máximo de materiais valiosos possível, tudo isso enquanto lida com um tempo limitado e o constante risco de acidentes fatais. A atmosfera do jogo é tensa e imersiva, fazendo com que cada tarefa se sinta importante e significativa.';
		textFree[1].innerText =
			'A jogabilidade de Hardspace Shipbreaker é centrada na precisão e na estratégia. Cada nave que você desmonta é um quebra-cabeça complexo, cheio de perigos e oportunidades. Usar ferramentas como o cortador de laser para separar componentes, enquanto gerencia a gravidade zero, cria uma sensação de desafio constante. A física realista significa que cada ação tem uma reação, exigindo que os jogadores pensem cuidadosamente sobre cada movimento.\n\n A progressão no jogo é marcada pela aquisição de novas ferramentas e habilidades, permitindo que os jogadores abordem naves maiores e mais complexas. Cada missão apresenta novos tipos de naves e desafios, mantendo a experiência fresca e interessante. Além disso, a necessidade de equilibrar eficiência com segurança adiciona uma camada extra de profundidade. Um movimento errado pode resultar em explosões devastadoras, forçando os jogadores a reiniciar a missão e aprender com seus erros.';
		textFree[2].innerText =
			'Para ser bem-sucedido em Hardspace Shipbreaker, é essencial desenvolver estratégias eficientes. Planejar a desmontagem antes de começar a cortar é crucial. Identificar e remover componentes perigosos, como reatores e tanques de combustível, deve ser a prioridade para evitar acidentes. Utilizar o scanner para entender a estrutura da nave e os pontos de corte ideais também é uma prática recomendada.\n\n Outra dica importante é gerenciar o tempo de forma eficaz. Cada missão tem um limite de tempo, então trabalhar rapidamente sem comprometer a segurança é vital. Aprender a usar as ferramentas de maneira eficiente, combinando cortes rápidos com movimentos precisos, pode fazer uma grande diferença no seu desempenho. Além disso, investir em upgrades para suas ferramentas e traje espacial pode aumentar significativamente sua eficácia e segurança.';
		textFree[3].innerText =
			'Hardspace Shipbreaker se destaca em um gênero que combina simulação e ação de forma única. Comparado a jogos como Elite Dangerous e Star Citizen, que focam na exploração e combate espacial, Hardspace oferece uma experiência mais intimista e técnica. Em vez de pilotar naves através do cosmos, os jogadores aqui se aprofundam nos detalhes de cada nave, desmontando-as peça por peça.\n\n Outro jogo com uma experiência similar é Breathedge, que também envolve sobrevivência e reparos no espaço, mas Hardspace Shipbreaker leva a mecânica de desmontagem a um nível completamente novo. Enquanto Breathedge tem um tom mais humorístico, Hardspace é mais sério e focado na precisão técnica. A comparação com títulos como Kerbal Space Program, que envolve construção e simulação espacial, também é válida, mas Hardspace Shipbreaker se diferencia pela sua ênfase na desmontagem e na física realista.';
		textFree[4].innerText =
			'O futuro de Hardspace Shipbreaker parece promissor, com a Blackbird Interactive já planejando novas atualizações e conteúdos adicionais. Expansões que incluem novos tipos de naves, ferramentas e ambientes são esperadas, ampliando ainda mais o escopo e a profundidade do jogo. A comunidade de jogadores é ativa e dedicada, contribuindo com sugestões e feedback que ajudam a moldar o desenvolvimento futuro do jogo.\n\n A possibilidade de mods e conteúdos criados pela comunidade também pode trazer novas dimensões ao jogo, oferecendo desafios e missões personalizadas. Com uma base de fãs apaixonada e um desenvolvedor comprometido, Hardspace Shipbreaker está bem posicionado para continuar evoluindo e proporcionando novas e emocionantes experiências de desmontagem espacial. Se você ainda não explorou os desafios deste simulador único, agora é o momento perfeito para mergulhar no mundo de Hardspace Shipbreaker.';
		icons.forEach(element => {
			element.classList.add('iconHardspace');
			element.classList.remove('iconFactorio');
			element.classList.remove('iconCyberpunk');
			element.classList.remove('notaRuim');
			element.classList.remove('notaMedia');
		});
		icons[4].classList.add('notaMedia');
		icons[7].classList.add('notaMedia');
		icons[8].classList.add('notaRuim');
		icons[9].classList.add('notaRuim');
		icons[13].classList.add('notaMedia');
		icons[14].classList.add('notaRuim');

		// Hide the loading overlay after the images have changed
		setTimeout(function () {
			loadingOverlay.classList.remove('show');
		}, 200); // Wait for 1 second before hiding the overlay
	}, 500); // Wait for 0.5 second before changing the images
});

buttonCyberpunk.addEventListener('click', function () {
	// Show the loading overlay
	loadingOverlay.classList.add('show');

	setTimeout(function () {
		// Change the src of the img elements
		textPrice[0].innerText = 'Casaco de pele SythSkin\nR$ 15.460';
		textPrice[1].innerText = 'Segurança particular\nR$ 3.000\n p/dia';
		textPrice[2].innerText = 'Munição para Kenshin JKE-X2\nR$ 132*\n*cada bala';
		textPrice[3].innerText = 'Braço mecânico usado\nR$ 43.500';
		textPrice[4].innerText = 'Combustível comestível\nR$ 38,99/L';
		textPrice[5].innerText = 'Camiseta Avante\nR$ 340.420,80';
		priceColor.forEach(element => {
			element.classList.add('gradCyberpunk');
			element.classList.remove('gradHardspace');
			element.classList.remove('gradFactorio');
		});
		adsImg1.src = 'img/caio/cyberpunk/Ad1.webp';
		adsImg2.src = 'img/caio/cyberpunk/Ad2.webp';
		adsImg3.src = 'img/caio/cyberpunk/Ad3.webp';
		adsImg4.src = 'img/caio/cyberpunk/Ad4.webp';
		adsImg5.src = 'img/caio/cyberpunk/Ad5.webp';
		adsImg6.src = 'img/caio/cyberpunk/Ad6.webp';
		videoLoop.classList.add('videoLoopOff');
		stickyLogo.src = 'img/caio/cyberpunk/CyberpunkLogo2.png';
		stickyImg.style.backgroundImage = 'url(../img/caio/cyberpunk/Songbird.png)';
		tituloLogo.src = 'img/caio/cyberpunk/CyberpunkLogo.png';
		reflection.src = 'img/caio/cyberpunk/CyberpunkLogo.png';
		favicon.href = 'img/caio/cyberpunk/Cyberpunk.ico';
		imgReview1.src = 'img/caio/cyberpunk/CyberpunkReview1.png';
		imgReview2.src = 'img/caio/cyberpunk/CyberpunkReview2.webp';
		titleReview[0].innerText = 'Phantom Liberty';
		titleReview[1].innerText = 'A música de Cyberpunk 2077';
		authorReview[0].innerText = 'por Erika Menezes';
		authorReview[1].innerText = 'por Duda Ribeiro';
		textReview[0].innerText =
			'A expansão Phantom Liberty para Cyberpunk 2077 é uma verdadeira revolução para o jogo. Oferecendo uma nova área vasta e rica em detalhes, ela expande o universo de Night City com uma narrativa profunda e envolvente. A adição de novos personagens e missões eleva a experiência a um novo patamar, enquanto a mecânica aprimorada e os gráficos deslumbrantes mostram um desenvolvimento meticuloso. É um mergulho emocionante e obrigatório para qualquer fã do jogo que deseja explorar ainda mais o lado sombrio e fascinante da cidade.';
		textReview[1].innerText =
			'Lizzie Wizzie, interpretada pela talentosa Grimes, é uma das grandes estrelas de Cyberpunk 2077, e suas músicas no jogo são simplesmente incríveis. A combinação de estilo futurista e som envolvente faz dela uma personagem inesquecível. As faixas adicionam uma vibração autêntica ao ambiente de Night City, refletindo perfeitamente o espírito do jogo. Se você ainda não ouviu as músicas da Lizzie, está perdendo uma parte essencial da experiência sonora de Cyberpunk!';
		titleNews[0].innerText = 'Armas Cyberpunk Reais';
		titleNews[1].innerText = 'Implantes Oculares Futuristas';
		textNews[0].innerText =
			'Compre armas de plástico que atiram munições de verdade no supermercado de sua preferência. Inspiradas no universo de Cyberpunk 2077, a nova linha de produtos traz uma mistura ousada de letalidade e acessibilidade.';
		textNews[1].innerText =
			'Microsoft e CD Projekt Red estão desenvolvendo implantes oculares que prometem um zoom de até 80x dentro do seu olho controlado pelo seu celular, trazendo um pedaço do mundo de Cyberpunk 2077 para o seu cotidiano.';
		imgUser1.src = 'img/caio/cyberpunk/CyberpunkUser1.jpg';
		imgUser2.src = 'img/caio/cyberpunk/CyberpunkUser2.jpg';
		imgUser3.src = 'img/caio/cyberpunk/CyberpunkUser3.jpg';
		authorAvalia[0].innerText = 'cpt_nascimento2077';
		authorAvalia[1].innerText = 'caçadora_de_quests';
		authorAvalia[2].innerText = 'PilotoNoturno';
		textAvalia[0].innerText =
			'Se você é fanático por armas, Cyberpunk 2077 é um prato cheio. A diversidade de armamentos e a carnificina no jogo são de tirar o fôlego. Cada arma é única e a sensação de combate é visceral. Adoro como o jogo traz um arsenal tão variado e detalhado, oferecendo um verdadeiro paraíso para quem curte uma boa batalha!';
		textAvalia[1].innerText =
			'Cyberpunk 2077 é um tesouro para quem ama histórias profundas e escolhas difíceis. Cada missão é uma nova camada de complexidade e emoção. As decisões que você toma realmente afetam o desenrolar da trama e os personagens são incrivelmente bem desenvolvidos. É um jogo que faz você se envolver emocionalmente de maneiras surpreendentes.';
		textAvalia[2].innerText =
			'Dirigir por Night City é a melhor parte de Cyberpunk 2077! Como streamer, adoro explorar a cidade e ver as paisagens urbanas enquanto sigo pelas ruas. O jogo oferece uma experiência incrível de direção, com uma sensação autêntica de velocidade e controle. É um divertimento garantido, especialmente para quem gosta de passeios virtuais!';
		titleFree[0].innerText = 'O Renascimento Brilhante de Cyberpunk 2077';
		titleFree[1].innerText = 'Phantom Liberty: A Revolução em Expansão';
		titleFree[2].innerText = 'Adulto, Audacioso e Único: Cyberpunk em Destaque';
		titleFree[3].innerText = 'Visuais Impressionantes: Um Show de Gráficos';
		titleFree[4].innerText = 'Estrelas no Jogo: Realidade e Fama';
		textFree[0].innerText =
			'Apesar do lançamento conturbado, a CD Projekt Red deu a volta por cima e transformou Cyberpunk 2077 em um sucesso estrondoso. Desde o seu lançamento problemático, a desenvolvedora tem se dedicado a corrigir os problemas e a oferecer atualizações consistentes. O resultado é um jogo que não só recuperou sua reputação, mas que também conquistou um lugar de destaque entre os grandes lançamentos. A dedicação e o esforço da equipe são evidentes em cada detalhe, fazendo de Cyberpunk 2077 uma experiência extremamente aclamada e memorável.\n\n Além das melhorias contínuas, a CD Projekt Red implementou um suporte ativo para a comunidade, ouvindo feedback e ajustando o jogo conforme as necessidades dos jogadores. A série de atualizações e correções não só resolveu problemas técnicos, mas também adicionou novos recursos e conteúdos que aprimoraram ainda mais a experiência. A recuperação da reputação do jogo não foi instantânea, mas a transparência e o comprometimento da desenvolvedora ajudaram a reconquistar a confiança dos fãs, transformando Cyberpunk 2077 em um exemplo de recuperação e resiliência na indústria dos games.';
		textFree[1].innerText =
			'A expansão Phantom Liberty para Cyberpunk 2077 é como um jogo completamente novo. Com um conteúdo tão robusto e inovador, ela redefine a experiência original com novas áreas, personagens e histórias de tirar o fôlego. A qualidade da expansão é tão impressionante que se destaca como uma obra-prima por si só. Se você achava que Cyberpunk 2077 já era incrível, Phantom Liberty vai elevar suas expectativas a um nível absurdo, com um conteúdo que é essencial para qualquer fã.\n\n O impacto de Phantom Liberty vai além do conteúdo adicional; ela redefine a forma como as expansões podem ser percebidas. A expansão não apenas adiciona novas missões e áreas, mas também melhora significativamente a narrativa e a jogabilidade, proporcionando uma nova perspectiva sobre o mundo de Night City. As adições incluem novos sistemas de jogo e mecânicas que integram de forma impecável com o conteúdo original, criando uma experiência de jogo que se sente fresca e inovadora. Com Phantom Liberty, a CD Projekt Red estabeleceu um novo padrão para expansões, provando que é possível expandir um universo de jogo de maneira significativa e impactante.';
		textFree[2].innerText =
			'Cyberpunk 2077 se destaca dos demais jogos do gênero com seu conteúdo adulto e visceral. Com uma variedade impressionante de armas, cenas de violência impactantes e missões que desafiam sua moralidade, o jogo mergulha fundo em temas complexos e provocativos. Essas características não apenas atraem jogadores em busca de ação intensa, mas também aqueles que buscam uma narrativa envolvente e ética. A abordagem audaciosa do jogo é um dos seus maiores trunfos, oferecendo uma experiência que poucos títulos conseguem igualar.\n\n A abordagem madura de Cyberpunk 2077 é complementada por uma trilha sonora e um design sonoro que aprofundam a imersão no ambiente sombrio do jogo. As missões que exploram dilemas morais e as interações intensas com personagens complexos destacam o jogo como uma experiência narrativa profunda e multifacetada. A combinação de violência crua e escolhas éticas difíceis não é apenas um recurso de entretenimento, mas também um convite à reflexão sobre questões sociais e pessoais, elevando Cyberpunk 2077 a um nível de profundidade emocional que poucos outros jogos conseguem alcançar.';
		textFree[3].innerText =
			'Cyberpunk 2077 é um dos líderes em qualidade visual no mundo dos videogames. Utilizando tecnologias inovadoras, como a Jali para animação facial, o jogo oferece uma experiência gráfica de tirar o fôlego. A textura da pele e o nível de detalhes são simplesmente superiores, fazendo com que cada cena se sinta incrivelmente realista. A atenção aos detalhes gráficos é um testemunho do compromisso da CD Projekt Red com a excelência, proporcionando uma experiência visual que estabelece um novo padrão para a indústria.\n\n A qualidade visual de Cyberpunk 2077 é acentuada pelo uso de técnicas avançadas de iluminação e renderização, que contribuem para a criação de um ambiente urbano vibrante e detalhado. A integração da tecnologia Jali permite uma expressão facial rica e realista, aumentando a profundidade emocional das interações com os personagens. Além disso, o jogo aproveita ao máximo as capacidades dos consoles de última geração e PCs de alto desempenho, oferecendo uma experiência gráfica que é tanto impressionante quanto inovadora. O compromisso com a excelência visual torna Cyberpunk 2077 um exemplo notável de como a tecnologia pode elevar a experiência de jogo a novos patamares.';
		textFree[4].innerText =
			'O elenco de Cyberpunk 2077 é estonteante, com atuações de estrelas como Keanu Reeves, Idris Elba e Grimes. Esses talentos trazem uma autenticidade e profundidade que elevam o jogo a um nível ainda mais envolvente. A presença de tais atores não só enriquece a narrativa, mas também dá ao jogo um brilho extra, com performances que são tão marcantes quanto a própria jogabilidade. A combinação de atuações de alto nível com uma trama cativante faz de Cyberpunk 2077 uma experiência verdadeiramente inesquecível.\n\n A presença de celebridades em Cyberpunk 2077 não é apenas uma jogada de marketing; ela acrescenta uma camada adicional de autenticidade e apelo ao jogo. Keanu Reeves, Idris Elba e Grimes, com suas performances carismáticas, ajudam a dar vida aos personagens de maneiras que vão além do que a maioria dos jogos pode oferecer. Seus talentos não só atraem os fãs, mas também enriquecem a narrativa e o mundo do jogo, criando uma conexão mais profunda entre os jogadores e o universo de Cyberpunk. A participação de tais estrelas eleva o nível de envolvimento e satisfação, fazendo com que Cyberpunk 2077 se destaque como uma experiência de entretenimento de alto nível.';
		icons.forEach(element => {
			element.classList.remove('iconHardspace');
			element.classList.remove('iconFactorio');
			element.classList.add('iconCyberpunk');
			element.classList.remove('notaRuim');
			element.classList.remove('notaMedia');
		});
		icons[4].classList.add('notaMedia');
		icons[8].classList.add('notaMedia');
		icons[9].classList.add('notaRuim');
		icons[14].classList.add('notaRuim');
		setTimeout(function () {
			loadingOverlay.classList.remove('show');
		}, 200); // Wait for 1 second before hiding the overlay
	}, 500); // Wait for 0.5 second before changing the images
});
