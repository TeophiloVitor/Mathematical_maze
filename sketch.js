var labirinto = [ ]; //array cenário do jogo fase 1;
var labirintom = [ ];//array cenário do jogo fase 2;
var labirintod = [ ];//array cenário do jogo fase 3;
var chefao = [ ]; //array perguntas do vilão;
var chefaoR = [ ]; //array respostas do vilão; 
var perguntasf = [], perguntasm = [], perguntasd = []; //array de perguntas;
var respostasf = [], respostasm = [], respostasd = []; //array de respostas;
var p, p1, p2; //variável que recebe a pergunta do array perguntasf a partir do valor obtido na variável sortear;
var z, z1, z2; //variável que manda perguntasf na tela;
var sortear; //variável que calcula aleatoriamente um valor;
var r, r1, r2; //variável que recebe a resposta do array respostasf a partir do valor obtido na variável sortear;
var parede = 40; // tamanho dos blocos de parede;
var obstaculo = 40; // tamanho dos obstaculos;
var raio = 10; // raio do personagem;
var coins = 0; // estado inicial moedas;
var vidas = 3; // estado inicial vidas;
var tela= 1; // estado inicial tela;
var h, x, y, moedaF, moedaM, moedaD, imgParede;
var rolagem; // função rolagem;
var rolagem1; // função rolagem1;
var rolagem2; // função rolagem2;
var anima; // animação do personagem;
var anda = []; // vetor para as imagens do personagem;
var contFrame = 0; // contador usado na animação;
var som; // variável de som;

labirinto = [ 
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
['#','v','v','v','v','v','v','v','#','v','v','v','v','v','v','v','v','v','v','#'], 
['#','v','#','#','#','#','#','v','#','v','#','#','#','#','#','#','#','#','f','#'],
['#','v','#','v','v','v','#','v','f','v','#','v','#','v','v','v','v','v','v','#'], 
['#','v','#','v','#','v','#','#','#','#','#','v','#','v','#','#','#','#','#','#'],
['#','v','#','v','#','v','#','v','v','v','v','v','#','v','#','v','v','v','v','#'],
['#','v','#','v','#','v','#','v','#','#','#','v','#','v','#','v','#','#','v','#'],
['#','v','#','v','#','v','#','v','#','v','v','f','v','v','#','v','#','v','v','#'],
['#','v','v','f','#','v','#','v','#','v','#','#','#','#','#','v','#','v','#','#'], ['#','#','#','#','#','v','#','v','#','v','#','v','v','v','#','v','#','f','v','#'],
['#','v','v','v','v','f','#','v','#','v','#','v','#','v','#','v','v','#','v','#'], 
['#','v','#','#','#','#','#','v','#','v','#','v','#','v','#','#','v','#','v','#'],
['#','v','v','v','v','#','v','f','#','v','#','v','#','v','f','#','v','#','v','#'],
['#','v','#','#','v','#','v','#','#','v','#','v','#','#','v','#','v','#','v','#'],
['#','v','#','#','v','#','v','#','v','f','#','v','v','#','v','#','v','#','v','#'],
['#','v','#','#','v','#','v','#','v','#','#','#','v','#','v','#','v','#','v','#'],
['#','v','v','v','f','v','v','#','v','v','v','v','v','#','v','v','v','#','o','#'],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']
 
]; 

labirintom = [ 
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
['#','v','v','v','#','m','v','v','#','v','v','v','v','v','v','v','v','v','v','#'], 
['#','#','#','v','#','v','#','v','#','v','#','#','#','#','#','#','#','#','m','#'],
['#','v','v','v','#','v','#','v','m','v','#','v','#','v','v','v','v','v','v','#'], 
['#','v','#','#','#','v','#','#','#','#','#','v','#','v','#','v','#','#','#','#'],
['#','v','#','v','v','v','#','m','v','v','v','v','#','v','#','m','v','v','v','#'],
['#','v','#','v','#','v','#','v','#','#','#','v','#','v','#','v','#','#','v','#'],
['#','v','#','v','#','v','#','v','#','v','v','m','v','v','#','v','#','v','v','#'],
['#','v','m','v','#','v','#','v','#','v','#','#','#','#','#','v','#','v','o','#'], ['#','#','#','#','#','v','#','v','#','v','#','v','v','m','#','v','#','#','v','#'],
['#','v','v','v','v','m','#','v','#','v','#','v','#','v','#','v','v','#','v','#'], 
['#','v','#','#','#','#','#','v','#','v','#','v','#','v','#','#','v','#','v','#'],
['#','v','v','v','v','#','v','v','#','v','#','v','#','v','#','#','v','#','m','#'],
['#','#','#','#','v','#','v','m','v','#','v','v','#','v','#','#','v','#','v','#'],
['#','v','v','v','v','#','v','#','v','#','v','#','v','v','v','#','v','#','v','#'],
['#','v','#','#','#','#','v','#','v','#','v','#','v','#','v','#','v','#','v','#'],
['#','v','v','v','m','v','v','#','v','v','v','m','v','#','v','v','v','v','v','#'],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']
 
];

