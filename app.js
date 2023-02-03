var numeroSecreto = parseInt(Math.random() * 1001);

  while(chute != numeroSecreto) {
// while está sendo usado para melhorar a experiência do jogo. 
    var chute = prompt('Digite um número entre 0 e 1000');

   //se o chute por igual ao número secreto, o programa irá executar o valor condicional.

    if(chute == numeroSecreto) {

      alert('Parabéns voçê acertou !!!!!');   

    } else if(chute > numeroSecreto){

      alert('O número secreto é menor do que o digitado.');

    } else if(chute < numeroSecreto){

      alert('O número secreto é maior do que o digitado.');
    } 

  }
   



