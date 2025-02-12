// Introdução ao funcionamento de classe e objeto. Classe (Padronização), Objeto (Personalização da classe)

class FormaDeBolo{ //Geração da classe
    constructor(SaborDaMassa,SaborRecheio){ //Geração dos Objetos
        this.SaborDaMassa = SaborDaMassa // this recorre a classe
        this.SaborDoRecheio = SaborRecheio
    }
}
let BoloFesta = new FormaDeBolo("Massa de cenoura", "Recheio de Nutella") // criaçãoda variavel BoloFesta que é uma nova classe
// parametro do objeto saborMassa e SaborRecheio definidos
console.log(BoloFesta)  