labirintod = [ 
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
['#','v','v','d','v','v','v','v','#','v','v','d','#','v','v','v','v','v','v','#'], 
['#','v','#','#','#','#','#','v','#','v','#','v','#','#','#','#','#','#','d','#'],
['#','v','#','v','v','v','#','v','d','v','#','v','#','v','v','v','v','v','v','#'], 
['#','d','v','v','#','v','#','#','#','#','#','v','#','v','#','#','#','#','v','#'],
['#','v','#','v','#','v','#','v','v','v','v','v','#','v','#','v','v','v','v','#'],
['#','v','#','v','#','v','#','v','#','#','#','#','#','v','#','v','#','#','v','#'],
['#','v','#','v','#','v','#','v','#','v','v','d','v','v','#','v','#','v','v','#'],
['#','v','v','d','#','v','#','v','#','v','#','#','#','#','#','v','#','v','#','#'], ['#','#','#','v','#','v','#','d','#','o','#','v','v','v','#','v','#','d','v','#'],
['#','v','v','v','#','d','v','v','#','v','#','v','#','v','#','d','v','#','v','#'], 
['#','v','#','#','#','#','#','v','#','v','#','v','#','v','#','#','v','#','v','#'],
['#','v','#','v','v','d','v','v','#','v','#','v','#','v','d','#','v','#','v','#'],
['#','v','#','v','#','#','v','#','#','v','#','v','#','#','v','#','v','#','v','#'],
['#','v','v','v','v','#','v','#','v','v','#','v','v','#','v','#','v','#','v','#'],
['#','v','#','#','v','#','v','#','#','#','#','#','d','#','v','#','d','#','v','#'],
['#','v','v','v','d','v','v','v','v','v','v','v','v','#','v','v','v','v','v','#'],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']
 
];

perguntasf = ['Se, durante uma corrida de carros, você deixa o segundo colocado pra trás, qual é a sua colocação após a ultrapassagem? (Responda por extenso)', 'A mãe de Maria tem cinco filhas: Fafá, Fefê, Fifi, Fofó e? Qual é o nome da quinta filha?', 'Quais os resultados respectivamente da raiz quadrada de 16 e da potenciação de 6 ao quadrado. (Separe os numeros por espaço)', 'Em uma sala quadrada, temos um gato em cada canto. Cada gato vê outros três gatos. Quantos gatos há no total dentro da sala? (Responda em numeral)', 'Quais são os números entre 0 e 20 que possuem raiz quadrada exata? (Separe os numeros por espaço)','Se uma borboleta vive cinco dias e a cada dia ela voa quatro metros, quantos metros ela terá percorrido em uma semana? (Responda em numeral)', 'O número cujo dobro, subtraindo-se 2 resulte no resultado da raiz quadrada de 144. Qual é esse número?', 'Uma família resolveu passear de carro. Nele entraram 1 avô, 2 pais, 2 filhos e 1 neto. Qual o número mínimo de pessoas dentro do veículo, afinal? (Responda em numeral)', 'Três gatos pegam três ratos em três minutos. Sabendo disso, responda: quantos minutos 100 gatos levam para capturar 100 ratos? (Responda em numeral)', 'Mariana tinha 121 balas e deu a raiz quadrada de suas balas a seu primo Igor e comeu mais 27. Com quantas balas ficou Mariana?'];
  
respostasf = ['Segundo', 'Maria', '4 36', '4', '1 4 9 16', '20', '7', '3','3','83'];

perguntasm = ['Quanto é 20% ao quadrado?', 'Um produto estava sendo vendido por 400 reais. Então o produto sofreu um redução de 50% no seu preço. Depois foi reajustado com um aumento de 50%. Qual seu preço final.', 'Ana tem 20 anos e morou durante 5 anos nos Estados Unidos, 4 anos na Austrália e o resto no Brasil. Em porcentagem, quantos anos ela morou no hemisfério sul?', 'Se “um garoto e meio” consegue comer um cachorro quente e meio em um minuto e meio, quantos cachorros quentes 6 garotos conseguem comer em 6 minutos? (Resposta em numeral)', 'Qual o complemento de 11°?', 'Um time de futebol americano marcou 4,6,5,3 e 7 gols nos cinco jogos iniciais do campeonato. Calcule a média de gols da equipe nessas primeiras cinco partidas.', 'Olá! Eu sei que não sabe quem sou, mas nós somos da mesma família: o meu pai é irmão da sua irmã. Quem sou eu: seu primo, sobrinho, filho, tio ou genro?', 'Sabendo que o suplemento do ângulo AÔB é 91°, qual é a medida desse ângulo?', 'Um ângulo mede 120°, qual a terça parte do suplemento desse ângulo?', 'Dois ângulos são adjacentes complementares. Sabendo que a medida do maior ângulo é de 48°, qual é a medida do menor ângulo?', 'Pedro tem 68 bolinhas de gude, 34 são verdes e o resto azuis. Qual a porcentagem de bolinhas azuis?', 'Comprei uma bicicleta cujo o preço original era de R$200,00.Ganhei um desconto de 30%. Quanto paguei na bicicleta?(Só o valor)','João fez uma prova de matemática de 50 questões e apenas acertou 24% delas. Quantas questões ele acertou?'];

