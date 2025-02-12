/* Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken) */

class hero {
    constructor(Name,Age,Types,Attacks){
        this.Name = Name
        this.Age = Age
        this.Types = Types
        this.Attacks = Attacks
    }
PerformAttack(){ //criação da função para realização do ataque
    console.log(`O ${this.Types} atacou usando ${this.Attacks}`)
}

    }
let Types = [ //criação do vetor com os tipos e ataques fora da classe para ser usado globalmente
    ["Mago", " magia"],
    ["Guerreiro", " Espada"],
    ["Monge", " artes marciais"],
    ["Ninja", " shuriken"]
]
let hero1  = new hero ( "Gabriel", "23", Types[0][0],Types[0][1]) //[0][0] primeiro dado da primeira linha, [0][1] segunda coluna da primeira linha 
hero1.PerformAttack()