import $ from "jquery";

const scale = "scale(1)";
const body: JQuery<HTMLElement> = $("body");

body.css("-webkit-transform", scale);
body.css("-ms-transform", scale);
body.css("transform", scale);

const button_back: JQuery<HTMLButtonElement> = $("#back");
const button_regular: JQuery<HTMLButtonElement> = $("#regular");
const button_rebel: JQuery<HTMLButtonElement> = $("#rebel");
const button_vehicles_regular: JQuery<HTMLButtonElement> =
  $("#vehicles-regular");
const button_vehicles_rebel: JQuery<HTMLButtonElement> = $("#vehicles-rebel");
const button_history: JQuery<HTMLButtonElement> = $("#history");
const cards: JQuery<HTMLElement> = $("#cards");

button_back.on("click", () => {
  location.reload();
});

button_regular.on("click", () => {
  button_regular.css("display", "none");
  button_rebel.css("display", "none");
  button_vehicles_rebel.css("display", "none");
  button_vehicles_regular.css("display", "none");
  button_history.css("display", "none");
  cards.html("");
  cards.html(
    '<div id="squad-peregrine" class="sub-card"><span class="title-cards">Esquadrão Falcões Peregrinos</span><br><br><div class="card"><img class="character-regular" src="img/png/Marco.png" alt="img" id="marco"></div><div class="card"><img class="character-regular" src="img/png/Tarma.png" alt="img" id="tarma"></div><div class="card"><img class="character-regular" src="img/png/Trevor.png" alt="img" id="trevor"></div><div class="card"><img class="character-regular" src="img/png/Gimlet.png" alt="img" id="gimlet"></div><div class="card"><img class="character-regular" src="img/png/Walter.png" alt="img" id="walter"></div><div class="card"><img class="character-regular" src="img/png/Tyra.png" alt="img" id="tyra"></div><div class="card"><img class="character-regular" src="img/png/Roberto.png" alt="img" id="roberto"></div><div class="card"><img class="character-regular" src="img/png/Rita.png" alt="img" id="rita"></div><div class="card"><img class="character-regular" src="img/png/Rocky.png" alt="img" id="rocky"></div><div class="card"><img class="character-regular" src="img/png/Jephet.png" alt="img" id="jephet"></div></div><div id="sparrows" class="sub-card"><span class="title-cards">S.P.A.R.R.O.W.S</span><br><br><div class="card"><img class="character-regular" src="img/png/Eri.png" alt="img" id="eri"></div><div class="card"><img class="character-regular" src="img/png/Fio.png" alt="img" id="fio"></div><div class="card"><img class="character-regular" src="img/png/Red eye.png" alt="img" id="red-eye"></div><div class="card"><img class="character-regular" src="img/png/Nadia.png" alt="img" id="nadia"></div><div class="card"><img class="character-regular" src="img/png/Nathalie.png" alt="img" id="nathalie"></div><div class="card"><img class="character-regular" src="img/png/Midori.png" alt="img" id="midori"></div><div class="card"><img class="character-regular" src="img/png/Gisee.png" alt="img" id="gisee"></div><div class="card"><img class="character-regular" src="img/png/Avvio.png" alt="img" id="avvio"></div><div class="card"><img class="character-regular" src="img/png/Charlotte.png" alt="img" id="charlotte"></div></div><div id="ikari" class="sub-card"><span class="title-cards">Equipe de Guerreiros Ikari</span><br><br><div class="card"><img class="character-regular" src="img/png/Heidern.png" alt="img" id="heidern"></div><div class="card"><img class="character-regular" src="img/png/Ralf.png" alt="img" id="ralf"></div><div class="card"><img class="character-regular" src="img/png/Clark.png" alt="img" id="clark"></div><div class="card"><img class="character-regular" src="img/png/Leona.png" alt="img" id="leona"></div><div class="card"><img class="character-regular" src="img/png/Seirah.png" alt="img" id="seirah"></div></div><div id="support" class="sub-card"><span class="title-cards">Suporte</span><br><br><div class="card"><img class="character-regular" src="img/png/Rumi.png" alt="img" id="rumi"></div><div class="card"><img class="character-regular" src="img/png/Hyakutaro.png" alt="img" id="hyakutaro"></div><div class="card"><img class="character-regular" src="img/png/Utan.png" alt="img" id="utan"></div><div class="card"><img class="character-regular" src="img/png/Madoka.png" alt="img" id="madoka"></div><div class="card"><img class="character-regular" src="img/png/Eris.png" alt="img" id="eris"></div><div class="card"><img src="img/png/Soldier.png" alt="img" class="character-regular" id="infantry"></div></div>'
  );
  cards.fadeIn();
  $("#squad-peregrine").css("display", "inline");
  $(".name").text("Exército Regular");
  $("#img").attr("src", "img/png/regular-army.png");
  $("#patent p").html(
    "Líder: Desconhecido<br>Comandantes: Marco Rossi, Tarma Roving<br>Inimigos: Exército Rebelde, Infantaria Árabe, Marcianos, Exército Japonês, Sindicato Amadeus, Exército Ptolomaico, Invasores<br> Aliados: Esquadrão Falcões Peregrinos, S.P.A.R.R.O.W.S, Guerreiros Ikari, Governo Mundial"
  );
  $("#desc p").text(
    "O Exército Regular era o braço militar do governo de transição da Federação Terrestre. Seu comandante supremo de jure era o Chefe do Exército Regular, um oficial civil que chefia o Quartel General de Operações Conjuntas. Suas forças foram divididas em guarnições. As guarnições conhecidas incluíam a Guarnição do Extremo Oriente, a Guarnição da América do Norte e a Guarnição da Europa. Cada guarnição foi dividida em Exército, Força Aérea, Marinha e Força Espacial. Algumas de suas outras divisões incluíam a Divisão de Inteligência, o Quartel-General Conjunto da Polícia Militar e a Agência de Inteligência Estratégica. O Esquadrão da PF e os S.P.A.R.R.O.W.S eram unidades de forças especiais pertencentes ao Quartel General de Operações Conjuntas e à Agência de Inteligência, respectivamente. A Agência de Inteligência Estratégica foi fundada para competir com a Divisão de Inteligência, que alguns temiam estar se tornando muito autossuficiente por ter sua própria unidade de combate. Embora muitas de suas funções coincidissem com as da Divisão de Inteligência, seus agentes muitas vezes realizavam a perigosa missão de serem capturados voluntariamente para fornecer munição e armas pesadas aos amigos. Eles estão em guerra com o Exército Rebelde em sua maior parte e estão tentando manter a paz mundial enquanto evitam inúmeras calamidades sobrenaturais e alienígenas. O Exército Regular também é conhecido por seus grandes e avançados Super Veículos e suas avançadas armas experimentais."
  );

  $("#marco").on("click", () => {
    $(".name").text("Marco Rossi");
    $("#img").attr("src", "img/gif/marco-gif.gif");
    $("#patent p").text("Major do Esquadrão Falcões Peregrinos");
    $("#desc p").text(
      "Este ítalo-americano estudou na faculdade de tecnologias especiais da academia militar após frequentar uma escola técnica pública. Ele se tornou membro do Esquadrão de Forças Especiais dos Falcões Peregrinos (também conhecido como Esquadrão PF). É um agente especialista e intelectual que adora ciência da computação. Por acidente, um vírus que ele criou infectou o sistema central de computadores do exército. Apesar disso, ele nega qualquer envolvimento. Marco também criou a AI MS-Alice, que ganhou autoconsciência. Ele é responsável pela segurança de Midori e se preocupa profundamente com ela."
    );
  });

  $("#tarma").on("click", () => {
    $(".name").text("Tarma Roving");
    $("#img").attr("src", "img/gif/tarma-gif.gif");
    $("#patent p").text("Capitão do Esquadrão Falcões Peregrinos");
    $("#desc p").text(
      "Filho de um militar distinto, ele entrou nas Forças Especiais logo após o colegial. Na Brigada da PF, conheceu Marco durante uma missão de resgate do presidente, tornando-se amigos. Ambos lutaram juntos e sobreviveram na Grande Guerra. Depois da guerra, Tarma foi promovido a capitão, assim como Marco. Ele zomba de Marco, mas o respeita como soldado. Tarma é habilidoso em construir motocicletas personalizadas e planejava abrir uma loja após a guerra, mas foi convencido a continuar no serviço militar. Ele gosta de feijão fermentado com arroz e flerta com mulheres, mas não se abala com rejeições. Tarma busca vingança contra aqueles que machucam seus companheiros."
    );
  });

  $("#trevor").on("click", () => {
    $(".name").text("Trevor Spacey");
    $("#img").attr("src", "img/gif/trevor-gif.gif");
    $("#patent p").text("Sargento do Esquadrão Falcões Peregrinos");
    $("#desc p").text(
      "Trevor recebeu seu primeiro computador aos três anos de idade como um presente de seus pais e compreendia completamente os códigos binários e as linguagens de computador aos sete anos de idade. Durante o recesso de verão da escola, ele geralmente trabalhava na criação de programas antivírus para suas tarefas de casa, ainda usados ​​por sua escola contra ameaças crescentes da Internet. Sua capacidade de entender linguagens de computador permitiu que ele fosse designado para o regimento de reconhecimento do Exército Regular. Encontrando respeito por Marco, ele então se inscreveu no Peregrine Falcons - mais tarde Trevor tornou-se sargento do esquadrão PF. Há rumores de que após os eventos contra o Amadeus Syndicate ele se aposentou para trabalhar no Exército Regular como programador de segurança."
    );
  });

  $("#gimlet").on("click", () => {
    $(".name").text("Gimlet");
    $("#img").attr("src", "img/gif/gimlet-gif.gif");
    $("#patent p").text("Recruta do Esquadrão Falcões Peregrinos");
    $("#desc p").text(
      "Ele é um recruta no PF Squad. Em seu caminho para investigar os objetivos do exército rebelde, nosso herói obtém informações surpreendentes de um refém resgatado de que os insurgentes fizeram contato com alienígenas do espaço. Ele solicita reforço do QG, mas surpreendentemente ele é ignorado, pois eles acreditam que ele ficou em estado de choque. Relutantemente, ele resolve atacar a base inimiga sozinho."
    );
  });

  $("#walter").on("click", () => {
    $(".name").text("Walter Ryan");
    $("#img").attr("src", "img/gif/walter-gif.gif");
    $("#patent p").text("Cadete do Esquadrão Falcões Peregrinos");
    $("#desc p").text(
      "Um personagem problemático que não conseguia encontrar seu propósito na vida, ele se alistou nos falcões peregrinos para treinar sua mente e corpo e conseguiu obter autoconfiança enquanto aumentava sua resistência através da participação em rigorosos cursos de treinamento oferecidos pelos falcões peregrinos. Ao saber que os Rebeldes atacaram a ilha onde ia treinar, não hesitou em avançar e encontrar o verdadeiro valor que procurava. Depois de se formar junto com Tyra, ele se tornou um dos reservas do Esquadrão PF."
    );
  });

  $("#tyra").on("click", () => {
    $(".name").text("Tyra Elson");
    $("#img").attr("src", "img/gif/tyra-gif.gif");
    $("#patent p").text("Cadete do Esquadrão Falcões Peregrinos");
    $("#desc p").text(
      "Quando criança, sua aldeia foi destruída pelo Exército Rebelde. Um grupo de crianças que sobreviveu ao ataque jurou lutar contra os rebeldes, mas Tyra inicialmente hesitou. Envergonhada pelo que considerava covardia, ela jurou nunca mais temer por sua própria vida. Seu desejo de lutar contra o mal a fez se alistar nos Falcões Peregrinos. Depois de receber a nota máxima nas provas escritas aplicadas aos cadetes quando eles se alistam, ela não hesita em participar do treinamento físico final. Ela então descobriu o ataque rebelde na ilha e ficou animada ao saber que finalmente havia frustrado as forças do mal, como ela sempre quis. Ela conheceu Walter depois de se formar e tornou-se uma boa amiga dele. Apesar de parecer fria e impiedosa por fora, ela se preocupa com aqueles que conhece e ama."
    );
  });

  $("#roberto").on("click", () => {
    $(".name").text("Roberto Nicola");
    $("#img").attr("src", "img/gif/roberto-gif.gif");
    $("#patent p").html("Recruta do Exército<br>Regular");
    $("#desc p").text(
      "Recruta do Exército Regular, Roberto admira Fio, apesar da natureza excessivamente cautelosa e desajeitada de seu superior. Ele gosta de ajudar os outros, embora desconfie de ajudar mulheres bonitas, pois ficou assustado depois de tentar ajudar Beatriz, que posteriormente o congelou com sua arma de congelamento. Roberto também tem medo de zumbis. Ele também afirma que Amber se dá bem com outras pessoas, apesar de sua natureza aparentemente tranquila."
    );
  });

  $("#rita").on("click", () => {
    $(".name").text("Rita Lewinsky");
    $("#img").attr("src", "img/gif/rita-gif.gif");
    $("#patent p").text("Recruta do Esquadrão Falcões Peregrinos");
    $("#desc p").text(
      "Rita é uma nova recruta do Esquadrão Falcões Peregrinos, entrando na mesma época que Roberto. Até completar 18 anos, ela foi criada com os avós em uma remota região montanhosa do nordeste, sem eletricidade ou água corrente. Originalmente, Rita deveria ser listada em uma unidade diferente, mas foi recomendada para ingressar no Esquadrão da PF devido às suas capacidades físicas; ou seja, sua força e visão não naturais. Ela fica bastante envergonhada com sua criação no campo e tenta persuadir pessoas suspeitas com seu sotaque de 'cidade' e vestindo-se com as últimas tendências da moda. Rita é péssima com armas de longo alcance, mas se destaca como uma lutadora física com grande destreza nas pernas. Rita pode desviar de inimigos dando cambalhotas. Midori criou um equipamento especial para as pernas para que Rita possa eliminar os inimigos sem causar danos."
    );
  });

  $("#rocky").on("click", () => {
    $(".name").text("Rocky");
    $("#img").attr("src", "img/gif/rocky-gif.gif");
    $("#patent p").text("Recruta do Esquadrão Falcões Peregrinos");
    $("#desc p").text(
      "Rocky é prima de Rita. Embora aparentemente não tenham contato há vários anos, as duas se dão bem. Rocky ajuda a lembrar Rita de eventos importantes e também gosta de passar o tempo com a prima, principalmente fazendo justiça. Como Rita, as capacidades físicas de Rocky são muito altas. No entanto, ela se destaca no uso dos punhos, enquanto sua prima conta com as pernas para derrotar os inimigos. Suas armas provavelmente foram feitas por Midori, já que as de Rita foram desenhadas pela jovem mecânica."
    );
  });

  $("#jephet").on("click", () => {
    $(".name").text("Jephet");
    $("#img").attr("src", "img/gif/jephet-gif.gif");
    $("#patent p").text("Operadora do Exército Regular");
    $("#desc p").text(
      "Jephet é o operador do maior Coil Tank do Exército Regular. Ela não mostra medo de oficiais superiores devido ao seu passado como delinquente juvenil."
    );
  });

  $("#eri").on("click", () => {
    $(".name").text("Eri Kasamoto");
    $("#img").attr("src", "img/gif/eri-gif.gif");
    $("#patent p").text("Sargento de Equipe do S.P.A.R.R.O.W.S");
    $("#desc p").text(
      "Uma órfã que foi abandonada em frente a uma igreja, sua memória mais antiga é escapar da igreja e se tornar líder de uma gangue de rua. Suas habilidades de liderança foram descobertas pela Agência de Inteligência das Forças Governamentais, que lhe deu treinamento especial como espiã. Eri, no entanto, achou missões de assassinato e subterfúgio muito desagradáveis, então ela se candidatou para ser transferida para S.P.A.R.R.O.W.S, da qual ela foi especialmente concedida considerando suas habilidades e ações."
    );
  });

  $("#fio").on("click", () => {
    $(".name").text("Fio Germi");
    $("#img").attr("src", "img/gif/fio-gif.gif");
    $("#patent p").text("Sargento Mestre do S.P.A.R.R.O.W.S");
    $("#desc p").text(
      "Fio é a única filha de uma rica família italiana. A família Germi era historicamente uma família militar, então é claro que o pai de Fio desejava que o primeiro filho fosse um filho forte. No entanto, após um parto difícil, sua mãe tornou-se incapaz de ter filhos adicionais. Esta foi a primeira vez na história da Germi que a família teve uma herdeira. Por tradição familiar, ela foi obrigada a ser militar, por isso foi obrigada a ingressar nas Forças Governamentais. O completo oposto de Eri, Fio foi criado por pais amorosos e possui um comportamento quieto. Ela estudou quiropraxia e acupuntura na universidade e está pensando em se tornar uma médica esportiva no futuro."
    );
  });

  $("#red-eye").on("click", () => {
    $(".name").text("Red Eye");
    $("#img").attr("src", "img/gif/red-gif.gif");
    $("#patent p").text("Membro do S.P.A.R.R.O.W.S");
    $("#desc p").text(
      "Ela é membro das Forças Especiais das Forças Governamentais. Em seu caminho para investigar informações sobre o avistamento de um OVNI em uma base do exército rebelde, ela descobre que o inimigo fez contato com alienígenas do espaço. Mas ela também descobre que um membro do esquadrão PF também obteve essa informação e corre para a base inimiga sozinha, esperando que ela não seja derrotada na ação."
    );
  });

  $("#nadia").on("click", () => {
    $(".name").text("Nadia Cassel");
    $("#img").attr("src", "img/gif/nadia-gif.gif");
    $("#patent p").text("Soldado do S.P.A.R.R.O.W.S");
    $("#desc p").text(
      "Nadia sonhava em ser uma supermodelo, mas não resistia a comer. Ela continuou comendo e ganhando peso. Ela então se alista no Exército Regular, apesar do apelo de seu gerente de modelagem, para manter o peso baixo, e consegue fazê-lo. No entanto, ela encontra um verdadeiro potencial para ser um soldado e se transfere para os SPARROWS para ganhar experiência em combate. A operação contra o Amadeus Syndicate foi sua primeira missão de combate. Quando tudo acabou, ela não queria deixar sua nova vida emocionante, então ela se inscreveu nos Serviços Secretos do Exército Regular para continuar trabalhando como agente."
    );
  });

  $("#nathalie").on("click", () => {
    $(".name").text("Nathalie Neo");
    $("#img").attr("src", "img/gif/nathalie-gif.gif");
    $("#patent p").text("Ocupação desconhecida");
    $("#desc p").text("História desconhecida.");
  });

  $("#midori").on("click", () => {
    $(".name").text("Midori Schumann");
    $("#img").attr("src", "img/gif/midori-gif.gif");
    $("#patent p").text("Engenheira do Exército Regular");
    $("#desc p").text(
      "Ela perdeu seus pais na guerra entre o Exército Regular e Rebelde, e posteriormente foi colocada em um orfanato. Marco, por acaso, viu seu talento e a trouxe para o Exército Regular, que rapidamente floresceu, resultando nela como responsável pelas armas e munições do exército. Ela é um tanto infantil e tende a se referir a si mesma na visão de terceira pessoa. Embora ela sinta falta de seus pais, ela está feliz por estar com sua nova família. Midori é responsável por criar uma vasta gama de armas do Exército Regular que são usadas por vários membros do exército. Ela desenvolveu o Thunder Shot (ocasionalmente usado por Fio ), um anexo de perna para Rita, EGG, três drones em forma de ovo baseados em drones de um oficial do Exército Rebelde de alto escalão que são usados ​​por Gisee e, provavelmente, as manoplas de Rocky."
    );
  });

  $("#gisee").on("click", () => {
    $(".name").text("Gisee");
    $("#img").attr("src", "img/gif/gisee-gif.gif");
    $("#patent p").text("Ocupação desconhecida");
    $("#desc p").text(
      "Gisee é uma jovem que tem uma relação desconhecida com Midori. Por razões desconhecidas, ela fala bem devagar. Ela está equipada com EGGs experimentais, três dispositivos a laser em forma de ovo inspirados nos drones a laser de Abigail."
    );
  });

  $("#avvio").on("click", () => {
    $(".name").text("Avvio");
    $("#img").attr("src", "img/gif/avvio-gif.gif");
    $("#patent p").text("Soldado do Exército Regular");
    $("#desc p").text(
      "Avvio é um membro do Metal Device Project, embora ao contrário dos outros membros que têm um terno ou próteses, ele recebeu uma pistola especial. Esta pistola usa balas de trovão especiais e pode gerar uma pequena bola de eletricidade para atingir os inimigos. Ele é bastante acrobático e também carrega um fio de luta que lhe permite escapar de ataques e atirar em inimigos ao mesmo tempo."
    );
  });

  $("#charlotte").on("click", () => {
    $(".name").text("Charlotte");
    $("#img").attr("src", "img/gif/charlotte-gif.gif");
    $("#patent p").text("Soldado do S.P.A.R.R.O.W.S");
    $("#desc p").text(
      "Charlotte é membro do S.P.A.R.R.O.W.S e também prima de Avvio. Como ele, ela é confiante em sua aparência, muitas vezes exibindo sua aparência pequena e fofa e também é proficiente com uma arma.Ela se veste com um terninho que lembra um coelho e também usa uma pistola elétrica como ele. Ele dispara ondas eletromagnéticas e também pode implantar coelhos em forma de ovo para eletrocutar os inimigos."
    );
  });

  $("#heidern").on("click", () => {
    $(".name").text("Heidern");
    $("#img").attr("src", "img/gif/heidern-gif.gif");
    $("#patent p").text("Comandante dos Guerreiros Ikari");
    $("#desc p").text(
      "Heidern é o comandante dos Guerreiros Ikari e emite ordens para sua filha adotiva. Leona e seus melhores soldados: Clark , Whip e Ralf. Ele também é conhecido como o General dos Soldados da Fortuna. Depois de perder sua família, Heidern cria os Guerreiros Ikari, Sua própria Unidade Mercenária. Ele resgata Leona de uma cidade invadida e, ao ver suas capacidades, decide adotá-la como filha. Ele entra em muitos torneios de luta junto com suas unidades, Ralf e Clark; algum tempo depois ele recruta Whip. Ele tem uma personalidade fria devido à perda de sua família e de seu olho; Ele é um estrategista experiente, especialmente ao tentar impedir uma ameaça importante."
    );
  });

  $("#ralf").on("click", () => {
    $(".name").text("Ralf");
    $("#img").attr("src", "img/gif/ralf-gif.gif");
    $("#patent p").text("Coronel dos Guerreiros Ikari");
    $("#desc p").text(
      "Embora ele seja um coronel de seu esquadrão de mercenários, seu passado é um completo mistério. Há rumores de que ele veio das forças especiais de uma certa nação ou que erradicou alguma sociedade secreta; Ralf não mostra interesse em tais rumores. Ele parece muito próximo de seu comandante, mas ninguém tem ideia de como eles se conheceram. Ele e Clark são irmãos de armas e sempre vão para a batalha juntos. Ele é conhecido por participar de torneios de luta, e sua habilidade de combate corpo a corpo supera em muito o lutador médio. Ele é bem conhecido por seu Vulcan Punch, uma poderosa salva de socos poderosos o suficiente para matar infantaria e destruir tanques. Sua coisa mais valiosa é uma medalha dada a ele pelo presidente."
    );
  });

  $("#clark").on("click", () => {
    $(".name").text("Clark Still");
    $("#img").attr("src", "img/gif/clark-gif.gif");
    $("#patent p").text("Major dos Guerreiros Ikari");
    $("#desc p").text(
      "Parece que ele se juntou ao esquadrão de mercenários há alguns anos, mas nada mais se sabe sobre Clark além disso. Ele e Ralf são irmãos de armas há muito tempo e sempre vão para a batalha juntos. Assim como Ralf, também existem inúmeros rumores sobre seu passado, e todos são igualmente bizarros. No entanto, o próprio número desses rumores e o fato conhecido de que ele frequentemente se junta a Ralf em lutas de torneio oferecem uma pista de suas proezas de luta. No campo de batalha, seu estilo de combate difere um pouco do de Ralf, mas ele mostra experiência em técnicas de combate corpo a corpo da mesma forma. Inimigos infelizes o suficiente para topar com ele são instantaneamente lançados no ar e caem de volta."
    );
  });

  $("#leona").on("click", () => {
    $(".name").text("Leona Heidern");
    $("#img").attr("src", "img/gif/leona-gif.gif");
    $("#patent p").text("Soldado dos Guerreiros Ikari");
    $("#desc p").text(
      "Quando criança, Leona perdeu seus pais em um trágico incidente. Ela se tornou a filha adotiva de Heidern , que a incluiu dentro dos Guerreiros Ikari entre os Soldados da Fortuna Ralf e Clark, e posteriormente supervisionou sua rigorosa educação militar (algum tempo antes de Whip ser incluído em seu esquadrão). Esta jovem taciturna e indiferente tem dificuldade em socializar todos os dias, mas é uma soldado consumada com seguidores comprometidos entre os seus subordinados. Em combate, ela cumpre suas missões de maneira eficiente que muitos descrevem como “sublime”, aniquilando o inimigo principalmente com uma adaga de mão legada por seu pai adotivo. Ela também conhece o agente do SPARROWS, Fio Germi , e aparentemente empreendeu uma missão ao lado dela e de Clark, unindo esse trio em um forte vínculo de camaradagem."
    );
  });

  $("#seirah").on("click", () => {
    $(".name").text("Seirah (Whip)");
    $("#img").attr("src", "img/gif/seirah-gif.gif");
    $("#patent p").text("Sargento de Equipe dos Guerreiros Ikari");
    $("#desc p").text(
      "Assim como Ralf e Clark, seu passado é melhor permanecer um mistério. Rumores sobre seu passado incluem trabalhar como assassina para uma corporação não especificada, desertar e mudar seu nome para entrar no Exército Regular. Ela acaba sendo designada para a unidade mercenária de Heidern com seu nome atual, Whip. Quando ela era nova, Ralf costumava chamá-la de Muchiko (japonês para 'Whip Girl' ou 'Whippy'), um apelido que ela alegou não gostar. Ela também é conhecida por entrar em torneios de luta ao lado do resto de sua equipe, destruindo a empresa para a qual trabalhava durante esses torneios. Ela é uma garota calma e de coração puro, muito confiante em si mesma. Ela encontrou esperanças de um futuro melhor e de ser feliz novamente com seus companheiros de esquadrão Ralf, Leona."
    );
  });

  $("#rumi").on("click", () => {
    $(".name").text("Rumi Aikawa");
    $("#img").attr("src", "img/gif/rumi-gif.gif");
    $("#patent p").text("Sargento de Suprimentos do Exército Regular");
    $("#desc p").text(
      "A principal intenção de Rumi de ingressar no Exército Regular é por causa de sua mãe diagnosticada com um problema cardíaco, bem como de sua irmã mais velha, Madoka, que estava fisicamente fraca, para que ambas possam fazer uso das instalações médicas do Exército Regular para tratamento. Durante seu treinamento, ela foi acidentalmente enviada para a linha de frente após um fiasco com a papelada e, apesar de seu treinamento ainda não ter sido concluído, ela conseguiu escapar ilesa da luta e sem ser capturada. Como sargento de suprimentos, ela coloca uma quantidade incrível de carga em sua mochila e tenta entregá-la às forças amigas, no campo de batalha, na esperança de ajudá-las a vencer. No entanto, ela tem um péssimo senso de direção e muitas vezes se perde. Isso faz com que ela apareça do nada e desapareça sem deixar vestígios, ganhando o apelido de 'O Fantasma Errante' por outros soldados. Sua irmã, Madoka , também parecia ter entrado para o exército, mas em uma tentativa de ficar mais em forma."
    );
  });

  $("#hyakutaro").on("click", () => {
    $(".name").text("Hyakutaro Ichimonji");
    $("#img").attr("src", "img/gif/hyakutaro-gif.gif");
    $("#patent p").text("Segundo Tenente do Exército Regular");
    $("#desc p").text(
      "Hyakutaro é uma lenda viva, que se disfarça de prisioneiro de guerra para ajudar no campo de batalha contra o Exército Rebelde . Ele é capaz de canalizar uma estranha energia de luz de suas palmas, liberando-a em uma explosão. Assim que o jogador o libertar do cativeiro, ele os seguirá, lançando projéteis que atingem os inimigos, causando danos consideráveis. A explosão de energia também inflige dano a qualquer inimigo pego em sua direção."
    );
  });

  $("#utan").on("click", () => {
    $(".name").text("Utan");
    $("#img").attr("src", "img/gif/utan-gif.gif");
    $("#patent p").text("Mascote do Exército Regular");
    $("#desc p").text(
      "Quando libertado destruindo a gaiola, ele ajudará o jogador disparando rajadas curtas de sua submetralhadora Mac-10 contra os atacantes. Infelizmente, ele não tem um tiro perfeito e costuma parar para dormir, comer bananas, enfiar o dedo no nariz ou coçar as partes íntimas."
    );
  });

  $("#madoka").on("click", () => {
    $(".name").text("Madoka Aikawa");
    $("#img").attr("src", "img/gif/madoka-gif.gif");
    $("#patent p").text("Soldado de Suprimentos do Exército Regular");
    $("#desc p").text(
      "Madoka primeiro viu as instalações do Exército Regular como um mero paciente, porque sua irmã mais nova, Rumi, internou ela e sua mãe no hospital. Madoka tinha uma fraqueza severa nas pernas que poderia tê-la tornado aleijada permanentemente, e sua mãe estava tendo insuficiência cardíaca. Assim que começou a se sentir melhor, decidiu se inscrever no Exército Regular e trabalhar como fornecedora como sua irmã. Mas o que seria uma simples transferência para outra base como sua primeira missão, acabou com ela sofrendo o mesmo erro de papelada da irmã e sendo transferida para o calor da batalha."
    );
  });

  $("#eris").on("click", () => {
    $(".name").text("Eris");
    $("#img").attr("src", "img/gif/eris-gif.gif");
    $("#patent p").text("Mecânica do Exército Regular");
    $("#desc p").text(
      "Eris é uma mecânica do Exército Regular. Ela usa uma roupa de camuflagem composta por uma regata, mangas curtas e uma minissaia. Ela tem olhos azuis e longos cabelos loiros."
    );
  });

  $("#infantry").on("click", () => {
    $(".name").text("Infantaria");
    $("#img").attr("src", "img/gif/infantry-regular-gif.gif");
    $("#patent p").text("Infantaria do Exército Regular");
    $("#desc p").text(
      "Soldados são profissionais de todo o mundo frequentemente encarregados de missões de manutenção da paz e infiltração. Eles geralmente cobrem um papel de suporte, pois o Governo Mundial prefere implantar equipes especiais para se infiltrar nas fortificações inimigas e minimizar as baixas civis, em vez de se envolver em longas batalhas. Isso explica sua falta de participação na maioria das batalhas realizadas ao longo da série. A Infantaria do Exército usa uniforme e capacete de cor azul claro. Seu equipamento é semelhante ao dos rebeldes, embora eles geralmente mostrem habilidades mais altas, precisão aprimorada e melhor agilidade. Cientistas e oficiais da Divisão de Pesquisa usam jalecos brancos."
    );
  });
});