respostasm = ['4', '300', '75', '24', '79', '5', 'sobrinho', '89', '20', '42', '50','140','12'];

perguntasd = ['Qual é a soma, em graus dos ângulos externos de um polígono em graus?', 'Uma família vai reservar uma mesa em um restaurante e diz: "Estaremos em 3 pais, 3 filhos, 2 avôs, 2 netos, 1 bisavô e 1 bisneto". Quantos lugares a família ocupou?', 'A Mãe é três vezes mais velha que a filha. Juntas têm 48 anos. Qual é a idade de cada uma? (Resposta separada por espaço)', 'Oito estudantes se encontram e cada um cumprimenta o outro com um aperto de mão. Quantos apertos de mão se trocaram?', 'Analise atentamente a sequência a seguir: 1, 2, 5, 11, 22, 43, ? O número que, logicamente, melhor a completa é: 64, 74, 79, 95 ou 190', 'Num avião há 4 romanos e um inglês. Qual o nome da aeromoça: Maria, Judite, Letícia, Ivone, Luiza. (Responda com a primeira letra maiúscula)', 'O que é uma casinha sem porta e sem janela, lá dentro vivem duas donzelas, uma branca e outra amarela? (Responda com a primeira letra maiúscula)', 'Se dois digitadores podem digitar duas páginas em dois minutos, quantos digitadores seriam necessários para digitar 100 páginas em cinco minutos?', 'Em uma fábrica, as idades de seus funcinários são dados pela seguinte sequência: 30, 31, 22, 23, 30, 30, 30, 50, 46, 22. Apartir desses dados calcule a mediana dessas idades.', 'Você está numa sala com 3 macacos, um deles está segurando uma banana, o outro um pedaço de madeira e o terceiro nada. Qual é o primata mais inteligente da sala? (Resp Maiúscula)', 'Guilherme pagou 30% de uma divida,se ainda restou 4200 reais, quanto vale a divida total?(Só o valor)', 'Catarina comprou 150 balas, deu 30% para Maria, 40% para Jane e o resto deu para Erick. Quantas balas Erick ganhou?', 'Qual é a raiz quadrada de 625?', 'Erica faz uma conta utilizando números quadrados. Ela mostra a seu pai para ele tentar resolver, eis a conta: 4² x 8² - 2². Qual o resultado da conta', 'Existem números de 1 algarismo (0 até 9), existem também os de 2 (10 até 99), mais quantos números de 3 algarismos existem?', 'Eliane faz uma conta e mostra a seus colegas e eles tentam resolve-la, na conta há os seguintes números 510 + 34 x 3 : 5 - 200. Qual o resultado da conta de Eliane?'];

respostasd = ['360', '4', '36 12', '28', '95', 'Ivone', 'Ovo', '40', '30', 'EU','6000', '45','25','1020','900','330,4'];

chefao = ['Calcule a Integral de x²', 'Calcule a Derivada de 2x', 'Calcule a Integral do sen(x)', 'Calcule a Derivada de sen(x)', 'Calcule a Integral de cos(x)', 'Calcule Derivada do cos(x)', 'Calcule a Integral de x', 'Calcule a Derivada de 3', 'Calcule a Derivada do ln(x)', 'Calcule a Integral de 2x²', 'Calcule a Integral de 1/x', 'O limite de 1/x com x tendendo a 0. Existe? (Responda com "sim" ou "não"'];

chefaoR = ['x³/3', '2', '-cos(x)', 'cos(x)', 'sen(x)', '-sen(x)', 'x²/2', '0', '1/x', '2x³/3', 'ln(x)', 'não'];


function preload() {
  for (i = 0; i < 5; i++) {
    anda[i] = loadImage('personagem/pacman('+i+').png');
    frameRate(30);
  }
  moedaF = loadImage('moedas/MoedaF.png');
  moedaM = loadImage('moedas/moedaM.png');
  moedaD = loadImage('moedas/MoedaD.png');
  comojogar = loadImage('fase/teste-tela-comojogar.png');
  Labirinto = loadImage('fase/teste-tela-inicial.png');
  passefase1 = loadImage('fase/passoufase1.png');
  passefase2 = loadImage('fase/passoufase2.png');
  passefase3 = loadImage('fase/passoufase3.png');
  comovencer = loadImage('fase/teste-tela-comovencer.png');
  tijolo =loadImage('tijolos/tijolo.png');
  tijolo2 =loadImage('tijolos/tijolo2.png');
  tijolo3 =loadImage('tijolos/tijolo3.png');
  fantasma =loadImage('inimigos/fantasma(3).png');
  fantasma1 =loadImage('inimigos/fantasma(1).png');
  Guerreiro = loadImage('inimigos/Guerreiro.png');
  som = loadSound('song.mp3');
}

