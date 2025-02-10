/* Crie uma variável para armazenar o nome e quantidade de
experiência (XP) de um herói, depois utilize uma estrutura 
de decisão para aprensentar alguma das mensagens abaixo : 
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**" */

let hero = [
    ["Gabriel", 1500]
];

let level = "";

switch (true) {
    case hero[0][1] < 1000:
        level = "Ferro";
        break;
    case hero[0][1] > 1000 && hero[0][1] <= 2000:
        level = "Bronze";
        break;
    case hero[0][1] > 2000 && hero[0][1] <= 5000:
        level = "Prata";
        break;
    case hero[0][1] > 5000 && hero[0][1] <= 7000:
        level = "Ouro";
        break;
    case hero[0][1] > 7001 && hero[0][1] <= 8000:
        level = "Platina";
        break;
    case hero[0][1] > 8001 && hero[0][1] <= 9000:
        level = "Ascendente";
        break;
    case hero[0][1] > 9001 && hero[0][1] <= 10000:
        level = "Imortal";
        break;
    case hero[0][1] >= 10001:
        level = "Radiante";
        break;
    default:
        level = "Error";
        break;
}

console.log(`O Herói de nome ${hero[0][0]} está no nível de ${level}`);