button_rebel.on("click", () => {
  button_regular.css("display", "none");
  button_rebel.css("display", "none");
  button_vehicles_rebel.css("display", "none");
  button_vehicles_regular.css("display", "none");
  button_history.css("display", "none");
  cards.html("");
  cards.html(
    '<div id="general" class="sub-card"><span class="title-cards">General do Exército</span><br><br><div class="card"><img src="img/png/Donald.png" alt="img" class="character-rebel" id="donald"></div><div class="card"><img src="img/png/Soldier-Rebel.png" alt="img" class="character-rebel" id="infantry-rebel"></div></div><div id="ace" class="sub-card"><span class="title-cards">ACE</span><br><br><div class="card"><img src="img/png/Abigail.png" alt="img" class="character-rebel" id="abigail"></div><div class="card"><img src="img/png/Dion.png" alt="" class="character-rebel" id="dion"></div><div class="card"><img src="img/png/Romy.png" alt="" class="character-rebel" id="romy"></div><div class="card"><img src="img/png/Kriemhild.png" alt="" class="character-rebel" id="kriemhild"></div><div class="card"><img src="img/png/Katalina.png" alt="" class="character-rebel" id="katalina"></div></div><div id="frozen-brigade" class="sub-card"><span class="title-cards">Brigada Congelada</span><br><br><div class="card"><img src="img/png/Beatriz.png" alt="img" class="character-rebel" id="beatriz"></div><div class="card"><img src="img/png/Vicky.png" alt="img" class="character-rebel" id="vicky"></div><div class="card"><img src="img/png/Dolores.png" alt="img" class="character-rebel" id="dolores"></div></div><div id="blaze-brigade" class="sub-card"><span class="title-cards">Brigada de Incêndio</span><br><br><div class="card"><img src="img/png/Grazia.png" alt="img" class="character-rebel" id="grazia"></div><div class="card"><img src="img/png/Loretta.png" alt="img" class="character-rebel" id="loretta"></div><div class="card"><img src="img/png/Norah.png" alt="img" class="character-rebel" id="norah"></div></div><div id="allen-platoon" class="sub-card"><span class="title-cards">Pelotão Allen</span><br><br><div class="card"><img src="img/png/Allen.png" alt="img" class="character-rebel" id="allen"></div><div class="card"><img src="img/png/Allen-Jr.png" alt="img" class="character-rebel" id="allen-jr"></div><div class="card"><img src="img/png/Huracan.png" alt="img" class="character-rebel" id="huracan"></div><div class="card"><img src="img/png/Conny.png" alt="img" class="character-rebel" id="conny"></div><div class="card"><img src="img/png/Nantes.png" alt="img" class="character-rebel" id="nantes"></div><div class="card"><img src="img/png/Padwah.png" alt="img" class="character-rebel" id="padwah"></div><div class="card"><img src="img/png/Virginia.png" alt="img" class="character-rebel" id="virginia"></div></div>'
  );
  cards.fadeIn();
  $("#general").css("display", "inline");
  $(".name").text("Exército Rebelde");
  $("#img").attr("src", "img/png/rebel-army.png");
  $("#patent p").html(
    "Líder: General Donald Morden<br>Comandantes: Allen O'Neil, Allen O'Neil Jr, Abigail, Beatriz<br>Inimigos: Exército Regular, Marcianos, Invasores, Exército Ptolomaico<br> Aliados: Infantaria Árabe, Exército Japonês, Sindicato Amadeus"
  );
  $("#desc p").text(
    "O Exército Rebelde é muito mais preparado que o Exército Regular, os recursos à sua disposição são terrivelmente vastos e variados, variando de legiões de infantaria fanaticamente leal empunhando todo tipo de arma imaginável a longas colunas de tanques em todos os tipos de formas para monstros e enormes máquinas que podem enfrentar exércitos inteiros. Embora tenham sido derrotados várias vezes, eles pretendem atingir seu objetivo e não pararão até que seja concluído. Os rebeldes têm a intenção fanática de acabar com a corrupção governamental e militar, e são conhecidos por irem a extremos para fazê-lo, incluindo aliar-se ao Sindicato Amadeus e até mesmo aos marcianos de outro mundo para ganhar força extra. As tropas do Exército Rebelde são conhecidas por sua devoção destemida ao dever, embora sejam conhecidas por cortar e fugir se a situação parecer particularmente sombria. Suas fileiras são aparentemente infinitas e suas armas são brutalmente eficazes, embora um pouco desatualizadas em comparação. Apesar disso, eles continuamente se encontram superados pela habilidade de luta superior da unidade Falcões Peregrinos, resultando em suas inúmeras derrotas. No final da série principal Metal Slug com Metal Slug 7, eles foram quase eliminados, mas embora derrotados, ainda não estão prontos para desistir."
  );

  $("#donald").on("click", () => {
    $(".name").text("Donald Morden");
    $("#img").attr("src", "img/gif/donald-gif.gif");
    $("#patent p").text("Fundador e Líder Supremo do Exército Rebelde");
    $("#desc p").text(
      "General Donald Morden, apelidado de O Renascimento do Diabo, é o líder do Exército Rebelde e o principal antagonista da série Metal Slug. Ele é frequentemente visto andando em seu tanque espacial pessoal."
    );
  });

  $("#infantry-rebel").on("click", () => {
    $(".name").text("Infantaria");
    $("#img").attr("src", "img/gif/infantry-rebel-gif.gif");
    $("#patent p").text("Infantaria do Exército Rebelde");
    $("#desc p").text(
      "Soldados Rebeldes são fanaticamente leais ao General Donald Morden e compartilham sua profunda antipatia pelas forças do Exército Regular. Eles atacam com uma variedade de armas, incluindo, entre outras, pistolas, facões, rifles e uma variedade de explosivos. Eles não são muito espertos ou uma grande ameaça em pequenos números, mas podem ser uma verdadeira dor de cabeça se houver algumas dezenas de ataques de ambos os lados."
    );
  });

  $("#abigail").on("click", () => {
    $(".name").text("Abigail");
    $("#img").attr("src", "img/gif/abigail-gif.gif");
    $("#patent p").text(
      "Oficial de Alto Escalão do Exército Rebelde e Líder da ACE"
    );
    $("#desc p").text(
      "Abigail nasceu na terra coberta de gelo da Europa Oriental. Depois de ouvir que Donald Morden liderou o golpe do Exército Rebelde, ela se juntou ao Exército Rebelde quando cresceu. Abigail era uma estudante de pós-graduação de uma academia militar. Abigail é uma oficial feminina de alto escalão do Exército Rebelde. Ela tem uma irmã mais nova, Beatriz, que também serve no Exército Rebelde como oficial. As duas são muito próximas e ela a chama carinhosamente de 'Betty'. Ela também ajudou Grazia a formar a Blaze Brigade, fornecendo-lhe fundos e equipamentos. Juntamente com sua posição como uma das oficiais mais leais de Morden, Abigail também comanda o ACE, um esquadrão de combate de elite. Dion, Romy e Kriemhild também fazem parte deste plantel."
    );
  });

  $("#dion").on("click", () => {
    $(".name").text("Dion");
    $("#img").attr("src", "img/gif/dion-gif.gif");
    $("#patent p").text(
      "Tenente do Exército Rebelde e Segundo no comando da ACE"
    );
    $("#desc p").text(
      "Originalmente um dos espiões de Abigail, ele foi promovido a tenente depois que ela ficou impressionada com suas capacidades de combate. Ele serve como seu braço direito e é um esgrimista habilidoso, usando um florete para atacar os inimigos. Ele também carrega uma pistola para combate à distância. Muitas de suas informações pessoais são secretas, pois Abigail nem sabe seu nome real. Em operações normais, Dion normalmente usa um uniforme verde do exército padrão; em operações especiais, ele se transforma em uma variante vermelha. Além de servir como tenente de Abigail, ele também atua como segundo em comando da ACE. Ao contrário de muitos de seus companheiros aliados, Dion recua se a batalha se tornar muito perigosa para ele."
    );
  });

  $("#romy").on("click", () => {
    $(".name").text("Romy");
    $("#img").attr("src", "img/gif/romy-gif.gif");
    $("#patent p").text("Membro da ACE");
    $("#desc p").text(
      "Membro da ACE, ela atende Abigail e Dion. Encaixando-se no cargo de ACE, ela pilota um veículo pesado experimental. O veículo está armado com quatro canhões Vulcan que são operados por movimento, e sua capacidade avançada permite que ela escolha os alvos à vontade. Também é equipado com um poderoso laser capaz de destruir armaduras com facilidade."
    );
  });

  $("#kriemhild").on("click", () => {
    $(".name").text("Kriemhild");
    $("#img").attr("src", "img/gif/kriemhild-gif.gif");
    $("#patent p").text("Membro da ACE");
    $("#desc p").text(
      "Servindo originalmente no Corpo de Aviação de Naomi, Kriemhild passou por uma missão extremamente terrível, mas apesar da forte resistência inimiga, ela completou a missão sozinha. Isso levou Abigail a persegui-la e trazê-la para o ACE, onde ela se tornou membro. Ela tem um forte senso de dever a ponto de frequentemente colocá-la em perigo."
    );
  });

  $("#katalina").on("click", () => {
    $(".name").text("Katalina");
    $("#img").attr("src", "img/gif/katalina-gif.gif");
    $("#patent p").text("Cientista do Exército Rebelde e Membro da ACE");
    $("#desc p").text(
      "Katalina atua como cientista no Exército Rebelde e é membro da ACE. Ela desenvolveu o Marinesk, um tanque semelhante a uma lesma que utiliza partículas de energia e ar comprimido, combinando ambos para gerar ataques baseados em energia que podem ser transformados em um orbe ou tornado, o último dos quais é assistido com o que parece ser um livro que carrega consigo."
    );
  });

  $("#beatriz").on("click", () => {
    $(".name").text("Beatriz");
    $("#img").attr("src", "img/gif/beatriz-gif.gif");
    $("#patent p").text(
      "Oficial de Alto Escalão do Exército Rebelde e Líder da Brigada Congelada"
    );
    $("#desc p").text(
      "Como sua irmã mais velha, Abigail, ela é oficial do Exército Rebelde. Apesar de sua aparência, ela é desbocada e francamente rude com quase todos com quem ela conversa, exceto as poucas exceções solitárias, como sua irmã e Vicky (embora ela ainda possa ficar irritada com ela às vezes). Embora protegida por vários guarda-costas dos quais ela abusa constantemente, eles não parecem se importar com isso."
    );
  });

  $("#vicky").on("click", () => {
    $(".name").text("Vicky");
    $("#img").attr("src", "img/gif/vicky-gif.gif");
    $("#patent p").text("Oficial Ídolo do Exército Rebelde");
    $("#desc p").text(
      "Oficial do Exército Rebelde, ela é uma das muitas fãs de Beatriz e a considera um exemplo. Beatriz parece tolerar a adoração de Vicky por ela e fez dela uma de suas subordinadas.Devido à sua admiração por Beatriz, Vicky começou a se comercializar como a 'garota bruxa' do Exército Rebelde, chamando a si mesma de 'Vicky Mágica' e carrega uma 'varinha', que na verdade é um controle remoto portátil para pilotar seu Sarubia personalizado. Vicky é muito mais atenciosa com os outros e se vê como uma heroína."
    );
  });

  $("#dolores").on("click", () => {
    $(".name").text("Dolores");
    $("#img").attr("src", "img/gif/dolores-gif.gif");
    $("#patent p").text("Piloto do Exército Rebelde");
    $("#desc p").text(
      "Como Vicky, Dolores pilota um Nop-03 Sarubia personalizado, embora o dela seja baseado na variante ptolomaica do Sarubia. Apesar disso, ela adora sua Sarubia por causa das lindas flores que ela gera durante a batalha. Durante o Halloween, ela personalizou seu Sarubia com as cores temáticas apropriadas e, seguindo o tema, fez com que as flores fossem substituídas por abóboras. Dolores é uma pantera por desconfiar de homens mais jovens."
    );
  });

  $("#grazia").on("click", () => {
    $(".name").text("Grazia");
    $("#img").attr("src", "img/gif/grazia-gif.gif");
    $("#patent p").text("Comandante da Brigada de Incêndio");
    $("#desc p").text(
      "Grazia é uma comandante da Brigada de Incêndio, manejadoras de armas à base de chamas. Ela é capaz de controlar seu fogo graças ao desenvolvimento de partículas de indução inflamáveis. As habilidades de fogo de Grazia lhe renderam o nome de Flame Dragon por seus inimigos. Na batalha, ela prefere carregar um lança-chamas, embora também faça uso de uma máquina subterrânea para obter mais poder de fogo. Abigail a ajudou a fundar a Blaze Brigade, fornecendo-lhe fundos e armamento."
    );
  });

  $("#loretta").on("click", () => {
    $(".name").text("Loretta");
    $("#img").attr("src", "img/gif/loretta-gif.gif");
    $("#patent p").text("Vice-comandante da Brigada de Incêndio");
    $("#desc p").text(
      "Ao contrário de sua superiora Grazia, que é um tanto infantil, Loretta leva sua posição a sério e é capaz de interpretar seu discurso para permitir que outros não familiarizados com ele entendam. Loretta é a camarada de maior confiança de Grazia, já que ela é vice-comandante da Brigada de Incêndio. Ela era originalmente um membro da ACE, mas Abigail a transferiu para a Brigada de Incêndio para ajudar a apoiá-la durante seu início. Desde então, ela permaneceu com eles como vice-comandante desde então."
    );
  });

  $("#norah").on("click", () => {
    $(".name").text("Norah");
    $("#img").attr("src", "img/gif/norah-gif.gif");
    $("#patent p").text(
      "Soldado do Exército Rebelde e Membro da Brigada de Incêndio"
    );
    $("#desc p").text(
      "Norah é um dos membros da Brigada de Incêndio. Ela estava originalmente servindo a Beatriz, mas foi transferida para a Brigada de Incêndio sob as ordens de Abigail para comemorar seu início. Ao contrário de suas superiores Grazia e Loretta, Norah usa um traje muito mais isolado e não tem sua própria máquina de guerra pessoal. No entanto, ela tem acesso às partículas de indução de assinatura e carrega duas tochas de mão em vez de um único lança-chamas. Ela utiliza duas chamas diferentes - a laranja comum e as chamas azuis mais raras, a última das quais para simbolizar a Brigada Congelada a pedido de Beatriz."
    );
  });

  $("#allen").on("click", () => {
    $(".name").text("Allen O'Neil");
    $("#img").attr("src", "img/gif/allen-gif.gif");
    $("#patent p").text(
      "Sargento do Exército Rebelde e Comandante do Pelotão Allen"
    );
    $("#desc p").text(
      "Allen aborda o campo de batalha de maneira impulsiva e ofensiva quando se trata de lutar contra os soldados do Exército Regular. Allen adora lutar contra o inimigo, e é por isso que prefere permanecer como sargento porque é o posto mais alto possível que lhe permite lutar na linha de frente diariamente. Sua força absoluta é igualada por seu ego, muitas vezes criticando e fazendo comentários sobre seus inimigos. Embora seu complexo de superioridade leve a melhor sobre ele, ele é um soldado experiente, capaz de suportar mais punições do que seus camaradas mais fracos. A única coisa que mantém Allen vivo, além de seus músculos e cabeça grande, é sua devoção e vontade de voltar para casa para sua esposa Henrietta e filhos Nancy e Allen Jr."
    );
  });

  $("#allen-jr").on("click", () => {
    $(".name").text("Allen O'Neil Jr");
    $("#img").attr("src", "img/gif/allenjr-gif.gif");
    $("#patent p").text("Soldado de Elite do Exército Rebelde");
    $("#desc p").text(
      "Allen Jr. é filho de Allen O'Neil e, assim como seu pai, ele se tornou um soldado. Em busca de vingança contra o Esquadrão da PF por suas vitórias contra o Exército Rebelde, ele reuniu tropas rebeldes e se infiltrou no campo de treinamento da PF localizado em uma ilha remota, aparentemente com a intenção de destruir todo o local."
    );
  });

  $("#huracan").on("click", () => {
    $(".name").text("Huracan");
    $("#img").attr("src", "img/gif/huracan-gif.gif");
    $("#patent p").text("Soldado do Exército Rebelde");
    $("#desc p").text(
      "Vindo de uma tribo aborígine em uma floresta subdesenvolvida, o Exército Rebelde atacou para expulsar os nativos em busca de recursos, embora sua força chamasse a atenção deles. Uma negociação foi feita entre seu povo e o Exército Rebelde; ela os ajudaria na batalha e, em troca, o Exército Rebelde deixou sua tribo sozinha. Embora ela tenha ficado bastante relutante no início, ela não se arrepende de sua decisão, tendo feito novos amigos e curtindo as batalhas em que o Exército Rebelde se mete."
    );
  });

  $("#conny").on("click", () => {
    $(".name").text("Conny");
    $("#img").attr("src", "img/gif/conny-gif.gif");
    $("#patent p").text("Soldado do Exército Rebelde");
    $("#desc p").text(
      "Órfã de guerra, Conny cresceu com o Exército Rebelde depois de ser abandonada por sua mãe. Como resultado, ela nutre um intenso ódio por laços e gosta de ver os outros sofrerem. Conny também é um cleptomaníaco, tendo que vasculhar para sobreviver no passado. Ela tem uma vontade extraordinariamente forte de sobreviver, sendo capaz de evitar a morte, não importa o quão severa ela possa ser."
    );
  });

  $("#nantes").on("click", () => {
    $(".name").text("Nantes");
    $("#img").attr("src", "img/gif/nantes-gif.gif");
    $("#patent p").text("Soldado do Pelotão Allen");
    $("#desc p").text(
      "Nantes é uma jovem soldado que serve no Exército Rebelde e foi rapidamente notada pelos superiores como uma importante operadora de tanque. Ela pediu para se juntar ao pelotão de Allen, o que foi concedido por Abigail. A razão pela qual ela se mudou para lá é devido à sua glorificação de Allen, devido ao seu título e capacidade de sobreviver contra a morte certa. Ela é bastante otimista e mostra respeito pelo pessoal de alto escalão."
    );
  });

  $("#padwah").on("click", () => {
    $(".name").text("Padwah");
    $("#img").attr("src", "img/gif/padwah-gif.gif");
    $("#patent p").text("Membro do Pelotão Allen");
    $("#desc p").text(
      "Uma jovem servindo no Pelotão Allen, Padwah havia participado de uma operação, acompanhada de equipamento pesado, quando a aeronave que os transportava errou o alvo. Para piorar, o equipamento pesado também ficou sem combustível e parou de funcionar. Ela estava motivando seus companheiros soldados agarrando o volante de um dos tanques como uma arma, levando-os à vitória. Ela continua a usar a referida roda como sua arma principal, usando sua força para carregá-la com facilidade. Mais tarde, ela adicionou lança-chamas à sua arma para transformá-la em uma roda giratória de fogo. Ela enfatiza a importância da mobilidade para seu sucesso, afirmando que mesmo as maiores armas são inúteis se não puderem se mover."
    );
  });

  $("#virginia").on("click", () => {
    $(".name").text("Virginia");
    $("#img").attr("src", "img/gif/virginia-gif.gif");
    $("#patent p").text("Membro do Pelotão Allen");
    $("#desc p").text(
      "Virginia é membro do Pelotão Allen. Durante uma missão contra o Exército Espacial, ela contribuiu para evitar que eles congelassem o continente. Durante o processo de desmontagem de uma bomba de congelamento, ocorreu um acidente no qual ela desenvolveu uma constituição de absorção de calor, absorvendo todo o calor ao seu redor enquanto emitia ar extremamente frio no processo. Ela foi forçada a ficar longe da linha de frente por um tempo até que seu traje personalizado estivesse pronto, permitindo que ela controlasse seu novo poder. O traje tem duas formas - um estado ativo que transforma suas mãos em enormes punhos de gelo para socar os inimigos e canalizar o ar frio. Se o traje for danificado criticamente, ela acaba se transformando em uma pedra de gelo. Há também um estado inativo que permite que ela ande como uma pessoa normal."
    );
  });
});