//criação da função colisão com os obstaculos
  function colisao(px, py){
  pLinha = Math.floor(py/parede);
  pColuna = Math.floor(px/parede);
  if(labirinto[pLinha][pColuna] == '#') {
    return true;
  } 
  else if(labirinto[pLinha][pColuna] == 'o' ) {
    sortear = (Math.random() * chefao.length);
    p = chefao[(sortear) | 0];
    r = chefaoR[(sortear) | 0];
      z = prompt(p);
      if(z == r){
      alert("Resposta correta. Parabéns!");
      coins=coins+1000;
      chefao.splice(sortear,1);
      chefaoR.splice(sortear,1);
      labirinto[pLinha].splice([pColuna],1,'v');
      return true;
      } 
      else {
        vidas = vidas - 1;
        return false;
      }
  } 
  else if(labirinto[pLinha][pColuna] == 'f') {
    sortear = (Math.random() * perguntasf.length);
    p = perguntasf[(sortear) | 0];
    r = respostasf[(sortear) | 0];
      z = prompt(p);
      if(z == r){
      alert("Resposta correta. Parabéns!");
      coins=coins+2;
      perguntasf.splice(sortear,1);
      respostasf.splice(sortear,1);
      labirinto[pLinha].splice([pColuna],1,'v');
      return true;
      } 
      else {
        vidas = vidas - 1;
        return false;
      }
  }
    else { 
      return false;
   }
}

//criação da função colisão media com os obstaculos
  function colisaom(px, py){
  pLinha = Math.floor(py/parede);
  pColuna = Math.floor(px/parede);
  if(labirintom[pLinha][pColuna] == '#') {
    return true;
  } 
  else if(labirintom[pLinha][pColuna] == 'o' ) {
    sortear = (Math.random() * chefao.length);
    p = chefao[(sortear) | 0];
    r = chefaoR[(sortear) | 0];
      z = prompt(p);
      if(z == r){
      alert("Resposta correta. Parabéns!");
      coins=coins+1000;
      chefao.splice(sortear,1);
      chefaoR.splice(sortear,1);
      labirinto[pLinha].splice([pColuna],1,'v');
      return true;
      } 
      else {
        vidas = vidas - 1;
        return false;
      }
  } 
  else if(labirintom[pLinha][pColuna] == 'm') {
    sortear = (Math.random() * perguntasm.length);
    p = perguntasm[(sortear) | 0];
    r = respostasm[(sortear) | 0];
      z = prompt(p);
      if(z == r){
      alert("Resposta correta. Parabéns!");
      coins=coins+4;
      perguntasm.splice(sortear,1);
      respostasm.splice(sortear,1);
      labirintom[pLinha].splice([pColuna],1,'v');
      return true;
      } 
      else {
        vidas = vidas - 1;
        return false;
      }
  }
    else { 
      return false;
   }
}

//criação da função colisão dificil com os obstaculos
  function colisaod(px, py){
  pLinha = Math.floor(py/parede);
  pColuna = Math.floor(px/parede);
  if(labirintod[pLinha][pColuna] == '#') {
    return true;
  } 
  else if(labirintod[pLinha][pColuna] == 'o' ) {
    sortear = (Math.random() * chefao.length);
    p = chefao[(sortear) | 0];
    r = chefaoR[(sortear) | 0];
      z = prompt(p);
      if(z == r){
      alert("Resposta correta. Parabéns!");
      coins=coins+1000;
      chefao.splice(sortear,1);
      chefaoR.splice(sortear,1);
      labirinto[pLinha].splice([pColuna],1,'v');
      return true;
      } 
      else {
        vidas = vidas - 1;
        return false;
      }
  } 
  else if(labirintod[pLinha][pColuna] == 'd') {
    sortear = (Math.random() * perguntasd.length);
    p = perguntasd[(sortear) | 0];
    r = respostasd[(sortear) | 0];
      z = prompt(p);
      if(z == r){
      alert("Resposta correta. Parabéns!");
      coins=coins+8;
      perguntasd.splice(sortear,1);
      respostasd.splice(sortear,1);
      labirintod[pLinha].splice([pColuna],1,'v');
      return true;
      } 
      else {
        vidas = vidas - 1;
        return false;
      }
  }
    else { 
      return false;
   }
}

