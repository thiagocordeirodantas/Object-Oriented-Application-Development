import Arqueiro from "./arqueiro.js";
import Mago from "./mago.js";
import Personagem from "./personagem.js";

export default class ArqueiroMago extends Personagem {
    ladoArqueiro
    ladoMago
    static tipo = 'ArqueiroMago'

    constructor(nome,level,destreza,elementoMagico,levelMagico,inteligencia){
        super(nome,level)   
        this.ladoArqueiro = new Arqueiro(nome,level,destreza)
        this.ladoMago = new Mago(nome,level,elementoMagico,levelMagico,inteligencia)
    }

    obterInsigna(){
        return `${this.ladoArqueiro.obterInsigna() } e ${this.ladoMago.obterInsigna()}`
    }
}