button_vehicles_regular.on("click", () => {
  button_regular.css("display", "none");
  button_rebel.css("display", "none");
  button_vehicles_rebel.css("display", "none");
  button_vehicles_regular.css("display", "none");
  button_history.css("display", "none");
  cards.html("");
  cards.html(
    '<div id="combat" class="sub-card"><span class="title-cards">Combate</span><br><br><div class="card"><img class="character-regular" src="img/gif/3d-printer-tank.gif" alt="img" id="3d-printer"></div><div class="card"><img class="character-regular" src="img/gif/ball-slug.gif" alt="img" id="ball-slug"></div><div class="card"><img class="character-regular" src="img/gif/blue-tiger.gif" alt="img" id="blue-tiger"></div><div class="card"><img class="character-regular" src="img/gif/coil-tank.gif" alt="img" id="coil-tank"></div><div class="card"><img class="character-regular" src="img/gif/regular-di-cokka.gif" alt="img" id="di-cokka"></div><div class="card"><img class="character-regular" src="img/gif/metal-claw.gif" alt="img" id="metal-claw"></div><div class="card"><img class="character-regular" src="img/gif/slug-attacker.gif" alt="img" id="slug-attacker"></div><div class="card"><img class="character-regular" src="img/gif/slug-defender.gif" alt="img" id="slug-defender"></div><div class="card"><img class="character-regular" src="img/gif/slug-gunner.gif" alt="img" id="slug-gunner"></div><div class="card"><img class="character-regular" src="img/gif/slug-striker.gif" alt="img" id="slug-striker"></div><div class="card"><img class="character-regular" src="img/gif/slug-square.gif" alt="img" id="slug-square"></div><div class="card"><img class="character-regular" src="img/gif/slugnoid.gif" alt="img" id="slugnoid"></div><div class="card"><img class="character-regular" src="img/gif/sv-001.gif" alt="img" id="sv-001"></div><div class="card"><img class="character-regular" src="img/gif/sv-002.gif" alt="img" id="sv-002"></div></div><div id="support" class="sub-card"><span class="title-cards">Suporte</span><br><br><div class="card"><img class="character-regular" src="img/gif/drillslug.gif" alt="img" id="drillslug"></div><div class="card"><img class="character-regular" src="img/gif/protogunner.gif" alt="img" id="protogunner"></div><div class="card"><img class="character-regular" src="img/gif/ra-ttt.gif" alt="img" id="ra-ttt"></div><div class="card"><img class="character-regular" src="img/gif/slug-digger.gif" alt="img" id="slug-digger"></div><div class="card"><img class="character-regular" src="img/gif/slug-mobile.gif" alt="img" id="slug-mobile"></div></div><div id="aircraft" class="sub-card"><span class="title-cards">Aeronaves</span><br><br><div class="card"><img class="character-regular" src="img/gif/helicopter-regular.gif" alt="img" id="helicopter-regular"></div><div class="card"><img class="character-regular" src="img/gif/slugcopter.gif" alt="img" id="slugcopter"></div><div class="card"><img class="character-regular" src="img/gif/slug-flyer.gif" alt="img" id="slug-flyer"></div></div><div id="marine" class="sub-card"><span class="title-cards">Marinha</span><br><br><div class="card"><img class="character-regular" src="img/gif/middle-son-1986.gif" alt="img" id="middle-son-1986"></div><div class="card"><img class="character-regular" src="img/gif/slug-mariner.gif" alt="img" id="slug-mariner"></div><div class="card"><img class="character-regular" src="img/gif/borobune.gif" alt="img" id="borobune"></div><div class="card"><img class="character-regular" src="img/gif/pa33-21.gif" alt="img" id="pa33-21"></div></div>'
  );
  cards.fadeIn();
  $(".sub-card").css("display", "inline");
  $("#support").css("display", "inline-table");
  $("#marine").css("display", "inline-table");

  $("#3d-printer").on("click", () => {
    $(".name").text("Tanque Impressora 3D");
    $("#img").attr("src", "img/gif/3d-printer-tank.gif");
    $("#patent p").html(
      "Arma Primária: Impressora 3D<br>Arma Secundária: Escudo Absoluto"
    );
    $("#desc p").text(
      "Este tanque é uma enorme impressora 3D montada no chassi de um Slug Square. A impressora 3D está conectada por meio de uma IA e pode materializar qualquer coisa que a IA desejar. O Exército Regular esperava que este tanque fosse altamente destrutivo em seu arsenal. Infelizmente, a IA à qual a impressora 3D está vinculada, Phi, é extremamente tímida e não quer entrar em batalha. Por causa do comportamento de Phi, o tanque é capaz de gerar construções para uso em combate, como um escudo protetor que pode absorver impactos e curar aliados. Seus escudos também podem causar dano de contato quando intactos e quando pedaços quebrados voam para as unidades inimigas."
    );
  });

  $("#ball-slug").on("click", () => {
    $(".name").text("Tanque Esférico 'Ball Slug'");
    $("#img").attr("src", "img/gif/ball-slug.gif");
    $("#patent p").html(
      "Arma Primária: Canhão Duplo<br>Arma Secundária: Chuva de Laser, Esfera Crescente"
    );
    $("#desc p").text(
      "Um tanque esférico desenvolvido com a mais recente tecnologia disponível para o Exército Regular. Popular dentro do exército por sua forma redonda e leve e capacidade de manobra surpreendente, mas ele luta sujo: atacando o inimigo pisando nele ou atirando esferas de luz em todas as direções, sem pontos cegos. O cockpit treme muito, então apenas algumas pessoas podem pilotá-lo."
    );
  });

  $("#blue-tiger").on("click", () => {
    $(".name").text("Blue Tiger");
    $("#img").attr("src", "img/gif/blue-tiger.gif");
    $("#patent p").html(
      "Arma Primária: Bala Dissipadora de Calor<br>Arma Secundária: Canhão Neo-Andro"
    );
    $("#desc p").text(
      "O Blue Tiger é um Iron Iso modificado que pode pisar no chão e girar seu canhão em 360 graus. A sua mobilidade não dá ao Blue Tiger pontos cegos, mas torna-o difícil de manusear. Nikita pilota este veículo como parte de um teste de campo e para mostrar seus comandos precisos. O Blue Tiger tem dois ataques. Seu ataque padrão é disparar uma bala de dissipação de calor que solta bolas de fogo enquanto a bala principal voa em um arco. O especial do Blue Tiger, o Neo-Andro Cannon, aponta em linha reta até a base inimiga e dispara uma explosão nas unidades inimigas mais próximas dentro dessa linha. Se algum inimigo passar pelo Blue Tiger, Nikita irá girar o canhão e atirar nos invasores."
    );
  });

  $("#coil-tank").on("click", () => {
    $(".name").text("Tanque de Bobina");
    $("#img").attr("src", "img/gif/coil-tank.gif");
    $("#patent p").html(
      "Arma Primária: Surtos Elétricos<br>Arma Secundária: Bobinas"
    );
    $("#desc p").text(
      "O Tanque de Bobina é um veículo de várias rodas com uma bateria na parte traseira, várias bobinas nas laterais e um núcleo na frente. A bateria fornece energia elétrica para as bobinas. O núcleo frontal libera um grande fluxo de eletricidade. As bobinas são lançadas e cravadas no solo. Em seguida, ele eletrifica o chão ao redor e desencadeia uma onda ascendente. A bateria oferece proteção contra ataques baseados em atordoamento."
    );
  });

  $("#di-cokka").on("click", () => {
    $(".name").text(
      "Veículo Blindado de Combate Tipo II 'Di-Cokka' (Variante Exército Regular)"
    );
    $("#img").attr("src", "img/gif/regular-di-cokka.gif");
    $("#patent p").html(
      "Arma Primária: Canhão Duplo de 155 mm<br>Arma Secundária: Canhão Solanoid"
    );
    $("#desc p").text(
      "Uma versão produzida em massa do Di-Cokka de Nikita, exceto que dispara tiros únicos que cobrem muito mais alcance do que qualquer uma de suas variantes anteriores. Como o Di-Cokka de Nikita, ele também é equipado para explodir em posições inimigas quando danificado de forma crítica. Além de um canhão duplo, também é equipado com um Canhão Solanoid, que é uma versão miniaturizada do Canhão Andro de Tani Oh."
    );
  });

  $("#metal-claw").on("click", () => {
    $(".name").text("Metal Claw");
    $("#img").attr("src", "img/gif/metal-claw.gif");
    $("#patent p").html(
      "Arma Primária: Vulcano<br>Arma Secundária: Lançador de Foguetes"
    );
    $("#desc p").text(
      "O Metal Claw é um veículo que se assemelha ao T-2B Melty Honey, mas é de cor azul e o piloto o controla por dentro. Este tanque é projetado para se mover junto com outros tanques e fornecer fogo de apoio. O Metal Claw mantém o lançador de mísseis do T-2B, além do Vulcano. Como o T-2B Melty Honey, o Metal Claw tem uma placa com pontas que fornece proteção contra três impactos diretos antes de desmoronar e expor o chassi."
    );
  });

  $("#slug-attacker").on("click", () => {
    $(".name").text("Slug Attacker");
    $("#img").attr("src", "img/gif/slug-attacker.gif");
    $("#patent p").html(
      "Arma Primária: Bate-Estacas<br>Arma Secundária: Nenhum"
    );
    $("#desc p").text(
      "O Slug Attacker é um Slug Gunner modificado com capacidade de auto-reparo. Sendo uma variante do Slug Gunner, ele pode alternar entre seu estado bípede de ataque (Modo Humano) ou um estado mais defensivo (Modo Tanque), dependendo da proximidade do inimigo. O Slug Attacker possui apenas uma arma, um bate-estaca longo que pode criar impactos explosivos em sua ponta. Em sua forma de tanque, o braço que segura o bate-estacas fica na frente do para-brisa para se proteger dos ataques inimigos. A forma humana do Slug Attacker também pode tentar desviar de ataques levantando seu braço protegido."
    );
  });

  $("#slug-defender").on("click", () => {
    $(".name").text("Slug Defender");
    $("#img").attr("src", "img/gif/slug-defender.gif");
    $("#patent p").html(
      "Arma Primária: Surtos Elétricos, Bolas de Energia<br>Arma Secundária: Campos de Energia"
    );
    $("#desc p").text(
      "O Slug Defender é um Protogunner com uma grande bateria nas costas e mãos elétricas desenvolvidas e operadas por Molly. Ele se concentra em combates de curta distância. Ele ataca socando o ar para gerar um curto fluxo de luz. Ele pode se defender de ataques inimigos produzindo um campo de energia à sua frente. Carregar o campo de energia causa uma onda maior de iluminação e pode potencialmente atordoar qualquer um atingido por ela."
    );
  });

  $("#slug-gunner").on("click", () => {
    $(".name").text("Slug Gunner");
    $("#img").attr("src", "img/gif/slug-gunner.gif");
    $("#patent p").html(
      "Arma Primária: Metralhadora MTS-S/A de 60mm<br>Arma Secundária: Canhão Múltiplo de 180 mm, Bunker de Pilha (corpo a corpo)"
    );
    $("#desc p").text(
      "A evolução final do SV-001, o SVW-001 Slug Gunner foi desenvolvido pelos engenheiros do Exército Regular com base na Armadura LV do Exército Rebelde. O Slug Gunner pode alternar entre as formas de mech e tanque e está equipado com um enorme canhão de 180 mm, uma Minigun de 60 mm e jatos que permitem que ele pule alto ou execute um salto duplo. Ele também vem com um bunker de pilha para combate corpo a corpo, que utiliza um mecanismo semelhante a um revólver (seu cilindro comporta seis cartuchos) para potencializar seus golpes. Ele se move e gira em um ritmo ridiculamente lento quando está no modo mecânico. No modo tanque, ele não pode atacar os inimigos por trás, mas é capaz de atropelar os inimigos, se necessário."
    );
  });

  $("#slug-striker").on("click", () => {
    $(".name").text("Slug Striker");
    $("#img").attr("src", "img/gif/slug-striker.gif");
    $("#patent p").html(
      "Arma Primária: Bate-Estacas, Vulcano<br>Arma Secundária: Nenhum"
    );
    $("#desc p").text(
      "O Slug Striker é um Slug Gunner modificado e sem cabeça instalado no topo dos degraus. Como o nome sugere, ele é capaz de subir puxando um canhão oculto da frente para cima com o cockpit em cima. As outras armas do Slug Striker incluem um pequeno bate-estacas com uma onda elétrica e um Vulcano. Todos os ataques do Slug Striker são baseados em plasma e podem atordoar as unidades inimigas."
    );
  });

  $("#slug-square").on("click", () => {
    $(".name").text("Arma Secreta do Exército Regular 'Slug Square'");
    $("#img").attr("src", "img/gif/slug-square.gif");
    $("#patent p").html(
      "Arma Primária: Canhão Super-Perfurante, Metralhadora<br>Arma Secundária: Bazuca"
    );
    $("#desc p").text(
      "Finalmente, a arma secreta do Exército Regular faz sua estreia! Este tanque é o maior de todo o arsenal do Exército Regular, com vários soldados do Exército Regular a bordo. Ele protege a base com uma variedade de bombardeios e sua defesa inexpugnável."
    );
  });

  $("#slugnoid").on("click", () => {
    $(".name").text("Super Veículo eXtra Tipo 15D 'Slugnoid'");
    $("#img").attr("src", "img/gif/slugnoid.gif");
    $("#patent p").html(
      "Arma Primária: Canhões Vulcano Duplos de 12,6 mm<br>Arma Secundária: Canhão Incendiário de 120 mm"
    );
    $("#desc p").text(
      "Desenvolvido pelos engenheiros do Exército Regular, o SVX-15D Slugnoid é um mecanismo bípede projetado para combate em terrenos difíceis. Está equipado com propulsores de foguetes que lhe permitem saltar muito alto. Seu armamento principal são os dois vulcanos presos a cada um de seus lados, capazes de girar 360° e disparar em direções diferentes ao mesmo tempo, embora isso exija alguma prática para controlar. A arma secundária é um projétil incendiário, que é disparado de seu canhão frontal de 120 mm na região pélvica, excelente para dizimar tropas em uma determinada área (para baixo no jogo). No entanto, o Slugnoid é muito lento e pesado e perderá um de seus vulcanos sempre que for atingido."
    );
  });

  $("#sv-001").on("click", () => {
    $(".name").text("Super Veículo Tipo 001 'Metal Slug'");
    $("#img").attr("src", "img/gif/sv-001.gif");
    $("#patent p").html(
      "Arma Primária: Canhão Principal Raiado de Baixa Pressão de 127 mm<br>Arma Secundária: Canhões Vulcanos de 12,6 mm"
    );
    $("#desc p").text(
      "O SV-001 é um tankette pequeno e é o primeiro 'Super Veículo' desenvolvido pelo Exército Regular. Seu armamento consiste em um canhão principal raiado de baixa pressão de 127 mm e dois canhões Vulcano de calibre 12,6 mm. A arma principal está localizada diretamente na frente como a maioria dos tanques convencionais e dispara grandes projéteis altamente explosivos que detonam com o impacto. O canhão também é capaz de usar munição especial, como projéteis perfurantes de alta velocidade. A principal falha da série SV-001 está na altura do tanque e na distribuição de peso superior, fazendo com que ele tombe em momentos inconvenientes, especialmente ao disparar o canhão de 127 mm. Outro problema é sua seção transversal de radar muito alta, tornando-o suscetível a mísseis guiados de alta velocidade."
    );
  });

  $("#sv-002").on("click", () => {
    $(".name").text("Super Veículo Tipo 002");
    $("#img").attr("src", "img/gif/sv-002.gif");
    $("#patent p").html(
      "Arma Primária: Sistema MGS 002 (Vulcano Super Sônico/Lançador de Mísseis)<br>Arma Secundária: Canhão Principal"
    );
    $("#desc p").text(
      "Os engenheiros do Exército Regular desenvolveram uma versão redesenhada do Metal Slug, o SV-002. Este novo tanque apresenta uma blindagem simplificada, uma seção transversal de radar mais baixa e o arado de mina teve sua distância ao solo aumentada. Ele também tem um novo canhão principal, que é menor do que o canhão original do SV-001. Os projéteis do canhão do SV-002 viajam a uma distância muito maior com melhor precisão do que com os projéteis altamente explosivos de 127 mm. Em vez dos canhões Vulcano de calibre 12,6 mm como no tanque Metal Slug original, o SV-002 apresenta um par de casulos de armas transformáveis, referidos como 'Sistema MGS 002'. As metralhadoras são capazes de usar cartuchos de metralhadora padrão, cartuchos de espingarda e combustível de tiro de chama. Os lançadores de mísseis podem ser usados ​​quando as camisas dos canos das cápsulas de armas estão em uma posição aberta."
    );
  });

  $("#drillslug").on("click", () => {
    $(".name").text("Super Veículo eXtra Tipo 22UG 'Drill Slug'");
    $("#img").attr("src", "img/gif/drillslug.gif");
    $("#patent p").html(
      "Arma Primária: Vulcano de 12,6 mm<br>Arma Secundária: Broca Extensível para Serviço Pesado de 400 mm"
    );
    $("#desc p").text(
      "SVX-22UG Drill Slug é uma máquina de perfuração projetada para cavar túneis. A broca está equipada com Vulcanos para engajamentos de longo alcance e uma broca no chassi para combate de curto alcance que será ativada automaticamente sempre que algo a tocar. Além disso, em vez de um canhão, o Drill Slug estende sua broca de 400 mm de seu chassi, o que é especialmente útil contra as lagartas gigantes."
    );
  });

  $("#protogunner").on("click", () => {
    $(".name").text("Slug Gunner Protótipo");
    $("#img").attr("src", "img/gif/protogunner.gif");
    $("#patent p").html(
      "Arma Primária: Canhões Vulcanos de 10mm<br>Arma Secundária: Canhão Múltiplo de 180mm"
    );
    $("#desc p").text(
      "O Protogunner não possui nenhum tipo de proteção para o operador, mas é invencível. Ao contrário do produto final, o Protogunner não pode se transformar e não possui a metralhadora e o bunker de pilha. No entanto, ele ainda mantém seu canhão múltiplo de 180 mm na frente, juntamente com um par de canhões Vulcano de 10 mm na lateral. O Protogunner é muito mais leve e manobrável que o Slug Gunner. Embora não tenha o jet pack que permitiu o salto duplo do Slug Gunner, o Protogunner ainda salta razoavelmente alto mesmo sem ele."
    );
  });

  $("#ra-ttt").on("click", () => {
    $(".name").text("Caminhão de Transporte de Tropas 'RA-TTT'");
    $("#img").attr("src", "img/gif/ra-ttt.gif");
    $("#patent p").html("Arma Primária: Nenhum<br>Arma Secundária: Nenhum");
    $("#desc p").text(
      "O RA-TTT é um veículo de transporte usado pelo Exército Regular para transportar tropas para o campo de batalha."
    );
  });

  $("#slug-digger").on("click", () => {
    $(".name").text("Slug Digger");
    $("#img").attr("src", "img/gif/slug-digger.gif");
    $("#patent p").html("Arma Primária: Vulcano<br>Arma Secundária: Minas");
    $("#desc p").text(
      "Um escavador subterrâneo multiuso, bem como um helicóptero, o Slug Digger é usado para escavar o subsolo na base dos Invasores. O Slug Digger tem brocas retráteis nos lados esquerdo, direito e inferior que são usadas para perfurar a terra e ostenta dois canhões Vulcano que também podem destruir a terra com suas balas. Seu tiro de canhão é uma mina que permanece no lugar até que um inimigo a toque ou seja baleada."
    );
  });

  $("#slug-mobile").on("click", () => {
    $(".name").text("TIAF660 'Slug Mobile'");
    $("#img").attr("src", "img/gif/slug-mobile.gif");
    $("#patent p").html(
      "Arma Primária: Vulcano 14mm<br>Arma Secundária: RPG Guiado"
    );
    $("#desc p").text(
      "Esses Slugs são TIAF660s modificados, um tipo comum de veículo civil que se tornou popular por sua compacidade. Muitos desses veículos foram usados ​​como barreiras rodoviárias pelo Exército Rebelde na cidade de Gerhardt, pois era um carro comum. Não demorou muito para o Exército Regular perceber e resgatar muitos TIAF660s para renovar rapidamente o modelo (colocando alguns vulcanos na lateral, colocando um RPG nele e encerrando o dia) para seus próprios propósitos. O Slug Mobile é rápido e tem a capacidade de pular. Embora não seja muito capaz de lidar com off-road, ele tem um bom desempenho nas estradas. Seu Vulcano de 14 mm oferece excelente defesa contra aeronaves, enquanto o RPG guiado sob o capô dianteiro oferece alguma defesa anti-blindagem."
    );
  });

  $("#helicopter-regular").on("click", () => {
    $(".name").text("Helicóptero do Exército Regular");
    $("#img").attr("src", "img/gif/helicopter-regular.gif");
    $("#patent p").html(
      "Arma Primária: Fogo de Apoio<br>Arma Secundária: Míssil de Busca de Calor"
    );
    $("#desc p").text(
      "O Helicóptero do Exército Regular é um helicóptero usado para transportar pessoal do Exército Regular e Slugs. Como sua contraparte do Exército Rebelde, o Hi-Do, ele tem um compartimento de míssil teleguiado dentro de seu nariz. No entanto, não tem uma metralhadora Gatling embaixo. Em vez disso, tem uma escotilha que se abre e levanta os soldados por meio de um guindaste. Esta escotilha também possui um ímã forte o suficiente para carregar uma grande caixa de metal."
    );
  });

  $("#slugcopter").on("click", () => {
    $(".name").text("Super Veículo Tipo H-03 'Slug Copter'");
    $("#img").attr("src", "img/gif/slugcopter.gif");
    $("#patent p").html("Arma Primária: Vulcano<br>Arma Secundária: Bombear");
    $("#desc p").text(
      "Outra aeronave Slug criada pelo Exército Regular, o SVH-03 Slug Copter vem equipado com canhões Vulcano, capazes de girar 360°, ao contrário do Slug Flyer. Ele também vem equipado com bombas que causam danos massivos, mas são inúteis contra alvos aéreos."
    );
  });

  $("#slug-flyer").on("click", () => {
    $(".name").text("Super Veículo Tipo F-07V 'Slug Flyer'");
    $("#img").attr("src", "img/gif/slug-flyer.gif");
    $("#patent p").html(
      "Arma Primária: H-AV-5963 Revisão Vulcano<br>Arma Secundária: Míssil de Curto Alcance AIM-9A"
    );
    $("#desc p").text(
      "O SVF-07V Slug Flyer é um Super Veículo projetado para combate aéreo. Embora possua excelente capacidade de manobra devido às suas capacidades VTOL, seus Vulcanos têm alcance limitado, sendo capazes apenas de disparar em um arco na frente do Slug. Também é equipado com mísseis AIM-9A de curto alcance que, embora sejam poderosos, levam algum tempo para acelerar após serem implantados."
    );
  });

  $("#middle-son-1986").on("click", () => {
    $(".name").text("Middle Son 1986");
    $("#img").attr("src", "img/gif/middle-son-1986.gif");
    $("#patent p").html(
      "Arma Primária: Metralhadora 6,5mm, Torre de Metralhadora.<br>Arma Secundária: Nenhum"
    );
    $("#desc p").text(
      "O Middle-Son 1986 é um antigo submarino U-Boat usado pelo Exército Regular. Embora uma variante mais avançada tenha sido criada, ela ainda é usada com frequência, embora esteja muito desatualizada. Ele pode carregar muitas armas, como mísseis e torpedos, e possui uma torre de metralhadora antiaérea em seu casco. Possui uma durabilidade impressionante, sendo capaz de absorver danos de bombardeios frequentes e ainda operar com apenas danos mínimos. Este barco é usado apenas para transportar o Exército Regular para o outro lado do Estreito de Traven, onde o líder do Exército Rebelde, General Morden, o aguarda."
    );
  });

  $("#slug-mariner").on("click", () => {
    $(".name").text("Super Veículo eXtra Tipo 17M 'Slug Mariner'");
    $("#img").attr("src", "img/gif/slug-mariner.gif");
    $("#patent p").html(
      "Arma Primária: Canhões Vulcano de 10 mm com Munição Incendiária<br>Arma Secundária: Torpedos"
    );
    $("#desc p").text(
      "O SVX-17M Slug Mariner é um minissubmarino de tripulação única. O Slug Mariner está equipado com dois canhões Vulcano de calibre 10 mm. No entanto, a resistência à água diminui o alcance dos vulcanos, por isso é carregado com munição incendiária que afunda quando disparada para atingir os inimigos abaixo. Ele também dispara torpedos poderosos que criam uma grande onda de choque após o impacto. Isso é extremamente útil contra inimigos subaquáticos maiores, de submarinos rebeldes a criaturas aquáticas hostis."
    );
  });

  $("#borobune").on("click", () => {
    $(".name").text("Borobune Slug");
    $("#img").attr("src", "img/gif/borobune.gif");
    $("#patent p").html("Arma Primária: Nenhum<br>Arma Secundária: Nenhum");
    $("#desc p").text(
      "O Borobune Slug foi originalmente trazido para a Ilha Pallas por uma unidade de construção do Exército Regular para transportar materiais e mercadorias. Mas a unidade também escondeu um SV-001 Type-R em um contêiner de metal no centro do navio. Quando os crustáceos mutantes tomaram conta da ilha, a unidade de construção fugiu do local e deixou o Borobune disfarçado de navio degradado e abandonado para ser usado por qualquer outra unidade do exército regular que passasse."
    );
  });

  $("#pa33-21").on("click", () => {
    $(".name").text("Barco PA33-21");
    $("#img").attr("src", "img/gif/pa33-21.gif");
    $("#patent p").html("Arma Primária: Nenhum<br>Arma Secundária: Nenhum");
    $("#desc p").text(
      "O Barco PA33-21 é um barco usado para transportar os soldados até a ilha. Parece ter uma armadura forte e força poderosa, mas não pode realmente prever por não ser usado em batalha."
    );
  });
});

