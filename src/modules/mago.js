import Personagem from "./personagem.js"

export default class Mago extends Personagem{
    elementoMagico
    levelMagico
    inteligencia
    static tipo = 'Mago'
    static descricao = 'O mago é implacável!'

    constructor(nome,level,elementoMagico,levelMagico,inteligencia){
        super(nome,level)
        this.elementoMagico = elementoMagico
        this.levelMagico = levelMagico
        this.inteligencia = inteligencia
    }

    obterInsigna(){
        if(this.levelMagico >= 5 && this.inteligencia >= 5){
            return` Mestre do ${this.elementoMagico}`
        }
        return super.obterInsigna()
    }
}