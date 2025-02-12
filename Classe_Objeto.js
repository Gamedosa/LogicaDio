// Introdução ao funcionamento de classe e objeto. Classe (Padronização), Objeto (Personalização da classe)

class FormaDeBolo{ //Geração da classe
    constructor(SaborDaMassa,SaborRecheio,Preço){ //Geração dos Objetos
        this.SaborDaMassa = SaborDaMassa // this recorre a classe
        this.SaborDoRecheio = SaborRecheio
        this.Preço = Preço
    }
    escrever(){ // Função Escrever mensagem do bolo
        console.log(`Um delicioso bolo de ${this.SaborDaMassa} com recheio de ${this.SaborDoRecheio}`)
    }
    preço(){
        console.log(`O preço do bolo é ${this.Preço} `)
    }
}
let BoloFesta = new FormaDeBolo(" Cenoura", " Nutella", "60R$") // criaçãoda variavel BoloFesta que é uma nova classe
// parametro do objeto saborMassa e SaborRecheio definidos

BoloFesta.escrever(), BoloFesta.preço() //Operação da variavel BoloFesta + a função escrever