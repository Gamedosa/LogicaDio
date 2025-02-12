// Introdução ao funcionamento de classe e objeto. Classe (Padronização), Objeto (Personalização da classe)

class FormaDeBolo{ //Geração da classe
    constructor(SaborDaMassa,SaborRecheio){ //Geração dos Objetos
        this.SaborDaMassa = SaborDaMassa // this recorre a classe
        this.SaborDoRecheio = SaborRecheio
    }
    escrever(){ // Função Escrever mensagem do bolo
        console.log(`Um delicioso bolo de ${this.SaborDaMassa} com recheio de ${this.SaborDoRecheio}`)
    }
}
let BoloFesta = new FormaDeBolo(" Cenoura", " Nutella") // criaçãoda variavel BoloFesta que é uma nova classe
// parametro do objeto saborMassa e SaborRecheio definidos

BoloFesta.escrever() //Operação da variavel BoloFesta + a função escrever