function fase1 () {
  colisao(x, y);
  background(192, 192, 192);
  
  // define a posição das paredes e obstáculos
  for ( i = 0; i < labirinto.length; i++ ) { 
    for ( j = 0; j < labirinto[0].length; j++ ) {  
      if ( labirinto[i][j] == '#' ) {
        fill(100,100,255);
        image(tijolo, j*parede,i*parede); 
      }
      if ( labirinto[i][j] == 'o' ) {
        fill(100,100,255);
        image(fantasma,j*obstaculo, i*obstaculo, 40, 40);
      }
      if ( labirinto[i][j] == 'f' ) {
        fill(100,100,255);
        image(moedaF, j*obstaculo, i*obstaculo, 40, 40);
      }
    }
  }
  //controle do jogo pelas teclas direcionadas
if (keyIsDown(LEFT_ARROW)) {
     if ( ! colisao( x - 2 - raio, y ) ) {
       x = x - 4;   
     }
   }
   if ( keyIsDown(RIGHT_ARROW)) { 
     if ( ! colisao( x + 2 + raio, y ) ) {
       x = x + 4;       
     } 
   }
  if (keyIsDown(DOWN_ARROW)) {
     if ( ! colisao( x, y + 2 + raio) ) {
       y = y + 4;       
     }
   }
   if ( keyIsDown(UP_ARROW)) { 
     if ( ! colisao( x, y - 2 - raio) ) {
       y = y - 4;       
     }
   }
 }

function fase2 () {
  colisaom(x, y);
  background(192, 192, 192);
  
  // define a posição das paredes e obstáculos
  for ( i = 0; i < labirintom.length; i++ ) { 
    for ( j = 0; j < labirintom[0].length; j++ ) {  
      if ( labirintom[i][j] == '#' ) {
        fill(100,100,255);
        image(tijolo2, j*parede,i*parede); 
      }
      if ( labirintom[i][j] == 'o' ) {
        fill(100,100,255);
        image(fantasma1,j*obstaculo, i*obstaculo, 40, 40);
      }
      if ( labirintom[i][j] == 'm' ) {
        fill(100,100,255);
        image(moedaM, j*obstaculo, i*obstaculo, 40, 40);
      }
    }
  }
  //controle do jogo pelas teclas direcionadas
if (keyIsDown(LEFT_ARROW)) {
     if ( ! colisaom( x - 2 - raio, y ) ) {
       x = x - 4;   
     }
   }
   if ( keyIsDown(RIGHT_ARROW)) { 
     if ( ! colisaom( x + 2 + raio, y ) ) {
       x = x + 4;       
     } 
   }
  if (keyIsDown(DOWN_ARROW)) {
     if ( ! colisaom( x, y + 2 + raio) ) {
       y = y + 4;       
     }
   }
   if ( keyIsDown(UP_ARROW)) { 
     if ( ! colisaom( x, y - 2 - raio) ) {
       y = y - 4;       
     }
  }
}

function fase3 () {
  colisaod(x, y);
    background(192, 192, 192);
  
  // define a posição das paredes e obstáculos
  for ( i = 0; i < labirintod.length; i++ ) { 
    for ( j = 0; j < labirintod[0].length; j++ ) {  
      if ( labirintod[i][j] == '#' ) {
        fill(100,100,255);
        image(tijolo3, j*parede,i*parede); 
      }
      if ( labirintod[i][j] == 'o' ) {
        fill(100,100,255);
        image(Guerreiro,j*obstaculo, i*obstaculo, 40, 40);
      }
      if ( labirintod[i][j] == 'd' ) {
        fill(100,100,255);
        image(moedaD, j*obstaculo, i*obstaculo, 40, 40);
      }
    }
  }
  //controle do jogo pelas teclas direcionadas
if (keyIsDown(LEFT_ARROW)) {
     if ( ! colisaod( x - 2 - raio, y ) ) {
       x = x - 4;   
     }
   }
   if ( keyIsDown(RIGHT_ARROW)) { 
     if ( ! colisaod( x + 2 + raio, y ) ) {
       x = x + 4;       
     } 
   }
  if (keyIsDown(DOWN_ARROW)) {
     if ( ! colisaod( x, y + 2 + raio) ) {
       y = y + 4;       
     }
   }
   if ( keyIsDown(UP_ARROW)) { 
     if ( ! colisaod( x, y - 2 - raio) ) {
       y = y - 4;       
     }
  }
}

function setup() {
  createCanvas(800, 720);
  fill(242, 242, 242);
  x = 60;
  y = 60;
  som.setVolume(0.1);
  som.loop();
} 

// criação do personagem
function pprincipal(posX,posY){ 
  strokeWeight(0); 
  ellipse(posX+2, posY+2, 20, 20);
  anima = anda[contFrame];
  image(anima, posX-8, posY-8, 20, 20);
  contFrame++;
  if (contFrame > 4 ) {
     contFrame = 0;  
  }
}

