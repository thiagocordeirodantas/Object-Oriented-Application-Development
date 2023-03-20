import Personagem from "./personagem.js"

export default class Mago extends Personagem{
    elementoMagico
    levelMagico
    inteligencia
    tipo = 'Mago'

    constructor(nome,level,elementoMagico,levelMagico,inteligencia){
        super(nome,level)
        this.elementoMagico = elementoMagico
        this.levelMagico = levelMagico
        this.inteligencia = inteligencia
    }
}