const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

function checarNum(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log("Digite um número entre 1 e 100")
  } else if(guess === numeroAleatorio) {
    console.log("Parabéns, você acertou o número!");
  } else if(guess < numeroAleatorio) {
    console.log("Tente um número maior.");
  } else {
    console.log("Tente um número menor.");
  }
}


let acertou = false;
let tentativas = 0;

while (!acertou) {
  const palpite = prompt("Seu palpite: ");
  checarNum(palpite);
  tentativas++;

  if (palpite == numeroAleatorio) {
    acertou = true;
    console.log(`Você acertou em ${tentativas} tentativas!`);
  }
}
//Create by Brenno Ruan