function draw() {  
  
  if(tela == 1){
    image(Labirinto, 0, 0, 800, 720);
    if(keyIsDown(ENTER)){
    tela = 2;
    }
  }
    if(tela == 2){
    image(comojogar, 0, 0, 800, 720);
    if(keyIsDown(32)){
    tela = 3;
    }
  }
    if(tela == 3){
    image(comovencer, 0, 0, 800, 720);
    if(keyIsDown(ENTER)){
    stroke(10);
    tela = 4;
    }
  }
  if(tela == 5){
    image(passefase1, 0, 0, 800, 720);
    if(keyIsDown(ENTER)){
    stroke(10);
    tela = 6;
    }
  }
  if (tela == 7){
    image(passefase2, 0, 0, 800, 720);
    if(keyIsDown(ENTER)){
    stroke(10);
    tela = 8;
    }
  }
    if (tela == 9){
    image(passefase3, 0, 0, 800, 720);
    if(keyIsDown(ENTER)){
    stroke(10);
    tela = 4;
    }
    if(keyIsDown(27)){
    stroke(10);
    tela = 1;
    }
  }
  if(tela == 4){
  
  fase1() // fase 1 sendo chamada;
  pprincipal(x, y);
  if(vidas <=0){
    x=60;
    y=60;
    fill(30,144,255);
    stroke(10);
    strokeWeight(10)
    textSize(100);
    text("GAME OVER", 100, 300);
    fill(30,144,255);
    stroke(10);
    strokeWeight(8)
    textSize(40);
    text("PRESS ENTER TO PLAY AGAIN", 105, 650);
    if(keyIsDown(ENTER)){
    rolagem();
   } 
  }
  if(coins >= 1000){
    tela=5;
    rolagem();
  }
    
  textSize(25);
  strokeWeight(6);
  fill(30,144,255);
  text("Pontos: "+ coins + "          " + "Life: "+ vidas, 30, 30); // inserção do texto
 }
  
 if(tela == 6){
  
  fase2() // fase 2 sendo chamada;
  pprincipal(x, y);
  if(vidas <=0){
    x=60;
    y=60;
    fill(30,144,255);
    stroke(10);
    strokeWeight(10)
    textSize(100);
    text("GAME OVER", 100, 300);
    fill(30,144,255);
    stroke(10);
    strokeWeight(8)
    textSize(40);
    text("PRESS ENTER TO PLAY AGAIN", 105, 650);
    if(keyIsDown(ENTER)){
    rolagem1();
   } 
  }
  if(coins >= 1000){
    tela=7;
    rolagem1();
  }
    
  textSize(25);
  strokeWeight(6);
  fill(30, 144, 255);
  text("Pontos: "+ coins + "          " + "Life: "+ vidas, 30, 30); // inserção do texto
 } 
  
  if(tela == 8){
  
  fase3() // fase 3 sendo chamada;
  pprincipal(x, y);
  if(vidas <=0){
    x=60;
    y=60;
    fill(30,144,255);
    stroke(10);
    strokeWeight(10)
    textSize(100);
    text("GAME OVER", 100, 300);
    fill(30,144,255);
    stroke(10);
    strokeWeight(8)
    textSize(40);
    text("PRESS ENTER TO PLAY AGAIN", 105, 650);
    if(keyIsDown(ENTER)){
    rolagem2();
   } 
  }
  if(coins >= 1000){
    tela=9;
    rolagem2();
  }
    
  textSize(25);
  strokeWeight(6);
  fill(30, 144, 255);
  text("Pontos: "+ coins + "          " + "Life: "+ vidas, 30, 30); // inserção do texto
 }
}

function rolagem () {
    vidas=3;
    coins=0;
    x = 60;
    y = 60; 
labirinto = [ 
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
['#','v','v','v','v','v','v','v','#','v','v','v','v','v','v','v','v','v','v','#'], 
['#','v','#','#','#','#','#','v','#','v','#','#','#','#','#','#','#','#','f','#'],
['#','v','#','v','v','v','#','v','f','v','#','v','#','v','v','v','v','v','v','#'], 
['#','v','#','v','#','v','#','#','#','#','#','v','#','v','#','#','#','#','#','#'],
['#','v','#','v','#','v','#','v','v','v','v','v','#','v','#','v','v','v','v','#'],
['#','v','#','v','#','v','#','v','#','#','#','v','#','v','#','v','#','#','v','#'],
['#','v','#','v','#','v','#','v','#','v','v','f','v','v','#','v','#','v','v','#'],
['#','v','v','f','#','v','#','v','#','v','#','#','#','#','#','v','#','v','#','#'], ['#','#','#','#','#','v','#','v','#','v','#','v','v','v','#','v','#','f','v','#'],
['#','v','v','v','v','f','#','v','#','v','#','v','#','v','#','v','v','#','v','#'], 
['#','v','#','#','#','#','#','v','#','v','#','v','#','v','#','#','v','#','v','#'],
['#','v','v','v','v','#','v','f','#','v','#','v','#','v','f','#','v','#','v','#'],
['#','v','#','#','v','#','v','#','#','v','#','v','#','#','v','#','v','#','v','#'],
['#','v','#','#','v','#','v','#','v','f','#','v','v','#','v','#','v','#','v','#'],
['#','v','#','#','v','#','v','#','v','#','#','#','v','#','v','#','v','#','v','#'],
['#','v','v','v','f','v','v','#','v','v','v','v','v','#','v','v','v','#','o','#'],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']
 
]; // chamar novamente o labirinto inicial
  
perguntasf = ['Se, durante uma corrida de carros, você deixa o segundo colocado pra trás, qual é a sua colocação após a ultrapassagem? (Responda por extenso)', 'A mãe de Maria tem cinco filhas: Fafá, Fefê, Fifi, Fofó e? Qual é o nome da quinta filha?', 'Quais os resultados respectivamente da raiz quadrada de 16 e da potenciação de 6 ao quadrado. (Separe os numeros por espaço)', 'Em uma sala quadrada, temos um gato em cada canto. Cada gato vê outros três gatos. Quantos gatos há no total dentro da sala? (Responda em numeral)', 'Quais são os números entre 0 e 20 que possuem raiz quadrada exata? (Separe os numeros por espaço)','Se uma borboleta vive cinco dias e a cada dia ela voa quatro metros, quantos metros ela terá percorrido em uma semana? (Responda em numeral)', 'O número cujo dobro, subtraindo-se 2 resulte no resultado da raiz quadrada de 144. Qual é esse número?', 'Uma família resolveu passear de carro. Nele entraram 1 avô, 2 pais, 2 filhos e 1 neto. Qual o número mínimo de pessoas dentro do veículo, afinal? (Responda em numeral)', 'Três gatos pegam três ratos em três minutos. Sabendo disso, responda: quantos minutos 100 gatos levam para capturar 100 ratos? (Responda em numeral)', 'Mariana tinha 121 balas e deu a raiz quadrada de suas balas a seu primo Igor e comeu mais 27. Com quantas balas ficou Mariana?'];
  
respostasf = ['Segundo', 'Maria', '4 36', '4', '1 4 9 16', '20', '7', '3','3','83'];
}

