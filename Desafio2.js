/* Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

function ranking(victories, defeats){
    let RankingPoints = victories -defeats
    let Rank = "" // variável utilizada para atribuição do rank

switch (true){ //utilizei o true como boolean
    case RankingPoints < 10 :
        Rank = "Ferro"
        break
    case RankingPoints >= 10 && RankingPoints <=20:
        Rank = "Bronze"
        break
    case RankingPoints > 20 && RankingPoints <= 50 :
        Rank = "Prata"
        break
    case RankingPoints > 50 && RankingPoints <= 80:
        Rank = "Ouro"
        break
    case RankingPoints > 80 && RankingPoints <= 90:
        Rank = "Diamante"
        break
    case RankingPoints > 90 &&RankingPoints <= 100:
        Rank = "Lendário"
        break
    case RankingPoints >= 101:
        Rank = "Imortal"
        break
    default :
    Rank = "Desconhecido"
    break
}
return { result: RankingPoints, rank: Rank} // return foi utilizado para devolver o valor da função, retornando valor do RankingPoints e Rank
    } //Objeto criado. Chave result armazena o RankingPoints, chave rank armazena Rank

let result = ranking(75,10)

console.log( `O jogador tem um saldo de ${result.result} e está no ranking: ${result.rank}`)
//console.log(result)