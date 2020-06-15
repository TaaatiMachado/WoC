
            var histbox = document.querySelector(".histbox");
            var historia = document.querySelector("#historia");
            var btn1 = document.querySelector("#btn-1");
            var btn2 = document.querySelector("#btn-2");
            var btn3 = document.querySelector("#btn-3");
            var chave = false;
            var voucher = false;

        function emCasa() {
            historia.textContent = "A pandemia do CorongaVírus tomou a cidade e está se espalhando por todo o país! Como pesquisador, você tem a obrigação moral de fazer tudo ao se alcance para encontrar uma vacina e proteger as pessoas. Por outro lado, o corte nas verbas da pesquisa deixa tudo mais difícil. O que você faz?";

            btn1.innerText = ">>Sai de casa<<";
            btn2.innerText = ">>Fica em casa<<";
          //btn3.innerText = ">>Desisto de viver<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "inline-block";
            btn3.style.display = "none";
    
            btn1.onclick = escolheItem;
            btn2.onclick = emCasaVitoria;
          //btn3.onclick = gameOver;
  
        }

        function escolheItem() { 
            
            historia.textContent = "Escolha dois itens para levar com você: 1- Máscara & guarda-chuva; 2- Máscara e chave do carro; 3- Guarda-chuva e chave do carro.";

            btn1.innerText = ">>1<<";
            btn2.innerText = ">>2<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "inline-block";
            btn3.style.display = "inline-block";

            btn1.onclick = transPub;
            btn2.onclick = carro;
            btn3.onclick = corongaDeath;

        }

        function emCasaVitoria() { // VITÓRIA
            historia.innerText ="Você ficou em casa e ganhou mais um dia de vida! EPIC WIN!";

            btn1.innerText = ">>Restart<<";
            btn2.innerText = ">>Chega<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "inline-block";
            btn3.style.display = "none";

            btn1.onclick = emCasa;
            btn2.onclick = gameOver;
          //btn3.onclick = emCasa;
  
        }

        function corongaDeath() { // DERROTA
            historia.innerText = "Você foi infectado e a vacina ainda não foi descoberta! Você não conseguiu vaga no hospital de campanha e sucumbiu ao vírus. Começar de novo?";

            btn1.innerText = ">>Restart<<";
            btn2.innerText = ">>Chega<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "inline-block";
            btn3.style.display = "none";

            btn1.onclick = emCasa;
            btn2.onclick = gameOver;
          //btn3.onclick = chamaFunção;

        }   

        function gameOver () { //DERROTA
            historia.innerText ="Talvez você só esteja muito cansado para continuar... Clica em >>Restart<< se quiser começar de novo ou clica no x se quiser abandonar essa vida.";

            btn1.innerText = ">>Restart<<";
            btn2.innerText = ">>2<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "none";
            btn3.style.display = "none";

            btn1.onclick = emCasa;
          //btn2.onclick = choppada;
          //btn3.onclick = emCasa;
        }

        function transPub() {
            historia.innerText = "Boa! Você tá protegido e a chuvarada não vai te pegar desprevenido!";
        
            btn1.innerText = ">>Continuar<<";
            btn2.innerText = ">>2<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "none";
            btn3.style.display = "none";

            btn1.onclick = vaiPraOnde;
          //btn2.onclick = emCasa;
          //btn3.onclick = corongaDeath;

        }

        function carro() {
            historia.innerText = "Boa! Você tá protegido e consegue chegar onde quiser com seu fusquinha fiel companheiro! Não esqueça de abrir as janelas pra circulação de ar (e pra você não morrer de calor, né?)!";
     
            btn1.innerText = ">>Continuar<<";
            btn2.innerText = ">>2<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "none";
            btn3.style.display = "none";

            btn1.onclick = vaiPraOnde;
          //btn2.onclick = emCasa;
          //btn3.onclick = corongaDeath;
        }

       
        function vaiPraOnde() {
            historia.innerText = "Pra onde você vai?";

            btn1.innerText = ">>Faculdade<<";
            btn2.innerText = ">>Ag. Caixa<<";
            btn3.innerText = ">>Pra Brasília<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "inline-block";    
            btn3.style.display = "inline-block";

            btn1.onclick = faculdade;
            btn2.onclick = agDaCaixa;
            btn3.onclick = brasiliaTrip;
        }

        function faculdade() {
            historia.innerText = "Você chegou na faculdade, seu centro de conhecimento! Aqui é onde você desenvolve suas habilidades profissionais e sociais. Pra onde você vai?";

            btn1.innerText = ">>Laboratório<<";
            btn2.innerText = ">>Choppada<<";
            btn3.innerText = ">>Pra casa<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "inline-block";
            btn3.style.display = "none";

            btn1.onclick = condiçãoLab;
            btn2.onclick = choppada;
          //btn3.onclick = emCasa;
        }

        function condiçãoLab() {
            historia.innerText = "Hora de salvar o mundo! Você tá com a chave?";

          if (chave == true) {
            btn1.innerText = ">>Tô!<<";
            btn2.innerText = ">>Chave?!<<";
            btn3.innerText = ">>Ah, desisto...<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "none";
            btn3.style.display = "none";

            btn1.onclick = laboratorio;
            btn2.onclick = chaveLab;
            btn3.onclick = gameOver;  
          }

          if (chave == false) {
          
              btn1.innerText = ">>Tô!<<";
              btn2.innerText = ">>Chave?!<<";
              btn3.innerText = ">>Ah, desisto...<<";
  
              btn1.style.display = "none";
              btn2.style.display = "inline-block";
              btn3.style.display = "inline-block";
  
              btn1.onclick = laboratorio;
              btn2.onclick = chaveLab;
              btn3.onclick = gameOver;  
          }


        }

        function laboratorio() {
            historia.innerText = "Ah, como é bom estar na sua (outra) casa. Agora é trabalhar! O que você vai analisar?";

            btn1.innerText = ">>Amostra de vacinas<<";
            btn2.innerText = ">>Experimento com Cloroquina<<";
            btn3.innerText = ">>Quero meu sofá.<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "inline-block";
            btn3.style.display = "inline-block";

            btn1.onclick = vacina;
            btn2.onclick = cloroquina;
            btn3.onclick = gameOver;

        }

        function chaveLab() {
            historia.innerText = "Você precisa da chave para abrir o laboratório! Provavelmente ela está com o seu Professor...";

            btn1.innerText = ">>Voltar<<";
            btn2.innerText = ">>2<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "none";
            btn3.style.display = "none";

            btn1.onclick = vaiPraOnde;
            //btn2.onclick = cloroquina;
            //btn3.onclick = gameOver;

        }

        function vacina() {
            historia.innerText = "Você conseguiu desenvolver anticorpos com a vacina! Finalmente você está preparado para a Grande Batalha no Planalto do Bolsodrácula!";

            btn1.innerText = ">>Tô pronto!<<";
            btn2.innerText = ">>2<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "none";
            btn3.style.display = "none";

            btn1.onclick = lutaÉpica;      
          //btn2.onclick = cloroquina;
          //btn3.onclick = gameOver;

        }

        function cloroquina() {
            historia.innerText = "Você não conseguiu resultados efetivos! Deveria parar de perder tempo com essa idéia de girico do seu amigo terraplanista...";

            btn1.innerText = ">>Ah, porra!<<";
            btn2.innerText = ">>DESISTO!<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "inline-block";
            btn3.style.display = "none";

            btn1.onclick = grandeBatalha;
            btn2.onclick = gameOver;
          //btn3.onclick = gameOver;
        }

        function choppada() {
            historia.innerText = "Qual foi a última vez mesmo que você bebeu? No Reveillon de dois anos atrás? Ah, é! Taí um bom motivo pro seu fígado estar gritando 'PARA COM ESSA PORRA, MALUCO!' de tanto tentar filtrar tudo isso aí que você ingeriu. Que bom que seus amigos estavam por perto e te salvaram desse vexame!";

            btn1.innerText = ">>Deu ruim!<<";
            btn2.innerText = ">>2<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";        
            btn2.style.display = "none";
            btn3.style.display = "none";

            btn1.onclick = gameOver;
          //btn2.onclick = gameOver;
          //btn3.onclick = gameOver;
        }


        function agDaCaixa() {
            historia.innerText = "Um belo dia para ir ao banco. Você escolhe qual fila? 1- Caixa eletrônico, 2- Fila da direita (2 idosos), 3- Fila da esquerda (5 pessoas)";

            btn1.innerText = ">>1<<";
            btn2.innerText = ">>2<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "inline-block";
            btn3.style.display = "inline-block";

            btn1.onclick = caixaElet;  
            btn2.onclick = preferencial;
            btn3.onclick = corongaVoucher;
 
        }

        function caixaElet() {
            historia.innerText = "Você não trouxe o Cartão Cidadão! O que vai fazer agora?";

            btn1.innerText = ">>MERDA!<<";
            btn2.innerText = ">>Odeio pessoas<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "inline-block";
            btn3.style.display = "none";

            btn1.onclick = agDaCaixa;
            btn2.onclick = emCasa;
          //btn3.onclick = emCasa;

        }     

        function preferencial() {
            historia.innerText = "Essa é a fila preferencial, você não pode ficar aqui! O que vai fazer agora?";

            btn1.innerText = ">>Ok,ok...<<";
            btn2.innerText = ">>Cansei de ser otário<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "inline-block";
            btn3.style.display = "none";

            btn1.onclick = agDaCaixa;
            btn2.onclick = emCasa;
          //btn3.onclick = emCasa);
        }

        function corongaVoucher() {
            historia.innerText = "DINHEIRO! GRAÇAS AOS CÉUS! O que você faz?";
            
            voucher = true;

            btn1.innerText = ">>BORA PRO CHURRAS!<<";
            btn2.innerText = ">>PARTIU BRASILIA, IRMÃO!<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "inline-block";
            btn3.style.display = "none";

            btn1.onclick = corongaDeath;
            btn2.onclick = brasiliaTrip;
          //btn3.onclick = emCasa);
        }


        function brasiliaTrip() {
            historia.innerText = "Como você pretende chegar a Brasília?";

            if (voucher == true) {
            btn1.innerText = ">>Ônibus<<";
            btn2.innerText = ">>Avião<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "inline-block";
            btn3.style.display = "none";

            btn1.onclick = vaiDeBuzão;
            btn2.onclick = vaiDeAvião;
          //btn3.onclick = emCasa);
        }
            if (voucher == false) {
            btn1.innerText = ">>Preciso de dinheiro<<";
            btn2.innerText = ">>Avião<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "none";
            btn3.style.display = "none";

            btn1.onclick = vaiPraOnde;
            btn2.onclick = vaiDeAvião;
          //btn3.onclick = emCasa);

      }

    }

 
        function vaiDeAvião() {
            historia.innerText ="Os aeropostos estão todos fechados devido à Pandemia do CorongaVírus."
   
            btn1.innerText = ">>Caceta de vírus!<<";   
            btn2.innerText = ">>2<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "none";
            btn3.style.display = "none";

            btn1.onclick = brasiliaTrip;
          //btn2.onclick = vaiPraOnde;
          //btn3.onclick = emCasa;
        }

        function vaiDeBuzão() {
            historia.innerText ="Conseguiu pegar o buzão! Pé na estrada, camarada!"

            btn1.innerText = ">>GRAÇAS A DEUS!<<";
            btn2.innerText = ">>2<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "none";
            btn3.style.display = "none";

            btn1.onclick = brasilia;
          //btn2.onclick = vaiPraOnde;
          //btn3.onclick = emCasa;
        }

        function brasilia() {
            historia.innerText ="Chegou em Brasília! Seu professor está em um protesto pela educação em frente ao Palácio do Planalto. O que você faz? 1- Manda um zap pra ele te encontrar no Bar do Zé; 2- Bate nos manifestantes e dispersa a multidão junto com os PMs; 3- Se embrenha na multidão em busca do Professor."
            
            btn1.innerText = ">>1<<";
            btn2.innerText = ">>2<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "inline-block";
            btn3.style.display = "inline-block";

            btn1.onclick = zapZap;
            btn2.onclick = fascistinha;
            btn3.onclick = corongaDeath;
        }

        function zapZap() {
            historia.innerText ="Você tá no Bar do Zé há horas e nada do seu Professor chegar"
            
            btn1.innerText = ">>E agora?<<";
            btn2.innerText = ">>2<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "none";
            btn3.style.display = "none";

            btn1.onclick = voltaProf;
          //btn2.onclick = fascistinha;
          //btn3.onclick = corongaDeath;
        }

        function voltaProf() {
            historia.innerText ="Você volta ao Palácio e descobre que seu professor foi preso! E agora? 1- Usa seu CorongaVoucher como fiança; 2- Deixa pra lá e volta pra casa."
            
            btn1.innerText = ">>1<<";
            btn2.innerText = ">>2<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "inline-block";
            btn3.style.display = "none";

            btn1.onclick = gratidão;
            btn2.onclick = emCasa;
          //btn3.onclick = corongaDeath;

        }

        function gratidão () {
            historia.innerText ="Seu professor está em liberdade novamente! Você finalmente consegue pedir a chave do laboratório pra ele. Como demonstração de gratidão, ele te entrega as chaves do laboratório."
            
            chave = true;

            btn1.innerText = ">>VAMBORA!<<";
            btn2.innerText = ">>2<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "none";
            btn3.style.display = "none";

            btn1.onclick = vaiPraOnde;
          //btn2.onclick = fascistinha;
          //btn3.onclick = corongaDeath;
        }

        function fascistinha () {
            historia.innerText ="Em um surto de raiva, você toma o cacetete de um dos PM's e entra na pancadaria contra os protestantes na frente do Palácio do Planalto."
   
            btn1.innerText = ">>Bando de vagabundo!<<";
            btn2.innerText = ">>Vão trabalhar, seus merdas!<<"; 
            btn3.innerText = ">>Comunistas!<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "inline-block";
            btn3.style.display = "inline-block";

            btn1.onclick = conviteBolso;
            btn2.onclick = conviteBolso;
            btn3.onclick = conviteBolso;
        }

        function conviteBolso() {
            historia.innerText ="Bolsodrácula te vê dispersando a multidão e se encanta por sua atitude. Ele te chama para uma reunião particular. Você vai?"
   
            btn1.innerText = ">>Só se for agora!<<";
            btn2.innerText = ">>Credo, vou não<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "inline-block";
            btn3.style.display = "none";

            btn1.onclick = aceitaConvite;
            btn2.onclick = negaConvite;
          //btn3.onclick = emCasa;
        }

        function aceitaConvite() {
            historia.innerText ="Vocês estão a sós no gabinete do BolsoDrácula. Como você puxa assunto?"

            btn1.innerText = ">>Você poderia tomar algumas ações para ajudar a população...<<";
            btn2.innerText = ">>A Terra é plana, sabia?<<";
            btn3.innerText = ">>Olha só, o Olavo de Carvalho acabou de publicar um novo tweet!<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "inline-block";
            btn3.style.display = "inline-block";

            btn1.onclick = fadaSensata;
            btn2.onclick = terraPlanista;
            btn3.onclick = tweetBait;
        }

        function negaConvite() {
            historia.innerText ="Bolsodrácula te persegue, manda a PF atrás de você e você é capturado tentando voltar pra casa."

            btn1.innerText = ">>CHEGA!<<";
            btn2.innerText = ">>2<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "none";
            btn3.style.display = "none";

            btn1.onclick = gameOver;
          //btn2.onclick = emCasa);
          //btn3.onclick = emCasa);
        }   

        function fadaSensata() {
            historia.innerText = "'Ajudar quem, idiota!?' BolsoDrácula grita. Ele avança até você e te morde!"
            
            btn1.innerText = ">>NÃO!<<";
            btn2.innerText = ">>Credo, vou não<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "none";
            btn3.style.display = "none";

            btn1.onclick = gameOver;
          //btn2.onclick = negaConvite;
          //btn3.onclick = emCasa;
        }

        function terraPlanista() { //FINAL SECRETO #1
            historia.innerText = "Os olhos rubros de Bolsodrácula lampejam instantaneamente após sua declaração e ele pergunta, encabulado, se você aceita que sejam melhores amigos para sempre. Em seguida, abre uma das gavetas de sua mesa e retira de lá um par de pulseiras combinandinhas."
   
            btn1.innerText = ">>AAAAAAAA<<";
            btn2.innerText = ">>AAAAAAAA<<";
            btn3.innerText = ">>AAAAAAAA<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "inline-block";
            btn3.style.display = "inline-block";

            btn1.onclick = acordaComa; 
            btn2.onclick = acordaComa;
            btn3.onclick = acordaComa;
        }

        function acordaComa() {
            historia.innerText = "Você abre os olhos lentamente... Encara o teto branco acima de você, sem reconhecer o lugar. Você tenta olhar em volta, mas algo o bloqueia. O bipe alto do maquinário respiratório denuncia que você está em um hospital. Alguns segundos depois, uma enfermeira se aproxima e conta que você ficou dias em coma induzido por conta das complicações do CorongaVírus, mas que o pior já passou. 'Céus,' você respira aliviado, 'não acredito que foi só um sonho!'. Tudo ficaria bem... até que você sente um toque gelado em sua mão. Ao suspendê-la na altura dos olhos, encontra a pulseira colorida firmemente amarrada em seu pulso!"
   
            btn1.innerText = ">>NÃO!<<";
            btn2.innerText = ">>2<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "none";
            btn3.style.display = "none";

            btn1.onclick = epicSecret;
          //btn2.onclick = negaConvite;
          //btn3.onclick = emCasa;
        
        }
        

        function epicSecret() {
            historia.innerText = "PARABÉNS! Você encontrou o final secreto #1 do WoC! Há boatos de que existe mais de um, mas quem poderia afirmar com certeza? Obrigada por chegar até aqui! :)"
            
            btn1.innerText = ">>NÃO!<<";
            btn2.innerText = ">>Credo, vou não<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "none";
            btn2.style.display = "none";
            btn3.style.display = "none";

            //btn1.onclick = ;
            //btn2.onclick = ;
            //btn3.onclick = ;
        
        }

        function tweetBait() {
            historia.innerText = "BolsoDrácula percebe estar sem seu celular e corre em busca de seu acessor para culpá-lo por isso. Agora, você está sozinho no gabinete. O que você faz? 1- Prepara a papelada para encaminhar verba extra para as universidades e suas pesquisas; 2- Tenta passar um trote para o 02; 3- Usa seu tempo para buscar possíveis segredos."
            
            btn1.innerText = ">>1<<";       
            btn2.innerText = ">>2<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "inline-block";
            btn3.style.display = "inline-block";

            btn1.onclick = passaPL;
            btn2.onclick = passaTrote;
            btn3.onclick = procuraSegredo;

        }

        function passaPL() {
            historia.innerText = "Seu projeto de Lei é incrível! Pena que a bancada dos palarmentares não viu seu potencial e engavetou o projeto!";
            
            btn1.innerText = ">>NÃO!<<";        
            btn2.innerText = ">>2<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "none";
            btn3.style.display = "none";

            btn1.onclick = gameOver;
          //btn2.onclick = negaConvite;
          //btn3.onclick = ; 

        }

        function passaTrote() {
            historia.innerText = "Sua risada ainda é ouvida por todo o Palácio, uma pena que tenham te condenado à prisão perpétua por atentado ao filho favorito do BolsoDrácula...";
            
            btn1.innerText = ">>I REGRET NOTHING!<<";
            btn2.innerText = ">>Tadinho do Carlusho...<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "none";
            btn3.style.display = "none";

            btn1.onclick = gameOver;
          //btn2.onclick = gameOver;
          //btn3.onclick = ;

        }

        function procuraSegredo() {
            historia.innerText = "Você busca qualquer coisa que possa mudar a situação atual. Revira gavetas, armários, vasos de planta...Sua maior surpresa é quando resolve checar o frigobar, encontrando amostras concentradas de uma vacina já estabilizada para humanos! Nesse momento, BolsoDrácula retorna e te encontra com o frasco na mão.";
            
            btn1.innerText = ">>PUTA MERDA, FODEU!<<";
            btn2.innerText = ">>2<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "none";
            btn3.style.display = "none";

            btn1.onclick = lutaÉpica;
          //btn2.onclick = negaConvite;
          //btn3.onclick = ;
        } 

        function lutaÉpica() {
            historia.innerText = "BolsoDrácula está furioso por você ter encontrado a vacina e avança em você! O que você faz?"
   
            btn1.innerText = ">>Corre<<";
            btn2.innerText = ">>Auto-injeta a vacina<<";
            btn3.innerText = ">>Injeta a vacina nele<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "inline-block";
            btn3.style.display = "inline-block";

            btn1.onclick = correDoBolso;
            btn2.onclick = autoInjetaVac;
            btn3.onclick = injetaVacina;
        }

        function correDoBolso() {
            historia.innerText = "Você ainda não possui poderes sobre-humanos, meu camarada. BolsoDrácula te alcança e te morde!"
            
            btn1.innerText = ">>NÃO!<<";
            btn2.innerText = ">>2<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "none";
            btn3.style.display = "none";

            btn1.onclick = gameOver;
          //btn2.onclick = negaConvite;
          //btn3.onclick = ;
        }

        function autoInjetaVac() {
            historia.innerText = "Em um lapso de coragem, você auto-injeta a vacina. Seu corpo reage em segundos ao componente e você consegue sentir os anticorpos se espalhando por todo seu sistema. BolsoDrácula percebe a reação e resolve atacar usando seu ataque especial 'Bafo do Coronga'! E agora?"
            
            btn1.innerText = ">>Repelir ataque<<";
            btn2.innerText = ">>Contra-atacar<<";
            btn3.innerText = ">>Se esconde<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "inline-block";
            btn3.style.display = "inline-block";

            btn1.onclick = epicWin;
            btn2.onclick = epicWin;
            btn3.onclick = epicFail;
        }

        function injetaVacina() {
            historia.innerText = "Em um lapso de coragem, você avança sobre o BolsoDrácula e injeta a vacina nele. Seu corpo reage em segundos ao componente e ele se dissolve diante dos seus olhos, espalhando micropartículas por toda parte. Graças ao sistema de ventilação, a poeira se espalha com velocidade, atingindo você e todos os funcionários presentes. Em poucos dias, a poeira já se espalhou por todo país, imunizando a população e salvando milhões de vidas!"
   
            btn1.innerText = ">>Fim!<<";
            btn2.innerText = ">>Contra-atacar<<";
            btn3.innerText = ">>Se esconde<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "inline-block";
            btn3.style.display = "inline-block";

            btn1.onclick = agradecimento;
          //btn2.onclick = epicWin;
          //btn3.onclick = epicFail;
        }

        function epicWin() {
            historia.innerText = "Você consegue atingir BolsoDrácula em cheio! Ele não tem anticorpos contra o próprio veneno e sucumbe em cinzas bem na sua frente... Com seus anticorpos desenvolvidos, você agora será capaz de vacinar a população e salvar milhões de vidas!"
   
            btn1.innerText = ">>Fim!<<";
            btn2.innerText = ">>2<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "none";
            btn3.style.display = "none";

            btn1.onclick = agradecimento;
          //btn2.onclick = negaConvite;
          //btn3.onclick = );
        }

        function epicFail() {
            historia.innerText = "Você pode ter desviado do ataque do BolsoDrácula, mas você não contava que os BolsoMinions viriam ajudá-lo! Você é capturado e a vacina não alcança a população. Em pouco mais de uma semana, já não há mais sobreviventes."
   
            btn1.innerText = ">>GAME OVER<<";
            btn2.innerText = ">>Restart<<";
            btn3.innerText = ">>3<<";

            btn1.style.display = "inline-block";
            btn2.style.display = "none";
            btn3.style.display = "none";

          //btn1.onclick = gameOver;
            btn2.onclick = emCasa;
          //btn3.onclick = ;
        }

        function agradecimento() {
            historia.innerText = "Obrigada por jogar World of Coronga! :)"
   
            btn1.innerText = ">>1<<";
            btn2.innerText = ">>Restart<<";
            btn3.innerText = ">>Se esconde<<";  

            btn1.style.display = "none";
            btn2.style.display = "inline-block";
            btn3.style.display = "none";

          //btn1.onclick = gameOver; 
            btn2.onclick = emCasa;
          //btn3.onclick = );
        }


            emCasa();