function rolagem1 () {
    vidas=3;
    coins=0;
    x = 60;
    y = 60; 
labirintom = [ 
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
['#','v','v','v','#','m','v','v','#','v','v','v','v','v','v','v','v','v','v','#'], 
['#','#','#','v','#','v','#','v','#','v','#','#','#','#','#','#','#','#','m','#'],
['#','v','v','v','#','v','#','v','m','v','#','v','#','v','v','v','v','v','v','#'], 
['#','v','#','#','#','v','#','#','#','#','#','v','#','v','#','v','#','#','#','#'],
['#','v','#','v','v','v','#','m','v','v','v','v','#','v','#','m','v','v','v','#'],
['#','v','#','v','#','v','#','v','#','#','#','v','#','v','#','v','#','#','v','#'],
['#','v','#','v','#','v','#','v','#','v','v','m','v','v','#','v','#','v','v','#'],
['#','v','m','v','#','v','#','v','#','v','#','#','#','#','#','v','#','v','o','#'], ['#','#','#','#','#','v','#','v','#','v','#','v','v','m','#','v','#','#','v','#'],
['#','v','v','v','v','m','#','v','#','v','#','v','#','v','#','v','v','#','v','#'], 
['#','v','#','#','#','#','#','v','#','v','#','v','#','v','#','#','v','#','v','#'],
['#','v','v','v','v','#','v','v','#','v','#','v','#','v','#','#','v','#','m','#'],
['#','#','#','#','v','#','v','m','v','#','v','v','#','v','#','#','v','#','v','#'],
['#','v','v','v','v','#','v','#','v','#','v','#','v','v','v','#','v','#','v','#'],
['#','v','#','#','#','#','v','#','v','#','v','#','v','#','v','#','v','#','v','#'],
['#','v','v','v','m','v','v','#','v','v','v','m','v','#','v','v','v','v','v','#'],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']
 
]; // chamar novamente o labirinto inicial
  
  
perguntasm = ['Quanto é 20% ao quadrado?', 'Um produto estava sendo vendido por 400 reais. Então o produto sofreu um redução de 50% no seu preço. Depois foi reajustado com um aumento de 50%. Qual seu preço final.', 'Ana tem 20 anos e morou durante 5 anos nos Estados Unidos, 4 anos na Austrália e o resto no Brasil. Em porcentagem, quantos anos ela morou no hemisfério sul?', 'Se “um garoto e meio” consegue comer um cachorro quente e meio em um minuto e meio, quantos cachorros quentes 6 garotos conseguem comer em 6 minutos? (Resposta em numeral)', 'Qual o complemento de 11°?', 'Um time de futebol americano marcou 4,6,5,3 e 7 gols nos cinco jogos iniciais do campeonato. Calcule a média de gols da equipe nessas primeiras cinco partidas.', 'Olá! Eu sei que não sabe quem sou, mas nós somos da mesma família: o meu pai é irmão da sua irmã. Quem sou eu: seu primo, sobrinho, filho, tio ou genro?', 'Sabendo que o suplemento do ângulo AÔB é 91°, qual é a medida desse ângulo?', 'Um ângulo mede 120°, qual a terça parte do suplemento desse ângulo?', 'Dois ângulos são adjacentes complementares. Sabendo que a medida do maior ângulo é de 48°, qual é a medida do menor ângulo?', 'Pedro tem 68 bolinhas de gude, 34 são verdes e o resto azuis. Qual a porcentagem de bolinhas azuis?', 'Comprei uma bicicleta cujo o preço original era de R$200,00.Ganhei um desconto de 30%. Quanto paguei na bicicleta?(Só o valor)','João fez uma prova de matemática de 50 questões e apenas acertou 24% delas. Quantas questões ele acertou?'];

respostasm = ['4', '300', '75', '24', '79', '5', 'sobrinho', '89', '20', '42', '50','140','12'];
 }