button_vehicles_rebel.on("click", () => {
  button_regular.css("display", "none");
  button_rebel.css("display", "none");
  button_vehicles_rebel.css("display", "none");
  button_vehicles_regular.css("display", "none");
  button_history.css("display", "none");
  cards.html("");
  cards.html(
    '<div id="combat" class="sub-card"><span class="title-cards">Combate</span><br><br><div class="card"><img class="character-rebel" src="img/gif/bit-tank.gif" alt="img" id="bit-tank"></div><div class="card"><img class="character-rebel" src="img/gif/bull-chan.gif" alt="img" id="bull-chan"></div><div class="card"><img class="character-rebel" src="img/gif/di-cokka.gif" alt="img" id="di-cokka-rebel"></div><div class="card"><img class="character-rebel" src="img/gif/girida-o.gif" alt="img" id="girida-o"></div><div class="card"><img class="character-rebel" src="img/gif/iron-iso.gif" alt="img" id="iron-iso"></div><div class="card"><img class="character-rebel" src="img/gif/lv-armor.gif" alt="img" id="lv-armor"></div><div class="card"><img class="character-rebel" src="img/gif/bradley.gif" alt="img" id="bradley"></div><div class="card"><img class="character-rebel" src="img/gif/melty-honey.gif" alt="img" id="melty-honey"></div><div class="card"><img class="character-rebel" src="img/gif/nantes-tank.gif" alt="img" id="nantes-tank"></div><div class="card"><img class="character-rebel" src="img/gif/tani-oh.gif" alt="img" id="tani-oh"></div><div class="card"><img class="character-rebel" src="img/gif/shoekarn.gif" alt="img" id="shoekarn"></div><div class="card"><img class="character-rebel" src="img/gif/nokana.gif" alt="img" id="nokana"></div><div class="card"><img class="character-rebel" src="img/gif/bigshiee.gif" alt="img" id="bigshiee"></div><div class="card"><img class="character-rebel" src="img/gif/jupiterking.gif" alt="img" id="jupiterking"></div><div class="card"><img class="character-rebel" src="img/gif/iron-sentinel.gif" alt="img" id="iron-sentinel"></div><div class="card"><img class="character-rebel" src="img/gif/formor.gif" alt="img" id="formor"></div><div class="card"><img class="character-rebel" src="img/gif/bulldrill.gif" alt="img" id="bulldrill"></div></div><div id="support" class="sub-card"><span class="title-cards">Suporte</span><br><br><div class="card"><img class="character-rebel" src="img/gif/m34-truck.gif" alt="img" id="m34-truck"></div><div class="card"><img class="character-rebel" src="img/gif/dararin.gif" alt="img" id="dararin"></div><div class="card"><img class="character-rebel" src="img/gif/landseek.gif" alt="img" id="landseek"></div><div class="card"><img class="character-rebel" src="img/gif/parachue.gif" alt="img" id="parachue"></div><div class="card"><img class="character-rebel" src="img/gif/mini-bata.gif" alt="img" id="mini-bata"></div><div class="card"><img class="character-rebel" src="img/gif/mv280.gif" alt="img" id="mv280"></div><div class="card"><img class="character-rebel" src="img/gif/sarubia.gif" alt="img" id="sarubia"></div></div><div id="aircraft" class="sub-card"><span class="title-cards">Aeronaves</span><br><br><div class="card"><img class="character-rebel" src="img/gif/tiltrotor.gif" alt="img" id="tiltrotor"></div><div class="card"><img class="character-rebel" src="img/gif/eaca-b.gif" alt="img" id="eaca-b"></div><div class="card"><img class="character-rebel" src="img/gif/flying-tara.gif" alt="img" id="flying-tara"></div><div class="card"><img class="character-rebel" src="img/gif/masknell.gif" alt="img" id="masknell"></div><div class="card"><img class="character-rebel" src="img/gif/r-shobu.gif" alt="img" id="r-shobu"></div><div class="card"><img class="character-rebel" src="img/gif/riberts.gif" alt="img" id="riberts"></div><div class="card"><img class="character-rebel" src="img/gif/hi-do.gif" alt="img" id="hi-do"></div><div class="card"><img class="character-rebel" src="img/gif/keesi-ii.gif" alt="img" id="keesi-ii"></div><div class="card"><img class="character-rebel" src="img/gif/keesi-iii.gif" alt="img" id="keesi-iii"></div></div><div id="marine" class="sub-card"><span class="title-cards">Marinha</span><br><br><div class="card"><img class="character-rebel" src="img/gif/hammeryang.gif" alt="img" id="hammeryang"></div><div class="card"><img class="character-rebel" src="img/gif/jethammer.gif" alt="img" id="jethammer"></div><div class="card"><img class="character-rebel" src="img/gif/minisub.gif" alt="img" id="minisub"></div><div class="card"><img class="character-rebel" src="img/gif/u25u.gif" alt="img" id="u25u"></div><div class="card"><img class="character-rebel" src="img/gif/hozmi.gif" alt="img" id="hozmi"></div></div>'
  );
  cards.fadeIn();
  $(".sub-card").css("display", "inline");
  $("#support").css("display", "inline-table");
  $("#marine").css("display", "inline-table");

  $("#bit-tank").on("click", () => {
    $(".name").text("Tanque Bit");
    $("#img").attr("src", "img/gif/bit-tank.gif");
    $("#patent p").html(
      "Arma Primária: Quarteto Vulcano<br>Arma Secundária: Fogo de St. Elmo"
    );
    $("#desc p").text(
      "O Tanque Bit é um tanque experimental operado por Romy. As armas do tanque são quatro metralhadoras finas chamadas Vulcanos e um laser intermediário chamado 'Fogo St. Elmo'. Todas as cinco armas estão conectadas a cabos pesados ​​e podem ser movidas independentemente umas das outras para bloquear vários inimigos ao mesmo tempo. Apesar de conveniente, controlá-los tem um alto grau de dificuldade."
    );
  });

  $("#bull-chan").on("click", () => {
    $(".name").text("Bull Chan");
    $("#img").attr("src", "img/gif/bull-chan.gif");
    $("#patent p").html(
      "Arma Primária: Canhão<br>Arma Secundária: Cair Sobre um Inimigo"
    );
    $("#desc p").text(
      "O Bull Chan é um tanque pesado especialmente projetado para combate em terrenos acidentados. Suas pistas largas permitem que ele suba colinas com facilidade, atacando o inimigo por cima. É camuflado, por isso é quase invisível para aeronaves e satélites, mas pode ser facilmente detectado por soldados de infantaria. Sua armadura é reforçada, tornando-o um inimigo resistente e durável. Bull Chans são tanques extremamente descartáveis. O Exército Rebelde não tem escrúpulos em lançar tanques inteiros em várias quantidades em seus inimigos."
    );
  });

  $("#di-cokka-rebel").on("click", () => {
    $(".name").text("Veículo Blindado de Combate Tipo II 'Di-Cokka'");
    $("#img").attr("src", "img/gif/di-cokka.gif");
    $("#patent p").html(
      "Arma Primária: Canhão Principal de 155 mm<br>Arma Secundária: Nenhum"
    );
    $("#desc p").text(
      "A arma principal do Di-Cokka é um canhão de cano curto de 155 mm capaz de disparar rapidamente. A torre normalmente não gira, o que exige que o tanque mova todo o corpo para mirar. Este tanque foi produzido em massa pelo Exército Rebelde devido ao seu baixo custo de produção, por isso é o mais visto no campo de batalha."
    );
  });

  $("#girida-o").on("click", () => {
    $(".name").text("Exército Rebelde Tipo IV AFV 'Girida-O'");
    $("#img").attr("src", "img/gif/girida-o.gif");
    $("#patent p").html("Arma Primária: Canhão<br>Arma Secundária: Nenhum");
    $("#desc p").text(
      "Classificado como um MBT, o Girida-O cumpre o papel de um tanque médio, complementando tanques mais pesados ​​ainda em serviço, como Di-Cokka ou Iron Iso. Girida-O sacrifica a proteção em favor de um quadro menor e velocidade mais rápida. Devido a falhas de projeto, os operadores de tanques frequentemente atropelavam seu próprio apoio de infantaria. Durante as Guerras Modernas, o tanque passou por várias melhorias. O chassi do Girida-O é utilizado pelo Exército Rebelde para outros fins, como transporte de material e escavação. Uma variante utilitária com a torre removida e equipada com uma lâmina de escavadeira frontal e um dumper hidráulico chamado Dararin Dara Dara é o principal transporte de materiais do Exército Rebelde."
    );
  });

  $("#iron-iso").on("click", () => {
    $(".name").text("Tipo V AFV 'Iron Iso'");
    $("#img").attr("src", "img/gif/iron-iso.gif");
    $("#patent p").html("Arma Primária: Canhão<br>Arma Secundária: Nenhum");
    $("#desc p").text(
      "O Iron Iso é um tanque pesado projetado principalmente para defesa de base. É fortemente blindado, servindo bem como bloqueio armado e cobertura para tropas e outros veículos como o Girida-O. Seu canhão de longo alcance é poderoso o suficiente para demolir qualquer coisa em seu caminho. Ele dispara seus projéteis em um arco. Devido ao seu alto custo de produção, apenas uma quantidade limitada de unidades foi produzida."
    );
  });

  $("#lv-armor").on("click", () => {
    $(".name").text("Armadura Rebelde");
    $("#img").attr("src", "img/gif/lv-armor.gif");
    $("#patent p").html(
      "Arma Primária: Armas Equipadas pelo Operador<br>Arma Secundária: Garras de Canhão"
    );
    $("#desc p").text(
      "Inspirando-se consideravelmente no Slugnoid do Exército Regular, os rebeldes criaram a Armadura Rebelde como sua própria armadura mecanizada. Ela é muito leve e manobrável, capaz de dar um salto duplo graças aos propulsores de foguetes em sua mochila. O operador controla este veículo dentro do cockpit enquanto está protegido da maioria dos ataques inimigos. Em termos de armamento, a única arma que a armadura possui é um canhão, que sai de uma de suas garras para disparar projéteis de alto explosivo. Também possui a capacidade de equipar qualquer arma à sua outra garra, tornando-a versátil e única; mas, ao mesmo tempo, limitado, devido à limitação da munição das caixas de armas. Além disso, ele pode usar suas garras para socar os inimigos de perto, causando dano considerável a cada golpe."
    );
  });

  $("#bradley").on("click", () => {
    $(".name").text("Tanque de Mísseis Tipo M-15A 'Bradley'");
    $("#img").attr("src", "img/gif/bradley.gif");
    $("#patent p").html(
      "Arma Primária: Armas Equipadas pelo Operador<br>Arma Secundária: Garras de Canhão"
    );
    $("#desc p").text(
      "O M-15A é um tanque de mísseis desenvolvido pelo Exército Rebelde para combate de alcance ultracurto. Ele pode disparar uma saraivada de mísseis antitanque horizontalmente ou em um arco de 45 graus girando a torre."
    );
  });

  $("#melty-honey").on("click", () => {
    $(".name").text("T-2B Melty Honey");
    $("#img").attr("src", "img/gif/melty-honey.gif");
    $("#patent p").html(
      "Arma Primária: Mísseis Teleguiados<br>Arma Secundária: Espinhos Blindados"
    );
    $("#desc p").text(
      "O Melty Honey é um tanque/tankette leve focado na velocidade. É levemente blindado, o que significa que algumas rodadas podem eliminá-lo. Por causa disso, uma pesada placa pontiaguda é adicionada ao chassi do Melty Honey para defesa frontal adicional. Ele usa muitos componentes semelhantes ao Di-Cokka, o que permitiu sua produção em massa. Seu único armamento é o canhão frontal que dispara mísseis guiados lentos."
    );
  });

  $("#nantes-tank").on("click", () => {
    $(".name").text("Tanque da Nantes");
    $("#img").attr("src", "img/gif/nantes-tank.gif");
    $("#patent p").html(
      "Arma Primária: Mísseis, Conchas de Fumaça<br>Arma Secundária: Bolas de Fogo"
    );
    $("#desc p").text(
      "Este veículo é um tanque de com um enorme parafuso no topo. Atrás do tanque há uma pequena plataforma com um guidão que Nantes segura quando está pilotando e comandando. Possui dois canhões na frente e três canhões menores próximos ao emblema 'X'. Escondido dentro dos canhões está um canhão maior que se abre no meio aparafusando a tampa do tanque. O tanque dispara mísseis com grande recuo. O tanque é desenvolvido para equilibrar ataque e defesa e, portanto, é equipado com funções de bloqueio de defesa e bombardeio."
    );
  });

  $("#tani-oh").on("click", () => {
    $(".name").text("Artilharia Autopropulsada Gigante 'Tani Oh'");
    $("#img").attr("src", "img/gif/tani-oh.gif");
    $("#patent p").html(
      "Arma Primária: Canhão Andro<br>Arma Secundária: 2 Lançadores de Minas Navais/Miniguns"
    );
    $("#desc p").text(
      "Tani Oh é um protótipo de tanque de artilharia pesada armado com um poderoso canhão de cano duplo capaz de devastar grandes áreas sem muito esforço; esses canhões gêmeos são possivelmente um railgun experimental, já que seus tiros são raios de luz instantâneos e a torre, em vez de ejetar os invólucros expandidos, descarrega fumaça e calor pelas aberturas em suas costas. Também é equipado com duas torres de cada lado, ambas com uma minigun e um lançador de minas, para cobrir o tanque em curto alcance. Apenas uma unidade foi produzida, sendo usada pelos Rebeldes para fins de teste na região do Vale Käthehirt."
    );
  });

  $("#shoekarn").on("click", () => {
    $(".name").text("Tanques de Missão Cooperativa 'Shoe & Karn'");
    $("#img").attr("src", "img/gif/shoekarn.gif");
    $("#patent p").html(
      "Arma Primária: Canhão Principal<br>Arma Secundária: 2 Sub-Torres, Lança-Mísseis"
    );
    $("#desc p").text(
      "Shoe & Karn são um par de tanques superpesados ​​criados pelo Exército Rebelde para missões cooperativas. Cada um deles está armado com um canhão principal montado na torre, duas torres de sub-canhão na frente e um lançador de mísseis na parte de trás. Duas escotilhas laterais permitem que os soldados também ajudem a defender o tanque, geralmente com bazucas ou lançadores de foguetes."
    );
  });

  $("#nokana").on("click", () => {
    $(".name").text("Veículo de Combate Multifuncional 'Iron Nokana'");
    $("#img").attr("src", "img/gif/nokana.gif");
    $("#patent p").html(
      "Arma Primária: Canhão<br>Arma Secundária: Lança-Mísseis, Lança-Chamas"
    );
    $("#desc p").text(
      "O Iron Nokana é um grande veículo de combate blindado multifuncional criado pelo Exército Rebelde. Seu poder de fogo está concentrado na frente, com uma torre de canhão e lançador de mísseis na parte superior e um lança-chamas oculto na parte inferior. Para compensar a falta de poder de fogo na parte traseira, um Girida-O é montado nas costas."
    );
  });

  $("#bigshiee").on("click", () => {
    $(".name").text("Veículo Anfíbio de Destruição 'Big Shiee'");
    $("#img").attr("src", "img/gif/bigshiee.gif");
    $("#patent p").html("Arma Primária: Canhões<br>Arma Secundária: Nenhum");
    $("#desc p").text(
      "Big Shiee é um grande navio de guerra anfíbio projetado para viajar na água e na terra, usando seus trilhos para viajar como um tanque convencional. Está armado com vários canhões, bem como um enorme canhão principal que está escondido na parte da proa. Ele literalmente serve como um navio de guerra terrestre."
    );
  });

  $("#jupiterking").on("click", () => {
    $(".name").text("Rei Júpiter");
    $("#img").attr("src", "img/gif/jupiterking.gif");
    $("#patent p").html(
      "Arma Primária: Míssil de Busca de Calor, Eye Laser<br>Arma Secundária: Garra de Pinça, Míssil Nuclear"
    );
    $("#desc p").text(
      "O Rei Júpiter é um robô defensivo gigante criado pelo Exército Rebelde para proteger sua fábrica secreta. É fortemente blindado para proteger o reator nuclear dentro do corpo do robô. A cabeça levemente blindada serve como ponto fraco do robô. Seus armamentos consistem em um pod de míssil em seu braço esquerdo que permite ao robô disparar vários mísseis teleguiados. Seu braço direito é equipado com um grande manipulador em forma de garra que pode ser alterado para destruir a superfície à sua frente. Os olhos do robô também são capazes de emitir lasers para atacar os inimigos. O Júpiter Rei também possui um 'umbigo' que pode criar um grande míssil, do qual o robô se agarra e mergulha na superfície."
    );
  });

  $("#iron-sentinel").on("click", () => {
    $(".name").text("Iron Sentinel");
    $("#img").attr("src", "img/gif/iron-sentinel.gif");
    $("#patent p").html(
      "Arma Primária: Lançadores de Mísseis, Torreta de foguetes<br>Arma Secundária: Canhões, Lança-Mísseis Gigante"
    );
    $("#desc p").text(
      "O Iron Sentinel é um gigante lançador de foguetes/tanque móvel operado pelo General Morden. É fortemente blindado, o que significa que o ponto fraco é o canhão gigante no topo. Também está armado com vários lançadores de mísseis e canhões."
    );
  });

  $("#formor").on("click", () => {
    $(".name").text("Formor");
    $("#img").attr("src", "img/gif/formor.gif");
    $("#patent p").html(
      "Arma Primária: Canhão Principal<br>Arma Secundária: Canhões Automáticos"
    );
    $("#desc p").text(
      "O Formor é um Super Veículo desenvolvido pelo Exército Rebelde como sua própria versão para o SV-001. É duas vezes maior que um SV-001 normal e é pintado de verde. O Formor também se move mais rápido que os Slugs do Exército Regular, apesar de seu tamanho maior."
    );
  });

  $("#bulldrill").on("click", () => {
    $(".name").text("Bull Drill");
    $("#img").attr("src", "img/gif/bulldrill.gif");
    $("#patent p").html(
      "Arma Primária: Canhão de Míssil de Perfuração de Rochas<br>Arma Secundária: Nenhum"
    );
    $("#desc p").text(
      "O Bull Drill é um grande veículo de mineração desenvolvido pelos rebeldes e foi projetado para cavar no subsolo com facilidade. Tem uma lâmina de bulldozer e uma broca, daí o seu nome. Esta escavadeira aparentemente foi usada para escavar a base subterrânea dos Invasores."
    );
  });

  $("#m34-truck").on("click", () => {
    $(".name").text("Caminhão M34 de 3 toneladas");
    $("#img").attr("src", "img/gif/m34-truck.gif");
    $("#patent p").html(
      "Arma Primária: Liberação de Tropas<br>Arma Secundária: Nenhum"
    );
    $("#desc p").text(
      "O caminhão M34 de 3 toneladas é uma alternativa mais barata ao Landseek usado para transportar tropas. Ao contrário da Rebel Van, isso fornece uma saída mais fácil, pois as tropas não precisam sair uma a uma."
    );
  });

  $("#dararin").on("click", () => {
    $(".name").text("Dararin Dara Dara");
    $("#img").attr("src", "img/gif/dararin.gif");
    $("#patent p").html(
      "Arma Primária: Nenhum<br>Arma Secundária: Vigas de Construção que são Transportadas"
    );
    $("#desc p").text(
      "O Dararin Dara Dara é uma variante de veículo de engenharia de um Girida-O, projetado para auxiliar na construção transportando materiais. Em combate, o Dararin joga as vigas nas tropas que chegam sob eles para tentar matar ou bloquear seu caminho."
    );
  });

  $("#landseek").on("click", () => {
    $(".name").text("Caminhão de Transporte 'Landseek'");
    $("#img").attr("src", "img/gif/landseek.gif");
    $("#patent p").html("Arma Primária: Nenhum<br>Arma Secundária: Nenhum");
    $("#desc p").text(
      "O Landseek é um veículo de transporte usado para transportar as tropas inimigas para o campo de batalha. Também tem capacidade para transportar artilharia pesada, como tanques, canhões antiaéreos e outros veículos blindados. Eles não têm armamento, pois são apenas para suporte."
    );
  });

  $("#parachue").on("click", () => {
    $(".name").text("Caminhão Pára-Quedas");
    $("#img").attr("src", "img/gif/parachue.gif");
    $("#patent p").html(
      "Arma Primária: Lançador de Parabomba<br>Arma Secundária: Implantando Soldados Rebeldes"
    );
    $("#desc p").text(
      "O Caminhão Pára-Quedas é usado para bombardear uma área com várias bombas de salva sob pára-quedas e, em seguida, é capaz de implantar soldados rebeldes lançando-os com os lançadores acima de seu teto. Os rebeldes descem para limpar todos os restos da área depois de serem devastados por sua barragem de foguetes."
    );
  });

  $("#mini-bata").on("click", () => {
    $(".name").text("Canhão Ferroviário 'Mini Bata'");
    $("#img").attr("src", "img/gif/mini-bata.gif");
    $("#patent p").html(
      "Arma Primária: Canhão Embutido<br>Arma Secundária: Nenhum"
    );
    $("#desc p").text(
      "Depois que a rebelião capturou a cidade de Ronbertburg, o Mini-Bata serviu como uma artilharia defensiva escondida por prédios civis próximos e torres de anúncios. Foi feito de uma locomotiva capturada da cidade, que foi montada com o canhão. É principalmente uma arma defensiva e é operada por dois soldados rebeldes."
    );
  });

  $("#mv280").on("click", () => {
    $(".name").text("MV-280A");
    $("#img").attr("src", "img/gif/mv280.gif");
    $("#patent p").html(
      "Arma Primária: Abalroamento<br>Arma Secundária: Nenhum"
    );
    $("#desc p").text(
      "O MV-280A foi originalmente projetado para evacuar e transportar soldados do combate com mais rapidez e eficiência. Em alguns casos, eles também costumavam transportar armas e munições para fins de artilharia leve e infantaria. Devido à sua tração nas quatro rodas, o MV-280A possui extrema mobilidade, mesmo em ambientes hostis como o deserto. Quando os engenheiros observaram a eficiência da velocidade do MV-280A, eles decidiram fazer novos modelos para suportar tanques. A artilharia leve MV-280B está armada com um lançador indireto de foguetes montado em seu teto, e o MV-280C está armado com uma metralhadora em seu para-brisa."
    );
  });

  $("#sarubia").on("click", () => {
    $(".name").text("Tanque de Estrutura Alta Tipo Nop-03 'Sarubia'");
    $("#img").attr("src", "img/gif/sarubia.gif");
    $("#patent p").html(
      "Arma Primária: Canhão (Minas Rolantes)<br>Arma Secundária: Nenhum"
    );
    $("#desc p").text(
      "O Sarubia é um tanque pesado projetado para bloquear invasores com sua estrutura alta. Sua blindagem frontal é bem protegida, e está armada com um canhão que dispara projéteis esféricos. Porém, devido à localização elevada da porta de tiro, o chassi do tanque sofre forte recuo e, como resultado, o projétil disparado perde a maior parte do movimento para frente e cai do canhão, rolando apático ao longo do solo."
    );
  });

  $("#tiltrotor").on("click", () => {
    $(".name").text("Tiltrotor Armado");
    $("#img").attr("src", "img/gif/tiltrotor.gif");
    $("#patent p").html(
      "Arma Primária: Espingardas, Miniguns<br>Arma Secundária: Mísseis Teleguiados"
    );
    $("#desc p").text(
      "O Tiltrotor Armado é um protótipo pessoal de powersuit usado e controlado por Kriemhild. Por seu homônimo, o Armed Tiltrotor é um flightpack de rotor duplo com dois lançadores de mísseis em suas costas e dois grandes braços de armas ao lado dos controles do joystick do usuário. Os braços têm uma espingarda e uma minigun cada."
    );
  });

  $("#eaca-b").on("click", () => {
    $(".name").text("Caça Bombardeiro Local Eaca-B");
    $("#img").attr("src", "img/gif/eaca-b.gif");
    $("#patent p").html(
      "Arma Primária: Mísseis Ar-Terra<br>Arma Secundária: Metralhadoras, Torreta"
    );
    $("#desc p").text(
      "O Eaca-B é um caça ar-terra usado pelo Exército Rebelde, fazendo a maior parte de sua força aérea junto com o Flying Tara. Rápidos e versáteis, são fracos contra fogo antiaéreo. Eles carregam bombas de busca de calor autopropulsadas que servem como seu principal poder de fogo."
    );
  });

  $("#flying-tara").on("click", () => {
    $(".name").text("Caça Bombardeiro Local Tara");
    $("#img").attr("src", "img/gif/flying-tara.gif");
    $("#patent p").html(
      "Arma Primária: Bombear<br>Arma Secundária: Metralhadoras, Torreta, Míssil Ar-Terra"
    );
    $("#desc p").text(
      "Um avião secundário usado pela Força Aérea Rebelde, o caça Tara é principalmente uma variante do Eaca-B, com melhor armamento e manobrabilidade. Eles carregam apenas uma única bomba pesada com eles, depois de jogá-la, eles voam para o fundo e depois voltam com outra bomba."
    );
  });

  $("#masknell").on("click", () => {
    $(".name").text("Helicóptero de Ataque Leve MH-6S 'Masknell'");
    $("#img").attr("src", "img/gif/masknell.gif");
    $("#patent p").html(
      "Arma Primária: Metralhadora<br>Arma Secundária: Cápsulas de Armas de 35 mm"
    );
    $("#desc p").text(
      "Os MH-6S Masknells são um dos helicópteros de ataque usados ​​pelo Exército Rebelde. Os Masknells são rápidos, baratos, confiáveis ​​e podem atirar no jogador com sua metralhadora frontal."
    );
  });

  $("#r-shobu").on("click", () => {
    $(".name").text("R-Shobu");
    $("#img").attr("src", "img/gif/r-shobu.gif");
    $("#patent p").html(
      "Arma Primária: Bomba M31<br>Arma Secundária: Cápsula de Míssil Antitanque TOW, Vulcano Elétrico JN 20mm"
    );
    $("#desc p").text(
      "O R-Shobu é um dos helicópteros de ataque utilizados pelo Exército Rebelde. Eles são muito rápidos, atacando lançando bombas M31 em alvos terrestres ou usando pod de mísseis para alvos aéreos."
    );
  });

  $("#riberts").on("click", () => {
    $(".name").text("Protótipo de Bombardeiro Pesado 'Hairbuster Riberts'");
    $("#img").attr("src", "img/gif/riberts.gif");
    $("#patent p").html(
      "Arma Primária: Mísseis Guiados<br>Arma Secundária: Bombas, Torreta de Mísseis"
    );
    $("#desc p").text(
      "O Hairbuster Riberts é um protótipo de bombardeiro pesado criado pelo Exército Rebelde e está equipado com várias formas de armamento, como mísseis guiados e bombas, tornando-o uma plataforma de armas versátil capaz de se ajustar rapidamente à situação. Mais de uma centena dessas unidades foram produzidas, todas em fase de testes. O General Morden tentou escapar das tropas do Exército Regular na cidade de Ronbertburg a bordo de um Riberts, mas foi abatido pelo Esquadrão Peregrine Falcons. Infelizmente, Morden ainda escapou, pego no ar por uma caça Tara."
    );
  });

  $("#hi-do").on("click", () => {
    $(".name").text("Helicóptero de Ataque de Segunda Geração 'Hi-Do'");
    $("#img").attr("src", "img/gif/hi-do.gif");
    $("#patent p").html(
      "Arma Primária: Minigun<br>Arma Secundária: Lançador de Mísseis Guiados por Calor"
    );
    $("#desc p").text(
      "O Hi-Do é um helicóptero de rotor duplo usado por Donald Morden. Projetado para fins de teste, possui blindagem pesada e está equipado com várias armas, tornando-o uma aeronave de combate versátil. É uma versão modificada do helicóptero de transporte Orewana KO-42H 'The Keesi I' que pertencia à Federação Ruschen."
    );
  });

  $("#keesi-ii").on("click", () => {
    $(".name").text("Orewana KP-61 'Keesi II'");
    $("#img").attr("src", "img/gif/keesi-ii.gif");
    $("#patent p").html(
      "Arma Primária: Canhões Antiaéreos<br>Arma Secundária: Lançador de Bombas, Motor a Jato"
    );
    $("#desc p").text(
      "O Keesi II é um bombardeiro VTOL destinado a fornecer apoio aéreo aproximado às tropas terrestres. É equipado com canhões antiaéreos em suas asas e pode lançar bombas pesadas (essas armas não são usadas no jogo), e seu tamanho é suficiente para carregar tanques de apoio em suas asas. O Keesi também é capaz de usar seus motores a jato para queimar qualquer coisa embaixo dele."
    );
  });

  $("#keesi-iii").on("click", () => {
    $(".name").text("Bombardeiro Pesado VTOL 'Keesi III'");
    $("#img").attr("src", "img/gif/keesi-iii.gif");
    $("#patent p").html(
      "Arma Primária: Torretas Minigun<br>Arma Secundária: Grande Míssil"
    );
    $("#desc p").text(
      "Esta é a perfeição da resposta dos Rebeldes para fornecer Apoio Aéreo Aproximado enquanto torna a aeronave capaz de permanecer na zona de batalha até que a luta termine. Ele foi projetado para transportar mais infantaria e fornecer mais suporte de fogo do que o primeiro modelo, o Keesi II."
    );
  });

  $("#hammeryang").on("click", () => {
    $(".name").text("Casa Flutuante 'Hammer-Yang'");
    $("#img").attr("src", "img/gif/hammeryang.gif");
    $("#patent p").html("Arma Primária: Nenhum<br>Arma Secundária: Nenhum");
    $("#desc p").text(
      "Os Hammer-Yangs eram barcos turísticos, mas os rebeldes os capturaram para uso próprio. Originalmente usados ​​para transportar civis, eles agora transportam tropas. Eles não têm armas, mas podem carregar muitos passageiros dentro. Há um ditado no Exército Regular: “Sempre que você vir um Hammer-Yang, sempre presuma que há pelo menos 30 inimigos dentro dele”."
    );
  });

  $("#jethammer").on("click", () => {
    $(".name").text("Jet Hammer-Yang");
    $("#img").attr("src", "img/gif/jethammer.gif");
    $("#patent p").html("Arma Primária: Foguetes<br>Arma Secundária: Nenhum");
    $("#desc p").text(
      "Esses aerobarcos simples têm mísseis presos às laterais, que podem rastrear seus alvos até certo ponto. O piloto fica desprotegido, mas isso é compensado por sua incrível agilidade. Eles continuarão a operar mesmo depois que seu piloto for morto, disparando mísseis continuamente até que seja destruído."
    );
  });

  $("#minisub").on("click", () => {
    $(".name").text("Mini-Sub 88");
    $("#img").attr("src", "img/gif/minisub.gif");
    $("#patent p").html(
      "Arma Primária: Lançadores de Torpedos<br>Arma Secundária: Nenhum"
    );
    $("#desc p").text(
      "A rápida expansão do Exército Rebelde significa que em breve eles precisarão de um veículo para cada ambiente diferente na Terra. Depois de alguns projetos, os engenheiros da Rebel criaram o Mini-Sub 88, criado para explorar e conquistar áreas sob as ondas."
    );
  });

  $("#u25u").on("click", () => {
    $(".name").text("U25U");
    $("#img").attr("src", "img/gif/u25u.gif");
    $("#patent p").html(
      "Arma Primária: Projétil de Energia<br>Arma Secundária: Nenhum"
    );
    $("#desc p").text(
      "O Exército Rebelde precisava de alguns submarinos para batalhas subaquáticas. Assim, os engenheiros do Rebellion vieram com o U25U operado remotamente. É maior e mais pesado que o Mini-Sub 88. O U25U dispara bolas de energia guiadas de sua escotilha superior."
    );
  });

  $("#hozmi").on("click", () => {
    $(".name").text("Submarino de Operações Secretas 'Hozmi'");
    $("#img").attr("src", "img/gif/hozmi.gif");
    $("#patent p").html(
      "Arma Primária: Canhão Andro<br>Arma Secundária: Bomba de Veneno, Maçarico"
    );
    $("#desc p").text(
      "O Hozmi é um submarino movido a energia nuclear, projetado para batalhas navais. É equipado com poderosos canhões elétricos de longo alcance. Não se sabe desde quando eles foram capazes de criar tais armas, é possível que o Hozmi possa ser construído com tecnologia alienígena."
    );
  });
});