function rolagem2 () {
    vidas=3;
    coins=0;
    x = 60;
    y = 60; 
labirintod = [ 
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
['#','v','v','d','v','v','v','v','#','v','v','d','#','v','v','v','v','v','v','#'], 
['#','v','#','#','#','#','#','v','#','v','#','v','#','#','#','#','#','#','d','#'],
['#','v','#','v','v','v','#','v','d','v','#','v','#','v','v','v','v','v','v','#'], 
['#','d','v','v','#','v','#','#','#','#','#','v','#','v','#','#','#','#','v','#'],
['#','v','#','v','#','v','#','v','v','v','v','v','#','v','#','v','v','v','v','#'],
['#','v','#','v','#','v','#','v','#','#','#','#','#','v','#','v','#','#','v','#'],
['#','v','#','v','#','v','#','v','#','v','v','d','v','v','#','v','#','v','v','#'],
['#','v','v','d','#','v','#','v','#','v','#','#','#','#','#','v','#','v','#','#'], ['#','#','#','v','#','v','#','d','#','o','#','v','v','v','#','v','#','d','v','#'],
['#','v','v','v','#','d','v','v','#','v','#','v','#','v','#','d','v','#','v','#'], 
['#','v','#','#','#','#','#','v','#','v','#','v','#','v','#','#','v','#','v','#'],
['#','v','#','v','v','d','v','v','#','v','#','v','#','v','d','#','v','#','v','#'],
['#','v','#','v','#','#','v','#','#','v','#','v','#','#','v','#','v','#','v','#'],
['#','v','v','v','v','#','v','#','v','v','#','v','v','#','v','#','v','#','v','#'],
['#','v','#','#','v','#','v','#','#','#','#','#','d','#','v','#','d','#','v','#'],
['#','v','v','v','d','v','v','v','v','v','v','v','v','#','v','v','v','v','v','#'],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']
 
]; // chamar novamente o labirinto inicial
  
perguntasd = ['Qual é a soma, em graus dos ângulos externos de um polígono em graus?', 'Uma família vai reservar uma mesa em um restaurante e diz: "Estaremos em 3 pais, 3 filhos, 2 avôs, 2 netos, 1 bisavô e 1 bisneto". Quantos lugares a família ocupou?', 'A Mãe é três vezes mais velha que a filha. Juntas têm 48 anos. Qual é a idade de cada uma? (Resposta separada por espaço)', 'Oito estudantes se encontram e cada um cumprimenta o outro com um aperto de mão. Quantos apertos de mão se trocaram?', 'Analise atentamente a sequência a seguir: 1, 2, 5, 11, 22, 43, ? O número que, logicamente, melhor a completa é: 64, 74, 79, 95 ou 190', 'Num avião há 4 romanos e um inglês. Qual o nome da aeromoça: Maria, Judite, Letícia, Ivone, Luiza. (Responda com a primeira letra maiúscula)', 'O que é uma casinha sem porta e sem janela, lá dentro vivem duas donzelas, uma branca e outra amarela? (Responda com a primeira letra maiúscula)', 'Se dois digitadores podem digitar duas páginas em dois minutos, quantos digitadores seriam necessários para digitar 100 páginas em cinco minutos?', 'Em uma fábrica, as idades de seus funcinários são dados pela seguinte sequência: 30, 31, 22, 23, 30, 30, 30, 50, 46, 22. Apartir desses dados calcule a mediana dessas idades.', 'Você está numa sala com 3 macacos, um deles está segurando uma banana, o outro um pedaço de madeira e o terceiro nada. Qual é o primata mais inteligente da sala? (Resp Maiúscula)', 'Guilherme pagou 30% de uma divida,se ainda restou 4200 reais, quanto vale a divida total?(Só o valor)', 'Catarina comprou 150 balas, deu 30% para Maria, 40% para Jane e o resto deu para Erick. Quantas balas Erick ganhou?', 'Qual é a raiz quadrada de 625?', 'Erica faz uma conta utilizando números quadrados. Ela mostra a seu pai para ele tentar resolver, eis a conta: 4² x 8² - 2². Qual o resultado da conta', 'Existem números de 1 algarismo (0 até 9), existem também os de 2 (10 até 99), mais quantos números de 3 algarismos existem?', 'Eliane faz uma conta e mostra a seus colegas e eles tentam resolve-la, na conta há os seguintes números 510 + 34 x 3 : 5 - 200. Qual o resultado da conta de Eliane?'];

respostasd = ['360', '4', '36 12', '28', '95', 'Ivone', 'Ovo', '40', '30', 'EU','6000', '45','25','1020','900','330,4'];
 }